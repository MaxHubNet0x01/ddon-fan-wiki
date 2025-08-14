var result = "Monster,Level,Location,Area Level\n";

// Expecting \n for each item
function convertToCSV(data, breakCount){
  var values = data.split('\n');

  if (!values.length){
    devAppendPageLog("ERR", "Input not \\n separated", "error");
    return;
  }

  var section = values[0].split("\t");
  var sectionLevel = Number(section[1]) != NaN ? Number(section[1]) : "?";
  var start = 1;

  devAppendPageLog("INIT", "Section: " + section);
  devAppendPageLog("INIT", "sectionLevel:" + sectionLevel);
  devAppendPageLog("INIT", "start:" + start);

  for (var i = start; i < values.length; i++){
    if (!values[i].length) continue;

    result += values[i].split("\t").join(",") + `, ${section[0]}, ${sectionLevel}\n`;
  }
}

function etocsv(){
  $("#dev-etocsv-form-submit").click(function(){
    var breakCount = $("#bcount").val();
    var data = $("#edata").val();
    var fname = $("#fname").val();

    if (!data.length || !breakCount || !fname){
      devAppendPageLog("ERR", "No Valid Input", "error");
      return;
    }

    convertToCSV(data, Number(breakCount));

    $(".dev-page-result textarea").val(result);
    devAppendPageLog("Appended", "Updated Result with new Data", "success");
  });

  $("#dev-etocsv-form-download").click(function(){
    generateFileDownload(fname + ".csv", result);
  });

  devAppendPageLog("INIT", "Ready for Input");
}

$(etocsv);