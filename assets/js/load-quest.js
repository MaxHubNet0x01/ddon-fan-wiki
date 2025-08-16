---
  main_color: amber - 600
---
  function loadQuest() {
    var questId = $(".quest").attr("qid");

    if (!questId.length) {
      console.log("No Quest ID");
      return;
    }

    function showLoading() {
      $(".quest").addClass("loadable-loading");
    }

    function hideLoading() {
      $(".quest").removeClass("loadable-loading");
      $(".loadable-loader .text").text(`Loading`);
    }

    function loadRootQuestsIndex(data) {
      if (!data) {
        console.log("No RQ Index");
        return;
      }

      window.DF_Wiki.rootQuestsIndex = data;

      loadableLoaderProgressReport(2, 2, "Grabbing Files..");
      getFileContents("{{ '/game_content/assets/rootQuestsIdIndex.json' | relative_url }}", loadRootQuestsIdIndex);
    }

    function loadRootQuestsIdIndex(data) {
      if (!data) {
        console.log("No RQI Index");
        return;
      }

      window.DF_Wiki.rootQuestsIdIndex = data;
      loadQuestData();
    }

    function getPrebuiltData() {
      loadableLoaderProgressReport(1, 2, "Grabbing Files..");
      getFileContents("{{ '/game_content/assets/rootQuestsIndex.json' | relative_url }}", loadRootQuestsIndex);
    }

    function genQuestUnlocks(q) {
      var ret = `
      <ul class="flex flex-col gap-3 list-disc">
    `;

      if (!q.unlocks || (!q.unlocks.tutorials.length || !q.unlocks.contents.length)) {
        ret += "<li class='mx-5'>N/A</li>";
      }
      else {
        if (q.unlocks.tutorials.length) {
          var tutorials = q.unlocks.tutorials;
          for (var t in tutorials) {
            ret += `<li class='mx-5'>[Tutorial] ${tutorials[t]}</li>`;
          }
        }

        if (q.unlocks.contents.length) {
          var unlocks = q.unlocks.contents;
          for (var u in unlocks) {
            ret += `<li class='mx-5'>[Feature] ${unlocks[u]}</li>`;
          }
        }
      }

      ret += "</ul>";
      return ret;
    }

    function genItemImageFromId(id){
      return `<img class="border-none shadow-none p-0 m-0" src="{{ 'game_content/assets/icons' | relative_url }}/${stringOverride(DF_Wiki.itemIdFormat, id)}.png" w="24" h="24">`;
    }

    function genQuestRewards(q) {
      var ret = `
      <ul class="flex flex-col gap-12 list-disc">
    `;

      if (!q.variants.length) {
        ret += "<li class='mx-5'>None</li>";
      }
      else {
        var vari = q.variants;
        for (var v in vari) {
          var variant = vari[v];
          var rewards = `<div class="flex flex-col gap-3">`;

          if (variant.rewards.length){
            for (var r in variant.rewards){
              var reward = variant.rewards[r];
              var rewardTypeText = "";

              switch (reward.type){
                case "Fixed": {
                  rewardTypeText = "Chance to get this pool of items:";
                  break;
                }
                case "Select1": {
                  rewardTypeText = "Chance to <b class='underline'>Select 1</b> from this pool of items:";
                  break;
                }
              }

              var pools = reward.pools;
              var poolsHtml = `<div>`;

              for (var p in pools){
                var pool = pools[p];

                poolsHtml += `
                    <div>
                      ${rewardTypeText}
                    </div>
                `;

                for (var pr in pool){
                  poolsHtml += `
                    <div iid="${pool[pr].item_id}" class="flex gap-3 items-center">
                      <div class="w-12 h-12">
                        ${genItemImageFromId(pool[pr].item_id)}
                      </div>
                      <div>
                        ${pool[pr].name} x ${pool[pr].amount}
                      </div>
                    </div>
                  `;
                }
              }

              poolsHtml += `</div>`;
              rewards += poolsHtml;
            }
          }
          else rewards += `- None`;

          rewards += `</div>`;
          ret += `
          <li class='mx-5 flex flex-col gap-3'>
            <div class="font-bold underline">Variant ${Number(v) + 1}</div>
            <div class="flow-root">
              <dl class="-my-3 divide-y divide-gray-200 text-sm">
                <div class="pl-4 grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt class="font-medium text-gray-900 dark:text-white">Level</dt>
                  <dd class="text-gray-700 sm:col-span-2 dark:text-gray-200">${variant.level}</dd>
                </div>

                <div class="pl-4 grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt class="font-medium text-gray-900 dark:text-white">XP</dt>
                  <dd class="text-gray-700 sm:col-span-2 dark:text-gray-200">${variant.xp}</dd>
                </div>

                <div class="pl-4 grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt class="font-medium text-gray-900 dark:text-white">Gold</dt>
                  <dd class="text-gray-700 sm:col-span-2 dark:text-gray-200">${variant.gold}</dd>
                </div>

                <div class="pl-4 grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt class="font-medium text-gray-900 dark:text-white">Riftcoins</dt>
                  <dd class="text-gray-700 sm:col-span-2 dark:text-gray-200">${variant.rift}</dd>
                </div>

                <div class="pl-4 grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt class="font-medium text-gray-900 dark:text-white">Area Points</dt>
                  <dd class="text-gray-700 sm:col-span-2 dark:text-gray-200">${variant.ap}</dd>
                </div>

                <div class="pl-4 grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt class="font-medium text-gray-900 dark:text-white">Job Points</dt>
                  <dd class="text-gray-700 sm:col-span-2 dark:text-gray-200">${variant.jp}</dd>
                </div>

                <div class="pl-4 grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt class="font-medium text-gray-900 dark:text-white">Play Points</dt>
                  <dd class="text-gray-700 sm:col-span-2 dark:text-gray-200">${variant.pp}</dd>
                </div>

                <div class="pl-4 grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt class="font-medium text-gray-900 dark:text-white">Rewards</dt>
                  <dd class="text-gray-700 sm:col-span-2 dark:text-gray-200">
                    ${rewards}
                  </dd>
                </div>
              </dl>
            </div>
          </li>
        `;
        }
      }

      ret += `</ul>`;
      return ret;
    }

    function genQuestSteps(q){
      var ret = `<ul class="flex flex-col gap-3 list-disc">`;
      if (!q.steps || !q.steps.length){
        ret += `<li class='mx-5'>None</li>`;
      }
      else{
        for (var s in q.steps){
          ret += `
            <li class='mx-5'>${q.steps[s]}</li>
          `;
        }
      }

      ret += `</div>`;
      return ret;
    }

    function genQuestReferences(q){
      var ret = `<ul class="flex flex-col gap-3 list-disc">`;
      if (!q.references || !q.references.length){
        ret += `<li class='mx-5'>None</li>`;
      }
      else{
        for (var r in q.references){
          ret += `
            <li class='mx-5'>${DF_Wiki.linkHighlightExtTemplate.replace("__HREF__", q.references[r]).replace("__TEXT__", q.references[r])}</li>
          `;
        }
      }

      ret += `</div>`;
      return ret;
    }

    function loadQuestData() {
      var questName = DF_Wiki.rootQuestsIdIndex[questId];

      if (!questName) {
        console.log("Invalid Quest ID");
        return;
      }

      var quest = DF_Wiki.rootQuestsIndex[questName];
      if (!quest) {
        console.log("Invalid Quest");
        return;
      }

      // Badges

      $(".qname .heading").text(quest.name);
      $(".qbadges").html(genQuestCategoriesBadge(quest));
      $(".qdesc").text(quest.description);
      $(".qreq").html(genQuestOrderConditions(quest, false));
      $(".qunlocks").html(genQuestUnlocks(quest));
      $(".qrewards").html(genQuestRewards(quest));
      $(".qsteps").html(genQuestSteps(quest));
      $(".qrefs").html(genQuestReferences(quest));

      setTimeout(hideLoading, 1000);
    }

    if (questId.indexOf("q") == -1) questId = stringOverride(DF_Wiki.questIdFormat, questId);

    getPrebuiltData();
  }

$(loadQuest);