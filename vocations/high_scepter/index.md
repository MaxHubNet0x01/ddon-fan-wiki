---
layout: default
title: High Scepter
id: high-scepter
description:
main_color: red-600
---

<div class="margin-center-90">
  {% include page-heading.md heading="High Scepter (Attacker)" %}

  {% include card-with-image.md src="high-scepter-portrait.png" heading="Overview" content="The High Scepter is a
  master of both holy and dark magics, weaving devastating spells to control the battlefield. They have a versatile
  skill set that includes high-damage magic attacks, teleportation, and support abilities to influence the flow of
  combat. As a hybrid caster, the High Scepter excels in both close-range and long-range combat." %}

  {% include card-section-start.md %}
    <h2 class="text-2xl font-semibold mb-4">Key Characteristics</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>Hybrid combat style utilizing both Holy and Dark magic.</li>
      <li>Can switch between offense, defense, and support roles.</li>
      <li>Magick Gauge mechanic to enhance spell effectiveness.</li>
      <li>Has both aerial and ground-based attacks.</li>
    </ul>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    <h2 class="text-2xl font-semibold mb-4">Core Combat Mechanics</h2>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>Full Moon Light:</strong> Imbue your sword with Holy magic to attack enemies and increase damage as the
        Magic Glyph grows.</li>
      <li><strong>Mirage Shift:</strong> Create a phantom to teleport and deal magic damage to enemies on contact. Useful
        for repositioning and evasion.</li>
      <li><strong>Dim Slice:</strong> Unleash magical blades that deal damage to enemies in front of you, with increased
        damage as you continue attacking.</li>
      <li><strong>Black Flash Fang:</strong> Strike with dark magic, causing significant damage and benefiting from high
        Magick Gauge accumulation.</li>
      <li><strong>Eclipse Blast:</strong> Cast a vortex dealing Holy and Impact damage, with priority on weak spots for
        higher damage.</li>
    </ul>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    <h2 class="text-2xl font-semibold mb-4">Recommended Play Style</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>Focus on building up your Magick Gauge with non-DPS skills to maximize damage potential with Full Moon Light.
      </li>
      <li>Utilize Mirage Shift for quick repositioning or to cancel other actions and avoid damage.</li>
      <li>Dim Slice is excellent for dealing with multiple enemies in close quarters, while Black Flash Fang offers a
        solid option for high damage on single targets.</li>
      <li>Eclipse Blast is a powerful area-of-effect (AoE) skill, ideal for hitting multiple targets, but be mindful of
        its long casting time and positioning.</li>
      <li>To maximize effectiveness, stay airborne to take advantage of faster skill animations and to avoid being hit.
      </li>
    </ul>
  {% include card-section-end.md %}

  {% include page-heading.md heading="Custom Skills" %}
  <div class="overflow-x-auto">
    <table>
      <thead>
        <tr>
          <th>Skill Name</th>
          <th>Overview</th>
          <th>Level change</th>
          <th>Level 6 Change</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Full Moon Light</td>
          <td>Imbue your sword with the Holy attribute and attack nearby enemies. Damage increases as the Magic Glyph grows.</td>
          <td>Damage +</td>
          <td>Can be used in air.</td>
          <td>You should always use this skill without using any of the DPS skills to stack Magick Gauge, and always use it in the air as it is noticeably faster. It also hits surprisingly high, easy to damage bosses' weaknesses. When Glyph of Magic is maxed out, it hits much further and harder, also increasing Magic Gauge gains.</td>
        </tr>
        <tr>
          <td>Mirage Shift ミラージュ・シフト</td>
          <td>Create a phantom and teleport forward. If the user comes into contact with an enemy while teleporting, it will deal magic damage. Category: Support Magic. Costs 1 Magick Gauge block.</td>
          <td>Faster recharge</td>
          <td>Can be used to cancel most actions. (Does not work while hitstun)</td>
          <td>Support Magic = A large caliber bar. Great for escaping and canceling skills. You can use it twice in the air.</td>
        </tr>
        <tr>
          <td>Dim Slice ディム・スライス</td>
          <td>Ready your sword and slash, releasing multiple magical blades towards the enemies in front of you. Category: Pure Magic. Costs 1 stack of magic gauge.</td>
          <td>Damage +</td>
          <td>Increase the number of hits.</td>
          <td>Pure Magic = The little dots under the magic meter. Extremely useful for clearing mobs. Cheap and fast, access everything on the screen.</td>
        </tr>
        <tr>
          <td>Black Flash Fang</td>
          <td>Drives the blade imbued with dark magic into the target's body before withdrawing it. Damage increases as the Magic Glyph grows.</td>
          <td>Damage +</td>
          <td>Can be used while climbing.</td>
          <td>You should always use this skill without using any DPS skills to stack the Magick Gauge. When using it on the ground, you can use Mirage Shift to cancel its animation and improve dps. It has high escape and random attack, and gains much higher mana than FML.</td>
        </tr>
        <tr>
          <td>Wall Barrier ウォール・バリア</td>
          <td>Create a magical barrier in front of you for a set period of time. The duration of the barrier does not decrease when using pure magic. Category: Support Magic. Costs 1 Magick Gauge block.</td>
          <td>Duration +</td>
          <td>Longer duration while used to counterattack.</td>
          <td>Support Magic = A large caliber bar. If used to counterattack, it increases its duration. The main disadvantage is that it only works against attacks coming from the front and does NOT work against debuffs.</td>
        </tr>
        <tr>
          <td>Terror Blast テラー・ブラスト</td>
          <td>Bombard an enemy with Magick Blade, dealing continuous Dark and Slash damage to the enemy. The number of hits increases with consecutive button presses. Category: Pure Magic. Costs 2 stacks of Magic Gauge.</td>
          <td>Damage +</td>
          <td>Increase the number of hits by making additional entries</td>
          <td>Pure Magic = The small dots under the magic meter. High exhaustion and casual attack. It locks onto a targeted spot.</td>
        </tr>
        <tr>
          <td>Eclipse Blast エクリプス・ブライト</td>
          <td>Create a vortex that deals Holy and Impact damage. Category: Pure Magic. Costs 2 stacks of magic meter.</td>
          <td>Damage +</td>
          <td>Increase the number of hits.</td>
          <td>High Scepter's current main DPS ability. Large damage range (bigger than it looks) High damage (without hitting the damage cap) Large casting range (can still be cast at the exact target location even if the mob moves out of range) Priority to hitting the weak spot. The downsides are that you have to stand still and away from enemy attacks while casting AND dealing damage, and that the vortex gets stuck where it's cast.</td>
        </tr>
        <tr>
          <td>Phantom Edge ファントム・エッジ</td>
          <td>Imbue magical power into your sword, adding an afterimage to the sword's main skills. Press the assigned button again to unleash an attack that absorbs an amount of magic based on the number of afterimage attacks. Slowly drains magic during activation. Category: Support Magic. Costs 4 stacks of magic gauge.</td>
          <td>Reduced magic drain during activation</td>
          <td>Increases the maximum number of attack charges (1 -> 2).</td>
          <td>Good method to gain mana without using stamina. You should use the pause combo for maximum gain. Complement Chant works on this.</td>
        </tr>
      </tbody>
    </table>
  
    {% include page-heading.md heading="Passive Skills" %}
    <table>
      <thead>
        <tr>
          <th>Skill Name</th>
          <th>Overview</th>
          <th>PA Cost</th>
          <th>Level change</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Extended Glyph</td>
          <td>Decreases the decay rate of the Glyph.</td>
          <td>4</td>
          <td>Further decreases the decay rate.</td>
          <td></td>
        </tr>
        <tr>
          <td>Fierce Flight</td>
          <td>Ruin Blade applies debuff faster.</td>
          <td>10</td>
          <td>Debuff rate +</td>
          <td>Basically violent release of Shield Sage, High Scepter version.</td>
        </tr>
        <tr>
          <td>Protective Glyph</td>
          <td>Decreases the rate at which the Glyph decays when you are hit or stunned.</td>
          <td>2</td>
          <td>Further decreases the decay rate.</td>
          <td></td>
        </tr>
        <tr>
          <td>Strong Shot</td>
          <td>Increases the damage and hitting power of Ruin Shot.</td>
          <td>.</td>
          <td>Damage + Hit Power +</td>
          <td></td>
        </tr>
        <tr>
          <td>Perilous Absorption</td>
          <td>When near death, the amount of magic absorbed by sword attacks increases.</td>
          <td>3</td>
          <td>Magic absorption +</td>
          <td></td>
        </tr>
        <tr>
          <td>Active Suppression</td>
          <td>Increases exhaustion attack.</td>
          <td>10</td>
          <td>Exhaustion attack +</td>
          <td></td>
        </tr>
        <tr>
          <td>Imperative Suppression</td>
          <td>When near death, increases Exhaustion Attack.</td>
          <td>5</td>
          <td>Exhaustion attack +</td>
          <td></td>
        </tr>
        <tr>
          <td>Increased Absorption</td>
          <td>Increases the amount of magic absorbed by sword attacks.</td>
          <td>4</td>
          <td>Magic absorption +</td>
          <td></td>
        </tr>
        <tr>
          <td>Fortunes of War</td>
          <td>Has a chance to not consume stamina when using custom skills.</td>
          <td>5</td>
          <td>Increases the chance of triggering.</td>
          <td></td>
        </tr>
        <tr>
          <td>Magickal Charge 魔充</td>
          <td>As long as the magic meter stock is above 2, strength and magic increase</td>
          <td>7</td>
          <td>Strength + Magic +</td>
          <td></td>
        </tr>
        <tr>
          <td>Courageous Suppression 勇鎮</td>
          <td>While health is above a certain value, increase Exhaustion Attack.</td>
          <td>8</td>
          <td>Exhaustion attack +</td>
          <td></td>
        </tr>
        <tr>
          <td>Vigorous Suppression 精鎮</td>
          <td>While stamina is above a certain value, increase Exhaustion Attack.</td>
          <td>7</td>
          <td>Exhaustion attack +</td>
          <td></td>
        </tr>
        <tr>
          <td>Increased Magick 増魔</td>
          <td>After using a Pure Magic, temporarily increase Magic Attack.</td>
          <td>6</td>
          <td>Increases duration.</td>
          <td></td>
        </tr>
        <tr>
          <td>Altered Magick 転魔</td>
          <td>After using a Pure Magic, temporarily increase Physical Attack.</td>
          <td>6</td>
          <td>Increases duration.</td>
          <td></td>
        </tr>
        <tr>
          <td>Heavy Foot 厚足</td>
          <td>Reduces the accumulation of damage and debuffs from terrain such as poison or magma.</td>
          <td>5</td>
          <td>Further reduce damage and buildup.</td>
          <td></td>
        </tr>
        <tr>
          <td>Source Luck</td>
          <td>Has a chance to not consume Strength/Revenge/Magic Meter.</td>
          <td>7</td>
          <td>Increases the chance of triggering.</td>
          <td></td>
        </tr>
        <tr>
          <td>War-Ready Safeguard</td>
          <td>Reduces damage taken from war-ready enemies.</td>
          <td>3</td>
          <td>Harm reduction +</td>
          <td></td>
        </tr>
        <tr>
          <td>Bombardment 砲撃</td>
          <td>Increases the damage and hitting power of cannons.</td>
          <td>4</td>
          <td>Damage + Hit Power +</td>
          <td></td>
        </tr>
        <tr>
          <td>Armor Crusher</td>
          <td>Increases damage and striking power against armored pieces of war-ready enemies.</td>
          <td>9</td>
          <td>Damage + Hit Power +</td>
          <td>Level 6 seems to increase damage against armor pieces by 25%, which is a pretty large amount.</td>
        </tr>
        <tr>
          <td>War-Ready Proficiency Overview</td>
          <td>Increases damage dealt to war-ready enemies.</td>
          <td>5</td>
          <td>Damage +</td>
          <td></td>
        </tr>
        <tr>
          <td>Complement Chant</td>
          <td>Conserves some magic gauge after using Support Magic.</td>
          <td>3</td>
          <td>Remaining value +</td>
          <td></td>
        </tr>
        <tr>
          <td>Magickal Chant</td>
          <td>Preserves some Magick Gauge after using Pure Magic.</td>
          <td>4</td>
          <td>Remaining value +</td>
          <td></td>
        </tr>
        <tr>
          <td>Anti-Reduction</td>
          <td>When you deal damage to an enemy, it reduces the stacking value of debuffs on you.</td>
          <td>7</td>
          <td>Debuff reduction +</td>
          <td></td>
        </tr>
        <tr>
          <td>Soaring Sword</td>
          <td>Increases the amount of Magick Gauge consumed by Ruin Blade, but greatly increases damage.</td>
          <td>9</td>
          <td>Damage +</td>
          <td></td>
        </tr>
        <tr>
          <td>Quadruple Slash: Slayer 四撃倒</td>
          <td>Increases Quadruple Slash damage.</td>
          <td>3</td>
          <td>Damage + L6: Hit Power +</td>
          <td></td>
        </tr>
        <tr>
          <td>Arc Slash: Slayer 弧撃倒</td>
          <td>Increases Arc Slash damage.</td>
          <td>3</td>
          <td>Damage + L6: Hit Power +</td>
          <td></td>
        </tr>
        <tr>
          <td>Sky Slash: Slayer 空叉倒</td>
          <td>Increases Sky Slash damage.</td>
          <td>3</td>
          <td>Damage + L6: Hit Power +</td>
          <td></td>
        </tr>
        <tr>
          <td>Falling Slash: Slayer 昇墜倒</td>
          <td>Increases Falling Slash damage.</td>
          <td>3</td>
          <td>Damage + L6: Hit Power +</td>
          <td></td>
        </tr>
        <tr>
          <td>Common Attack 常撃</td>
          <td>Increase the damage of all basic skills.</td>
          <td>8</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Breathing 偏吸</td>
          <td>It increases Glyph growth when using sword skills, but decreases more as you take damage.</td>
          <td>7</td>
          <td>Growth rate +</td>
          <td>Keep in mind that with barrier and all ranged abilities, you will almost always be protected from enemy attacks.</td>
        </tr>
        <tr>
          <td>Quadruple Slash: Absorption 四撃吸</td>
          <td>Increases Quadruple Slash damage.</td>
          <td>3</td>
          <td>Damage + L6: Magic Absorption +</td>
          <td></td>
        </tr>
        <tr>
          <td>Arc Slash: Destroyer 弧撃吸</td>
          <td>Increases Arc Slash damage.</td>
          <td>3</td>
          <td>Damage + L6: Magic Absorption +</td>
          <td></td>
        </tr>
        <tr>
          <td>Sky Slash: Absorption 空叉吸</td>
          <td>Increases Sky Slash damage.</td>
          <td>3</td>
          <td>Damage + L6: Magic Absorption +</td>
          <td></td>
        </tr>
        <tr>
          <td>Falling Slash: Absorption 昇墜吸</td>
          <td>Increases Falling Slash damage.</td>
          <td>3</td>
          <td>Damage + L6: Magic Absorption +</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  
    {% include page-heading.md heading="Blood Orb Tree Passive Skills" %}
    <table>
      <thead>
        <tr>
          <th>Skill Name</th>
          <th>Overview</th>
          <th>AP Cost / BO Cost</th>
          <th>Level change</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Shifting Attack 移撃</td>
          <td>Increases the damage of skills that travel forward after casting.</td>
          <td>9</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Smooth Attack</td>
          <td>Increases the damage of skills that react to enemy attacks. (counterattacks)</td>
          <td>7</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  
    {% include page-heading.md heading="Core Skills" %}
    <table>
      <thead>
        <tr>
          <th>Skill Name</th>
          <th>Overview</th>
          <th>Notes and usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ruin Shot ルイン・ショット</td>
          <td>Fire a magic bullet towards an enemy. The number of bullets increases with additional inputs.</td>
          <td>The High Scepter's actual main attack skill does more damage than slashes and from a good range. But you should only use any of the basic damage skills when you are completely out of stamina/Magick meter and have no method to gain more.</td>
        </tr>
        <tr>
          <td>Will Stance ウィル・スタンス</td>
          <td>Target and exploit an enemy's magical power. Can be activated in mid-air.</td>
          <td></td>
        </tr>
        <tr>
          <td>Will Marker ウィル・マーカー</td>
          <td>Place a Magic Glyph on an enemy. You naturally gain magic meter slowly from this. Attacking the Glyph with your sword quickly increases your magic meter. The glyph will decrease if not attacked.</td>
          <td> When marked enemies die, gain a large amount of Magicak. Always mark an enemy.</td>
        </tr>
        <tr>
          <td>Return Shiftリターン・シフ</td>
          <td>Quickly approach an enemy touched by Back Leap. Can be used in the air.</td>
          <td></td>
        </tr>
        <tr>
          <td>(Floor)</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Quadruple Slash</td>
          <td>Perform a continuous attack with your magic sword.</td>
          <td></td>
        </tr>
        <tr>
          <td>Arc Slash</td>
          <td>Perform a strong continuous attack with your magic sword.</td>
          <td>A full combo takes the Magick Glyph to its full potential.</td>
        </tr>
        <tr>
          <td>Dodge Counter Slash</td>
          <td>Attack nearby enemies with your sword while dodging at the same time.</td>
          <td>Far below i-frames. Don't rely on it, especially against fast attacking mobs.</td>
        </tr>
        <tr>
          <td>Back Leap バック・リープ</td>
          <td>Instantly move away from an enemy by activating this skill at close range. Category: Support Magic Costs 1 Magick Gauge block.</td>
          <td></td>
        </tr>
        <tr>
          <td>Ruin Blade ルイン・ブレード</td>
          <td>Channel a large amount of magic into your sword and hurl it at an enemy. The greater the distance it travels, the more damage it deals. Can be enchanted. Category: Pure Magic Costs 1 stack of magic meter.</td>
          <td>Great skill for what it costs. When enchanted and hit by weakness, it deals equal or even greater damage than custom skills. When canceled, it deals the most DPS.</td>
        </tr>
        <tr>
          <td>(Air)</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Falling Slash</td>
          <td>Attack an enemy in the air and push yourself further upwards. Perform a falling attack with additional input. Damage increases at high locations.</td>
          <td></td>
        </tr>
        <tr>
          <td>Sky Slash</td>
          <td>Perform continuous attacks in the air with your magic sword.</td>
          <td></td>
        </tr>
        <tr>
          <td> Controlled Fall</td>
          <td>Quickly recover from being knocked down by an enemy.</td>
          <td></td>
        </tr>
        <tr>
          <td>(Climb)</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Gripping Slash</td>
          <td>While climbing, continuously attack an enemy with your sword. The number of attacks increases with additional information.</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>