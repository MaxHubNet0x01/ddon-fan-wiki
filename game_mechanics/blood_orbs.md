---
layout: default
title: Blood Orbs
id: blood-orbs
description: 
main_color: purple-700
---

<div class="margin-center-90">
  {% include page-heading.md heading="Blood Orbs" %}

  {% capture blood_orb_desc %}
    The blood of the White Dragon shed in battle in crystallised form. Used to activate perks in the 
    {% include link-highlight.md href="/game_mechanics/blood_orb_tree" text="Blood Orb Tree" %}
     (Dragon Force Augmentation Skill Tree). They can also be used to purchase rare items from Gilstan, The Goblin King
  {% endcapture %}
  {% include card-with-image.md 
    heading="About"
    src="blood-orb.png" 
    w="15%"
    class="rounded-2xl"
    content=blood_orb_desc
  %}

  {% include card-with-image.md 
    heading="Obtaining Blood Orbs"
    src="orb-enemy.jpg" 
    w="70%"
    class="rounded-2xl"
    content="Blood Orbs can be obtained from defeating Orb Enemies, which are special enemies with a purple health bar. The higher the level of the Orb Enemy, the more Blood Orbs can be obtained"
  %}
</div>