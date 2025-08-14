---
layout: default
title: Excel to CSV
id: etocsv
description: 
main_color: slate-500
main_dark_dolor: slate-200
---

<div class="margin-center-90">
  {% include page-heading.md heading="Excel to CSV Generator (Stacking,  1st row is Section Name and Lvl)" %}  

  <div class="flex flex-col align-center justify-center gap-5">
    <div id="dev-etocsv-form" class="w-auto bg-transparent p-5">
      <div class="mb-5">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filename (.csv auto added)</label>
        <input id="fname" class="bg-zinc-500 p-5 rounded-lg w-xl" required="required" type="text">
      </div>
      <div class="mb-5">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Break Count (after n number of items, place in a new line) </label>
        <input id="bcount" class="bg-zinc-500 p-5 rounded-lg w-md" required="required" type="number" value="-1">
      </div>
      <div class="mb-5">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Excel Text</label>
        <textarea id="edata" class="bg-zinc-500 p-5 rounded-lg min-w-full min-h-24" required="required"></textarea>
      </div>

      <div class="flex gap-5">
        {% include page-btn.md label="Submit" attrs="type='submit' id='dev-etocsv-form-submit'" %}
        {% include page-btn.md label="Download" attrs="type='button' id='dev-etocsv-form-download'" %}
      </div>
    </div>

    <div class="dev-page-result">
      {% include page-heading.md heading="Result" %}  
      <textarea class="bg-zinc-500 p-10 rounded-lg min-w-full min-h-96"></textarea>
    </div>
    
    {% include page-dev-logs.md %}
</div>

{% include page-script.md src="/assets/js/etocsv.js" %}