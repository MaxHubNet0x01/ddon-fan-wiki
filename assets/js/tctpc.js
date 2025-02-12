var ouputHtmlStart = `
  {% include card-section-start.md %}
    {% include card-section-header.md heading="__MAIN_HEADING__" %}
    <div class="space-y-4">
`;
var outputHtmlItem = `
      <div>
        {% include card-section-sub-header.md heading="__HEADING__" %}
        <p>__CONTENT__</p>
      </div>
`;
var outputHtmlEnd = `
    </div>
  {% include card-section-end.md %}
`;

function tctpc($ = App.$){
  $("#dev-tctpc-form-submit").on("click", function(e){
    var form = $("#dev-tctpc-form");
    var colToKeep = form.find("#columnsKeep").val() + ",";
    var data = form.find("#data").val();
    var outputHtml = ``;

    try {
      var dataHtml = new DOMParser().parseFromString(data, "text/html");
    }
    catch (e){
      devAppendPageLog("ParseErr", "Unable to parse data: " + e.message, "error");
      return;
    }

    var dataHtml = $(dataHtml);
    var headings = [];
    var headingCol = Number(form.find("#columnsKeep").val().split(",")[0]);

    dataHtml.find("th").each(function(){
      headings.push($(this).text());
    });

    if (!headings.length) {
      devAppendPageLog("HeadingErr", "No Headings Found", "error");
      return;
    }

    dataHtml.find("tr").each(function(){
      var row = $(this);
      cells = row.find("td");
      
      if (cells.length) {
        cells.each(function(){
          var cell = $(this);
  
          if (cell.index() + 1 == headingCol){
            outputHtml += ouputHtmlStart.replace("__MAIN_HEADING__", cell.text());
          }
          else if (colToKeep.indexOf(`${cell.index()+1},`) != -1 && cell.index() + 1 != headingCol) {
            devAppendPageLog("Info", `Keeping Col #${cell.index()+1} = ${cell.text()}`);
            outputHtml += outputHtmlItem.replace("__HEADING__", headings[cell.index()]).replace("__CONTENT__", cell.text());
          }
          else devAppendPageLog("Warn", `NOT Keeping Col #${cell.index()+1} = ${cell.text()}`, "warning");
        });

        outputHtml += outputHtmlEnd;
      }
    });
    $(".dev-page-result textarea").val(outputHtml);
    devAppendPageLog("Done", "TCTPC Complete", "success");
  });

  devAppendPageLog("INIT", "Ready for Input");
}

$(tctpc);