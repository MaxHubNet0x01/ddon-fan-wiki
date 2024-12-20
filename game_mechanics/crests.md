---
layout: default
title: Crests
id: crests
description: 
main_color: amber-600
---

<div class="margin-center-90">
  {% include page-heading.md heading="Crests" %}

  {% include card-section-start.md %}
    {% include card-section-list-start.md %}
      <li>Crests are special items that can be mounted on weapons or armour</li>
      <li>Crests can increase the stats of the equipment they are mounted on, or add special status effects, or even elemental attributes</li>
      <li>Crests are usually obtained from quest rewards, or players can purchase them from Alvar (Pawn Cathedral)</li>
    {% include card-section-list-end.md %}
  {% include card-section-end.md %}

  {% capture weapon_crest_link %}
    {% include link-highlight-page.md href="#weapon-crests" text="Weapon Crests" %}
  {% endcapture %}
  {% capture weapon_crest_description %}
    {{ weapon_crest_link }}: These Crests can only be mounted on weapons
  {% endcapture %}

  {% capture armor_crest_link %}
    {% include link-highlight-page.md href="#armor-crests" text="Armor Crests" %}
  {% endcapture %}
  {% capture armor_crest_description %}
    {{ armor_crest_link }}: These Crests can only be mounted on head armour, body armour, arm armour and leg armour. They cannot be mounted on clothing, legwear, jewellery, or overwear
  {% endcapture %}
  {% include card-with-image.md 
    heading="Crest Types"
    src="weapon-crest.png" 
    w="20%"
    content=weapon_crest_description
    src2="armor-crest.png"
    w2="20%"
    content2=armor_crest_description
  %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Mounting Crests" %}
    {% include card-section-list-start.md %}
      <li>Players can mount crests at the {% include link-highlight.md href="/game_mechanics/crafting" text="Craft Room" %}</li>
      <li>Note that Crests can only be equipped into available slots on a piece of equipment</li>
      <li>Crests that are already mounted cannot be removed without destroying them in the process</li>
      <li>You can increase the amount of slots when crafting a piece of equipment by adding special refining materials in the crafting process</li>
    {% include card-section-list-end.md %}
  {% include card-section-end.md %}

  {% capture table_min_max_content %}
    {% include data/table-crest-limits.md %}
  {% endcapture %}

  {% include page-heading.md heading="Min/Max per Armor Type" %}
  {% include table-wrapper.md table=table_min_max_content %}

  {% include page-heading.md heading="Refining Materials" %}
  {% include page-p.md content="The following materials can be used to add extra slots for crests when crafting equipment" %}

  {% capture table_refining_content %}
    {% include data/table-crest-refining-materials.md %}
  {% endcapture %}
  {% include table-wrapper.md table=table_refining_content %}

  {% include page-heading.md heading="List of Weapon Crests" id="weapon-crests" %}
  {% capture table_weapon_crests %}
    {% include data/table-weapon-crests.md %}
  {% endcapture %}
  {% include table-wrapper.md table=table_weapon_crests %}

  {% include page-heading.md heading="List of Armor Crests" id="armor-crests" %}
  {% capture table_armor_crests %}
    {% include data/table-armor-crests.md %}
  {% endcapture %}
  {% include table-wrapper.md table=table_armor_crests %}
</div>