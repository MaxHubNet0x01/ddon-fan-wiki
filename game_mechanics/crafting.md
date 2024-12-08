---
layout: default
title: Crafting
id: crafting
description: 
main_color: amber-600
---

<div class="margin-center-90">
  {% include page-heading.md heading="Finding the Craft Room" %}

  {% include card-with-image.md heading="Via Rift Teleport" src="craft-room-rift-teleport.png" w="100%" content="Found inside the Within Location tab" %}

  {% include card-with-image.md heading="At White Dragon Temple" src="craft-room-door.png" w="100%" content="Also reachable at the central area of White Dragon Temple" %}

  {% include page-heading.md heading="How to Craft" %}

  {% include card-with-image.md heading="Sonia" src="sonia.png" w="100%" content="Speak with Sonia inside the craft room then select 'Craft'" %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Craft Item" %}
    {% include card-section-list-start.md %}
      <li>This is the option to select when crafting weapons, gear, materials, etc.</li>
      <li>Select the category and item you want to craft</li>
    {% include card-section-list-end.md %}
    
    {% include page-p.md content="While equipment such as weapons and armour can be purchased from shops, a number of the more powerful pieces in the game can only be obtained through crafting. Crafting in the game is done by Main Pawns and Support Pawns who are contracted to the Arisen" %}

    {% include page-p.md content="Equipment can also be improved by mounting Crests on them, or even have their colours changed by using special dyes." %}

    {% include page-p.md content="Crafting anything requires you to have enough raw materials and G" %}

    {% capture alert_info_content %}
      If you do not have enough Raw Materials to craft an item, check if the Bazaar has any for sale. You can do this by opening the Sub-Menu while crafting ( {% include kbd.md key="Ctrl" %} or {% include xinput.md color="blue" btn="X" %} )
    {% endcapture %}
    {% include alert-info.md heading="Tip" content=alert_info_content %}

    {% include card-section-list-start.md %}
      <li>Now assign a Main Pawn as the leader, and any other pawn(s) as the assistant(s)</li>
    {% include card-section-list-end.md %}

    {% include alert-info.md heading="Note" content="Note that all pawns participating in the crafting process will automatically be dismissed from the party" %}
  {% include card-section-end.md %}

  {% include card-with-image.md heading="Collecting Crafted Items" src="craft-production-status.png" w="100%" content="All items crafted are placed under Production Status for collection, currently items are crafted instantly instead of time based delays prior" %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Enhancing Equipment" %}
    {% include card-section-list-start.md %}
      <li>After selecting the Enhance Equipment option, select the weapon or armour piece that you wish to enhance</li>
      <li>Check to see if you have enough G and materials (or check the Bazaar), and then assign the pawns to enhance the item</li>
      <li>It can take more than one attempt to fully enhance an item to a higher level</li>
      <li>Each level is indicated by a ★</li>
    {% include card-section-list-end.md %}
  {% include card-section-end.md %}
</div>