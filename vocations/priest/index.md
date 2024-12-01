---
layout: default
title: Priest
id: priest
description:
main_color: green-600
---

<div class="margin-center-90">
  {% include page-heading.html heading="Priest (Support)" %}

  {% include card-with-image.html src="priest-portrait.png" heading="Overview" content="The Priest is a crucial
  support vocation in Dragons Dogma Online, specializing in healing, protection, and spiritual empowerment. Masters of
  divine magic, Priests provide essential defensive and restorative abilities that keep their party alive and thriving
  in the most challenging encounters." %}

  {% include card-section-start.html %}
  <h2 class="text-2xl font-semibold mb-4">Key Characteristics</h2>
  <ul class="list-disc list-inside space-y-2">
    <li>Exceptional healing and support capabilities</li>
    <li>Divine magic for protection and restoration</li>
    <li>Ability to remove status ailments</li>
    <li>Limited but effective offensive spiritual abilities</li>
    <li>Critical team survival role</li>
  </ul>
  {% include card-section-end.html %}

  {% include card-section-start.html %}
  <h2 class="text-2xl font-semibold mb-4">Core Combat Mechanics</h2>
  <div class="space-y-4">
    <div>
      <h3 class="font-bold mb-2">Healing Techniques</h3>
      <p>Priests utilize powerful healing spells that can restore health, provide temporary shields, and mend wounds
        both in and out of combat. They can heal individual targets or apply area-of-effect healing to support entire
        parties.</p>
    </div>
    <div>
      <h3 class="font-bold mb-2">Protective Magics</h3>
      <p>Beyond healing, Priests can cast protective enchantments, create magical barriers, and nullify negative
        status effects that threaten their allies.</p>
    </div>
  </div>
  {% include card-section-end.html %}

  {% include card-section-start.html %}
  <h2 class="text-2xl font-semibold mb-4">Recommended Play Style</h2>
  <ul class="list-disc list-inside space-y-2">
    <li>Prioritize party survival over personal damage output</li>
    <li>Maintain constant awareness of ally health</li>
    <li>Position safely while providing maximum support</li>
    <li>Anticipate and counter incoming damage</li>
    <li>Coordinate with other vocations to maximize party effectiveness</li>
  </ul>
  {% include card-section-end.html %}

  {% include page-heading.html heading="Custom Skills" %}
  <div class="overflow-x-auto">
    <table>
      <thead>
        <tr>
          <th>Skill Name</th>
          <th>Overview</th>
          <th></th>
          <th>Level change</th>
          <th>Level 6 Change</th>
          <th>Release time</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Attack Riser (LV.1)</td>
          <td>Increases the physical and magical attack damage of nearby allies by 20%. Additional ranks above 1 will grant a buff that allows the effect to remain on allies. * Field Shift buff duration is halved.</td>
          <td></td>
          <td>Increased buff duration (+5 seconds per rank; +2.5s during field change)</td>
          <td>Trail Expansion</td>
          <td></td>
          <td>At rank 6 and above, you can alternate between Field Shifting and two different Riser buffs. This can result in a Priest who can administer two buffs while still providing healing. Riser Attack pairs well with Saint Aura with Fighters and Seekers in the party. The buff also lasts for a while, meaning you don't have to keep Field Shift forever. How long the buff stays on an ally depends on whether they've field shifted or actually entered your dome.</td>
        </tr>
        <tr>
          <td>Defense Riser (LV.3)</td>
          <td>Reduces physical and magical damage taken by nearby allies by 20%. Additional ranks above 1 will grant a buff that allows the effect to remain on allies. * Field Shift buff duration is halved.</td>
          <td></td>
          <td>Increased buff duration (+5 seconds per rank; +2.5s during field change)</td>
          <td>Trail Expansion</td>
          <td></td>
          <td>Defense Riser pairs well with Aura of Healing during the monster's Enraged phase or with frail party members.</td>
        </tr>
        <tr>
          <td>Seraphim Flap (LV.6)</td>
          <td>Launches 3 holy bolts that repeatedly track and damage an enemy. *Successive casting cancels any active bolts.</td>
          <td></td>
          <td>Damage increase</td>
          <td></td>
          <td></td>
          <td>Successive posts will add the "Holy Drain" debuff. (The Holy Drain debuff will allow players to recover small chunks of their lost health when they attack the monster with the debuff)</td>
        </tr>
        <tr>
          <td>Guard Bit (LV.6)</td>
          <td>Create 3 bits to protect the caster, each bit negates one attack. * Energy regeneration is interrupted while the skill is active.</td>
          <td></td>
          <td>Increase in duration</td>
          <td>No. of bits 3 -> 5</td>
          <td></td>
          <td>Great for reviving party members. With upgraded protection, a priest can survive an all-out attack from an enemy and even revive an ally. Roar's attack on certain monsters can penetrate through a full set of Guard Bits (e.g. Chimera's Goat Roar) if their level is very low. Energy restoration abilities (like Energy Spot) still work.</td>
        </tr>
        <tr>
          <td>Healing Point (LV. 13)</td>
          <td>It places a field on the ground that quickly restores health when inserted. Reveals weaknesses of the enraged enemy. Also deals damage to Skeleton, Undead, and Spirit types.</td>
          <td></td>
          <td>Increase in duration</td>
          <td>Trail Expansion</td>
          <td></td>
          <td>Players regain lost health almost instantly when they enter the healing sphere. It also deals damage to the undead and reveals the strengths of boss monsters when enraged. Approach the boss when the healing point activates to reveal the weak point. Pretty useless for players, but can be decent for pawns.</td>
        </tr>
        <tr>
          <td>Cure Spot (LV. 13)</td>
          <td>He places a field on the ground that cures status ailments. Damages Skeleton, Undead, and Spirit types.</td>
          <td></td>
          <td>Increase in duration</td>
          <td>Trail Expansion</td>
          <td></td>
          <td>The cure of the abnormal state affects whoever enters. Cannot cure Stat Down, Resist Down, Petrification, Gold, Corruption, or Curse.</td>
        </tr>
        <tr>
          <td>Sacred Shine (LV.20)</td>
          <td>Shoot an explosive orb immediately after it is thrown into an area in front of the thrower.</td>
          <td></td>
          <td>Damage increase</td>
          <td>Trail Expansion</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Soul Explosion (LV.25)</td>
          <td>While active, stamina is constantly drained. Upon death, an explosion is triggered, dealing massive damage.</td>
          <td></td>
          <td>Decreased skill stamina consumption</td>
          <td>Increased damage, expanded range</td>
          <td></td>
          <td>While it does deal damage, the spell is extremely useless. It cannot be used alone without repeatedly wasting revival stones. It is useless in parties, as reviving the priest leaves the party members in a vulnerable state. During the times when he was killing enemies, the party members could have advanced more quickly with the priest's support.</td>
        </tr>
        <tr>
          <td>Solid Riser (LV.30)</td>
          <td>Grant Super Armor to nearby allies. Additional ranks above 1 will grant a bonus that allows the effect to remain on allies. * Field Shift buff duration is halved.</td>
          <td></td>
          <td>Increased buff duration (+5 seconds per rank; +2.5s during field change)</td>
          <td>Trail Expansion</td>
          <td></td>
          <td> Super armor prevents the target from being knocked down or suppressed by weaker attacks. Namely, Boss Screams, Wing Flaps and Walking Cyclops. The target will not be affected by the yellow flicker effect and can also remain on the boss during a red roar but still take damage from the scream. It does not prevent abnormal status. Ask players using HP Low if they want Solid Riser. They rely on images of invulnerability when repelled.</td>
        </tr>
        <tr>
          <td>Energy Spot (LV. 30)</td>
          <td>Places a field on the ground that quickly recovers resistance when inserted. Damages Skeleton, Undead, and Spirit types.</td>
          <td></td>
          <td>Increase in duration</td>
          <td>Trail Expansion</td>
          <td></td>
          <td>Energy Spot can be used to recover stamina after casting Guard Bit. Throwing Energy Points without sufficient stamina will cause all active auras and Guard Bit to be cancelled, but you will not experience Exhausting Animation. Ability to stable priest in groups. Allow party members to deploy their most powerful abilities and work with additions that require high stamina to take effect.</td>
        </tr>
        <tr>
          <td>Holy Glare (LV.35)</td>
          <td>Releases a sphere of holy energy, damaging enemies with waves of light.</td>
          <td></td>
          <td>Damage increase</td>
          <td></td>
          <td></td>
          <td>Long charging animation. After attacking, it creates a giant sphere of holy light in front of your character and deals massive damage to nearby enemies or foes, attacking 7 times, the final attack deals more damage. Great to use when the boss is down or after casting a piece of protection.</td>
        </tr>
        <tr>
          <td>Quick Charge</td>
          <td>Half the charge time of abilities that have a charge bar for those nearby. You enter the EM4 mission</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>This works for EA skills, Sorcerer skills, Warrior skills (but not always worth it for Warriors), and Full Bend Hunters. This skill is insane and can double the output of the rest of the play if used correctly. Cast Energy Spot early to gain a few more seconds of Quick Charge.</td>
        </tr>
        <tr>
          <td>Solace Riser</td>
          <td>Doubles the healing received by nearby allies. Additional ranks above 1 will grant a buff that allows the effect to remain on allies. * Field Shift buff duration is halved. You choose the White Dragon tree</td>
          <td></td>
          <td>Increased buff duration (+5 seconds per rank; +2.5s during field change)</td>
          <td>Trail Expansion</td>
          <td></td>
          <td>Situational skill, very dependent on team item levels.</td>
        </tr>
        <tr>
          <td>Blast Explosionブデショョ</td>
          <td>Creates 1 sphere that doubles the priest's basic attack; Lvl. 6, create 2 spheres. You choose the White Dragon tree</td>
          <td></td>
          <td>Increase duration</td>
          <td>Increase the number of spheres/towers from 1 to 2</td>
          <td></td>
          <td>Additional balls deal 50% damage, Stamina Recovery is interrupted if the skill is active</td>
        </tr>
      </tbody>
    </table>
  
    {% include page-heading.html heading="Passive Skills" %}
    <table>
      <thead>
        <tr>
          <th>Skill Name</th>
          <th>Overview</th>
          <th></th>
          <th>PA Cost</th>
          <th>Level change</th>
          <th>Notes</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Anti-Fire (LV.1)</td>
          <td>Take less damage from fire attacks.</td>
          <td></td>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Reduce Fire (LV.3)</td>
          <td>Reduced chance of 'catching fire'.</td>
          <td></td>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Physical Assistance Defense (LV.9)</td>
          <td>After targeting a downed ally, that ally takes reduced physical damage for a short time. Pedestrians do not have access to this ability.</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Spirit Overflow (Lv.13) 漲魂 Dragon Appraisal Jewelry (Priest)</td>
          <td>You have reduced aggro for the turn</td>
          <td></td>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Anti-Ice (LV.13)</td>
          <td>Take less damage from ice attacks.</td>
          <td></td>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Reduce Ice (LV.13)</td>
          <td>Reduced freezing.</td>
          <td></td>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Magical Assistance Defense (LV.20)</td>
          <td>When reviving a downed ally, that ally will receive a bonus to Magic Defense. Pedestrians do not have access to this ability.</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Anti-Thunder (LV.20)</td>
          <td>Take less damage from thunder attacks.</td>
          <td></td>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Reduces Thunder (LV.20)</td>
          <td>Reduced chance of getting shocked</td>
          <td></td>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Skeleton Proficiency (LV.25)</td>
          <td>Damage dealt to skeletons has increased</td>
          <td></td>
          <td>8</td>
          <td></td>
          <td>Includes all types of skeletons except Alchemized.</td>
          <td></td>
        </tr>
        <tr>
          <td>Undead Proficiency (LV.25)</td>
          <td>Damage dealt to undead increased</td>
          <td></td>
          <td>8</td>
          <td></td>
          <td>Includes Undead, Torturer, and Eliminator types</td>
          <td></td>
        </tr>
        <tr>
          <td>Skeleton Safeguard (LV.30)</td>
          <td>Damage caused by skeletons has been reduced</td>
          <td></td>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Undead Safeguard (LV.30)</td>
          <td>Damage taken from undead reduced</td>
          <td></td>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Patience (LV.35)</td>
          <td>Low stamina drain when using Heal Aura and Saint Aura</td>
          <td></td>
          <td>12</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>Reduces damage taken after running out of energy</td>
          <td></td>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Anti-Holy (LV.35)</td>
          <td>Reduce minor attack damage</td>
          <td></td>
          <td>5</td>
          <td>I</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Anti-Darkness (LV.35)</td>
          <td>Reduce damage from shadow attacks</td>
          <td></td>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Physical Assistance Attack (LV.40)</td>
          <td>Reduces damage taken after running out of energy</td>
          <td></td>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Magical Assistance Attack (LV.40)</td>
          <td>After targeting a downed ally, that ally's magic attack increases for a short period of time.</td>
          <td></td>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Reduce Holy (LV.??)</td>
          <td>Reduced chance of receiving 'Holy Drain'</td>
          <td></td>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Reduce Dark (LV.??)</td>
          <td>Reduce the chance of getting 'Blind'</td>
          <td></td>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Compassion (Lv.45) 慈覧 Dragon Appraisal Jewelry (Priest)</td>
          <td>Less attention from enemies when using Heal Aura</td>
          <td></td>
          <td>12</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Divine Protection (LV. 45) Flower Appraisal Jewelry</td>
          <td>All damage taken is reduced</td>
          <td></td>
          <td>15</td>
          <td>Increase damage reduction</td>
          <td> Lv.1: Damage Reduction + 5% Lv.2: Damage Reduction + 7% Lv.3: Damage Reduction + 9% Lv.4: Damage Reduction + 11% Level 5: Damage Reduction + 13% Level 6: Damage Reduction + 15%</td>
          <td></td>
        </tr>
        <tr>
          <td>Excitement (Lv. 45) 激励 Dragon Appraisal Jewelry (Priest)</td>
          <td>After choosing a downed ally, that ally receives the maximum HP boost for a short period of time. Pedestrians do not have access to this responsibility.</td>
          <td></td>
          <td>9</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Enlong Expose (LV. 45) 長露 Dragon Appraisal Jewelry (Priest)</td>
          <td>Prolonged exposure to the boss's weak spot when the boss is furious</td>
          <td></td>
          <td>10</td>
          <td> Extends the duration of time</td>
          <td>Lv.1: Time Duration +50% Lv.2: Time Duration +70% Lv.3: Time Duration +90% Lv.4: Time Duration +110% Lv.5: Time Duration +130% Lv.6: Time Duration +150% Priest's Healing Aura: 30s (half for field change) Lv.6: 75s Elemental Archer's Strange Stance: 15s Lv.6: 37.5s Elemental Archer's Healing Flash: 30s Lv.6: 75s Spirit Thief's Assist: 18s (excluding its own orb duration) Lv.6: 45s</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  
    {% include page-heading.html heading="Blood Orb Tree Passive Skills" %}
    <table>
      <thead>
        <tr>
          <th>Skill Name</th>
          <th>Overview</th>
          <th></th>
          <th>AP Cost / BO Cost</th>
          <th>Level change</th>
          <th>Notes</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Heal Aura: Singer</td>
          <td>Increased healing power</td>
          <td></td>
          <td>Wed, 01 Mar 1600 13:56:02 GMT+0900 (JST)</td>
          <td>Healing Power Increases further, Lv.5~6 reduces casting time</td>
          <td>Lv.5~6 release time reduced from 1.6s to 1.2s</td>
          <td></td>
        </tr>
        <tr>
          <td>Blast Bits: Slayer</td>
          <td>Increase the power of Blast Bits</td>
          <td></td>
          <td>Wed, 01 Mar 1600 13:56:02 GMT+0900 (JST)</td>
          <td>Power increase plus, Lv.5~6 Increases blow strength</td>
          <td>Lv.1: Damage + 5% Lv.2: Damage + 9% Lv.3: Damage + 13% Lv.4: Damage + 17% Lv.5: Damage + 21% Lv.6: Damage + 25%</td>
          <td></td>
        </tr>
        <tr>
          <td>Holy Aura: Slayer</td>
          <td>Increase the power of Santa Aura</td>
          <td></td>
          <td>Saturday Tuesday 01 1800 13:56:02 GMT+0900 (JST)</td>
          <td>Power increases further, Lv.5~6 increases breath power</td>
          <td>Lv.4: Damage + 10% Lv.5: Damage + 30% Lv.6: Damage + 35% Lv.5: Damage + 10% Lv.2: Damage + 15% Lv.3:</td>
          <td></td>
        </tr>
        <tr>
          <td>Conscience</td>
          <td>After picking up a downed ally, that ally gains increased magic defense for a short period of time.</td>
          <td></td>
          <td>Tuesday, 01 April 1800 13:56:02 GMT+0900 (JST)</td>
          <td>Increase duration time (tbc)</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Shockwave: Slayer</td>
          <td>Increases the shockwave damage of Field Shift.</td>
          <td></td>
          <td>Tuesday, 01 April 1800 13:56:02 GMT+0900 (JST)</td>
          <td>Further increases damage, Lv.5 ~ 6 Increases breath power</td>
          <td>Lv.1: Damage + 5% Lv.2: Damage + 9% Lv.3: Damage + 13% Lv.4: Damage + 17% Lv.5: Damage + 21% Lv.6: Damage + 25%</td>
          <td></td>
        </tr>
        <tr>
          <td>Stagnation 滅吸</td>
          <td>Recover HP from dead enemies??? (To stab the enemy)</td>
          <td></td>
          <td>Monday, 01 September 1800 13:56:02 GMT+0900 (JST)</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Heal Aura: Endurer 癒気耐</td>
          <td>Increases the recovery amount of Healing Aura / Greater Healing Aura / Healing Aura of Healing.</td>
          <td></td>
          <td>Mon Tue 01 2500 14:00:00 GMT+0900 (JST)</td>
          <td>Increases the amount of recovery even further. Lv.5~6: Increases resistance while aura is deployed.</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Blast Bits: Crusher 破球砕</td>
          <td>Increase the power of Blast Bits</td>
          <td></td>
          <td>Saturday Tuesday 01 2600 14:00:00 GMT+0900 (JST)</td>
          <td>Power increase even more, Lv.5~6???</td>
          <td>Lv.1: Damage +% Lv.2: Damage +% Lv.3: Damage +% Lv.4: Damage +% Lv.5: Damage +% Lv.6: Damage +%</td>
          <td></td>
        </tr>
        <tr>
          <td>Holy Aura: Savage</td>
          <td>Increase the power of the Holy Aura</td>
          <td></td>
          <td>3//2600</td>
          <td>Power increases further, Lv.5~6 Increases the chance of inflicting abnormal status (to be confirmed)</td>
          <td>Lv.1: Damage +% Lv.2: Damage +% Lv.3: Damage +% Lv.4: Damage +% Lv.5: Damage +% Lv.6: Damage +%</td>
          <td></td>
        </tr>
        <tr>
          <td>Magickal Rush</td>
          <td>Increase magic</td>
          <td></td>
          <td>Sunday, 01 June 3000 13:00:00 GMT+0900 (JST)</td>
          <td>The magic increases even more</td>
          <td>Level 1: Magic +3 Lv.2: Magic +4 Lv.3: Magic +5 Lv.4: Magic +6 Lv.5: Magic +8 Lv.6: Magic +10</td>
          <td></td>
        </tr>
        <tr>
          <td>Shockwave: Crusher</td>
          <td>Increases the shockwave damage of Field Shift.</td>
          <td></td>
          <td></td>
          <td>Further increases damage, Lv.5 ~ 6 Increases breath power</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Hard Spirit</td>
          <td>Increases Physical Defense and Magic Defense while healing Holy Aura or Active Holy Aura</td>
          <td></td>
          <td></td>
          <td>Further increases defenses</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  
    {% include page-heading.html heading="Core Skills" %}
    <table>
      <thead>
        <tr>
          <th>Skill Name</th>
          <th>Overview</th>
          <th></th>
          <th>Notes and usage</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Greater Heal Aura (LV.15)</td>
          <td>Slightly increases the healing area and doubles the spherical area when the field is not moved</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Greater Holy Aura (LV.15)</td>
          <td>Slightly increases damage and doubles the spherical area when the field is not moved</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>