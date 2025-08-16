---
layout: default
title: Dragon's Dogma Online Quests
id: quests
description: Click for details
main_color: amber-600
---

<div class="margin-center-90 quest loadable loadable-loading">
  {% include page-heading.md heading="Quest:" extra_class="loadable-skip_loading qname" %}

  <div class="loadable-content flex flex-col gap-5">
    <div class="qbadges flex gap-3">
      __QUEST_BADGES__
    </div>
    
    <div class="p-5 border-l-2 border-solid border-amber-100 qdesc">
      __QUEST_DESCRIPTION__
    </div>

    {% include page-heading.md heading="Requirements to Accept Quest" %}
    <div class="px-5 qreq">
      __QUEST_REQUIREMENTS__
    </div>

    {% include page-heading.md heading="Unlocks" %}
    <div class="px-5 qunlocks">
      __QUEST_UNLOCKS__
    </div>

    {% include page-heading.md heading="Rewards (from all variations of this Quest)" %}
    <div class="px-5 qrewards">
      __QUEST_REWARDS__
    </div>

    {% include page-heading.md heading="How to complete Quest" %}
    <div class="px-5 qsteps">
      __QUEST_STEPS__
    </div>

    {% include page-heading.md heading="References" %}
    <div class="px-5 qrefs">
      __QUEST_REFERENCES__
    </div>
  </div>

  {% include loadable-loader.md %}
</div>

{% include page-script.md src="/assets/js/load-quest.js" %}