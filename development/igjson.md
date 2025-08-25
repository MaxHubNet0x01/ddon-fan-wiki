---
layout: default
title: IG JSON parser
id: igjson
description: 
main_color: slate-500
main_dark_dolor: slate-200
---

<div class="margin-center-90">
  {% include page-heading.md heading="IG Json Parser" %}  

  <div class="flex flex-col align-center justify-center gap-5">
    <div id="igjson" class="w-auto bg-transparent p-5">
      <div class="mb-5">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">JSON</label>
        <input type="file" class="igjson-file">
      </div>
    </div>

    <div class="dev-page-result">
      {% include page-heading.md heading="Result" %}  
      <ul class="messages">
      </ul>
    </div>
</div>

{% include page-script.md src="/assets/js/igjson.js" %}