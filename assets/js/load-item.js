---
  main_color: amber - 600
---
function loadItem() {
  var itemId = new URL(location.href).searchParams.get("id");

  if (!itemId.length) {
    console.log("No Item ID");
    return;
  }

  if (itemId.indexOf("q") == -1) itemId = stringOverride(DF_Wiki.itemIdFormat, itemId);

  function showLoading() {
    $(".item").addClass("loadable-loading");
  }

  function hideLoading() {
    $(".item").removeClass("loadable-loading");
    $(".loadable-loader .text").text(`Loading`);
  }

  function loadRootItemsIdIndex(data) {
    if (!data) {
      console.log("No RQI Index");
      return;
    }

    window.DF_Wiki.rootItemsIdIndex = data;
    loadableLoaderProgressReport(1, 2, "Grabbing Files..");
    loadItemData();
  }

  function getPrebuiltData() {
    loadableLoaderProgressReport(0, 2, "Grabbing Files..");
    getFileContents("{{ '/game_content/assets/rootItemsIdIndex.json' | relative_url }}", loadRootItemsIdIndex);
  }


  function genItemImageFromId(id){
    if (!id) return "";

    return `<img class="border-none shadow-none p-0 m-0" src="{{ 'game_content/assets/icons' | relative_url }}/${stringOverride(DF_Wiki.itemIconIdFormat, id)}.png" w="24" h="24">`;
  }

  function genTable(data){
    return `
      <div class="flow-root">
        <dl class="-my-3 divide-y divide-gray-200 text-sm">
            ${data}
        </dl>
      </div>
    `;
  }

  function genTableRow(name, value){
    return `
      <div class="pl-4 grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4 items-center">
        <dt class="font-medium text-gray-900 dark:text-white">${name}</dt>
        <dd class="text-gray-700 sm:col-span-2 dark:text-gray-200">
          ${value}
        </dd>
      </div>
    `;
  }

  function genItemStats(i){
    var stats = [];

    stats.push(genTableRow("Item Rank", i.item_level));
    stats.push(genTableRow("Item Level", i.level));

    if (i.type == "equipment"){
      if (i.jobs && i.jobs.length) stats.push(genTableRow("Can be equipped by", i.jobs.join(", ")));
      if (i.genders && i.genders.length) stats.push(genTableRow("For genders: ", i.genders.join(", ")));

      i.stats.attack ? stats.push(genTableRow("Attack", i.stats.attack)) : null;
      i.stats.defense ? stats.push(genTableRow("Defense", i.stats.defense)) : null;
      i.stats.magic_attack ? stats.push(genTableRow("Magick Attack", i.stats.magic_attack)) : null;
      i.stats.magic_defense ? stats.push(genTableRow("Magick Defense", i.stats.magic_defense)) : null;
      i.stats.ele_slot ? stats.push(genTableRow("Elemental Slot?? ?", i.stats.ele_slot)) : null;

      stats.push(genTableRow("Crest Slots", i.stats && i.stats.crest_slots ? i.stats.crest_slots : i.crest_slots));
      stats.push(genTableRow("Weight", i.weight));

      if (i.params && i.params.length){
        for (var p in i.params){
          var param = i.params[p];
          stats.push(genTableRow("[Extra Stat] " + param.name, param.value));
        }
      }
    }
    else if (i.type == "consumable"){
      stats.push(genTableRow("Max Stack", i.max_stack));
    }

    stats.push(genTableRow("Sell Price", i.sell_price));
    stats.push(genTableRow("Can be Sold to Bazaar?", i.can_bazaar));

    return genTable(stats.join(""));
  }

  function genItemNameAndImage(imageId, name){
    return `
      <div class="flex gap-4 items-center">
        ${genItemImageFromId(imageId)}
        ${name}
      </div>
    `;
  }

  function genItemRecipe(item){
    var data = [];

    for (var r in item.craft_recipe){
      var recipe = item.craft_recipe[r];
      var itemName = null;
      var iconId = null;
      var fullRecipeItemId = stringOverride(DF_Wiki.itemIdFormat, recipe.item_id);

      for (var i in DF_Wiki.rootItemsIdIndex){
        if (i.indexOf(fullRecipeItemId) != -1){
          var idata = i.split("__");
          itemName = idata[1];
          iconId = idata[2];
          break;
        }
      }

      if (itemName){
        data.push(genTableRow(genItemNameAndImage(iconId, 
            `
              <a href="${DF_Wiki.rootPath + 'game_content/items/view?id=' + fullRecipeItemId}" class="text-amber-600 underline">
                ${itemName}
              </a>
            `
          )
        , recipe.amount));
      }
    }

    return genTable(data.join(""));
  }

  function genItemQualityName(name, quality){
    if (quality == 0) return name;

    var star = "✮";
    name += " ";

    for (var s = 0; s < quality; s++){
      name += star;
    }

    return name;
  }

  function genItemUpgrades(item){
    var data = [];

    for (var r in item.gradeup_recipe){
      var recipe = item.gradeup_recipe[r];
      var fullId = stringOverride(DF_Wiki.itemIdFormat, recipe.item_id);
      var iconId = null;
      var recipeItemName = null;

      for (var i in DF_Wiki.rootItemsIdIndex){
        if (i.indexOf(fullId) != -1){
          var key = i.split("__");

          recipeItemName = key[1];
          iconId = key[2];
          break;
        }
      }

      data.push(genTableRow(genItemNameAndImage(iconId, 
        `
          <a href="${DF_Wiki.rootPath + 'game_content/items/view?id=' + fullId}" class="text-amber-600 underline">
            ${recipeItemName}
          </a>
        `
      ), recipe.amount));
    }

    return genTable(data.join(""));
  }

  function processItemData(item){
    if (!item) {
      console.log("No Item Data");
      return;
    }

    loadableLoaderProgressReport(2, 2, "Grabbing Files..");

    item.quality_name = genItemQualityName(item.name, item.quality);

    $("title").text(item.quality_name + " - Dragon's Dogma Online Wiki");

    $(".iname .heading").html(genItemNameAndImage(
      item.icon && item.icon.icon_id ? item.icon.icon_id : "",
      item.quality_name
    ));
    $(".ibadges").html(genItemCategoriesBadge(item));
    $(".iinfo").text(item.info || "No Description");
    $(".istats").html(genItemStats(item));

    if (item.craft_recipe && item.craft_recipe.length){
      $(".irecipe").html(genItemRecipe(item));
    }
    else ($(".hirecipe, .irecipe").remove());

    if (item.gradeup_recipe && item.gradeup_recipe.length){
      $(".iupgrades").html(genItemUpgrades(item));
      $(".hiupgrades .heading").html(`
        Materials to Upgrade to: 
        <a href="${DF_Wiki.rootPath + 'game_content/items/view?id=' + stringOverride(DF_Wiki.itemIdFormat, item.next_item_id)}" class="underline italic">
          ${genItemQualityName(item.name, item.quality + 1)}
        </a>
      `);
    }
    else ($(".hiupgrades, .iupgrades").remove());

    setTimeout(hideLoading, 1000);
  }

  function loadItemData() {
    var item = null;
    for(var i in DF_Wiki.rootItemsIdIndex){
      if (i.indexOf(itemId) != -1){
        var itemData = i.split("__");

        item = {
          id: itemId,
          name: itemData[1],
          icon_id: itemData[2],
          path: DF_Wiki.rootItemsIdIndex[i]
        };
        break;
      }
    }

    if (!item) {
      console.log("Invalid Item ID // Item");
      return;
    }

    getFileContents(DF_Wiki.rootPath + item.path, processItemData);
  }

  getPrebuiltData();
}

$(loadItem);