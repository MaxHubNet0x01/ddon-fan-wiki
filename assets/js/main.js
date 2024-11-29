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
    var currentSidebarLink = $(`#sidebar [data-page-id='${currentPageId}_link']`);
    
    if (currentSidebarLink.length == 1){
      currentSidebarLink.parents("ul").siblings(".sidebar-group-option").prop("checked", true);
      currentSidebarLink.addClass("active");
    }
  }

  initNavMenu();
  initSideMenu();
}

$(function(){
  init($.noConflict());
});