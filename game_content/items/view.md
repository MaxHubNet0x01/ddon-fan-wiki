---
layout: default
title: Dragon's Dogma Online Items
id: items
description: View Details of any in-game item
main_color: amber-600
---

<div class="margin-center-90 item loadable loadable-loading">
  {% include page-heading.md heading="No Item Selected/Found" extra_class="loadable-skip_loading iname" %}

  <div class="loadable-content flex flex-col gap-5">
    <div class="ibadges flex gap-3">
      __ITEM_BADGES__
    </div>
    
    <div class="p-5 border-l-2 border-solid border-amber-100 iinfo">
      __ITEM_DESCRIPTION__
    </div>

    {% include page-heading.md heading="Stats" %}
    <div class="px-5 istats">
      __ITEM_STATS__
    </div>

    {% include page-heading.md heading="Recipe" extra_class="hirecipe" %}
    <div class="px-5 irecipe">
      __ITEM_RECIPE__
    </div>

    {% include page-heading.md heading="Upgrade to: " extra_class="hiupgrades" %}
    <div class="px-5 iupgrades">
      __ITEM_UPGRADES__
    </div>

    {% include page-heading.md heading="Item is used to Craft: (Loading may take a while)" extra_class="hicrafts" %}
    <div class="px-5 icrafts">
      <button id="loadicrafts" class="px-4 py-3 bg-amber-600 text-white rounded">Click to Load Craftables</button>
    </div>

    {% include page-heading.md heading="Item is used to Upgrade: (Loading may take a while)" extra_class="hilvlup" %}
    <div class="px-5 ilvlup">
      <button id="loadilvlup" class="px-4 py-3 bg-amber-600 text-white rounded">Click to Load Upgradables</button>
    </div>
  </div>

  {% include loadable-loader.md %}
</div>

{% include page-script.md src="/assets/js/load-item.js" %}