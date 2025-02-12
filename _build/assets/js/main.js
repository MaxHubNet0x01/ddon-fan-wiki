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
}

$(function(){
  init($.noConflict());
});