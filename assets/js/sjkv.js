function swapJsonKeyValues(data) {
  const mapping = {};
  var parsedJson = {};

  try {
    parsedJson = JSON.parse(data);
  }
  catch(e){
    devAppendPageLog("ERR", "JSON Invalid" , "error");
    devAppendPageLog("ERR", e , "error");
    return;
  }

  for(var i in parsedJson){
    mapping[parsedJson[i]] = `${i}`;
  }

  return JSON.stringify(mapping, null, 4);
}

function sjkv(){
  $("#dev-sjkv-form-submit").click(function(){
    var data = $("#jsonData").val();
    if (!data.length){
      devAppendPageLog("ERR", "No Input", "error");
      return;
    }

    result = swapJsonKeyValues(data);

    try{
      JSON.parse(result);
      $(".dev-page-result textarea").val(result);
      devAppendPageLog("SUCCESS", "Complete and JSON valid", "success");
    }
    catch(e){
      devAppendPageLog("ERR", "Generated JSON Invalid" , "error");
      devAppendPageLog("ERR", e , "error");
    }
  });
  devAppendPageLog("INIT", "Ready for Input");
}

$(sjkv);