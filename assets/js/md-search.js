---
main_color: amber-600
---

function mdSearch() {
  var searchIndex = null;

  function pullFilesAndSearch(keyword, file, region, loadingObj) {
    loadingObj.find(".text").text("Searching: " + region);

    getFileContents(file, function (files) {
      for (var f in files) {
        var csvFilePath = this.rootFile.replace("data.json", f);
        getFileContents(csvFilePath, function (content) {
          var lines = content.split("\n");
          var headers = lines[0].split(",");
          var rootDir = this.rootFile.replace("/data.json", "");
          var linkHighlightTemplate = `{% include link-highlight.md href="__HREF__" text="__TEXT__" extra_class="pointer-events-none" %}`;

          if (!headers.length) return;

          for (var l in lines) {
            if (lines[l].toLowerCase().indexOf(keyword.toLowerCase()) != -1 && l != 0) {
              var cells = lines[l].split(",");
              var resultHtml = DF_Wiki.csvHtmlStart.replace("__MAIN_HEADING__", linkHighlightTemplate.replace("__TEXT__", cells[0] + ` (${this.region})`));

              for (var c in cells) {
                if (headers[c].trim() == "Quest Name"){
                  var url = new URL(`${DF_Wiki.rootPath + 'game_content/quests'}`, "https://example.com");
                  url.searchParams.set("s", cells[c].trim());

                  resultHtml += DF_Wiki.csvHtmlItem.replace("__HEADING__", headers[c]).replace("__CONTENT__", `
                    <a href="${url.pathname + url.search}" class="text-amber-600 underline" target="_blank">
                      ${cells[c]}
                    </a>
                  `);
                }
                else resultHtml += DF_Wiki.csvHtmlItem.replace("__HEADING__", headers[c]).replace("__CONTENT__", cells[c]);
              }

              resultHtml += DF_Wiki.csvHtmlEnd;

              $("#mdSearchResults .results").append(resultHtml);
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

  function processIndexData(data) {
    if (data) searchIndex = data;
    else console.log("invalid index data: " + data);

    checkSearchSubmit("#mdSearchKeyword", handleSearchSubmit);
  }

  function handleSearchSubmit(e){
    var searchVal = $("#mdSearchKeyword").val();
  
    if (!searchVal.length || !searchIndex) return;

    var searchResults = $("#mdSearchResults");
    var loading = searchResults.find(".loading");

    searchResults.removeClass("hidden");
    loading.removeClass("hidden");
    $("#mdSearchResults .results").empty();

    setSearchSubmitValue(searchVal);

    for (var k in searchIndex) {
      pullFilesAndSearch(searchVal, searchIndex[k], k, loading);
    }
  }

  getFileContents(location.pathname + "index_data.json", processIndexData);

  $("#mdSearchSubmit").on("click", handleSearchSubmit);

  $("#mdSearchKeyword").on("input", function () {
    if ($(this).val().length == 0) $("#mdSearchResults .results").empty();
  });

  $("#mdSearchKeyword").on("keydown", function(e){
    if (e.key === "Enter" || e.keyCode === 13){
      handleSearchSubmit(e);
    }
  });
}

$(mdSearch);