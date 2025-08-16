---
main_color: amber-600
---
function loadQuest(){
  var questId = $(".quest").attr("qid");

  if (!questId.length){
    console.log("No Quest ID");
    return;
  }

  function showLoading(){
    $(".quest").addClass("loadable-loading");
  }

  function hideLoading(){
    $(".quest").removeClass("loadable-loading");
    $(".loadable-loader .text").text(`Loading`);
  }

  function loadRootQuestsIndex(data){
    if (!data) {
      console.log("No RQ Index");
      return;
    }

    window.DF_Wiki.rootQuestsIndex = data;

    loadableLoaderProgressReport(2, 2, "Grabbing Files..");
    getFileContents("{{ '/game_content/assets/rootQuestsIdIndex.json' | relative_url }}", loadRootQuestsIdIndex);
  }

  function loadRootQuestsIdIndex(data){
    if (!data) {
      console.log("No RQI Index");
      return;
    }

    window.DF_Wiki.rootQuestsIdIndex = data;
    loadQuestData();
  }
  
  function getPrebuiltData(){
    loadableLoaderProgressReport(1, 2, "Grabbing Files..");
    getFileContents("{{ '/game_content/assets/rootQuestsIndex.json' | relative_url }}", loadRootQuestsIndex);
  }

  function loadQuestData(){
    var questName = DF_Wiki.rootQuestsIdIndex[questId];

    if(!questName){
      console.log("Invalid Quest ID");
      return;
    }

    var quest = DF_Wiki.rootQuestsIndex[questName];
    if (!quest){
      console.log("Invalid Quest");
      return;
    }

    // Badges

    $(".qname .heading").text(quest.name);
    $(".qbadges").empty().append(genQuestCategoriesBadge(quest));

    setTimeout(hideLoading, 1000);
  }

  if (questId.indexOf("q") == -1) questId = stringOverride(DF_Wiki.questIdFormat, questId);

  getPrebuiltData();
}

$(loadQuest);