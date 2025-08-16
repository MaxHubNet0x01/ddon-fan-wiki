---
layout: default
title: Quests
id: quests
description:
main_color: amber-600
---

<div class="margin-center-90 quests-main loadable loadable-loading">
  {% include page-heading.md heading="Quests ᴮᴱᵀᴬ -- Updated: Aug 14, 2025" extra_class="loadable-skip_loading" %}

  {% capture quests_desc %}
    Search for any supported Quest here and select it for more information
  {% endcapture %}
  {% include page-p.md content=quests_desc %}

  {% include alert-warn.md heading="Warning" content="This search is a bit Beta, so if it doesn't work as expected you can let me know (Read How to Contribute Guide)" extra_class="loadable-skip_loading" %}
  
  <div class="flex flex-wrap md:flex-nowrap justify-center align-center max-w-3xl mx-auto gap-5">
      <div class="w-full flex gap-5">
          <input type="text" id="qSearchKeyword" class="w-5/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-{{ page.main_color }} focus:border-{{ page.main_color }} block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-{{ page.main_color }} dark:focus:border-{{ page.main_color }} outline-none" placeholder="Enter Quest Name..." required />
          <input type="number" id="qSearchLevel" class="w-1/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-{{ page.main_color }} focus:border-{{ page.main_color }} block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-{{ page.main_color }} dark:focus:border-{{ page.main_color }} outline-none" placeholder="Level..." value="0"/>
      </div>
      {% capture searchBtnText %}
        <div class="flex flex-row gap-2 align-center justify-center">
          {% include image.md w="30px" h="30px" src="search-icon.svg" class="m-0 border-none shadow-none" %}
          <span class="self-center searchBtnText">
            Search
          </span>
        </div>
      {% endcapture %}
      {% include page-btn.md color="amber-600" dark_color="white" label=searchBtnText attrs="id='qSearchSubmit'" %}
  </div>

  <div id="qSearchResults" class="mx-auto max-w-4xl flex flex-col gap-5 align-center justify-center p-5">
    <div class="loading flex flex-row gap-2 hidden align-center justify-center">
      {% include image.md w="32px" h="32px" src="circle-spinner.svg" class="m-0 border-none shadow-none" %}
      <span class="self-center text">
        Searching...
      </span>
    </div>
    <div class="results"></div>
  </div>

  {% include page-heading.md heading="Type of Quests Searchable"%}

  <menu class="p-5 list-disc">
    <li>
      {% include text-highlight.md color="red-500" text="Main Quests" %}
    </li>
    <li>
      {% include text-highlight.md color="lime-500" text="Personal / Tutorial / Training Quests" %}
    </li>
    <li>
      {% include text-highlight.md color="blue-500" text="World Quests" %}
    </li>
  </menu>

  {% include loadable-loader.md %}
</div>

{% include page-script.md src="/assets/js/q-search.js" %}