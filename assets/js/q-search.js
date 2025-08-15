---
main_color: amber-600
---

function downloadRootQuestsIndex(){
  generateFileDownload("rootQuestsIndex.json", JSON.stringify(DF_Wiki.rootQuestsIndex, 4, 2));
}

function downloadRootQuestsIdIndex(){
  generateFileDownload("rootQuestsIdIndex.json", JSON.stringify(DF_Wiki.rootQuestsIdIndex, 4, 2));
}

function qSearch(){
  function showLoading(){
    $(".quests-main").addClass("loadable-loading");
  }

  function hideLoading(){
    $(".quests-main").removeClass("loadable-loading");
    $(".loadable-loader .text").text(`Loading`);
  }

  function progressReport(done, total, message){
    $(".loadable-loader .text").text(`Loading [${done} / ${total}] (${message})`);
  }

  function genQuestAdditionalRewardsString(rewards){
    var result = "";

    for (var r in rewards){
      var reward = rewards[r];

      switch (reward.type) {
        case "wallet": {
          result += `-> ${reward.amount} ${reward.wallet_type}<br>`;
          break;
        }
        case "exp": {
          result += `-> ${reward.amount} EXP<br>`;
          break;
        }
      }
    }

    return result;
  }

  function searchQuestsIndex(keyword, level){
    if (!keyword || !DF_Wiki.rootQuestsIdIndex || !DF_Wiki.rootQuestsIndex) return;
    
    for (const [key, value] of Object.entries(DF_Wiki.rootQuestsIdIndex)){

      if (value.toLowerCase().indexOf(keyword.toLowerCase()) != -1){
        var linkHighlightTemplate = `{% include link-highlight.md href="__HREF__" text="__TEXT__" %}`;
        var quest = DF_Wiki.rootQuestsIndex[value];
        var questType = quest.type.replace("Tutorial", "Tutorial/Personal").replace("Light", "Board");

        if (!quest || (level >= 1 && quest.questLevel < level)) continue;

        var resultHtml = DF_Wiki.csvHtmlStart.replace("__MAIN_HEADING__", linkHighlightTemplate.replace("/__HREF__", "{{  '/game_content/quests/view' | relative_url }}?id=" + key).replace("__TEXT__", `[${questType} Quest]: ${value}`));

        resultHtml += DF_Wiki.csvHtmlItem.replace("__HEADING__", ``).replace("__CONTENT__", 
          `
          Min Level for Quest: ${quest.base_level}<br>
          Quest Base EXP: ${quest.exp}<br>
          Additional Rewards: <br>
            ${genQuestAdditionalRewardsString(quest.rewards)}
          `
        );

        resultHtml += DF_Wiki.csvHtmlEnd;

        $("#qSearchResults .results").append(resultHtml);
      }
    }
  }

  function getAndBuildRootQuestsIndexData(){
    var targetRepo = {
      user: "sebastian-heinz",
      repo: "Arrowgene.DragonsDogmaOnline",
      folder: "Arrowgene.Ddon.Shared/Files/Assets/quests",
      branch: "develop"
    };

    getAndSaveEnemyIds();

    fetchGithubFolder(targetRepo.user, targetRepo.repo, targetRepo.folder, targetRepo.branch, progressReport).then((files) => {
      window.DF_Wiki.rootQuestsIndex = {}; // Basically setting the quest name for the Quest ID. No name? No quest
      window.DF_Wiki.rootQuestsIdIndex = {}; // ID >> Name

      var i = 1;
      var size = Object.keys(files).length;
      for (var q in files){
        var quest = {};

        try{
          quest = JSON.parse(files[q]);
          var questName = quest.comment;

          // Root grouping is by Quest Names
          if (!questName) throw new Error("Quest does not have a name");
          if(q.indexOf("_") == -1) DF_Wiki.rootQuestsIdIndex[q.replace(".json", "")] = questName;

          DF_Wiki.rootQuestsIndex[questName] = quest;
          rootQuest = DF_Wiki.rootQuestsIndex[questName];

          // If quest has enemies, we need to resolve those
          var enemy_groups = rootQuest["enemy_groups"];

          if(enemy_groups){
            for (var g in enemy_groups){
              // We dont have to skip the whole quest if there is no enemies, but we need to move on
              if (enemy_groups[g]["enemies"]){
                var enemies = enemy_groups[g]["enemies"];

                for (var e in enemies){
                  var enemy = enemies[e];

                  // We just need to add the english name
                  enemy.name = DF_Wiki.enemyIds[enemy.enemy_id];
                }
              }
            }
          }

          var questSteps = rootQuest.blocks || rootQuest.processes;

          if (!questSteps) throw new Error("Quest does not have any steps to complete");
        }
        catch(e){
          console.log(`Could not parse Quest: ${q}`);
          console.log(e);
          continue;
        }

        progressReport(i, size, "Parsing Quests");
        i++;
      }

      hideLoading();
    });
  }

  function loadRootQuestsIndex(data){
    if (!data) {
      console.log("No RQ Index");
      return;
    }

    window.DF_Wiki.rootQuestsIndex = data;
  }

  function loadRootQuestsIdIndex(data){
    if (!data) {
      console.log("No RQI Index");
      return;
    }

    window.DF_Wiki.rootQuestsIdIndex = data;
  }
  
  function getPrebuiltData(){
    progressReport(1, 2, "Grabbing Files..");
    getFileContents("{{ '/game_content/assets/rootQuestsIndex.json' | relative_url }}", loadRootQuestsIndex);

    progressReport(2, 2, "Grabbing Files..");
    getFileContents("{{ '/game_content/assets/rootQuestsIdIndex.json' | relative_url }}", loadRootQuestsIdIndex);

    setTimeout(hideLoading, 1000);
  }

  function handleSearchSubmit(e){
    var searchVal = $("#qSearchKeyword").val();
    var level = Number($("#qSearchLevel").val());
    if (!searchVal.length) return;

    var searchResults = $("#qSearchResults");
    var loading = searchResults.find(".loading");

    searchResults.removeClass("hidden");
    loading.removeClass("hidden");
    $("#qSearchResults .results").empty();

    //pullFilesAndSearch(searchVal, searchIndex[k], k, loading);
    searchQuestsIndex(searchVal, level);

    setTimeout(function(loading){
      loading.addClass("hidden");
    }, 1000, loading);
  }

  // We're gonna build index data instead
  //getAndBuildRootQuestsIndexData();

  getPrebuiltData();

  $("#qSearchKeyword").on("input", function () {
    if ($(this).val().length == 0) $("#qSearchResults .results").empty();
  });

  $("#qSearchSubmit").on("click", handleSearchSubmit);
  $("#qSearchKeyword").on("keydown", function(e){
    if (e.key === "Enter" || e.keyCode === 13){
      handleSearchSubmit(e);
    }
  });

  //hideLoading();
}

$(qSearch);