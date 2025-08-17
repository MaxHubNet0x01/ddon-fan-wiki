---
  main_color: amber-600
---
function iSearch() {
  function showLoading(){
    $(".items-main").addClass("loadable-loading");
  }

  function hideLoading(){
    $(".items-main").removeClass("loadable-loading");
    $(".loadable-loader .text").text(`Loading`);
  }

  function getAndBuildRootItemsIndexData() {
    var generatedItemFolderJson = JSON.parse(`
    {% comment %}
    {% gen_item_folder_files_json game_content/assets/items %}
    {% endcomment %}
  `);

    window.rootItemsIdIndex = {};
    console.log(generatedItemFolderJson);
    window.filesToFetch = [];

    async function genFolderJson(item) {
      if (item.type == "directory") {
        for (var c in item.children) {
          genFolderJson(item.children[c]);
        }
      }
      else if (item.type == "file"){
        rootItemsIdIndex[item.name + "__" + item.item_name + "__" + item.icon_id] = item.path;
      }
      else if (item.type == "upgrade"){
        rootItemsIdIndex[item.name + "__~__" + item.icon_id] = item.path;
      }
    }

    for (var i in generatedItemFolderJson.children) {
      var item = generatedItemFolderJson.children[i];

      genFolderJson(item);
    }
  }

  function genItemImageFromId(id){
    if (!id) return;

    return `<img class="border-none shadow-none p-0 m-0" src="{{ 'game_content/assets/icons' | relative_url }}/${stringOverride(DF_Wiki.itemIconIdFormat, id)}.png" w="24" h="24">`;
  }

  function searchItemsIdIndex(keyword){
    if (!keyword || !DF_Wiki.rootItemsIdIndex) return;
    keyword = keyword.toLowerCase();

    var resultsCount = 0;
    for (const [key, value] of Object.entries(DF_Wiki.rootItemsIdIndex)){
      if (key.toLowerCase().indexOf(keyword) != -1 && resultsCount < 50){
        var linkHighlightTemplate = `{% include link-highlight.md href="__HREF__" text="__TEXT__" %}`;
        var itemPath = DF_Wiki.rootItemsIdIndex[key];

        if (!itemPath) continue;
        
        var itemData = key.split("__");
        var itemCategory = itemPath.split("/");
        itemCategory = itemCategory[itemCategory.length - 2];

        var resultHtml = DF_Wiki.csvHtmlStart.replace("__MAIN_HEADING__", linkHighlightTemplate.replace("__HREF__", "game_content/items/view?id=" + itemData[0])
          .replace("__TEXT__", `
            <div class="flex gap-4 items-center">
              ${genItemImageFromId(itemData[2])}
              ${itemData[1]}
            </div>
          `));

        resultHtml += DF_Wiki.csvHtmlItem.replace("__HEADING__", ``).replace("__CONTENT__", 
          `
            <div>
              <div class="flex flex-col">
                <div class="item-badges flex gap-3">
                  ${
                    genBadge("amber-600", "white", itemCategory)
                  }
                </div>
              </div>
            </div>
          `
        );

        resultHtml += DF_Wiki.csvHtmlEnd;
        resultsCount++;

        $("#iSearchResults .results").append(resultHtml);
      }
    }
  }

  function loadRootItemsIdIndex(data){
    if (!data) {
      console.log("No RI Index");
      return;
    }

    window.DF_Wiki.rootItemsIdIndex = data;
    loadableLoaderProgressReport(1, 1, "Grabbing Files..");
    checkSearchSubmit("#iSearchKeyword", handleSearchSubmit);

    setTimeout(hideLoading, 1000);
  }

  function getPrebuiltData(){
    loadableLoaderProgressReport(0, 1, "Grabbing Files..");
    getFileContents("{{ '/game_content/assets/rootItemsIdIndex.json' | relative_url }}", loadRootItemsIdIndex);
  }

  function handleSearchSubmit(e){
    var searchVal = $("#iSearchKeyword").val();
    if (!searchVal.length) return;

    var searchResults = $("#iSearchResults");
    var loading = searchResults.find(".loading");

    searchResults.removeClass("hidden");
    loading.removeClass("hidden");
    $("#iSearchResults .results").empty();

    //pullFilesAndSearch(searchVal, searchIndex[k], k, loading);
    searchItemsIdIndex(searchVal);

    history.replaceState(null, $("title").text(), location.origin + location.pathname + "?s=" + searchVal);

    setTimeout(function(loading){
      loading.addClass("hidden");
    }, 1000, loading);
  }

  //getAndBuildRootItemsIndexData();
  getPrebuiltData();

  $("#iSearchKeyword").on("input", function () {
    if ($(this).val().length == 0) $("#iSearchResults .results").empty();
  });

  $("#iSearchSubmit").on("click", handleSearchSubmit);
  $("#iSearchKeyword").on("keydown", function(e){
    if (e.key === "Enter" || e.keyCode === 13){
      handleSearchSubmit(e);
    }
  });
}

$(iSearch);