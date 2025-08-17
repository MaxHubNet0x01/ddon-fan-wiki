---
layout: default
title: Dragons Dogma Online Items
id: items
description: View details on any item or equipment in Dragon's Dogma Online
main_color: amber-600
---

<div class="margin-center-90 items-main loadable loadable-loading">
  {% include page-heading.md heading="Items ᴮᴱᵀᴬ -- Updated: Aug 17, 2025" extra_class="loadable-skip_loading" %}

  {% capture items_desc %}
    Use the search box below to begin your search
  {% endcapture %}
  {% include page-p.md content=items_desc %}

  {% include alert-warn.md heading="Warning" content="This search is a bit Beta, so if it doesn't work as expected you can let me know (Read How to Contribute Guide)" extra_class="loadable-skip_loading" %}
  
  <div class="flex flex-wrap md:flex-nowrap justify-center align-center max-w-3xl mx-auto gap-5">
      <div class="w-full flex gap-5">
          <input type="text" id="iSearchKeyword" class="w-5/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-{{ page.main_color }} focus:border-{{ page.main_color }} block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-{{ page.main_color }} dark:focus:border-{{ page.main_color }} outline-none" placeholder="Enter Item Name..." required />
      </div>
      {% capture searchBtnText %}
        <div class="flex flex-row gap-2 align-center justify-center">
          {% include image.md w="30px" h="30px" src="search-icon.svg" class="m-0 border-none shadow-none" %}
          <span class="self-center searchBtnText">
            Search
          </span>
        </div>
      {% endcapture %}
      {% include page-btn.md color="amber-600" dark_color="white" label=searchBtnText attrs="id='iSearchSubmit'" %}
  </div>

  <div id="iSearchResults" class="mx-auto max-w-4xl flex flex-col gap-5 align-center justify-center p-5">
    <div class="loading flex flex-row gap-2 hidden align-center justify-center">
      {% include image.md w="32px" h="32px" src="circle-spinner.svg" class="m-0 border-none shadow-none" %}
      <span class="self-center text">
        Searching...
      </span>
    </div>
    <div class="results"></div>
  </div>

  {% include page-heading.md heading="Type of Items Searchable"%}

  <menu class="p-5 list-disc">
    <li>
      {% include text-highlight.md color="amber-500" text="Accessory" %}
    </li>
    <li>
      {% include text-highlight.md color="amber-500" text="Armor" %}
    </li>
    <li>
      {% include text-highlight.md color="amber-500" text="Materials" %}
    </li>
    <li>
      {% include text-highlight.md color="amber-500" text="Jewelry" %}
    </li>
    <li>
      {% include text-highlight.md color="amber-500" text="Key Items" %}
    </li>
    <li>
      {% include text-highlight.md color="amber-500" text="Consumables" %}
    </li>
    <li>
      {% include text-highlight.md color="amber-500" text="Weapons" %}
    </li>
    <li>
      {% include text-highlight.md color="amber-500" text="Crests" %}
    </li>
  </menu>

  {% include loadable-loader.md %}
</div>

{% include page-script.md src="/assets/js/i-search.js" %}