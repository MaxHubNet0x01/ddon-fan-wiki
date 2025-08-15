---
main_color: amber-600
---

function msSearch() {
  var searchIndex = null;

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
    if (!DF_Wiki.monsterQuestsIndex) return;
    
    var monsters = Object.keys(DF_Wiki.monsterQuestsIndex);

    for (var m in monsters){
      if(monsters[m].toLowerCase().indexOf(keyword.toLowerCase()) != -1){
        var linkHighlightTemplate = `{% include link-highlight.md href="__HREF__" text="__TEXT__" %}`;
        var quests = DF_Wiki.monsterQuestsIndex[monsters[m]];

        var resultHtml = DF_Wiki.csvHtmlStart.replace("__MAIN_HEADING__", linkHighlightTemplate.replace("/__HREF__", "#").replace("__TEXT__", `Quests: ${monsters[m]}`));

        for (var q in quests){
          var quest = quests[q];

          if (level >= 1) {
            if(Number(quest.level) < Number(level)) continue;
          }

          resultHtml += DF_Wiki.csvHtmlItem.replace("__HEADING__", `${quest.questType} Quest : ${quest.quest}`).replace("__CONTENT__", 
            `
            Min Level for Quest: ${quest.questLevel}<br>
            Min IR for Quest: ${quest.minimumIR}<br>
            Enemy Level: ${quest.level}<br>
            Quest EXP: ${quest.exp}<br>
            Additional Rewards: <br>
            ${genQuestAdditionalRewardsString(quest.quest_rewards)}
            `
          );
        }

        resultHtml += DF_Wiki.csvHtmlEnd;

        $("#msSearchResults .results").append(resultHtml);
      }
    }
  }

  function pullFilesAndSearch(keyword, file, region, loadingObj, level, level_index) {
    loadingObj.find(".text").text("Searching: " + region);

    getFileContents(file, function (files) {
      for (var f in files) {
        var csvFilePath = this.rootFile.replace("data.json", f);
        getFileContents(csvFilePath, function (content) {
          var lines = content.split("\n");
          var headers = lines[0].split(",");
          var rootDir = this.rootFile.replace("/data.json", "");
          var linkHighlightTemplate = `{% include link-highlight.md href="__HREF__" text="__TEXT__" %}`;

          if (!headers.length) return;

          for (var l in lines) {
            if (lines[l].toLowerCase().indexOf(keyword.toLowerCase()) != -1 && l != 0) {
              var cells = lines[l].split(",");

              // If a level is not specified, proceed else filter the ones at or above the level
              if((level < 1 || level == NaN) || (level >= 1 && cells[level_index] >= level)){
                var resultHtml = DF_Wiki.csvHtmlStart.replace("__MAIN_HEADING__", linkHighlightTemplate.replace("/__HREF__", rootDir).replace("__TEXT__", cells[0] + ` (${this.region})`));

                for (var c in cells) {
                  resultHtml += DF_Wiki.csvHtmlItem.replace("__HEADING__", headers[c]).replace("__CONTENT__", cells[c]);
                }

                resultHtml += DF_Wiki.csvHtmlEnd;

                $("#msSearchResults .results").append(resultHtml);
              }
            }
          }
        }.bind({
          rootFile: this.rootFile,
          region: this.region
        }), "text");
      }

      setTimeout(function (loadingObj) { loadingObj.addClass("hidden"); }, 2000, this.loadingObj);
    }.bind({
      rootFile: file,
      region: region,
      loadingObj: loadingObj
    }));
  }

  function showLoading(){
    $(".spawns-main").addClass("loadable-loading");
  }

  function hideLoading(){
    $(".spawns-main").removeClass("loadable-loading");
    $(".loadable-loader .text").text(`Loading`);
  }

  function progressReport(done, total, message){
    $(".loadable-loader .text").text(`Loading [${done} / ${total}] (${message})`);
  }

  function loadMonsterQuestsIndex(data){
    if (!data) {
      console.log("No MQI");
      return;
    }

    window.DF_Wiki.monsterQuestsIndex = data;
    progressReport(1, 2, "Grabbing Files..");
    setTimeout(hideLoading, 1000);
  }

  function getAndBuildIndexData() {
    var targetRepo = {
      user: "sebastian-heinz",
      repo: "Arrowgene.DragonsDogmaOnline",
      folder: "Arrowgene.Ddon.Shared/Files/Assets/quests",
      branch: "develop"
    };

    getAndSaveEnemyIds();

    fetchGithubFolder(targetRepo.user, targetRepo.repo, targetRepo.folder, targetRepo.branch, progressReport).then((files) => {
      window.DF_Wiki.monsterQuestsIndex = {}; // Target Structure is Monster Name > All quests (array) > Each quest is an object that specify type, lvl, rewards, and ofc enemies

      var i = 1;
      var size = Object.keys(files).length;
      for (var q in files){
        var quest = {};

        try{
          quest = JSON.parse(files[q]);

          if (!quest["comment"]) throw new Error("Quest does not have a name");
          if (!quest["enemy_groups"]) throw new Error("Quest does not have enemies");

          // Root grouping is by enemies

          var enemy_groups = quest["enemy_groups"];

          for (var g in enemy_groups){
            if (!enemy_groups[g]["enemies"]) throw new Error("Quest does not have enemies");

            var enemies = enemy_groups[g]["enemies"];

            for (var e in enemies){
              var enemy = enemies[e];
              enemy.name = DF_Wiki.enemyIds[enemy.enemy_id];

              if (!DF_Wiki.enemyIds[enemy.enemy_id]) continue; // We dont have to stop completely? ?? ???
              if (!DF_Wiki.monsterQuestsIndex[enemy.name]) DF_Wiki.monsterQuestsIndex[enemy.name] = [];
              
              if(DF_Wiki.monsterQuestsIndex[enemy.name].length >= 1){
                var exists = false;

                for (var x in DF_Wiki.monsterQuestsIndex[enemy.name]){
                  if (DF_Wiki.monsterQuestsIndex[enemy.name][x].quest == quest.comment) {
                    exists = true;
                    break;
                  }
                }
              } else var exists = false;

              if (!exists){
                enemy.quest = quest.comment;
                enemy.quest_rewards = quest.rewards;
                enemy.questJsonId = q;
                enemy.questType = quest.type;
                enemy.questLevel = quest.base_level;
                enemy.minimumIR = quest.minimum_item_rank;
                enemy.order_conditions = quest.order_conditions;

                DF_Wiki.monsterQuestsIndex[enemy.name].push(enemy);
              }
            }
          }
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
  
  function processIndexData(data) {
    if (data) searchIndex = data;
    else console.log("invalid index data: " + data);

    progressReport(2, 2, "Grabbing Files..");
  }

  function handleSearchSubmit(e){
    var searchVal = $("#msSearchKeyword").val();
    var level = Number($("#msSearchLevel").val());
    if (!searchVal.length) return;

    var searchResults = $("#msSearchResults");
    var loading = searchResults.find(".loading");

    searchResults.removeClass("hidden");
    loading.removeClass("hidden");
    $("#msSearchResults .results").empty();

    //pullFilesAndSearch(searchVal, searchIndex[k], k, loading);
    searchQuestsIndex(searchVal, level);
    for (var k in searchIndex) {
      pullFilesAndSearch(searchVal, searchIndex[k], k, loading, level, 1);
    }

    setTimeout(function(loading){
      loading.addClass("hidden");
    }, 1000, loading);
  }

  // We're gonna build index data instead
  //getAndBuildIndexData(); Uncomment to basically generate a new monsterQuestsIndex.json

  progressReport(0, 2, "Grabbing Files..");
  getFileContents("{{ '/game_content/assets/monsterQuestsIndex.json' | relative_url }}", loadMonsterQuestsIndex);
  getFileContents(location.pathname + "index_data.json", processIndexData);

  $("#msSearchKeyword").on("input", function () {
    if ($(this).val().length == 0) $("#msSearchResults .results").empty();
  });

  $("#msSearchSubmit").on("click", handleSearchSubmit);
  $("#msSearchKeyword").on("keydown", function(e){
    if (e.key === "Enter" || e.keyCode === 13){
      handleSearchSubmit(e);
    }
  });
}

$(msSearch);