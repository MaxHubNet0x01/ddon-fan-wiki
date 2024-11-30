---
layout: default
title: Element Archer
description:
main_color: green-600
---

<div class="margin-center-90">
  {% include page-heading.html heading="Element Archer (Support)" %}

  {% include card-with-image.html src="element-archer-portrait.png" heading="Overview" content="The Element Archer is a
  ranged hybrid class in Dragon's Dogma Online, combining precise bow attacks with elemental magic. This vocation excels
  in support and crowd control, leveraging a wide array of magical arrows to damage, debuff, and heal." %}

  {% include card-section-start.html %}
    <h2 class="text-2xl font-semibold mb-4">Key Characteristics</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>Uses magical arrows that provide both offensive and supportive abilities.</li>
      <li>Effective at dealing elemental damage and exploiting enemy weaknesses.</li>
      <li>Excels in crowd control and status infliction through specialized skills.</li>
      <li>Offers healing and team support options, enhancing party survivability.</li>
    </ul>
  {% include card-section-end.html %}

  {% include card-section-start.html %}
    <h2 class="text-2xl font-semibold mb-4">Core Combat Mechanics</h2>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>Elemental Arrows:</strong> Imbue attacks with fire, ice, or lightning for targeted elemental damage.
      </li>
      <li><strong>Spiral Shot:</strong> A piercing arrow attack capable of hitting multiple enemies in a line.</li>
      <li><strong>Healing Glow:</strong> Deploys a healing field to restore HP for allies within range.</li>
      <li><strong>Magic Flare:</strong> Launches a magical projectile that explodes on impact, dealing area-of-effect
        damage.</li>
    </ul>
  {% include card-section-end.html %}

  {% include card-section-start.html %}
    <h2 class="text-2xl font-semibold mb-4">Recommended Play Style</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>Maintain distance from enemies while using ranged attacks to exploit elemental weaknesses.</li>
      <li>Support your party by alternating between damage-dealing and healing skills.</li>
      <li>Use crowd control abilities to manage groups of enemies and protect allies.</li>
      <li>Prioritize positioning to maximize the effectiveness of area-of-effect attacks and support fields.</li>
    </ul>
  {% include card-section-end.html %}

  {% include page-heading.html heading="Custom Skills" %}
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
          <td>Fourfold Bolt (LV.1) 連魔弾</td>
          <td>Fire multiple magic arrows with the Ice attribute at a single point</td>
          <td>Damage +</td>
          <td>The number of arrows increases (4 -> 6)</td>
          <td>You can lock 2 points, making this skill reach up to 8 (or 12) arrows at once</td>
        </tr>
        <tr>
          <td>Healing Bolt (LV.3) 癒し魔矢</td>
          <td>Fires magical arrows that emit a health-restoring field at the point of impact. The field will attach to an ally if the arrow makes contact. Deals damage to undead.</td>
          <td>Healing + Sphere Size +</td>
          <td>The number of arrows increases (2 -> 4)</td>
          <td>Locks on friendly targets, targets hit become mobile healing points. Pass through enemies. Charging increases healing point duration, does not affect amount healed per tick.</td>
        </tr>
        <tr>
          <td>Curing Bolt (LV. 6) 治し魔矢</td>
          <td>Fire magical arrows that emit an area of debilitation recovery at the point of impact. The field will attach to an ally if the arrow makes contact. Inflicts damage to undead.</td>
          <td>Reduces stamina cost.</td>
          <td>The number of arrows increases (1 -> 2)</td>
          <td>Locks allied targets, targets hit become movable healing points. Pass through enemies. Charging increases the cutting duration.</td>
        </tr>
        <tr>
          <td>Flaming Bow (LV.6) 炎魔弓</td>
          <td>Release a magic arrow with Fire attribute that is attached to an enemy. When attacking the magic arrow, it will cause an explosion. Enemies in contact with the explosion will be eliminated.</td>
          <td>Damage +</td>
          <td> Blast range +</td>
          <td>-Charging increases the damage done by the initial arrow and the duration of the arrow. Does not affect explosion damage. -Can be triggered by both magical and physical attacks (unlike DD), you can have 3 arrows active at once, per Elemental Archer -There is a short cooldown between each explosion, so don't expect massive damage using quick skill when hitting a hundred kisses to activate it. -When attached and detonated, damage will be inflicted on the most vulnerable part within the explosion radius. (i.e. if you place the arrow in an undamaged part of a Golem and then detonate it, it will always damage a radius of the mesh)</td>
        </tr>
        <tr>
          <td>Magickal Flare (LV.13) 閃魔光</td>
          <td>Fires Holy attribute magic arrows that emit a magical sphere upon impact. Enemies in contact with the sphere will take continuous damage.</td>
          <td>Damage +</td>
          <td>Duration + Number of hits +</td>
          <td>Can block at 3 points. Only 3 flares can exist at once (per Elemental Archer) The initial attack and final flare pulse deal more damage than the middle flare. Charges the duration of the skill's effects, not the damage of each hit. (Rapid firing this skill, without a charge, is a viable desperation move)</td>
        </tr>
        <tr>
          <td>Enfeebling Bow (LV.13) 減剛魔弓</td>
          <td>Fires magical arrows that decrease enemies' Physical and Magical Attack for a period of time.</td>
          <td>Debilitation rate +</td>
          <td>Number of arrows increases (3 -> 5)</td>
          <td></td>
        </tr>
        <tr>
          <td>Crippling Bow (LV. 20) 減防魔弓</td>
          <td>Fires magical arrows that decrease enemies' Physical and Magical Defense for a period of time.</td>
          <td>Debilitation rate +</td>
          <td>Number of arrows increases (3 -> 5)</td>
          <td></td>
        </tr>
        <tr>
          <td>Ricochet Seeker (LV.25) 跳弾魔従</td>
          <td>Releases a magical Lightning-attribute arrow that increases in power as it ricochets toward the target.</td>
          <td>Damage +</td>
          <td>Number of ricochets increases</td>
          <td>Use it indoors or don't use it at all. Best chance of jumping if you shoot the arrow with a wall behind you or hit a wall with the arrow first. Charging increases damage, not the number of bounces. Shooting without charging a wall can sometimes be better than blocking an enemy.</td>
        </tr>
        <tr>
          <td>Energizing Bolt (LV.30) 奮わせ魔矢</td>
          <td>Fires magical arrows that emit a stamina-restoring area at the point of impact. The field will attach to an ally if the arrow makes contact. Deals damage to undead.</td>
          <td>Duration + Sphere Size +</td>
          <td>Launch speed +</td>
          <td>Locks on friendly targets. Arrows are fired and then returned to targets, turning them into stamina recovery points.</td>
        </tr>
        <tr>
          <td>Exhausting Bow (LV.30) 減耐魔弓</td>
          <td>Fire magical arrows that decrease enemies' resistance for a period of time.</td>
          <td>Debilitation rate +</td>
          <td>Casting speed + Number of arrows increases (5 -> 7)</td>
          <td>This creates the “weak” or “attenuated” effect on a target. A player affected by “weak” has their knockback stat set to 0. An enemy with this status effect appears to be easy to stagger.</td>
        </tr>
        <tr>
          <td>Weakening Bow (LV.35) 弱体魔弓</td>
          <td>Release a magical arrow that attaches itself to the revealed weak points of enemies and forms a sphere. Greatly decreases the resistance of enemies when attacked.</td>
          <td>Resistance Damage +</td>
          <td>Duration +</td>
          <td>Must be fully charged to fire. While charging, you zoom in (simulating a sniper scope). When attacking, you also highlight the enemy's weaknesses. The arrow misses if it doesn't hit a weak point. There is no stamina damage when hit, but it multiplies stamina damage when someone hits you.</td>
        </tr>
        <tr>
          <td>Gamble Draw</td>
          <td>After gathering enough magic power, release an extraordinarily powerful Holy Arrow. The arrow can be controlled while in flight. The power of the skill depends on the available stamina, which will be completely depleted. The location hit will automatically be targeted by the magic arrows for a period of time.</td>
          <td>Damage + Casting speed +</td>
          <td>Number of accesses increases</td>
          <td>You cannot move while charging or when fully charged. It cannot fire until fully charged. It takes 12.5 (!!!) seconds to charge at level 6. It does not hit any targets. After firing, the camera follows a very slow moving holy projectile. You can control the projectile with the left stick/WASD. Ignore the inverted mouse setting (Capcom, please). Don't travel as far as you would expect before it fails. If you hit a target, a long animation will start where the beam constantly pierces the target over and over, dealing damage based on your current stamina. You will be surprised at how long the attack lasts. If you are attacked at any point, the spell will fail. After firing the arrow, your entire stamina bar is drained and you do not start regaining stamina until the spell ends. You will experience an "out of breath" animation unless you use a stamina restore during the spell.</td>
        </tr>
        <tr>
          <td>Healing Flash</td>
          <td>Release a holy magical arrow imbued with the power to heal into the sky and detonate it. The arrow emits a bright flash upon detonation, restoring a portion of the health of allies. Deals damage to undead.</td>
          <td>Healing +</td>
          <td>Flash power at detonation increases</td>
          <td>Must be fully charged to fire, but does not require a target to begin charging. If there is no target, it will explode directly over your head. Otherwise, over any ally you target. The animation is the same as the resistance arrow: the arrows are fired upwards and then inwards, towards their target. At lvl65/rank6 Holy Flash was healing for 1500 and hitting undead for about half that. Regular skeletons were thrown into the air with each cast, Brutes after 2. Wight fell from the sky after 4. All weaknesses upon reaching the spell will be revealed for 30 seconds (normal healing stance is revealed for 15) Total BO required: 2500</td>
        </tr>
        <tr>
          <td>Tearing Tentacle Arrow 触裂魔矢</td>
          <td>Release a dark magic arrow that tears apart the enemy that comes into contact with the tentacles. The tentacles will seek out additional enemies or continue to attack the current target depending on their size. Effective for destroying infected shoots.</td>
          <td>Damage +</td>
          <td>Number of accesses increases</td>
          <td><a href="https://www.youtube.com/watch?v=0G1s9PXuDLY">Video: Tearing Tentacle Arrow</a></td>
        </tr>
      </tbody>
    </table>
  
    {% include page-heading.html heading="Passive Skills" %}
    <table border='1'>
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
          <td>Recovery Burst (Lv. 3) 甦活</td>
          <td>When near death, increases health recovery speed when affected by healing spells.</td>
          <td>3</td>
          <td>Recovery speed +</td>
          <td></td>
        </tr>
        <tr>
          <td>Verge of Death (Lv.9) 死線</td>
          <td>When close to death, health increases and the probability of maximum recoverable health reduction decreases.</td>
          <td>3</td>
          <td>Health recovery +</td>
          <td></td>
        </tr>
        <tr>
          <td>Help Extension (Lv. 13) 延助</td>
          <td>Increases the flight distance of True Aid arrows.</td>
          <td>5</td>
          <td>Distance +</td>
          <td></td>
        </tr>
        <tr>
          <td>Fire Affinity (Lv.13) 炎襲 Moon Appraisal Jewelry</td>
          <td>Increases the rate at which Catching Fire is inflicted when attacking enemies with Fire-elemental attacks.</td>
          <td>4</td>
          <td>Debilitation rate +</td>
          <td></td>
        </tr>
        <tr>
          <td>Ice Affrinity (Lv.13) 氷襲 Star Appraisal Jewelry</td>
          <td>Increases the rate at which Frozen Solid is inflicted when attacking enemies with Ice-elemental attacks.</td>
          <td>4</td>
          <td>Debilitation rate +</td>
          <td></td>
        </tr>
        <tr>
          <td>Weakening Bow (LV.35) 弱体魔弓</td>
          <td>Slows the rate at which your maximum recoverable health decreases from attacks.</td>
          <td>8</td>
          <td>It further slows the rate of decrease.</td>
          <td></td>
        </tr>
        <tr>
          <td>Life Spark (Lv.20) Special</td>
          <td>When near death, decreases the rate at which your maximum recoverable health decreases from attacks.</td>
          <td>7</td>
          <td>It further slows the rate of decrease.</td>
          <td></td>
        </tr>
        <tr>
          <td>Thunder Affinity (Lv.20) 雷襲 Wind Appraisal Jewerly</td>
          <td>Increases the rate at which Shock is inflicted when attacking enemies with Thunder-elemental attacks.</td>
          <td>4</td>
          <td>Debilitation rate +</td>
          <td></td>
        </tr>
        <tr>
          <td>Spirit Proficiency (Lv.25) 霊狙</td>
          <td>Increases damage dealt to Spirit-type enemies.</td>
          <td>7</td>
          <td>Damage +</td>
          <td>Death Knight, Mist Drake, Mist Wyrm, Black Knight, Mist Fighter, Mist Hunter, Mist Fighter, Mist Mage, Mist Warrior, Witch, Phantom Empress, Phantom Courier, Living Armor, Ghost</td>
        </tr>
        <tr>
          <td>Construct Proficiency (Lv.25) 造狙</td>
          <td>Increases damage dealt to magically constructed enemies.</td>
          <td>8</td>
          <td>Damage +</td>
          <td>Includes Golem and Machines (with the exception of Cursed and Goliaths), as well as Gargoyles</td>
        </tr>
        <tr>
          <td>Quick Healing (Lv.30) 快癒 Flower Appraisal Jewelry</td>
          <td>Increases your recovery power and decreases the rate at which your maximum recoverable health decreases from attacks.</td>
          <td>10</td>
          <td>Recovery power +</td>
          <td></td>
        </tr>
        <tr>
          <td>Spirit Safeguard (Lv.30) 霊護</td>
          <td>Decreases damage taken from spirit-type enemies.</td>
          <td>4</td>
          <td>Harm reduction +</td>
          <td></td>
        </tr>
        <tr>
          <td>Construct Safeguard (Lv.30) 造護</td>
          <td>Decreases damage taken from magically constructed enemies.</td>
          <td>5</td>
          <td>Harm reduction +</td>
          <td></td>
        </tr>
        <tr>
          <td>Heal Extension (Lv.33) 延療 Dragon Appraisal Jewelry (Elemental Archer)</td>
          <td>Increases the duration of spheres left by magic arrows with healing or recovery properties.</td>
          <td>10</td>
          <td>Duration +</td>
          <td>Healing Bolt and Curing Bolt affected.</td>
        </tr>
        <tr>
          <td>Holy Affinity (Lv.35) 聖襲 Moon Appraisal Jewelry</td>
          <td>Increases the rate at which Holy Drain is inflicted when attacking enemies with Holy-elemental attacks.</td>
          <td>5</td>
          <td>Debilitation rate +</td>
          <td></td>
        </tr>
        <tr>
          <td>Dark Affinity (Lv.35) 闇襲 Wind Appraisal Jewerly</td>
          <td>Increases the rate at which Blind is inflicted when attacking enemies with Dark element attacks.</td>
          <td>5</td>
          <td>Debilitation rate +</td>
          <td></td>
        </tr>
        <tr>
          <td>United Energy (Lv.40) 一勢 Dragon Appraisal Jewelry (Elemental Archer)</td>
          <td>Increases the rate at which your magic power increases when hitting multiple enemies with Magic Eye.</td>
          <td>15</td>
          <td>Rate +</td>
          <td></td>
        </tr>
        <tr>
          <td>Quick Arrow (Lv.40) 迅矢 Dragon Appraisal Jewelry (Elemental Archer)</td>
          <td>Increases the flight speed of your magic arrows.</td>
          <td>5</td>
          <td>Speed +</td>
          <td></td>
        </tr>
        <tr>
          <td>Mending (Lv.40)</td>
          <td>When near death, it automatically recovers health, but taking damage will temporarily cancel the effect.</td>
          <td>7</td>
          <td>Health recovery +</td>
          <td></td>
        </tr>
        <tr>
          <td>Heal Thyself (Lv.40) 自療 Dragon Appraisal Jewelry (Elemental Archer)</td>
          <td>Increases the amount healed by the Healing Dress.</td>
          <td>6</td>
          <td>Health recovery +</td>
          <td></td>
        </tr>
        <tr>
          <td>Deathly Devour (Lv.40)</td>
          <td>Recovers health when you land the final blow on an enemy.</td>
          <td>8</td>
          <td>Health recovery +</td>
          <td></td>
        </tr>
        <tr>
          <td>Lengthy Assistance (Lv.45) 拡助 Dragon Appraisal Jewelry (Elemental Archer)</td>
          <td>Increases the "fair timing" window of tracking targets a second time with Magick Eye to fire a stronger magic arrow.</td>
          <td>7</td>
          <td>Time window +</td>
          <td>(My opinion: If you don't know, you can release any skill when the second round of the circle is filled. If you release the skill in time, the circle will flash. This responsibility extends the valid release time only</td>
        </tr>
        <tr>
          <td>Self Feedback (Lv.45) 自回 Moon Appraisal Jewerly</td>
          <td>Recovers health by damaging enemies.</td>
          <td>9</td>
          <td>Health recovery +</td>
          <td></td>
        </tr>
        <tr>
          <td>Persistent Arrow (Lv.45) 執矢</td>
          <td>Increases the tracking power of magic arrows and allows them to follow targets more accurately.</td>
          <td>6</td>
          <td>Tracking Power +</td>
          <td></td>
        </tr>
        <tr>
          <td>Quick Healing (Lv.45) More</td>
          <td>Increases recovery speed when affected by healing magic.</td>
          <td>7</td>
          <td>Recovery speed +</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  
    {% include page-heading.html heading="Blood Orb Tree Passive Skills" %}
    <table border='1'>
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
          <td>Seeker: Assassin The arrow falls</td>
          <td>Increases the damage of Seeker Arrows.</td>
          <td>3</td>
          <td>Damage + L6: Hit Power +</td>
          <td></td>
        </tr>
        <tr>
          <td>Help Arrow: Sukeya Ei Chant</td>
          <td>Increases healing from Aid Arrows.</td>
          <td>4</td>
          <td>Heal + L6: Casting speed +</td>
          <td></td>
        </tr>
        <tr>
          <td>Forward Kick: Slayer Defeat with One Kick</td>
          <td>Increases the damage of Forward Kick.</td>
          <td>2</td>
          <td>Damage + L6: Hit Power +</td>
          <td></td>
        </tr>
        <tr>
          <td>Steady forward fast forward</td>
          <td>After leaving the White Dragon Temple, maximum stamina temporarily increases.</td>
          <td>6</td>
          <td>Maximum resistance +</td>
          <td>Duration about 30m</td>
        </tr>
        <tr>
          <td>Invigorating Arrows: Duration Evidence of Fen Ya</td>
          <td>Increases the amount of stamina recovery on targets hit by or around the recovery field.</td>
          <td>3</td>
          <td>Stamina Recovery + L6: Duration +</td>
          <td></td>
        </tr>
        <tr>
          <td>Demon Shield Demon Shield</td>
          <td>Increase magical defense.</td>
          <td>4</td>
          <td>Magic Defense +</td>
          <td></td>
        </tr>
        <tr>
          <td>Finder arrows: blink Shun Touya</td>
          <td>Increases the damage of Seeker Arrows.</td>
          <td>5</td>
          <td>Damage + L6: On a successful "just release" damage +</td>
          <td></td>
        </tr>
        <tr>
          <td>Help arrows: blink Sukeya Shun</td>
          <td>Increases healing from Aid Arrows.</td>
          <td>5</td>
          <td>Heal + L6: On a successful "just release" heal +</td>
          <td></td>
        </tr>
        <tr>
          <td>Front Kick: Crusher A crushing kick</td>
          <td>Increases the damage of Forward Kick.</td>
          <td>2</td>
          <td>Damage + L6: Exhaustion attack + L6: Casual attack +</td>
          <td></td>
        </tr>
        <tr>
          <td>Magic of Salvation Hail the devil</td>
          <td>After reviving a party member, increases Magick Attack for a period of time.</td>
          <td>4</td>
          <td>Duration +</td>
          <td>Pawns cannot use this.</td>
        </tr>
        <tr>
          <td>Arrow of Revitalization: Expand Hiro Ikuya</td>
          <td>Increases the amount of stamina recovery from Invigorating Arrow.</td>
          <td>3</td>
          <td>Stamina Recovery + L6: Sphere Range +</td>
          <td></td>
        </tr>
        <tr>
          <td>Revealing Counter-Eye</td>
          <td>The exposure duration of the secret cores revealed by Magick Eye: True Aid is greatly extended.</td>
          <td>6</td>
          <td>Duration +</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  
    {% include page-heading.html heading="Core Skills" %}
    <table border='1'>
      <thead>
        <tr>
          <th>Skill Name</th>
          <th>Overview</th>
          <th>Notes and usage</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Seeker Stance</td>
          <td>Hold the Magic Bow forward and create Seeking Arrows. Can be activated even while in the air.</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Magick Eye: Seeker 闘波の魔眼</td>
          <td>Turn the Magic Bow towards the enemy and capture them in your sights. The more enemies you target, the higher the attack rate of the Seeking Arrow. It can be activated even while in the air.</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Seeker Arrow</td>
          <td>Fire the Seeking Arrow towards the target enemy. Can be activated even while in the air.</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Concentration: Seeker (LV.13) 闘波の集中</td>
          <td>Increases the damage of Seeking Arrow. Can be activated even while in the air.</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>True Aid Stance 助真の構え</td>
          <td>Hold the Magic Bow forward and create True Aid Arrows. Can be activated even while in mid-air.</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Magick Eye: True Aid 助真の魔眼</td>
          <td>Face the Magic Bow towards an ally and capture them in your sights. The more allies targeted, the higher the attack rate of True Aid Arrow will be. Can be activated even while in the air.</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>True Aid Arrow</td>
          <td>Fire the True Aid Arrow at a target ally and heal their wounds. Can be activated even while in the air.</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Concentration: True Aid (LV.9) 助真の集中</td>
          <td>Increases the recovery power of True Aid Arrow. Can be activated even while in the air.</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Front Kick</td>
          <td>Kicks forward. Can be activated even while in the air.</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Healing Shroud</td>
          <td>Heal your wounds. Can be activated even while in the air.</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>God's Eye: Aim (LV.16) 狙いの神眼</td>
          <td>Increases the maximum number of targets that can be locked on while aiming. Can be activated even while in the air.</td>
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