---
layout: default
title: Fighter
id: fighter
description:
main_color: red-600
---

<div class="margin-center-90">
  {% include page-heading.md heading="Fighter (Attacker)" %}

  {% capture fighter_overview %}
    The Fighter is a fundamental close-combat vocation in Dragons Dogma Online, renowned for its
          robust defensive capabilities and direct offensive approach. Masters of sword and shield, Fighters excel at
          protecting their allies while dealing consistent melee damage.
  {% endcapture %}

  {% include card-with-image.md src="fighter-portrait.png" heading="Overview" content=fighter_overview %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Key Characteristics" %}
    <ul class="list-disc list-inside space-y-2">
      <li>High physical defense and damage mitigation</li>
      <li>Specializes in sword and shield combat techniques</li>
      <li>Excellent at tanking and protecting party members</li>
      <li>Strong crowd control and defensive skills</li>
      <li>Moderate to high sustained melee damage output</li>
    </ul>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Core Combat Mechanics" %}
    <div class="space-y-4">
      <div>
        {% include card-section-sub-header.md heading="Shield Techniques" %}
        <p>Fighters leverage their shields for blocking, parrying, and creating openings in enemy defenses. Their
          shield skills provide both defensive protection and offensive opportunities.</p>
      </div>
      <div>
        {% include card-section-sub-header.md heading="Sword Skills" %}
        <p>Utilizing a variety of sword techniques, Fighters can deliver powerful strikes, perform combo attacks, and
          apply pressure to enemies in close combat.</p>
      </div>
    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Recommended Play Style" %}
    <ul class="list-disc list-inside space-y-2">
      <li>Position at the front line of combat</li>
      <li>Protect ranged and support allies</li>
      <li>Manage enemy aggro and crowd control</li>
      <li>Create openings for party members to deal damage</li>
      <li>Adapt defensive stance based on enemy attack patterns</li>
    </ul>
  {% include card-section-end.md %}


  {% include page-heading.md heading="Custom Skills" %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Blink Strike (Lv.1) 一閃突き" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Track and stab the enemy. Damage increases the further you run.</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level change" %}
        <p>Increases damage</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level 6 Change" %}
        <p>Max throw distance increased = more damage potential at longer ranges. Great for an early attack if spaced
            correctly.</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Tusk Toss (Lv.3) Special Skill" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Move and strike forward, then fall back quickly.</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level change" %}
        <p>Increases damage</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level 6 Change" %}
        <p>Increases attack speed. Increases hit count.</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Cymbal Attack (Lv.6) シールドバッシュ" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Hit the enemy with your shield to deal impact (slam) damage. Causes them to swing at a higher rate than
            basic sword attacks. Can be used continuously up to three times without additional stamina drain.</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level change" %}
        <p>Increases damage</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level 6 Change" %}
        <p>Additional hits (3 to 5) Increased attack speed Combos 3-5, altered animation that sweeps horizontally with
            more AoE Combos 4-5, greater knockback.</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Skyward Lash (Lv.6) 天蓋斬り" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Glide into the sky taking down aerial enemies, performing two side-to-side slashes with each “use”. Can be
            used continuously up to three times without additional stamina drain.</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level change" %}
        <p> </p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level 6 Change" %}
        <p>Increased activations (3 to 5) Total hits (6 to 10) Increased attack speed</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Hindsight Slash (Lv.13) 逸らし斬り" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Jump back to avoid attacks, then jump back to attack. If timed to perfectly avoid an attack, the skill
            becomes a counterattack.</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level change" %}
        <p>Increases damage</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level 6 Change" %}
        <p> </p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Downthrust (Lv.13) 直下突き" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Jump forward and stab</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level change" %}
        <p>Increases damage</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level 6 Change" %}
        <p>Skip movement changes Increased number of hits</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Sheltered Spike (Lv.20) センチュリオンスパイク" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Stab the enemy while blocking with your shield. Can be used continuously up to five times without additional
            stamina drain.</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level change" %}
        <p>Increases damage</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level 6 Change" %}
        <p>Number of attacks Increased attack speed</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Compass Slash (Lv.25) 円月斬り" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>He slashes an arc back and forth, hitting all enemies twice within a 180 degree radius in front of him, with
            the second slash having a greater hitstun/knockback and a slightly longer range.</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level change" %}
        <p>Increases damage</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level 6 Change" %}
        <p>Animation changes Increased number of hits Staggered boost/knockdown</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Moving Castle (Lv.30) チャリオットムーブ" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Fast forward or backward while locking on with your shield</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level change" %}
        <p>Reduces energy consumption by blocking attacks</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level 6 Change" %}
        <p>Able to dash left/right Increased swing speed</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Intimate Strike (Lv.30) 弐段突き" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Thrust your sword towards the enemy in a two stage attack, then pull it back, enemies will be dragged
            towards you if they are weak/sufficient enough.</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level change" %}
        <p>Increases damage</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level 6 Change" %}
        <p>Increased number of hits (from 2 to 6) Very fast proc status effects.</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Flowing Sword Flash (Lv.35) 流剣閃" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Keeps the shield waiting, dodging and countering enemy attacks while advancing or retreating. 'Just
            Guard' will greatly increase damage.</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level change" %}
        <p>Increases damage</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level 6 Change" %}
        <p>Increase range and meter duration</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading=" " %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>A high-powered sword dance that covers a wide area. If the first strike is successful, it will become a
            full-fledged combination attack.</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level change" %}
        <p>Increases damage</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level 6 Change" %}
        <p>increased damage, extended attacks</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Pierce Slash" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p> </p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level change" %}
        <p>Increases damage</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level 6 Change" %}
        <p>The number of hits increased with each button pressed.</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Flowing Shield Spiral 流盾翔" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p> </p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level change" %}
        <p> </p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="Level 6 Change" %}
        <p>The number of hits increased with each button pressed.</p>
      </div>

    </div>
  {% include card-section-end.md %}

  <!-- Passive Skills -->
  {% include page-heading.md heading="Passive Skills" %}
  {% include card-section-start.md %}
    {% include card-section-header.md heading="Counter (Lv.3) 受倒 Dragon Appraisal Jewelry (Fighter)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>increases the knockout power of perfect blocks</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>4</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Fitness (Lv.3)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Increases the amount of time you can grab an opponent</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>3</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Counter Extension (Lv.9)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Expands the range of perfect block counters.</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p></p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Agile Motion (Lv.13) 敏動 Dragon Appraisal Jewelry (Fighter)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Reduce the time required to charge Shield Breaker</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>5</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Exhilaration (Lv.13) Special" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>While in “Death State”: Strength stat increased. *Death State = below 15% HP, screen with red border.</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>8</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Egression (Lv.13) Special" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Break with enemies</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>3</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Advantageous Feeling (Lv. 20) 受得 Dragon Appraisal Jewelry (Fighter)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Recover Stamina in a Fair Guard of Success</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>6</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Soft Proficiency (Lv.20)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Increased damage to "soft" monsters</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>7</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Demi-human Proficiency (Lv.25)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Damage to demihumans increased</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>9</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Soft Safeguard (Lv. 30)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Damage taken from "soft" monsters decreased</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>4</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Demi-human Safeguard (Lv. 30)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Damage received from demihumans decreased</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>5</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Brave Effort (Lv.33) 壮腕" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Increased strength if resistance is above a certain value * Resistance must be above 85% to take effect.
          </p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>10</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Dire Gouge (Lv. 33) 狂刺 Dragon Appraisal Jewelry (Fighter)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Thrust Gouge's attack speed has been increased, allowing you to land all resistance hits much more
            easily.</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>9</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Heavy Shield (Lv.35)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Shield attacks have a higher chance of stunning the enemy</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>4</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Willpower (Lv.35)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Damage taken while being captured by an enemy is reduced</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>7</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Nullifying Defense (Lv.35)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>The invulnerability window after performing a Just Guard has been increased</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>8</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Combat Momentum (Lv.40)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Increased strength if health is above a certain value *Health must be above 85% to take effect</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>10</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Steadfast Stand (Lv.40)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Defensive and somersault resistance increases during the execution of the trampoline action</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>4</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Collapse (Lv.40) 受崩 Dragon Appraisal Jewelry (Fighter)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>The impact force of shield-based attacks has been increased (need confirmation?)</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>3</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Toppling Shield (Lv.40) 倒盾" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Increases the stun power of your shield attacks</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>8</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Fortitude (Lv.40)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Less likely to receive the 'Physical Attack'</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>5</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Strong Shield (Lv.45)" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Shield-based attack damage has been increased</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>10</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Onslaught (Lv.45) 猛攻 Star Appraisal Jewelry" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Increases strength</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>12</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Overpower (Lv.45) More" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Increases the duration of holding enemies</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>4</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Toughness (Lv.45) 強靭 Star Appraisal Jewelry" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Reduces damage taken from stunning attacks</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="PA Cost" %}
        <p>8</p>
      </div>

    </div>
  {% include card-section-end.md %}

  <!-- BO Tree Passive -->
  {% include page-heading.md heading="Blood Orb Tree Passive Skills" %}
  {% include card-section-start.md %}
    {% include card-section-header.md heading="Onslaught: Slayer 連撃 On" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Increases Onslaught damage</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="AP Cost / BO Cost" %}
        <p>3</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Demolishing Strike: Slayer 斬崩 Dem" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Increases Guard Break / Strong Guard Break damage</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="AP Cost / BO Cost" %}
        <p>3</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Gouge: Exterminator 抉突絶" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Increases Gouge damage</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="AP Cost / BO Cost" %}
        <p>4</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Crushing Blow" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Temporarily increases physical attack after breaking enemy guard</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="AP Cost / BO Cost" %}
        <p>4</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Dire Onslaught: Slayer 強連 Dire" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Increases the damage of Dire Onslaught</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="AP Cost / BO Cost" %}
        <p>4</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Firm Shield" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Increases the shield's protective power</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="AP Cost / BO Cost" %}
        <p>3</p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Onslaught: Crusher 連 撃 On" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Increases Onslaught damage</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="AP Cost / BO Cost" %}
        <p></p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Demolishing Strike: Exterminator 斬崩 Dem" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Temporarily increases physical attack after breaking enemy guard</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="AP Cost / BO Cost" %}
        <p></p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Gouge: Crusher 抉突 G" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Increases Gouge damage</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="AP Cost / BO Cost" %}
        <p></p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Hardening" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Reduces damage taken when charging an attack.</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="AP Cost / BO Cost" %}
        <p></p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Dire Onslaught: Crusher 強連 Dire" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Increases the damage of Dire Onslaught</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="AP Cost / BO Cost" %}
        <p></p>
      </div>

    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Pleasant Thrust" %}
    <div class="space-y-4">

      <div>
        {% include card-section-sub-header.md heading="Overview" %}
        <p>Reduces Gouge's power consumption</p>
      </div>

      <div>
        {% include card-section-sub-header.md heading="AP Cost / BO Cost" %}
        <p></p>
      </div>

    </div>
  {% include card-section-end.md %}
</div>