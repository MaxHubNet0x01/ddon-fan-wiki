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
        currentSidebarLink.removeClass("text-gray-600").removeClass("dark:text-gray-300").addClass(pageMainColor ? "font-bold text-"+pageMainColor : false || "active");
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

function getBaseUrl(url) {
  const urlObj = new URL(url);
  const pathname = urlObj.pathname;
  const pathSegments = pathname.split('/');
  
  // Ignore the first empty segment
  const basePathSegments = pathSegments.slice(1, -1);
  
  if (basePathSegments.length === 0) {
      return urlObj.href;
  }
  
  // Join segments and add trailing slash
  const baseUri = `/${basePathSegments.join('/')}/`;
  
  return baseUri;
}

function getFileContents(url, callback, dataType = "json", asyncreq = true) {
  $.ajax({
    url: url,
    dataType: dataType,
    success: function(response) {
      callback(response);
    },
    error: function(xhr, status, err) {
      console.error('Error fetching file:', err.message);
    },
    async: asyncreq
  });
}

function checkDataJson(json = null, asyncreq = true){
  if (json) {
    DF_Wiki.dataJson = json;
    return;
  }

  getFileContents(getBaseUrl(location.href) + "index_data.json", checkDataJson, "json", asyncreq);
}

// Expects __MAIN_HEADING__ , __HEADING__ and __CONTENT__ placeholders
function insertCSVToHtml(csv_filename, mainHeadingColumnIndex, insertAtSelector, startHtml, itemHtml, endHtml, loadedCsv = -1){
  if (!DF_Wiki.dataJson) {
    setTimeout(insertCSVToHtml, 200, csv_filename, mainHeadingColumnIndex, insertAtSelector, startHtml, itemHtml, endHtml);
    return;
  }

  if (!DF_Wiki.dataJson[csv_filename]) return;

  if (loadedCsv == -1) {
    getFileContents(getBaseUrl(location.href) + csv_filename, (csv) => {
      insertCSVToHtml(csv_filename, mainHeadingColumnIndex, insertAtSelector, startHtml, itemHtml, endHtml, csv.split('\n'));
    }, "text");

    return;
  }

  if (!loadedCsv) return;

  var headers = loadedCsv[0].split(",");

  if (!headers) return;

  var outputHtml = "";

  for (line in loadedCsv){
    if (line != 0){
      var data = loadedCsv[line].split(",");

      if (data.length != headers.length) {
        console.log(`Skipping\nData (${data.length}): ${data}\nHeaders (${headers.length}): ${headers}`);
        continue;
      } 
      outputHtml += startHtml.replace("__MAIN_HEADING__", data[mainHeadingColumnIndex]);
      
      for (cell in data){
        outputHtml += itemHtml.replace("__HEADING__", headers[cell]).replace("__CONTENT__", data[cell]);
      }

      outputHtml += endHtml;
    }
  }
  
  $(insertAtSelector).html(outputHtml);
}

$(function(){
  window.DF_Wiki = {
    csvHtmlStart: `
      <section class="bg-white dark:bg-zinc-800 dark:text-gray-300 shadow-md rounded-lg p-6 mb-6">
        <h2 class="text-2xl font-semibold mb-4 dark:text-gray-300">__MAIN_HEADING__</h2>
        <div class="space-y-4">
    `,
    csvHtmlItem: `
          <div>
            <h1 class="font-bold text-gray-700 mb-2 dark:text-gray-400 underline">__HEADING__</h1>
            <p>__CONTENT__</p>
          </div>
    `,
    csvHtmlEnd: `
        </div>
      </section>
    `
  };

  init($);
});