---
layout: default
title: Fighter
description:
main_color: red-600
---

<div class="margin-center-90">
  {% include page-heading.html heading="Fighter (Attacker)" %}

  <div class="container py-8">
    <section class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 class="text-2xl font-semibold mb-4">Overview</h2>
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 flex items-center justify-center">
          {% include image.html src="fighter-portrait.png" w="50%" h="auto" class="border-none shadow-none" %}
        </div>
        <div class="w-full md:w-1/2 flex items-center justify-center">
          <p class="mb-4">The Fighter is a fundamental close-combat vocation in Dragons Dogma Online, renowned for its
            robust defensive capabilities and direct offensive approach. Masters of sword and shield, Fighters excel at
            protecting their allies while dealing consistent melee damage.</p>
        </div>
      </div>
    </section>

    <section class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 class="text-2xl font-semibold mb-4">Key Characteristics</h2>
      <ul class="list-disc list-inside space-y-2">
        <li>High physical defense and damage mitigation</li>
        <li>Specializes in sword and shield combat techniques</li>
        <li>Excellent at tanking and protecting party members</li>
        <li>Strong crowd control and defensive skills</li>
        <li>Moderate to high sustained melee damage output</li>
      </ul>
    </section>

    <section class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 class="text-2xl font-semibold mb-4">Core Combat Mechanics</h2>
      <div class="space-y-4">
        <div>
          <h3 class="font-bold text-gray-700 mb-2">Shield Techniques</h3>
          <p>Fighters leverage their shields for blocking, parrying, and creating openings in enemy defenses. Their
            shield skills provide both defensive protection and offensive opportunities.</p>
        </div>
        <div>
          <h3 class="font-bold text-gray-700 mb-2">Sword Skills</h3>
          <p>Utilizing a variety of sword techniques, Fighters can deliver powerful strikes, perform combo attacks, and
            apply pressure to enemies in close combat.</p>
        </div>
      </div>
    </section>

    <section class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-semibold mb-4">Recommended Play Style</h2>
      <ul class="list-disc list-inside space-y-2">
        <li>Position at the front line of combat</li>
        <li>Protect ranged and support allies</li>
        <li>Manage enemy aggro and crowd control</li>
        <li>Create openings for party members to deal damage</li>
        <li>Adapt defensive stance based on enemy attack patterns</li>
      </ul>
    </section>
  </div>

  {% include page-heading.html heading="Custom Skills" %}
  <div class="overflow-x-auto">
    <table>
      <thead>
        <tr>
          <th title="Field #1">Skill Name</th>
          <th title="Field #2">Overview</th>
          <th title="Field #3">Level change</th>
          <th title="Field #4">Level 6 Change</th>
          <th title="Field #5">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Blink Strike (Lv.1) 一閃突き</td>
          <td>Track and stab the enemy. Damage increases the further you run.</td>
          <td>Increases damage</td>
          <td>Max throw distance increased = more damage potential at longer ranges. Great for an early attack if spaced
            correctly.</td>
          <td>Max throw distance increased = more damage potential at longer ranges. Great for an early attack if spaced
            correctly.</td>
        </tr>
        <tr>
          <td>Tusk Toss (Lv.3) Special Skill</td>
          <td>Move and strike forward, then fall back quickly.</td>
          <td>Increases damage</td>
          <td>Increases attack speed. Increases hit count.</td>
          <td>A very fast attack that easily launches small enemies into the air. Both EX versions of this skill are
            useful. (P) is a high damage skill, while (T) is a high hitting skill against war-ready mobs.</td>
        </tr>
        <tr>
          <td>Cymbal Attack (Lv.6) シールドバッシュ</td>
          <td>Hit the enemy with your shield to deal impact (slam) damage. Causes them to swing at a higher rate than
            basic sword attacks. Can be used continuously up to three times without additional stamina drain.</td>
          <td>Increases damage</td>
          <td>Additional hits (3 to 5) Increased attack speed Combos 3-5, altered animation that sweeps horizontally with
            more AoE Combos 4-5, greater knockback.</td>
          <td> </td>
        </tr>
        <tr>
          <td>Skyward Lash (Lv.6) 天蓋斬り</td>
          <td>Glide into the sky taking down aerial enemies, performing two side-to-side slashes with each “use”. Can be
            used continuously up to three times without additional stamina drain.</td>
          <td> </td>
          <td>Increased activations (3 to 5) Total hits (6 to 10) Increased attack speed</td>
          <td>Level 6: Slightly angled downward, allows damage to large and grounded enemies. Outperforms other hunting
            skills due to speed and damage per hit. Its high number of hits easily triggers status effects.</td>
        </tr>
        <tr>
          <td>Hindsight Slash (Lv.13) 逸らし斬り</td>
          <td>Jump back to avoid attacks, then jump back to attack. If timed to perfectly avoid an attack, the skill
            becomes a counterattack.</td>
          <td>Increases damage</td>
          <td> </td>
          <td>Level 6: Counterattack deals more damage, is easier to execute, hits again, and plays a “Parry” sound
            effect. Has i-frames throughout the dodge movement and most of the attack movement. Initial Dodge Back: Has
            counter activation frames until the character stops to strike. Counterattack: (Indicated by bold sound) A
            3-hit bar; the second hits knock back most enemies and deal massive damage. Plays a rarely used voice clip
            upon successful counterattack.</td>
        </tr>
        <tr>
          <td>Downthrust (Lv.13) 直下突き</td>
          <td>Jump forward and stab</td>
          <td>Increases damage</td>
          <td>Skip movement changes Increased number of hits</td>
          <td> </td>
        </tr>
        <tr>
          <td>Sheltered Spike (Lv.20) センチュリオンスパイク</td>
          <td>Stab the enemy while blocking with your shield. Can be used continuously up to five times without additional
            stamina drain.</td>
          <td>Increases damage</td>
          <td>Number of attacks Increased attack speed</td>
          <td>Be careful when using it at low stamina, as your stamina does not regenerate during use and enemies hitting
            your shield will still drain your stamina. As of version 3.0, it builds debuffs much faster than other skills.
          </td>
        </tr>
        <tr>
          <td>Compass Slash (Lv.25) 円月斬り</td>
          <td>He slashes an arc back and forth, hitting all enemies twice within a 180 degree radius in front of him, with
            the second slash having a greater hitstun/knockback and a slightly longer range.</td>
          <td>Increases damage</td>
          <td>Animation changes Increased number of hits Staggered boost/knockdown</td>
          <td>Lv6: Becomes DD Dragon's Mouth. * It's not actually Dragon's Maw, but it carries one of its
            animations. Updates to resemble the Full Moon bar more than anything.</td>
        </tr>
        <tr>
          <td>Moving Castle (Lv.30) チャリオットムーブ</td>
          <td>Fast forward or backward while locking on with your shield</td>
          <td>Reduces energy consumption by blocking attacks</td>
          <td>Able to dash left/right Increased swing speed</td>
          <td>Reduced stamina consumption when blocking attacks</td>
        </tr>
        <tr>
          <td>Intimate Strike (Lv.30) 弐段突き</td>
          <td>Thrust your sword towards the enemy in a two stage attack, then pull it back, enemies will be dragged
            towards you if they are weak/sufficient enough.</td>
          <td>Increases damage</td>
          <td>Increased number of hits (from 2 to 6) Very fast proc status effects.</td>
          <td>The first 2 hits beat the prey's bid</td>
        </tr>
        <tr>
          <td>Flowing Sword Flash (Lv.35) 流剣閃</td>
          <td>Keeps the shield waiting, dodging and countering enemy attacks while advancing or retreating. 'Just
            Guard' will greatly increase damage.</td>
          <td>Increases damage</td>
          <td>Increase range and meter duration</td>
          <td>It is still possible to get hit at the end of the animation, even when it appears the shield is raised.</td>
        </tr>
        <tr>
          <td> </td>
          <td>A high-powered sword dance that covers a wide area. If the first strike is successful, it will become a
            full-fledged combination attack.</td>
          <td>Increases damage</td>
          <td>increased damage, extended attacks</td>
          <td> </td>
        </tr>
        <tr>
          <td>Pierce Slash</td>
          <td> </td>
          <td>Increases damage</td>
          <td>The number of hits increased with each button pressed.</td>
          <td> </td>
        </tr>
        <tr>
          <td>Flowing Shield Spiral 流盾翔</td>
          <td> </td>
          <td> </td>
          <td>The number of hits increased with each button pressed.</td>
          <td> </td>
        </tr>
      </tbody>
    </table>

    {% include page-heading.html heading="Passive Skills" %}
    <table class="table table-bordered table-hover table-condensed">
      <thead>
        <tr>
          <th title="Field #1">Skill Name</th>
          <th title="Field #2">Overview</th>
          <th title="Field #3">PA Cost</th>
          <th title="Field #4">Level change</th>
          <th title="Field #5">Grids</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Counter (Lv.3) 受倒 Dragon Appraisal Jewelry (Fighter)</td>
          <td>increases the knockout power of perfect blocks</td>
          <td>4</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Fitness (Lv.3)</td>
          <td>Increases the amount of time you can grab an opponent</td>
          <td>3</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Counter Extension (Lv.9)</td>
          <td>Expands the range of perfect block counters.</td>
          <td></td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Agile Motion (Lv.13) 敏動 Dragon Appraisal Jewelry (Fighter)</td>
          <td>Reduce the time required to charge Shield Breaker</td>
          <td>5</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Exhilaration (Lv.13) Special</td>
          <td>While in “Death State”: Strength stat increased. *Death State = below 15% HP, screen with red border.</td>
          <td>8</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Egression (Lv.13) Special</td>
          <td>Break with enemies</td>
          <td>3</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Advantageous Feeling (Lv. 20) 受得 Dragon Appraisal Jewelry (Fighter)</td>
          <td>Recover Stamina in a Fair Guard of Success</td>
          <td>6</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Soft Proficiency (Lv.20)</td>
          <td>Increased damage to "soft" monsters</td>
          <td>7</td>
          <td> </td>
          <td>Includes all types of Slime, Mudmen and Worm.</td>
        </tr>
        <tr>
          <td>Demi-human Proficiency (Lv.25)</td>
          <td>Damage to demihumans increased</td>
          <td>9</td>
          <td> </td>
          <td>Includes Goblin types (except alchemized/infected) and Saurian types.</td>
        </tr>
        <tr>
          <td>Soft Safeguard (Lv. 30)</td>
          <td>Damage taken from "soft" monsters decreased</td>
          <td>4</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Demi-human Safeguard (Lv. 30)</td>
          <td>Damage received from demihumans decreased</td>
          <td>5</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Brave Effort (Lv.33) 壮腕</td>
          <td>Increased strength if resistance is above a certain value * Resistance must be above 85% to take effect.
          </td>
          <td>10</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Dire Gouge (Lv. 33) 狂刺 Dragon Appraisal Jewelry (Fighter)</td>
          <td>Thrust Gouge's attack speed has been increased, allowing you to land all resistance hits much more
            easily.</td>
          <td>9</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Heavy Shield (Lv.35)</td>
          <td>Shield attacks have a higher chance of stunning the enemy</td>
          <td>4</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Willpower (Lv.35)</td>
          <td>Damage taken while being captured by an enemy is reduced</td>
          <td>7</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Nullifying Defense (Lv.35)</td>
          <td>The invulnerability window after performing a Just Guard has been increased</td>
          <td>8</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Combat Momentum (Lv.40)</td>
          <td>Increased strength if health is above a certain value *Health must be above 85% to take effect</td>
          <td>10</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Steadfast Stand (Lv.40)</td>
          <td>Defensive and somersault resistance increases during the execution of the trampoline action</td>
          <td>4</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Collapse (Lv.40) 受崩 Dragon Appraisal Jewelry (Fighter)</td>
          <td>The impact force of shield-based attacks has been increased (need confirmation?)</td>
          <td>3</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Toppling Shield (Lv.40) 倒盾</td>
          <td>Increases the stun power of your shield attacks</td>
          <td>8</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Fortitude (Lv.40)</td>
          <td>Less likely to receive the 'Physical Attack'</td>
          <td>5</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Strong Shield (Lv.45)</td>
          <td>Shield-based attack damage has been increased</td>
          <td>10</td>
          <td> </td>
          <td>Str +20 at level 6 Affects perfect block, plate attack. Affects the first hit of "Flow" counters.
          </td>
        </tr>
        <tr>
          <td>Onslaught (Lv.45) 猛攻 Star Appraisal Jewelry</td>
          <td>Increases strength</td>
          <td>12</td>
          <td> </td>
          <td>Str +18 at level 6 (rank 3)</td>
        </tr>
        <tr>
          <td>Overpower (Lv.45) More</td>
          <td>Increases the duration of holding enemies</td>
          <td>4</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Toughness (Lv.45) 強靭 Star Appraisal Jewelry</td>
          <td>Reduces damage taken from stunning attacks</td>
          <td>8</td>
          <td> </td>
          <td> </td>
        </tr>
      </tbody>
    </table>

    {% include page-heading.html heading="Blood Orb Tree Passive Skills" %}
    <table class="table table-bordered table-hover table-condensed">
      <thead>
        <tr>
          <th title="Field #1">Skill Name</th>
          <th title="Field #2">Overview</th>
          <th title="Field #3">AP Cost / BO Cost</th>
          <th title="Field #4">Level change</th>
          <th title="Field #5">Grids</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Onslaught: Slayer 連撃 On</td>
          <td>Increases Onslaught damage</td>
          <td>3</td>
          <td> </td>
          <td>by Tsuru</td>
        </tr>
        <tr>
          <td>Demolishing Strike: Slayer 斬崩 Dem</td>
          <td>Increases Guard Break / Strong Guard Break damage</td>
          <td>3</td>
          <td> </td>
          <td>by Tsuru</td>
        </tr>
        <tr>
          <td>Gouge: Exterminator 抉突絶</td>
          <td>Increases Gouge damage</td>
          <td>4</td>
          <td> </td>
          <td>by Tsuru</td>
        </tr>
        <tr>
          <td>Crushing Blow</td>
          <td>Temporarily increases physical attack after breaking enemy guard</td>
          <td>4</td>
          <td> </td>
          <td>by Tsuru</td>
        </tr>
        <tr>
          <td>Dire Onslaught: Slayer 強連 Dire</td>
          <td>Increases the damage of Dire Onslaught</td>
          <td>4</td>
          <td> </td>
          <td>by Tsuru</td>
        </tr>
        <tr>
          <td>Firm Shield</td>
          <td>Increases the shield's protective power</td>
          <td>3</td>
          <td> </td>
          <td>by Tsuru Corrected by KomradeSpectre</td>
        </tr>
        <tr>
          <td>Onslaught: Crusher 連 撃 On</td>
          <td>Increases Onslaught damage</td>
          <td></td>
          <td>Damage increases further, Lv.5~6 increases attack force strength and scaling power</td>
          <td> </td>
        </tr>
        <tr>
          <td>Demolishing Strike: Exterminator 斬崩 Dem</td>
          <td>Temporarily increases physical attack after breaking enemy guard</td>
          <td></td>
          <td>Damage increases further, Lv.5~6 increases stun power</td>
          <td> </td>
        </tr>
        <tr>
          <td>Gouge: Crusher 抉突 G</td>
          <td>Increases Gouge damage</td>
          <td></td>
          <td>Damage increases further, Lv.5~6 increases attack force strength and scaling power</td>
          <td> </td>
        </tr>
        <tr>
          <td>Hardening</td>
          <td>Reduces damage taken when charging an attack.</td>
          <td></td>
          <td>The damages described below</td>
          <td> </td>
        </tr>
        <tr>
          <td>Dire Onslaught: Crusher 強連 Dire</td>
          <td>Increases the damage of Dire Onslaught</td>
          <td></td>
          <td>Damage increases further, Lv.5~6 increases attack force strength and scaling power</td>
          <td> </td>
        </tr>
        <tr>
          <td>Pleasant Thrust</td>
          <td>Reduces Gouge's power consumption</td>
          <td></td>
          <td>Reduce energy consumption even further</td>
          <td> </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>