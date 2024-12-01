---
layout: default
title: Hunter
id: hunter
description:
main_color: red-600
---

<div class="margin-center-90">
  {% include page-heading.html heading="Hunter (Attacker)" %}

  {% capture hunter_overview %}
    The Hunter is a ranged combat specialist in Dragons Dogma Online, focusing on precision archery, mobility, and strategic damage dealing. 
    Masters of the bow, Hunters excel at picking off enemies from a distance while maintaining exceptional mobility.
  {% endcapture %}

  {% include card-with-image.html src="hunter-portrait.png" heading="Overview" content=hunter_overview %}

  {% include card-section-start.html %}
    <h2 class="text-2xl font-semibold mb-4">Key Characteristics</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>Exceptional long-range damage output</li>
      <li>High mobility and evasive capabilities</li>
      <li>Precision targeting and weak point exploitation</li>
      <li>Versatile combat positioning</li>
      <li>Light armor for increased movement speed</li>
    </ul>
  {% include card-section-end.html %}

  {% include card-section-start.html %}
    <h2 class="text-2xl font-semibold mb-4">Core Combat Mechanics</h2>
    <div class="space-y-4">
      <div>
        <h3 class="font-bold text-gray-700 mb-2">Bow Techniques</h3>
        <p>Hunters utilize advanced archery skills, including rapid fire, charged shots, and precision aiming. They
          can quickly switch between different arrow types to adapt to various combat scenarios.</p>
      </div>
      <div>
        <h3 class="font-bold text-gray-700 mb-2">Tactical Positioning</h3>
        <p>Leveraging terrain and movement, Hunters create optimal firing positions, avoiding enemy attacks while
          maintaining consistent damage output.</p>
      </div>
    </div>
  {% include card-section-end.html %}

  {% include card-section-start.html %}
    <h2 class="text-2xl font-semibold mb-4">Recommended Play Style</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>Maintain maximum distance from enemies</li>
      <li>Target enemy weak points for critical damage</li>
      <li>Provide consistent ranged support to the party</li>
      <li>Use mobility to avoid direct confrontation</li>
      <li>Adapt arrow types to different enemy vulnerabilities</li>
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
          <td>Threefold Arrow 連なり射ち</td>
          <td>Column 1</td>
          <td>Call</td>
          <td>No. of arrows 3 -> 5</td>
          <td>Fire 3 to 5 arrows in very quick succession at enemies. If they all hit, you will surprise a large enemy.
          </td>
        </tr>
        <tr>
          <td>Puncture Dart (lv.3) 貫き射ち</td>
          <td>Fire a slow arrow capable of passing through multiple enemies and boss body parts</td>
          <td>Call</td>
          <td>Shortens the hit range</td>
          <td>Fires a slow arrow capable of passing through multiple enemies, and can also pass through multiple body
            parts of even larger enemies, causing damage to each part pierced. It is also great for applying debuffs with
            weakening arrows to bosses with long bodies.</td>
        </tr>
        <tr>
          <td>Triad Shot (lv.6) Special</td>
          <td>Shoot three arrows in a wedge pattern or Shoot three arrows in a twist</td>
          <td>Call</td>
          <td>No. of arrows 3 -> 5</td>
          <td>Fire 3 arrows in a ranged formation. The arrows have a slight up and down deflection, making the skill feel
            a bit more like a shotgun blast than an explosive shot. These arrows deal more damage than the Triple Arrow
            and are the hunter's main dps on the boss kill.</td>
        </tr>
        <tr>
          <td>Flying Din (lv.6) 仕込み爆音矢</td>
          <td>Fire a fast-moving arrow that explodes on impact or at maximum range, creating a burst of air pressure with
            a high rate of climb. *This skill does not deal damage</td>
          <td>Greater impact</td>
          <td>Increased explosion radius</td>
          <td>If activated early, Crimson Arrow will still deal explosive damage. This ability will knock Light class
            enemies into the air.</td>
        </tr>
        <tr>
          <td>Cloudburst Volley</td>
          <td>Expand all arrows to increase area. * Area of effect scales with amount of arrows spent.</td>
          <td>Call</td>
          <td>Number of accesses increased</td>
          <td>Great for landing AoE headshots on any bipedal creature, or whenever you have trouble landing a clean shot.
            The more arrows you have, the more “rain” will remain.</td>
        </tr>
        <tr>
          <td>Whirling Arrow (lv.13) 渦巻き射ち</td>
          <td></td>
          <td>Call</td>
          <td>cat</td>
          <td>Shoot an arrow that pierces an enemy. Hit up to 5 times based on level. It can be used with different types
            of arrows to efficiently process status conditions due to launching multiple hits for a single arrow. Also
            with the passive right , the proc nerf would be even faster</td>
        </tr>
        <tr>
          <td>Crimson Arrow (lv.20) 紅蓮爆矢</td>
          <td></td>
          <td>Call</td>
          <td>Trail Expansion</td>
          <td>After a short charge, an explosive effect is applied to all charged arrows, causing a stun and additional
            damage, while also causing explosive arrows to detonate on impact, which will also cause a slow burn.</td>
        </tr>
        <tr>
          <td>Full Bend (lv.25) 剛力射ち</td>
          <td>Draw the bow completely, causing more damage with the time spent charging.</td>
          <td>Call</td>
          <td>Allows for longer loading time</td>
          <td>Very high speed arrow. Releasing the arrow as the bar fills and your character glows will increase the
            damage.</td>
        </tr>
        <tr>
          <td>Explosive Arrow Volley (lv.30) 降らし爆炎矢</td>
          <td>After charging, fire explosive arrows in a line pattern in front of you that detonate after a certain amount
            of time or if manually damaged</td>
          <td>Call</td>
          <td>Allows you to charge for longer to fire 5 arrows instead of 3</td>
          <td>The Crimson Arrow buff causes arrows to detonate on impact. It does a lot of damage, but the pattern makes
            it unsuitable for use in many situations, and the charge time is also very long.</td>
        </tr>
        <tr>
          <td>Storm Arrow (lv.35) 矢継ぎ嵐</td>
          <td>Shoot arrows at a fast pace with each attack. In the final stage, make a long disadvantage to land a strong
            kick.</td>
          <td>Call</td>
          <td>Increases attack speed</td>
          <td>Using this skill turns you into a siege machine. You are pinned to the ground while using it, and the last
            shot cannot be canceled without the help of Backward Retreat. Use this skill with planning, timing, and
            positioning, or else you will get hit more often than not. It also has high impact resistance to stagger.</td>
        </tr>
        <tr>
          <td></td>
          <td>Shoots an arrow, after charging, that decreases the enemy's resistance when hitting the weak point.
          </td>
          <td>Call</td>
          <td>Reduces loading time</td>
          <td>If you release the arrow at the right time when the charging is finished, the power and the amount of energy
            you decrease are greater. (You will notice when stones appear on the ground, by the power of the arrow).</td>
        </tr>
        <tr>
          <td>Sky Burst Shot</td>
          <td>Launch an explosive arrow into the air that explodes in a circular pattern</td>
          <td>Call</td>
          <td>Increase in the number of explosions</td>
          <td>The preparation animation can be canceled by recoiling backwards before shooting. The height of the
            explosion can be adjusted by pressing the power button. Mainly used to fly enemies. Energy damage is extremely
            low.</td>
        </tr>
        <tr>
          <td>Combined Pierce Shot</td>
          <td> Unite all the arrows without trembling, and release with all the strength of your body.</td>
          <td>Call</td>
          <td>Increases maximum charge (2 → 3) and reduces the number of button presses required to advance to the next
            charge level.</td>
          <td>Can be activated by climbing an enemy.</td>
        </tr>
      </tbody>
    </table>
  
    {% include page-heading.html heading="Passive Skills" %}
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
          <td>Precision (Lv.3) 精密 Dragon Appraisal Jewelry (Hunter)</td>
          <td>Keep arrows away from the mark while moving</td>
          <td>4</td>
          <td>Further decreases the deviation</td>
          <td></td>
        </tr>
        <tr>
          <td>Delayed Explosion (lv.3) 遅爆</td>
          <td>Extend the length of time that explosive arrows extend</td>
          <td>3</td>
          <td>It also prolongs the time</td>
          <td></td>
        </tr>
        <tr>
          <td>Hidden Potential (lv.9) 底力</td>
          <td>The power of breath increases when death comes</td>
          <td>6</td>
          <td>Increases blow power</td>
          <td>Increases your breath power by 75 at level 6.</td>
        </tr>
        <tr>
          <td>Damping (lv.13)</td>
          <td>Less recoil after shooting</td>
          <td>3</td>
          <td>Decrease support further</td>
          <td>Very useful for keeping your sights on a downed enemy's weak spot without having to readjust recoil when spamming the Triad.</td>
        </tr>
        <tr>
          <td>Concentration (lv.13) Special</td>
          <td>You get more time to recharge</td>
          <td>6</td>
          <td>Extends the time even further</td>
          <td></td>
        </tr>
        <tr>
          <td>Sturdy Stance (lv.13) Special</td>
          <td>Resistance recovers as the bow is ready</td>
          <td>7</td>
          <td>Further increases stamina recovery</td>
          <td>This is when you are aiming your sights. It only works when you want to take normal shots. Charging any skill will completely stop stamina regeneration. At level 6, your stamina will recover faster when aiming than when neutral.</td>
        </tr>
        <tr>
          <td>Perfect Reload (Lv.20) 匠填 Dragon Appraisal Jewelry (Hunter)</td>
          <td>Increases the size of the big! on the recharge bar</td>
          <td>8</td>
          <td>Extends the time window</td>
          <td></td>
        </tr>
        <tr>
          <td>Oni Proficiency (lv.20) 鬼狙</td>
          <td>Deal more damage to the Oni</td>
          <td>9</td>
          <td>Increases damage</td>
          <td>This category includes all (non-infected) Orc, Ape and Ogre types.</td>
        </tr>
        <tr>
          <td>Winged Proficiency (lv.25) 翼狙</td>
          <td>Deals more damage to winged enemies</td>
          <td>6</td>
          <td>Increases damage</td>
          <td>Includes all Griffin, Sphynx and Cockatrice types (uninfected/aliquoted), Harpy, Bee and Strix types</td>
        </tr>
        <tr>
          <td>Oni Safeguard (lv.30) Special</td>
          <td>Oni deals less damage to you</td>
          <td>5</td>
          <td>Reduce damage</td>
          <td></td>
        </tr>
        <tr>
          <td>Winged Safeguard (lv.30) 翼護</td>
          <td>Winged enemies deal less damage to you.</td>
          <td>3</td>
          <td>Reduce damage</td>
          <td></td>
        </tr>
        <tr>
          <td>Skilled Reload (Lv.33) 巧填 Dragon Appraisal Jewelry (Hunter)</td>
          <td>Stamina regenerates when you perform a perfect active reload</td>
          <td>4</td>
          <td>Further increases stamina restoration</td>
          <td></td>
        </tr>
        <tr>
          <td>Arrow Increase (Lv.33) 充矢 Dragon Appraisal Jewelry (Hunter)</td>
          <td>Increases the number of arrows in the quiver</td>
          <td>9</td>
          <td>Increases arrow count</td>
          <td>At level 6, increase by 12 arrows</td>
        </tr>
        <tr>
          <td>Menacing Form (lv.35)</td>
          <td>Increases stamina during bow pose</td>
          <td>7</td>
          <td>Further decreases the chance of balance</td>
          <td></td>
        </tr>
        <tr>
          <td>Heart Shot (lv.35) Special</td>
          <td>Impact force increases if hit in the optimal range</td>
          <td>7</td>
          <td>Increases scalable power</td>
          <td></td>
        </tr>
        <tr>
          <td>Decisive Shot (lv.35)</td>
          <td>Take more damage to monster weaknesses and less damage to any part of the monster that isn't a weakness</td>
          <td>7</td>
          <td>Hard</td>
          <td>Works best on heads when they are down for easy access to the weak spot with a fully charged full spin tends to add around 200 or more damage to a perfect shot PS: It is active when the boss is down Damage increased by 30%</td>
        </tr>
        <tr>
          <td>Enhancement (lv.40)</td>
          <td>Impact force increases if HP is greater than a certain value</td>
          <td>5</td>
          <td>Increases scalable power</td>
          <td></td>
        </tr>
        <tr>
          <td>Aggression Arrow (Lv.40) 侵矢 Dragon Appraisal Jewelry (Hunter)</td>
          <td></td>
          <td>6</td>
          <td>Increases status effectiveness</td>
          <td>If used with spinning arrow, you can apply effects very quickly.</td>
        </tr>
        <tr>
          <td>Tonic (Lv.40)</td>
          <td>The impact force increases if the resistance is greater than a certain amount</td>
          <td>4</td>
          <td>Increases scalable power</td>
          <td></td>
        </tr>
        <tr>
          <td>Reload Force (LV.40)</td>
          <td>Takes less damage while reloading</td>
          <td>3</td>
          <td>Reduces damage taken</td>
          <td>Reduces 60% damage at level 6. Combine with other damage reduction skills (monster protection skills, anti-elemental priest skills, divine protection skills) and meat buff, a hunter can become invincible while reloading. You can purposely miss a perfect reload to increase the duration.</td>
        </tr>
        <tr>
          <td>Shadow Attack (LV.40) Special</td>
          <td>Damage increases if you attack an unconscious enemy (attack made outside of 'In Combat'?)</td>
          <td>5</td>
          <td>Increases damage dealt</td>
          <td>Increase damage INSANELY if enemy is DOWN and inflicted with Frost, Gold or Petrification status.</td>
        </tr>
        <tr>
          <td>Pleasant Attack (LV.45) 快撃</td>
          <td>Damage is further increased when hitting enemies at an optimal distance</td>
          <td>15</td>
          <td>Increases attack power</td>
          <td></td>
        </tr>
        <tr>
          <td>Attack Expansion (LV.45) 拡撃</td>
          <td>The ideal range increases.</td>
          <td>15</td>
          <td>Increases range</td>
          <td></td>
        </tr>
        <tr>
          <td>Herculean Strength (Lv.45) 剛力 Star Appraisal Jewelry</td>
          <td>Increases scalable power</td>
          <td>8</td>
          <td>Increases scalable power</td>
          <td></td>
        </tr>
        <tr>
          <td>Tough Skin (Lv.45) 硬皮 Flower Appraisal Jewelry</td>
          <td>Reduces damage taken from piercing and projectile attacks.</td>
          <td>8</td>
          <td>Further reduces the chance of getting confused</td>
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
          <th>AP Cost / BO Cost</th>
          <th>Level change</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Archery: Slayer Previous Post</td>
          <td>Increases the damage of your basic arrow attacks</td>
          <td>3</td>
          <td>Damage Increase, Lv5~6 Strength Increase</td>
          <td></td>
        </tr>
        <tr>
          <td>Exploding Arrow: Savage 爆矢烈</td>
          <td>Increases explosive arrow damage</td>
          <td>3</td>
          <td>Damage increase, status effect rate increase Lv5~6</td>
          <td></td>
        </tr>
        <tr>
          <td>Arrowhead Strike: Savage 矢斬烈</td>
          <td>Increases damage of arrowhead attack</td>
          <td>3</td>
          <td>Damage increase, status effect rate increase Lv5~6</td>
          <td></td>
        </tr>
        <tr>
          <td>Rigid Stance</td>
          <td>Increases physical and magical defense while aiming your bow.</td>
          <td>5</td>
          <td>Further increases defense</td>
          <td></td>
        </tr>
        <tr>
          <td>Keensight Shot: Slayer 静射倒</td>
          <td>Increases Keensight shot damage</td>
          <td>3</td>
          <td>Damage Increase, Lv5~6 Strength Increase</td>
          <td></td>
        </tr>
        <tr>
          <td>Rescue Assistance</td>
          <td>When reviving a party member, they will take less physical damage for a period of time.</td>
          <td>5</td>
          <td>Increases the duration of the effect</td>
          <td></td>
        </tr>
        <tr>
          <td>Archery: Crusher</td>
          <td>Increases the damage of your basic arrow attacks</td>
          <td></td>
          <td>Further increases damage, Lv.5~6 increases chance and exhausts attack</td>
          <td></td>
        </tr>
        <tr>
          <td>Exploding Arrow: Crusher 爆矢砕</td>
          <td>Increases explosive arrow damage</td>
          <td></td>
          <td>Further increases damage, Lv.5~6 increases the power of blow force</td>
          <td></td>
        </tr>
        <tr>
          <td>Arrowhead Strike: Crusher 矢斬砕</td>
          <td>Increases damage of arrowhead attack</td>
          <td></td>
          <td>Further increases damage, Lv.5~6 increases the power of blow force</td>
          <td></td>
        </tr>
        <tr>
          <td>Augmented Spirit</td>
          <td>Increases resistance</td>
          <td>5</td>
          <td>Resistance increases further</td>
          <td></td>
        </tr>
        <tr>
          <td>Keensight Shot: Crusher 静射砕</td>
          <td>Increases Keensight shot damage</td>
          <td></td>
          <td>Further increases damage, Lv.5~6 increases the power of blow force</td>
          <td></td>
        </tr>
        <tr>
          <td>Climax Bow</td>
          <td>Increases the damage of the triple shot arrow obtained with a perfect reload.</td>
          <td></td>
          <td>Further increases damage</td>
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
          <th>Notes and usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Quick Bow Style (Lv. 6) 速弓の型</td>
          <td>Allows for faster preparation of the next arrow after firing.</td>
          <td></td>
        </tr>
        <tr>
          <td>Quick Charge Style (Lv. 9) 速仕型型</td>
          <td>Preparing explosive arrows is faster.</td>
          <td></td>
        </tr>
        <tr>
          <td>Keensight (Lv. 13) しじま射ち</td>
          <td>You enter sniper mode when you press R3/Middle mouse in target mode. You cannot move and your vision is limited, but you deal more damage/explosive power and have a longer range with 100% accuracy.</td>
          <td></td>
        </tr>
        <tr>
          <td>(Floor)</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Aim for more information</td>
          <td>Hold L1/R1 or the right mouse button to aim your bow, allowing you to fire. The optimal range is indicated by a red bar in the middle of the reticle and will deal the most damage.</td>
          <td></td>
        </tr>
        <tr>
          <td>Loose space</td>
          <td>While holding L1, press L2 or R2 to fire an arrow. Can be fired into the air.</td>
          <td></td>
        </tr>
        <tr>
          <td>Explosive Stance</td>
          <td>Hold R1 to aim a shot that explodes after a short delay. Any physical or magical attack can trigger the explosion sooner and deal greater damage.</td>
          <td></td>
        </tr>
        <tr>
          <td>Explosive Arrow 仕込み爆矢射ち</td>
          <td>While holding R1, press L2/R2 to shoot. Can be fired into the air.</td>
          <td></td>
        </tr>
        <tr>
          <td>Reload Arrows</td>
          <td>While holding L1/R1, press O to reload your arrows.</td>
          <td></td>
        </tr>
        <tr>
          <td>Adept Reload</td>
          <td>Pressing O while reloading, with proper timing, will speed up the reloading arrows. Stopping at the dark blue part of the bar will result in a "Great!" reloading, increasing the number of arrows loaded. Staying blank will give a "Miss!" and the reloading will be delayed.</td>
          <td></td>
        </tr>
        <tr>
          <td>Switch Arrows</td>
          <td>Pressing triangle will switch between your default arrows and 2 other types of equipped arrows. (Must be equipped in the status/equipment menu)</td>
          <td></td>
        </tr>
        <tr>
          <td>Front Kick</td>
          <td>Kick an enemy to retreat. Can be used in the air.</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>