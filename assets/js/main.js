function init($){
  function initNavMenu(){
    var toggleOpen = $("#toggleOpen");
    var toggleClose = $("#toggleClose");
    var collapseMenu = $("#collapseMenu");

    function handleClick(e) {
      collapseMenu.toggleClass("hidden");
      toggleClose.toggleClass("hidden");
    }

    toggleOpen.click(handleClick);
    toggleClose.click(handleClick);
  }

  function initSideMenu(){
    var currentPageId = $("#main-content").data("page-id");

    if (currentPageId != ""){
      var currentSidebarLink = $(`#sidebar [data-page-id="${currentPageId}_link"]`);
      var pageMainColor = $("#main-content").data("page-main-color");
      
      if (currentSidebarLink.length == 1){
        currentSidebarLink.parents("ul").siblings(".sidebar-group-option").prop("checked", true);
        currentSidebarLink.removeClass("text-gray-600").addClass(pageMainColor ? "font-bold text-"+pageMainColor : false || "active");
      }
    }

    $("#sidebar .mobile-toggle").click(function(){
      $(".sidebar-content").toggleClass("hidden");
    });
  }

  initNavMenu();
  initSideMenu();
  window.DF_Wiki.init = true;
}

function devAppendPageLog(heading, content, type = "info"){
  if (!$(".dev-page-logs").length) return;

  var defaultColor = "text-slate-400";

  switch (type){
    case "warning": {
      defaultColor = "text-yellow-400";
      break;
    }
    case "error": {
      defaultColor = "text-red-400";
      break;
    }
    case "success":{
      defaultColor = "text-green-400";
      break;
    }
  }

  $(".dev-page-logs").append(`
    <div class="mt-4 flex">
      <span class="${defaultColor}">${heading}:~$</span>
      <p class="flex-1 typing items-center pl-2">
        ${content}
      </p>
    </div>
  `);
}

$(function(){
  init($);
  window.DF_Wiki = {};
});