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

  {% include page-heading.md heading="Browse by Region" %}

  <ul>
    <li>
      {% include link-highlight.md href="/game_content/drops/extreme_missions" text="Extreme Missions" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/world_quests" text="World Quests" %}
    </li>
    <li>
      {% include link-highlight.md href="/game_content/drops/shops" text="Shops Selling Materials" %}
    </li>
  </ul>
</div>