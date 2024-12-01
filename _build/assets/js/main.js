function init($){
  function initNavMenu(){
    var toggleOpen = document.getElementById('toggleOpen');
    var toggleClose = document.getElementById('toggleClose');
    var collapseMenu = document.getElementById('collapseMenu');

    function handleClick() {
      if (collapseMenu.style.display === 'block') {
        collapseMenu.style.display = 'none';
      } else {
        collapseMenu.style.display = 'block';
      }
    }

    toggleOpen.addEventListener('click', handleClick);
    toggleClose.addEventListener('click', handleClick);
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