---
layout: default
title: Generate Quest HTML Files
id: gqhtml
description: 
main_color: slate-500
main_dark_dolor: slate-200
---

<div class="margin-center-90">
  {% include page-heading.md heading="Generate Quest HTML Files (Disabled)" %}  

  <div class="flex flex-col align-center justify-center gap-5">
    {% include alert-info.md heading="Note" content="By being on this page in local environment, the plugin is running (check logs)" %}
    {% comment %}
      {% gen_quests_md_files /game_content/assets/quests,/_temp,/game_content/quests/template.md %}
    {% endcomment %}
  </div>
</div>