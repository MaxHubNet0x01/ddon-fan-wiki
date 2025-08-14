---
layout: default
title: Swap JSON Key Values
id: sjkv
description: 
main_color: slate-500
main_dark_dolor: slate-200
---

<div class="margin-center-90">
  {% include page-heading.md heading="Swap JSON Key Values" %}  

  <div class="flex flex-col align-center justify-center gap-5">
    <div id="dev-sjkv-form" class="w-auto bg-transparent p-5">
      <div class="mb-5">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">JSON</label>
        <textarea id="jsonData" class="bg-zinc-500 p-5 rounded-lg min-w-full min-h-24" required="required"></textarea>
      </div>

      {% include page-btn.md label="Submit" attrs="type='submit' id='dev-sjkv-form-submit'" %}
    </div>

    <div class="dev-page-result">
      {% include page-heading.md heading="Result" %}  
      <textarea class="bg-zinc-500 p-10 rounded-lg min-w-full min-h-96"></textarea>
    </div>
    
    {% include page-dev-logs.md %}
</div>

{% include page-script.md src="/assets/js/sjkv.js" %}