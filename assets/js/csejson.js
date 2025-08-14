function enumToJson(enumString) {
  const regex = /(\w+)\s*=\s*(0x[0-9A-Fa-f]+|\d+)/g;
  const mapping = {};

  let match;
  while ((match = regex.exec(enumString)) !== null) {
      let name = match[1];
      let value = match[2];

      if (!value.toLowerCase().startsWith("0x")) {
          value = "0x" + parseInt(value, 10).toString(16);
      } else {
          value = value.toLowerCase();
      }

      mapping[value] = name;
  }

  return JSON.stringify(mapping, null, 4);
}

function spaceOutCamelCase(jsonString) {
  const obj = JSON.parse(jsonString);
  const spacedObj = {};

  for (const [key, value] of Object.entries(obj)) {
      // Insert space before each capital letter except the first
      const spacedValue = value.replace(/([a-z])([A-Z])/g, '$1 $2');
      spacedObj[key] = spacedValue;
  }

  return JSON.stringify(spacedObj, null, 4);
}

function csejson(){
  $("#dev-csejson-form-submit").click(function(){
    var data = $("#csenum").val();
    if (!data.length){
      devAppendPageLog("ERR", "No Input", "error");
      return;
    }

    result = spaceOutCamelCase(enumToJson(data));

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

$(csejson);