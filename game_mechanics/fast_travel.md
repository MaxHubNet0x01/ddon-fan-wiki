---
layout: default
title: Fast Travel
id: fast-travel
description: 
main_color: amber-600
---

<div class="margin-center-90">
  {% include page-heading.md heading="Fast Travel" %}

  <p class="mb-5">
   You unlock new places to fast travel by interacting with Port Crystals, fast travel is accessible from everywhere, except when in combat.
  </p>

  <p class="mb-2 font-bold">
    Rift Teleport/Fast Travel Menu:
  </p>
  <div class="flex mb-5 items-center flex-col md:flex-row">
    <div class="w-full md:w-1/2 flex items-center justify-center">
      {% include image.md w="250px" h="150px" src="menu-rift-teleport.png" %}
    </div>
    <div class="w-full md:w-1/2 flex items-center justify-center">
      {% include image.md w="485px" h="300px" src="rift-teleport-screen.png" %}
    </div>
  </div>

  {% capture quick_tip %}
    <p>
      You can add three places as "favorite" making teleporting to them free!
    </p>
    <p>
      Note you can only favorite a location from the portcrystal for it.
    </p><br/>
    <p>
      In the tab "Within Location" you can teleport to a district inside White Dragon Temple for free as well. Making you able to instantly summon your pawns, or just move around White Dragon Temple very quickly. 
    </p>
  {% endcapture %}

  {% include alert-info.md heading="Quick Tip" content=quick_tip %}
</div>