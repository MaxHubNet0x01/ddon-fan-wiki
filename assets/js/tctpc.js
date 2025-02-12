function tctpc($ = App.$){
  $("#dev-tctpc-form-submit").on("click", function(e){
    devAppendPageLog("Form Error", "Data in fields are not valid, check again", "error");

    e.preventDefault();
    e.stopPropagation();
  });

  devAppendPageLog("INIT", "Ready for Input");
}

$(tctpc);