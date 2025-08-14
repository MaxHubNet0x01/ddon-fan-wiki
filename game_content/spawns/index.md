---
layout: default
title: Spawns
id: spawns
description:
main_color: amber-600
---

<div class="margin-center-90 spawns-main loadable loadable-loading">
  {% include page-heading.md heading="Monster Spawns ᴮᴱᵀᴬ -- Updated: Aug 14, 2025" extra_class="loadable-skip_loading" %}

  {% capture spawns_desc %}
    Search for any monster you're looking for in-game here
  {% endcapture %}
  {% include page-p.md content=spawns_desc %}

  {% include alert-warn.md heading="Warning" content="This search is a bit Beta, so if it doesn't work as expected you can let me know (Read How to Contribute Guide)<br>Also, this data does not include the 'Old Enemy' dataset" extra_class="loadable-skip_loading" %}
  
  <div class="flex flex-wrap md:flex-nowrap justify-center align-center max-w-3xl mx-auto gap-5">
      <div class="w-full flex gap-5">
          <input type="text" id="msSearchKeyword" class="w-5/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-{{ page.main_color }} focus:border-{{ page.main_color }} block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-{{ page.main_color }} dark:focus:border-{{ page.main_color }} outline-none" placeholder="Enter Monster Name..." required />
          <input type="number" id="msSearchLevel" class="w-1/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-{{ page.main_color }} focus:border-{{ page.main_color }} block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-{{ page.main_color }} dark:focus:border-{{ page.main_color }} outline-none" placeholder="Level..." />
      </div>
      {% capture searchBtnText %}
        <div class="flex flex-row gap-2 align-center justify-center">
          {% include image.md w="30px" h="30px" src="search-icon.svg" class="m-0 border-none shadow-none" %}
          <span class="self-center searchBtnText">
            Search
          </span>
        </div>
      {% endcapture %}
      {% include page-btn.md color="amber-600" dark_color="white" label=searchBtnText attrs="id='msSearchSubmit'" %}
  </div>

  <div id="msSearchResults" class="mx-auto max-w-4xl flex flex-col gap-5 align-center justify-center p-5">
    <div class="loading flex flex-row gap-2 hidden align-center justify-center">
      {% include image.md w="32px" h="32px" src="circle-spinner.svg" class="m-0 border-none shadow-none" %}
      <span class="self-center text">
        Searching...
      </span>
    </div>
    <div class="results"></div>
  </div>

  {% include page-heading.md heading="Browse by Location/Region"%}

  <menu class="p-5 list-disc">
    <li>
      {% include link-highlight.md href="/game_content/spawns/hidell_plains" text="Hidell Plains" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/spawns/breya_coast" text="Breya Coast" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/spawns/mysree_forest" text="Mysree Forest" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/spawns/volden_mines" text="Volden Mines" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/spawns/dowe_valley" text="Dowe Valley" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/spawns/mysree_grove" text="Mysree Grove" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/spawns/deenan_woods" text="Deenan Woods" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/spawns/north_betland_plains" text="North Betland Plains" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/spawns/betland_plains" text="Betland Plains" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/spawns/zandora_wastelands" text="Zandora Wastelands" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/spawns/eastern_zandora" text="Eastern Zandora" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/spawns/mergoda_ruins" text="Mergoda Ruins" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/spawns/bloodbane_isle" text="Bloodbane Isle" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/spawns/elan_water_grove" text="Elan Water Grove" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/spawns/fanara_plains" text="Fanara Plains" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/spawns/kingal_canyon" text="Kingal Canyon" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/spawns/morrow_forest" text="Morrow Forest" %}
    </li>
  </menu>

  <div class="loadable-loader loading flex flex-row gap-2 align-center justify-center">
    {% include image.md w="32px" h="32px" src="circle-spinner.svg" class="m-0 border-none shadow-none" %}
    <span class="self-center text">
      Loading
    </span>
  </div>
</div>

{% include page-script.md src="/assets/js/ms-search.js" %}