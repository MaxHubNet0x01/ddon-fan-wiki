<nav class="sidebar-content peer hidden z-50 overflow-y-auto fixed md:static top-0 left-0 md:block md:w-1/5 bg-white shadow-{{ page.main_color }} shadow-right h-full min-w-[250px] py-6 px-4 font-[sans-serif] overflow-auto">
  {% include sidebar/main-option.md icon="home-icon.svg" text="Home" id="home" href="/" %}

  {% include sidebar/group-option-start.md id="vocations" heading="Vocations" %}
    {% include sidebar/group-option-list-start.md %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Fighter" href="/vocations/fighter" id="fighter" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Hunter" href="/vocations/hunter" id="hunter" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Priest" href="/vocations/priest" id="priest" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Shield Sage" href="/vocations/shield_sage" id="shield-sage" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Sorcerer" href="/vocations/sorcerer" id="sorcerer" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Seeker" href="/vocations/seeker" id="seeker" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Element Archer" href="/vocations/element_archer" id="element-archer" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Warrior" href="/vocations/warrior" id="warrior" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Alchemist" href="/vocations/alchemist" id="alchemist" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Spirit Lancer" href="/vocations/spirit_lancer" id="spirit-lancer" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="High Scepter" href="/vocations/high_scepter" id="high-scepter" %}
    {% include sidebar/group-option-list-end.md %}
  {% include sidebar/group-option-end.md %}

  {% include sidebar/group-option-start.md id="mechanics" heading="Game Mechanics" %}
    {% include sidebar/group-option-list-start.md %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Area Masters" href="/game_mechanics/area_masters" id="area-masters" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Crafting" href="/game_mechanics/crafting" id="crafting" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Crests" href="/game_mechanics/crests" id="crests" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Fast Travel" href="/game_mechanics/fast_travel" id="fast-travel" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Managing Pawns" href="/game_mechanics/managing_pawns" id="managing-pawns" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Managing Vocations" href="/game_mechanics/managing_vocations" id="managing-vocations" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Blood Orbs" href="/game_mechanics/blood_orbs" id="blood-orbs" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Blood Orb Tree" href="/game_mechanics/blood_orb_tree" id="blood-orb-tree" %}
    {% include sidebar/group-option-list-end.md %}
  {% include sidebar/group-option-end.md %}

  {% include sidebar/group-option-start.md id="guides" heading="Guides" %}
    {% include sidebar/group-option-list-start.md %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="XP Farming" href="#" %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Ghost n Goblins" href="#" %}
    {% include sidebar/group-option-list-end.md %}
  {% include sidebar/group-option-end.md %}

  {% include sidebar/group-option-start.md id="glossary" heading="Glossary" %}
    {% include sidebar/group-option-list-start.md %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Glossary" href="/glossary" id="glossary" %}
    {% include sidebar/group-option-list-end.md %}
  {% include sidebar/group-option-end.md %}

  {% include sidebar/group-option-start.md id="appendix" heading="Appendix" %}
    {% include sidebar/group-option-list-start.md %}
      {% include sidebar/group-option-list-item.md icon="corner-down-right-icon.svg" text="Appendix" href="#" %}
    {% include sidebar/group-option-list-end.md %}
  {% include sidebar/group-option-end.md %}
</nav>