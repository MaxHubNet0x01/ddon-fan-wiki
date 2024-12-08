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
      <li>Crests are usually obtained from quest rewards, or players can purchase them from Alvar</li>
    {% include card-section-list-end.md %}
  {% include card-section-end.md %}

  {% include card-with-image.md 
    heading="Crest Types"
    src="weapon-crest.png" 
    w="20%"
    content="These Crests can only be mounted on weapons"
    src2="armor-crest.png"
    w2="20%"
    content2="These Crests can only be mounted on head armour, body armour, arm armour and leg armour. They cannot be mounted on clothing, legwear, jewellery, or overwear"
  %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Mounting Crests" %}
    {% include card-section-list-start.md %}
      <li>Players can mount crests at the {% include highlight-link.md href="/game_mechanics/crafting" text="Craft Room" %}</li>
      <li>Note that Crests can only be equipped into available slots on a piece of equipment</li>
      <li>Crests that are already mounted cannot be removed without destroying them in the process</li>
      <li>You can increase the amount of slots when crafting a piece of equipment by adding special refining materials in the crafting process</li>
    {% include card-section-list-end.md %}
  {% include card-section-end.md %}

  {% capture table_content %}
    <table>
      <tbody>
        <tr>
          <th>Equipment</th>
          <th>Initial Slot</th>
          <th>Maximum Slots</th>
        </tr>
        <tr>
          <td>Weapon</td>
          <td>1</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Head Armour</td>
          <td>0</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Body Armour</td>
          <td>1</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Arm Armour</td>
          <td>0</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Leg Armour</td>
          <td>0</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
  {% endcapture %}

  {% include page-heading.md heading="Min/Max per Armor Type" %}
  {% include table-wrapper.md table=table_content %}
</div>