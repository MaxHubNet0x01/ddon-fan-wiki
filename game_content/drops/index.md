---
layout: default
title: Drops
id: drops
description:
main_color: amber-600
---

<div class="margin-center-90">
  {% include page-heading.md heading="Drops" %}

  {% capture drops_desc %}
    Search for any item you need to craft weapons/gear here, or select a region to browse through below
  {% endcapture %}
  {% include page-p.md content=drops_desc %}

  {% include alert-warn.md heading="Warning" content="This search is a bit Beta, so if it doesn't work as expected you can let me know (Read How to Contribute Guide)" %}
  
  <div class="flex items-center max-w-xl mx-auto gap-5">
      <div class="w-full">
          <input type="text" id="mdSearchKeyword" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-{{ page.main_color }} focus:border-{{ page.main_color }} block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-{{ page.main_color }} dark:focus:border-{{ page.main_color }} outline-none" placeholder="Search Material/Drop..." required />
      </div>
      {% capture searchBtnText %}
        <div class="flex flex-row gap-2 align-center justify-center">
          {% include image.md w="30px" h="30px" src="search-icon.svg" class="m-0 border-none shadow-none" %}
          <span class="self-center searchBtnText">
            Search
          </span>
        </div>
      {% endcapture %}
      {% include page-btn.md color="amber-600" dark_color="white" label=searchBtnText attrs="id='mdSearchSubmit'" %}
  </div>

  <div id="mdSearchResults" class="mx-auto max-w-4xl flex flex-col gap-5 align-center justify-center p-5">
    <div class="loading flex flex-row gap-2 hidden align-center justify-center">
      {% include image.md w="32px" h="32px" src="circle-spinner.svg" class="m-0 border-none shadow-none" %}
      <span class="self-center text">
        Searching...
      </span>
    </div>
    <div class="results">

    </div>
  </div>

  {% include page-heading.md heading="Browse by Location/Region" %}

  {% include alert-info.md heading="Tip" content="Press <kbd>Ctrl</kbd> + <kbd>F</kbd> to search inside each region quickly" %}

  <menu class="p-5 list-disc">
    <li>
      {% include link-highlight.md href="/game_content/drops/extreme_missions" text="Extreme Missions" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/world_quests" text="World Quests" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/shops" text="Shops Selling Materials" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/hidell_plains" text="Hidell Plains" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/breya_coast" text="Breya Coast" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/mysree_forest" text="Mysree Forest" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/volden_mines" text="Volden Mines" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/dowe_valley" text="Dowe Valley" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/mysree_grove" text="Mysree Grove" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/deenan_woods" text="Deenan Woods" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/north_betland_plains" text="North Betland Plains" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/betland_plains" text="Betland Plains" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/western_zandora" text="Western Zandora" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/eastern_zandora" text="Eastern Zandora" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/mergoda_ruins" text="Mergoda Ruins" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/bloodbane_isle" text="Bloodbane Isle" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/phindym" text="Phindym" %}
    </li>
  </menu>
</div>

{% include page-script.md src="/assets/js/md-search.js" %}