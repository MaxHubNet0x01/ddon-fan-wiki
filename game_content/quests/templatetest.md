---
layout: default
title: __QUEST_NAME__
id: __QUEST_PAGE_ID__
qid: __QUEST_ID___
description: __QUEST_DESCRIPTION__
main_color: amber-600
---

<div class="margin-center-90 quest loadable loadable-loading" qid="20005010">
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
      <ul class="list-disc mx-5 flex gap-3 flex-col">
        <li>
          <div class="flex gap-3">
            Knight's Mantle x 1
            <span class="rounded-full bg-purple-100 px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700 dark:bg-purple-700 dark:text-purple-100">
              Fixed
            </span>
          </div>
        </li>
        <li>
          <div class="flex gap-3">
            Bronze Sabatons
            <span class="rounded-full bg-none px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700 border-purple-700 border-solid border">
              Optional
            </span>
          </div>
        </li>
        <li>RE1</li>
      </ul>
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