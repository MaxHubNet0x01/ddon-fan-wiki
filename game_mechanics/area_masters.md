---
layout: default
title: Area Masters
id: area-masters
description: 
main_color: red-800
---

<div class="margin-center-90">
  {% include page-heading.md heading="Area Masters" %}
  {% include alert-error.md heading="Important" content="This feature is not working in the game" %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Introduction" %}
    {% include card-section-list-start.md %}
      <li>Area Masters are selected people in each region who gather and report information about growing threats and unexplained disturbances</li>
      <li>Has info on interesting locations, local beasts and creatures, as well as resource materials available</li>
      <li>Area Masters will also offer Arisen items as weekly rewards for completing quests in their local areas</li>
    {% include card-section-list-end.md %}
  {% include card-section-end.md %}

  {% include page-heading.md heading="Area Master Services" %}
  {% capture table_ams %}
    {% include data/table-area-master-services.md %}
  {% endcapture %}

  {% include table-wrapper.md table=table_ams %}

  {% include page-heading.md heading="Area Rank and Area Points" %}
  {% include card-section-start.md %}
    {% include card-section-header.md heading="AP/AR" %}
    {% include card-section-list-start.md %}
      <li>Completing Board Quests and World Quests in a region will give players <b>Area Points (AP)</b></li>
      <li>Once players have obtained enough AP, they can increase their local <b>Area Rank (AR)</b> by speaking to the local Area Master</li>
      <li>Increasing Area Ranks will unlock new locations and new quests, as well as new special enemies</li>
    {% include card-section-list-end.md %}
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Area Trials" %}
    {% include card-section-list-start.md %}
      <li>In order to obtain each region's Area Ranks 5, 10, 13 or 15, players are required to complete special quests</li>
      <li>These Area Trials can be found in the Personal Quests section</li>
      <li>You can still earn AP before completing these Area Trials, but will not be able to improve their Area Rank until the respective Area Trial has been successfully completed</li>
    {% include card-section-list-end.md %}
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Area Master NPCs" %}
    {% include card-section-list-start.md %}
      <li><b>Alfred</b>: Hidell Plains</li>
      <li><b>O'Neill</b>: Breya Coast</li>
      <li><b>Patricia</b>: Mysree Forest</li>
      <li><b>Roy</b>: Volden Mines</li>
      <li><b>Hayden</b>: Dowe Valley</li>
      <li><b>Christine</b>: Mysree Grove</li>
      <li><b>Scherzo</b>: Betland Plains</li>
      <li><b>Rondejeel</b>: Deenan Woods</li>
      <li><b>Sunny</b>: Northern Betland Plains</li>
      <li><b>Nadia</b>: Eastern Zandora</li>
      <li><b>Dion</b>: Zandora Wastelands</li>
      <li><b>Beatrix</b>: Mergoda Ruins</li>
      <li><b>Bertrand</b>: Bloodbane Isle</li>
    {% include card-section-list-end.md %}
  {% include card-section-end.md %}
</div>