---
main_color: amber-600
---
function mdSearch(){
 var searchIndex = null;

 function pullFilesAndSearch(keyword, file, region, loadingObj){
  loadingObj.find(".text").text("Searching: " + region);

  getFileContents(file, function(files){
    for (var f in files){
      var csvFilePath = this.rootFile.replace("data.json", f);
      getFileContents(csvFilePath, function(content){
        var lines = content.split("\n");
        var headers = lines[0].split(",");
        var rootDir = this.rootFile.replace("/data.json", "");
        var linkHighlightTemplate = `{% include link-highlight.md href="__HREF__" text="__TEXT__" %}`;

        if (!headers.length) return;

        for (var l in lines){
          if (lines[l].indexOf(keyword) != -1 && l != 0){
            var cells = lines[l].split(",");
            var resultHtml = DF_Wiki.csvHtmlStart.replace("__MAIN_HEADING__", linkHighlightTemplate.replace("/__HREF__", rootDir).replace("__TEXT__", cells[0] + ` (${this.region})`));
            
            for (var c in cells){
              resultHtml += DF_Wiki.csvHtmlItem.replace("__HEADING__", headers[c]).replace("__CONTENT__", cells[c]);
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

    this.loadingObj.addClass("hidden");
  }.bind({
    rootFile: file,
    region: region,
    loadingObj: loadingObj
  }));
 }

 function processIndexData(data){
  if (data) searchIndex = data;
  else console.log("invalid index data: " + data);
 }

 getFileContents(location.pathname + "index_data.json", processIndexData);

 $("#mdSearchSubmit").on("click", function(){
  var searchVal = $("#mdSearchKeyword").val();

  if (!searchVal.length || !searchIndex) return;

  var searchResults = $("#mdSearchResults");
  var loading = searchResults.find(".loading");

  searchResults.removeClass("hidden");
  loading.removeClass("hidden");
  $("#mdSearchResults .results").empty();

  for (var k in searchIndex){
    pullFilesAndSearch(searchVal, searchIndex[k], k, loading);
  }
 });
}

$(mdSearch);