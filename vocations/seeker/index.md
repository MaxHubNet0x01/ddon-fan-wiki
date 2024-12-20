---
layout: default
title: Seeker
id: seeker
description:
main_color: red-600
---

<div class="margin-center-90">
  {% include page-heading.md heading="Seeker (Attacker)" %}

  {% include card-with-image.md src="seeker-portrait.png" heading="Overview" content="The Seeker is an agile
  melee-focused class in Dragon's Dogma Online, adept at exploiting enemy weak points through rapid combos and aerial
  combat. Utilizing daggers and a grappling hook, the Seeker excels in high-mobility, precision-focused gameplay." %}

  {% include card-section-start.md %}
    <h2 class="text-2xl font-semibold mb-4">Key Characteristics</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>Masters of mobility, with abilities to scale enemies and navigate terrain quickly.</li>
      <li>Specializes in precise, combo-driven melee attacks with high-speed execution.</li>
      <li>Uses a grappling hook for offensive maneuvers and battlefield control.</li>
      <li>Highly versatile, offering crowd control and single-target damage options.</li>
    </ul>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    <h2 class="text-2xl font-semibold mb-4">Core Combat Mechanics</h2>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>Cutting Wind:</strong> A rapid dash attack with chaining potential for continued assault.</li>
      <li><strong>Ensnare:</strong> Uses the grappling hook to pull foes into range, ideal for controlling weaker enemies.
      </li>
      <li><strong>Falcon Kick:</strong> A dive attack dealing impactful damage from above.</li>
      <li><strong>Powder Charge:</strong> Lays explosive traps for area denial and damaging groups of enemies.</li>
    </ul>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    <h2 class="text-2xl font-semibold mb-4">Recommended Play Style</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>Emphasize mobility to outmaneuver enemies and exploit openings.</li>
      <li>Focus on chaining combos for consistent damage and tactical advantage.</li>
      <li>Leverage grappling hook abilities to gain superior positioning in combat.</li>
      <li>Adapt to situations using a mix of crowd control and precision strikes.</li>
    </ul>
  {% include card-section-end.md %}


  {% include page-heading.md heading="Custom Skills" %}
  <div class="overflow-x-auto">
    <table>
      <thead>
        <tr>
          <th title="Field #1">Skill Name</th>
          <th title="Field #2">Overview</th>
          <th title="Field #3">Level Change</th>
          <th title="Field #4">Level 6 Change</th>
          <th title="Field #5">Details</th>
          <th title="Field #6">Monster Locations</th>
          <th title="Field #7">Misc.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cutting Wind (Lv. 1) かまいたち</td>
          <td>Dash forward and then slash; if the enemy is hit, the skill will chain into a second slash.</td>
          <td>Power Increase</td>
          <td>The movement distance is increased and the number of activations rises from one to three, allowing the skill
            to be used three times in a row without greater stamina consumption. This increases the additional bars from 1
            to 3, effectively 4 bars in total.</td>
          <td>Starts with an initial dash; if you collide with an enemy during the dash, you will slash them, if the first
            slash hits, a second strike will occur, returning through the enemy. If you do not collide with the enemy
            during the dash, you will make the first slash at the end of the dash, extending the distance. If your hit
            connects in that way, you will still make the subsequent strike. Strikes can also be directed at different
            enemies nearby, allowing you to 'aim' at where it goes. (Be careful, the skill does NOT pass through
            an enemy that is resistant to hitstun or is in the middle of an attack animation. Additionally, additional
            slashes will not occur if the initial slash is blocked.)</td>
          <td>Lv 7: 50 Forest Goblins (lv10+) Level 8: 30 Skeleton Mages (level 10+), 30 Skeleton Knights (level 10+) Lv
            9: 5 Ghastly Monkey (lv 15+) Lv 10: 10 Cyclops (lv15+)</td>
          <td> </td>
        </tr>
        <tr>
          <td>Toss and Trigger (Lv. 3) アギト裂き</td>
          <td>Slash the dagger with a hook and toss out some powder that ignites.</td>
          <td>Power Increase</td>
          <td>Number of strikes increased</td>
          <td>Use your dagger to perform a low-powered uppercut to lift the enemy; whether the enemy is lifted or not, if
            the uppercut hits, you can follow up with a powder throw which you then ignite to deal fire damage. The powder
            and ignition part is aimed diagonally upward, so it will miss smaller enemies.</td>
          <td>Level 7: 20 Brute Apes (level 10+) Lv 8: 40 Alchemized Goblin (lv 10+) Lv 9: 30 Giant Saurian (Lv 15+)</td>
          <td> </td>
        </tr>
        <tr>
          <td>Back Kick (Lv. 6) 返し蹴り</td>
          <td>Leap backward and then kick forward with immunity while resting. If the enemy is hit during the retreat, the
            skill becomes a counter.</td>
          <td>Power Increase</td>
          <td>Movement changes and number of strikes increased (successful counter results in 3 strikes)</td>
          <td>Dodge takes a step back and then forward with a kick, having invincibility frames during the initial dodge
            and part of the kick. If an enemy attack passes by you during the backward dodge, the attack will become a
            counter, a sound will play to indicate a successful counter. The Counter will hit twice with greater damage
            and more knockback on the second kick. (Fighter players, be careful, this skill has much less invincibility
            frames due to the faster animation; this is both good and bad. Additionally, the kick does NOT propel you
            forward like the bars in Hindsight Slash, limiting the range and overall utility of the skill, this applies to
            both the regular and Counter version.)</td>
          <td>Level 7: 30 sturdy undead Lv 8: 30 Sludgeman (Lv 20+)</td>
          <td> </td>
        </tr>
        <tr>
          <td>Ensnare (Lv. 6) 引き寄せ</td>
          <td>Throw the rope at the opposite enemy to try to pull them. Works only on weak enemies or enemies with enough
            hits/stuns. (NOT RETURNED)</td>
          <td>Pulling faster</td>
          <td>Can pull multiple enemies at the same time (maximum of 3)</td>
          <td>Throw your Seeker Grapple/Rope at an enemy in front of you; it will attempt to pull the enemy towards you,
            leaving them in a down state. This skill is ineffective in most cases as it only works immediately on small
            enemies. Any enemy with resistance to stun will require you to reach the stun limit before you can pull them
            towards you. This skill DOES NOT DEAL DAMAGE.</td>
          <td>Lv 7: 40 Rock Saurians (lv 20+)</td>
          <td> </td>
        </tr>
        <tr>
          <td> Falcon Kick (Lv. 13) 隼落とし</td>
          <td>If on the ground, jump into the air, grab the ground, and dive with a downward kick. If in the air, grab the
            ground and dive with a downward kick. Has small AoE and hits for Impact Damage.</td>
          <td>Power increase</td>
          <td>Surrounding enemies are staggered</td>
          <td>This ability has different activations depending on how you use it. If used from the ground, you will jump a
            large distance into the air before grabbing the ground and descending. If you use it in the air, it will use
            your current position to pull you to the ground. The ability itself deals high single-hit impact damage
            (directly modified by your height from the ground), with a small AoE radius and very high hitstun (enough to
            knock down most small enemies instantly). Its use on bosses is limited due to the Seeker's playstyle, but
            it is an excellent ability to cover for your lack of ability to deal with swarms of smaller enemies early on.
            It is highly recommended to use this in conjunction with your basic grappling ability to retain stamina and
            gain more height for more damage.</td>
          <td>Level 7: 30 Harpies (level 20+) Level 8: Cyclops 8 (level 15+)</td>
          <td> </td>
        </tr>
        <tr>
          <td> Stepping Stone (Lv. 13) 蹴り跳び</td>
          <td>If on the ground, jump and kick forward; if in the air, stomp down. When skill connects, jump off enemy into
            the air. (DOES NOT DEAL WITH DAMAGE)</td>
          <td>Increased jumping strength</td>
          <td>You can break the enemy guard</td>
          <td> This skill behaves differently when used on the ground and in the air. While on the ground, you will leap
            forward, similar to the Hunter's basic leap attack, but instead of pushing yourself backwards, you will
            push yourself upwards towards the enemy you hit. If used in the air, you will perform a stomp motion; if you
            hit, you will push yourself back upwards. This skill DOES NOT DAMAGE</td>
          <td>Level 7: 30 Redcap Fighters (level 10+)</td>
          <td> </td>
        </tr>
        <tr>
          <td> Reset (Lv. 20)</td>
          <td>Cancels your current stance or attack. Useful for avoiding enemies in the middle of an attack.</td>
          <td>Reduces cooling time</td>
          <td>Can now be used to cancel stun and knockback animations after being hit by an enemy. (Express caution when
            used on swarms)</td>
          <td>Falcon Kick Height + Reset = High Jumps Can also cancel the 'revive teammate' animation. Be careful
            using it right after being knocked down. You may end up absorbing more hits when standing in front of a crowd
          </td>
          <td>Level 7: 10 Ghastly Monkeys (level 25+) Lv 8: 20 Blue Triton (lv 30+) 30 Forest Goblin (level 30+) Level 9:
            6 Lindworm (Level 30+) Lv 10: 10 Sphinx (Lv 35+)</td>
          <td> </td>
        </tr>
        <tr>
          <td>Powder Charge (Lv. 25) 爆炎線</td>
          <td>Place a line of gunpowder on the ground and explode from a distance.</td>
          <td> </td>
          <td>Increases the number of hits. Adds wind pressure to the explosion.</td>
          <td>Lv.6 P.Charge adds 2 extra explosions, making it 3 instead of 1. It also has a nice hit radius slightly
            above the explosion itself.</td>
          <td>Level 7: 8 Chimeras (Level 30+) Level 9: 10 Griffins (Level 35+)</td>
          <td> </td>
        </tr>
        <tr>
          <td>Whirlwind Blade (Lv. 30) 旋風刃</td>
          <td>After a short startup, jump forward while spinning the daggers at high speed. The spin will change slightly
            after the user lands on the ground. On flat ground, this hits about 11 times (at level 6).</td>
          <td>Power increase</td>
          <td>Additional hits and extended distance</td>
          <td>It actually outperforms Powder Charge at level 7 and above. This, plus the skill is not elemental blocked
            like P.Charge (fire), so it can further increase damage output. However, for some bosses ( like the monkey
            family), it is difficult to land all the hits when they are down.</td>
          <td>Level 7: 5 Golems (lv 30+) Lv.8: Kill 10 Sphynx (lv 40+), 10 Chimeras (lv 30+)</td>
          <td> </td>
        </tr>
        <tr>
          <td>Sliding Rope (Lv. 30) 足刈り網</td>
          <td>Throw your search rope at the enemy and glide through them.</td>
          <td>Power increase</td>
          <td>Extended distance and adds wind momentum to the slide, making it stronger</td>
          <td>Can pass through enemies after executing the skill, can also be attached to walls. deceptively stronger at
            level 6</td>
          <td>Lv 7: 15 Orc Captains (lv40+) Lv 8: 8 Armored Cyclops (lv 35+), 5 Colossi (lv 40+)</td>
          <td> </td>
        </tr>
        <tr>
          <td>Immolation (Lv.35) Backfire 火炎衣</td>
          <td>Turn your fokin body into fire, better description than that polished one</td>
          <td>Increased power Decreased health deterioration</td>
          <td>Extended duration</td>
          <td>Set your body on fire, change your weapon element to Fire, gradually reduce your HP, and damage any monster
            you touch. Best used with Self-feekback August. Fire attack damage can be improved with Fire Attack (Sorcerer)
            and Furious Grip (Seeker).</td>
          <td>Lv 7: 20 Banded Seekers (lv 46+), 50 Damned Goblins (lv 46+) Lv 8: 8 Ghost Empress (lv 46+), 20 Living Armor
            (46+)</td>
          <td>2 on the Path leading to Zandora Chapel, 2 in the Eastern Ruins of Zandora</td>
        </tr>
        <tr>
          <td>Masterful Kill</td>
          <td>If used to correctly deflect an enemy's attack, instantly climb behind them and deliver a lethal blow in
            response.</td>
          <td>Increased damage</td>
          <td>Increased number of hits, added inverted overlay effect when triggered</td>
          <td>It appears to be the counterattack of the Assassins' copycat from the original Dragon's Dogma game.
            Performs the Counter Stance quickly when the Enemy's Attack connects with the Stance, you then gain
            Invulnerability to Impact, then performs a Counterattack in which you Damage the Enemy and are knocked into
            the Air. (Cannot be done in the Air) Alternatively, it can be used to cancel certain abilities, such as
            Gunpowder Charge.</td>
          <td>Level 7: 5 Death Knights (level 56+), 5 Geo Golem (level 56+)</td>
          <td> </td>
        </tr>
        <tr>
          <td>Explosive Flame Blade 爆炎刃</td>
          <td>Quick 2-hit radial slash followed by an AOE explosion.</td>
          <td>Increased damage</td>
          <td>Increased number of hits Adds wind pressure to explosion (Added outer ring explosion)</td>
          <td>Range and damage are considerably low before level 6 Level 6 variant available after Job Quest at level 62
            (Can be cast on ground or in air)</td>
          <td>Level 6: 5 infected Goreclops (level 55+) Level 7: 5 Ice Machine (level 60+)</td>
          <td> Bloodbane Island: Infected Lair, Dirt Pit</td>
        </tr>
        <tr>
          <td>Soaring Hawk Slash</td>
          <td>Gap closing the spin in the air chained to a jump to quickly reorient yourself or to a hook into a crossbar
            flourish</td>
          <td>Increased damage</td>
          <td>Increases the number of hits [Similar to the Helm Splitter in Dark Arisen, except forward momentum]</td>
          <td>Available via BO Tree, approximately 35k BO's to achieve early on. The initial spin is fast enough that
            it doesn't land all of the hits, and the rope throw's target is in the center of where your character
            is facing. It decreases in altitude the further you spin. The spin animation is very similar to the heavy
            attack in the air. Pressing the ability button again mid-animation chains the move into a hook with a
            cross-motion finisher. Pressing Jump mid-way cancels the ability, leaving you in a spread eagle position in
            the air.</td>
          <td>LV6: LV68 + Gorecyclops (x5) LV7: LV73+ Bifrest (x5) LV8: LV75 + Crazed Behemoth (x5) and White Griffin (x5)
            LV9: LV75 + Tarrasque (x3) LV10: LV75 + Wise Tarrasque (x5)</td>
          <td>Danandell Cave</td>
        </tr>
      </tbody>
    </table>
  
    {% include page-heading.md heading="Passive Skills" %}
    <table>
      <thead>
        <tr>
          <th title="Field #1">Skill Name</th>
          <th title="Field #2">Overview</th>
          <th title="Field #3">PA Cost</th>
          <th title="Field #4">Level Change</th>
          <th title="Field #5">Notes</th>
          <th title="Field #6">Monsters to kill to level up</th>
          <th title="Field #7">Monster Locations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Adhesion (Lv.3)</td>
          <td>Less likely to (fall? stagger? be thrown off by the enemy?) when you are holding the enemy</td>
          <td>5 PA</td>
          <td> </td>
          <td> </td>
          <td>Level 5: 20 Shield Goblins (level 5+)</td>
          <td>111</td>
        </tr>
        <tr>
          <td> Reverse Stance (Lv.3)</td>
          <td>Less likely to stagger when attacking/trading blows</td>
          <td>3 PA</td>
          <td> </td>
          <td> </td>
          <td>Level 5: 20 Rogue Hunters (level 5+) Level 6: 25 Saurians (level 10+)</td>
          <td>116</td>
        </tr>
        <tr>
          <td> Leap Grip (Lv.9)</td>
          <td>You use less stamina when pulling the enemy</td>
          <td>7 PA</td>
          <td> </td>
          <td> </td>
          <td>Level 5: 35 Skeleton Knights (level 15+) Level 6: 20 Orc Miradores (level 10+)</td>
          <td>109</td>
        </tr>
        <tr>
          <td> Longline (Lv.13)Dragon Appraisal Jewelry (Seeker)</td>
          <td>Increase the reach of the seeker hook</td>
          <td>6 PA</td>
          <td> </td>
          <td> </td>
          <td>Level 5: 20 Forest Goblin Warriors (level 10+) Level 6: 10 creatures (level 15+)</td>
          <td>101</td>
        </tr>
        <tr>
          <td>高舞 Assisted High Jump</td>
          <td>Higher jump when assisted jump</td>
          <td>3 PA</td>
          <td> </td>
          <td> </td>
          <td>Level 5: 30 Hobgolin Fighters (level 15+)</td>
          <td>123</td>
        </tr>
        <tr>
          <td>Giant Safeguard</td>
          <td>Reduced damage from giants</td>
          <td>4 PA</td>
          <td> </td>
          <td> </td>
          <td>Level 5: 5 Cyclops (level 15+)</td>
          <td>124</td>
        </tr>
        <tr>
          <td>Tremor-proof</td>
          <td>Less stamina spent when enemy tries to shake</td>
          <td>6 PA</td>
          <td> </td>
          <td> </td>
          <td>Level 5: 5 Chimeras (level 35+)</td>
          <td>106</td>
        </tr>
        <tr>
          <td> Rope Reversal (Lv.25) Dragon Appraisal Jewelry (Seeker)</td>
          <td>When jumping from above, increase the optimal damage range</td>
          <td>6 PA</td>
          <td> </td>
          <td> </td>
          <td> Level 5: 8 Grimwargs (level 35+) Level 6: 10 Sphinx (level 30+)</td>
          <td>102</td>
        </tr>
        <tr>
          <td>Giant Proficiency</td>
          <td>Increased damage against giant enemy types</td>
          <td>8 PA</td>
          <td> </td>
          <td> Includes Cyclops (except Infected), Ent, and Troll types</td>
          <td>Level 5: 8 Cyclops (level 25+)</td>
          <td>125</td>
        </tr>
        <tr>
          <td>Jump Proficiency</td>
          <td>Less likely to retreat in case of air attack.</td>
          <td>5 PA</td>
          <td> </td>
          <td> </td>
          <td>Level 5: 30 Rogue Hunters (level 10+)</td>
          <td>120</td>
        </tr>
        <tr>
          <td>Light Recoil</td>
          <td> Reduces stamina consumption during flight</td>
          <td>5 PA</td>
          <td> </td>
          <td>Useful for Soaring Hawk Slash and Explosive Flame Blade Reduces resistance of aerial skills by 30%*</td>
          <td>Level 5: 8 Lyndworm (level 30+)</td>
          <td>121</td>
        </tr>
        <tr>
          <td> Sky HammerStar Appraisal Jewelry</td>
          <td>Airstrikes do more damage (seeker only)</td>
          <td>12 PA</td>
          <td> </td>
          <td> </td>
          <td>Level 5: 8 Griffins (level 40+)</td>
          <td>117</td>
        </tr>
        <tr>
          <td> High Jump (Lv.33) Special Dragon Appraisal Jewelry (Seeker)</td>
          <td>Increases heel height</td>
          <td>9 PA</td>
          <td> </td>
          <td> </td>
          <td>Level 5: 8 Sphinx (level 40+)</td>
          <td>104</td>
        </tr>
        <tr>
          <td>Spin Avoid</td>
          <td>Less wear and tear when receiving a shock attack</td>
          <td>8 PA</td>
          <td> </td>
          <td> </td>
          <td>Level 5: 8 Ent (level 18+)</td>
          <td>112</td>
        </tr>
        <tr>
          <td>Flip Resistance</td>
          <td>Damaged air levels are reduced</td>
          <td>7 PA</td>
          <td> </td>
          <td> </td>
          <td>Level 5: 8 Ent (level 40+)</td>
          <td>119</td>
        </tr>
        <tr>
          <td>Conspicuity</td>
          <td>Less likely to break posture during a landing jump</td>
          <td>2 PA</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td>122</td>
        </tr>
        <tr>
          <td>Arm Strength Guide</td>
          <td>The wear resistance of the handle is reduced</td>
          <td>7 PA</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td>N/A</td>
        </tr>
        <tr>
          <td> Circumflex (Lv.40) SpecialDragon Appraisal Jewelry (Seeker)</td>
          <td>Increased rolling speed</td>
          <td>4 PA</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td>103</td>
        </tr>
        <tr>
          <td>Return (Lv.40) 跳避 Dragon Appraisal Jewelry (Seeker)</td>
          <td>Rolling distance is extended</td>
          <td>6 PA</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td>113</td>
        </tr>
        <tr>
          <td>Durability (Lv.)Star Appraisal Jewelry</td>
          <td>Damage taken is reduced when grappling</td>
          <td>7 PA</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td>105</td>
        </tr>
        <tr>
          <td>Sacrifice (LV.40) Special</td>
          <td> less damage taken when failing an evasive move</td>
          <td>5 PA</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td>115</td>
        </tr>
        <tr>
          <td> Fallen Bursts (Lv.45) Moon Appraisal Jewelry</td>
          <td>When you jump from high up, it increases the optimal damage zone</td>
          <td>5 PA</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td>118</td>
        </tr>
        <tr>
          <td> Sculpt Master (Lv.45) Flower Appraisal Jewelry</td>
          <td>The amount of damage increases enough to yield when grappling.</td>
          <td>15 PA</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td>107</td>
        </tr>
        <tr>
          <td>Walkthrough 優避</td>
          <td>Increases invincibility frames while rolling?</td>
          <td>7 PA</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td> Earthquake (Lv. 45) 与震Flower Assessment Jewelry</td>
          <td>Easier to deplete boss stamina by shaking</td>
          <td>6 PA</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Seeker BO Job Tree Passive Skills</td>
          <td>See note about unlocking:</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Skill Name</td>
          <td>Overview</td>
          <td>AP Cost / BO Cost</td>
          <td>Level change</td>
          <td>Notes</td>
          <td>Monsters to kill to level up</td>
          <td>Monster Locations</td>
        </tr>
        <tr>
          <td>Carve: Slayer 連斬倒</td>
          <td>Increases Carveu's damage</td>
          <td>3</td>
          <td> </td>
          <td>Please confirm that the Japanese skill name matches the English one by deleting this message or correcting
          </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Scarlet Kisses: Slayer 裂斬倒</td>
          <td>Increases the damage of Scarlet Kisses/Hundred Kisses</td>
          <td>3</td>
          <td> </td>
          <td>Please confirm that the Japanese skill name matches the English one by deleting this message or correcting
          </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Execution Force 走耐</td>
          <td>Increases Defense and Magical Defense while running?</td>
          <td>4</td>
          <td>Defenses increase even further</td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Scarlet Slashes: Crusher 乱斬砕</td>
          <td>Increases the damage of Scarlet Slashes/Hundred Slashes</td>
          <td>4</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Roundhouse Kick: Slayer 回蹴倒</td>
          <td>Increases Roundhouse Kick damage</td>
          <td>3</td>
          <td>Damage increases further, Lv. 5~6 increases the power of Strike Force</td>
          <td>You can increase each attack hit strength at levels 5 and 6, including custom skills (needs confirmation)
          </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Deep Aggression 深攻</td>
          <td>Increases scaling power</td>
          <td>4</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Carve: Crusher 連斬砕</td>
          <td>Increases Carve damage</td>
          <td> </td>
          <td>Damage increases further, Lv. 5~6 increases the power of Strike Force</td>
          <td>Please confirm that the Japanese skill name matches the English one by deleting this message or correcting
          </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Scarlet Kisses: Crusher 裂斬砕</td>
          <td>Increases the damage of Scarlet Kisses/Hundred Kisses</td>
          <td> </td>
          <td>Damage increases further, Lv. 5~6 increases the power of Strike Force</td>
          <td>Please confirm that the Japanese skill name matches the English one by deleting this message or correcting
          </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Scarlet Slashes: Terminator 乱斬絶</td>
          <td>Increases the damage of Scarlet Slashes/Hundred Slashes</td>
          <td> </td>
          <td>Damage increases further, Lv. 5~6 increases stun power</td>
          <td>Please confirm that the Japanese skill name matches the English one by deleting this message or correcting
          </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Stiffness 剛攻</td>
          <td>Increases strength</td>
          <td>6</td>
          <td>The strength increases even more</td>
          <td>At level 4, increase strength by 6</td>
          <td> </td>
          <td>118</td>
        </tr>
        <tr>
          <td>Roundhouse Kick: Crusher 回蹴砕</td>
          <td>Increases Roundhouse Kick damage</td>
          <td> </td>
          <td>Damage increases further, Lv. 5~6 increases the power of Strike Force</td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Pleasant Roll</td>
          <td>Reduces the Stamina cost of Forward Roll.</td>
          <td> </td>
          <td>Further reduces Stamina cost</td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
      </tbody>
    </table>
  
    {% include page-heading.md heading="Core Skills" %}
    <table >
      <thead>
        <tr>
          <th title="Field #1">Skill Name</th>
          <th title="Field #2">Overview</th>
          <th title="Field #3">Notes and usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Roundhouse Kick (Lv. 9)</td>
          <td>By pausing after the first hit of your normal attack and then resuming, you can perform a four-hit,
            four-kick combo that deals impact damage with higher stun values than dagger strikes.</td>
          <td> </td>
        </tr>
        <tr>
          <td>Hundred Kisses (Lv. 13)</td>
          <td> Doubles the speed of the Hundred Kisses and Climb attack after a few hits if you are mashing fast. The
            double speed segment is indicated by the player flashing blue-white. Requires mashing faster than the minimum
            in the double speed segment to maintain the attacks, otherwise the combo will end abruptly.</td>
          <td> </td>
        </tr>
        <tr class="bg-zinc-800 text-white">
          <td>(Ground)</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Carve</td>
          <td>Performs a six-hit dagger attack.</td>
          <td> </td>
        </tr>
        <tr>
          <td>Scarlet Kisses</td>
          <td>Quickly performed slash attack (heavy seeker attack)</td>
          <td>A standing attack wave, attacks increase in speed. Dealing damage quickly and increasing overall damage</td>
        </tr>
        <tr>
          <td>Rope Stance</td>
          <td>Prepares the Seeker's string to be thrown towards the targeting reticle.</td>
          <td> </td>
        </tr>
        <tr>
          <td>Throw Rope</td>
          <td>Throws the Seeker's rope toward the target if present, or a nearby enemy otherwise. If an enemy is hit
            by the rope, the Seeker dashes forward and bounces off of it.</td>
          <td>Quickly repositions the Seeker and places him above the fight. Useful for closing gaps, saving time when
            climbing large monsters, avoiding dangerous enemies, reaching downed allies quickly, platforming, and many
            other applications. Repeatedly hitting an enemy with the rope will eventually break their balance, lifting
            them into the air with the Seeker for additional abuse.</td>
        </tr>
        <tr>
          <td>Forward Roll</td>
          <td> </td>
          <td>Also dubbed Zelda's "Link Roll," the move is increasingly faster than the normal Sprint.</td>
        </tr>
        <tr>
          <td>Coordinated Throw</td>
          <td>He crouches down, ready to serve as a springboard for his allies in assisted high jumps.</td>
          <td> </td>
        </tr>
        <tr class="bg-zinc-800 text-white">
          <td>(Air)</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Triple Cut</td>
          <td>Slash three times while in the air.</td>
          <td>A quick attack for use against small aerial enemies. Limited stagger and damage.</td>
        </tr>
        <tr>
          <td>Helm Splitter</td>
          <td>Do a somersault, cutting downwards and hitting the ground.</td>
          <td>A powerful attack that knocks the Seeker back to the ground. Enemies hit by the roll will be carried
            downward with the Seeker. Upon reaching the ground, additional heavy damage is dealt to the Seeker based on
            the distance traveled.</td>
        </tr>
        <tr>
          <td>Rope Stance</td>
          <td>Prepares the Seeker's string to be thrown towards the aiming reticle. Slightly slows the Seeker's
            fall when entering the stance.</td>
          <td> </td>
        </tr>
        <tr>
          <td>Throw Rope</td>
          <td>Like the ground version. If the catcher fails to hit any target, he cannot throw the rope again until he
            reaches the ground.</td>
          <td>As a ground version, the rope can be used repeatedly in mid-air to reposition oneself, especially during
            large monster fights. Useful for avoiding Club Cyclop's enrage slam attack, moving quickly from one end of
            larger monsters to the other, or simply for showing off.</td>
        </tr>
        <tr>
          <td>Wall Jump</td>
          <td>Let's jump off the walls</td>
          <td>When jumping against a wall, press in the opposite direction and jump again</td>
        </tr>
        <tr>
          <td>Double Jump</td>
          <td>Perform a second, smaller jump while in the air.</td>
          <td>Allows the Seeker to gain slightly more jumping height or change the direction of his fall. Can be used once
            per jump or per rope throw.</td>
        </tr>
        <tr class="bg-zinc-800 text-white">
          <td>(Climb)</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Scarlet Slashes/Hundred Slashes</td>
          <td>Perform quick attacks while climbing an enemy.</td>
          <td>A wave of attack while grappling with a giant enemy, the attacks increase in speed. Dealing damage quickly
            and increasing overall damage.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>