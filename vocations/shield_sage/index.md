---
layout: default
title: Shield Sage
id: shield-sage
description:
main_color: blue-600
---

<div class="margin-center-90">
  {% include page-heading.md heading="Shield Sage (Tank)" %}

  {% include card-with-image.md src="shield-sage-portrait.png" heading="Overview" content="The Shield Sage is a
  defensive vocation in Dragons Dogma Online, specializing in protection and limited elemental magic support. Armed
  with a greatshield, this vocation can attract enemy attention away from other party members while providing crucial
  battlefield support." %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Key Characteristics" %}
    <ul class="list-disc list-inside space-y-2">
      <li>Primary weapon: Greatshield</li>
      <li>Available from the start of the game</li>
      <li>Ability to generate a power gauge through attacks</li>
      <li>Can enchant allies and self using power gauge</li>
      <li>Capable of drawing enemy attention (aggro)</li>
      <li>Limited offensive elemental magic capabilities</li>
    </ul>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Core Combat Mechanics" %}
    <div class="space-y-4">
      <div>
        {% include card-section-sub-header.md heading="Power Gauge System" %}
        <p>The Shield Sage builds a power gauge through combat actions. This gauge serves multiple purposes: enchanting
          allies, self-buffing, and casting offensive spells. The gauge management is crucial to the vocation's
          effectiveness.</p>
      </div>
      <div>
        {% include card-section-sub-header.md heading="Defensive Capabilities" %}
        <p>Utilizing a greatshield, the Shield Sage can protect themselves and attract enemy attention, creating space
          and protection for more vulnerable party members. This tanking ability is complemented by their magical
          support skills.</p>
      </div>
    </div>
  {% include card-section-end.md %}

  {% include card-section-start.md %}
    {% include card-section-header.md heading="Recommended Play Style" %}
    <ul class="list-disc list-inside space-y-2">
      <li>Manage power gauge strategically</li>
      <li>Use aggro-drawing abilities to protect party members</li>
      <li>Provide elemental magic support</li>
      <li>Leverage greatshield for both offense and defense</li>
      <li>Coordinate with party to maximize defensive potential</li>
    </ul>
  {% include card-section-end.md %}

  {% include page-heading.md heading="Custom Skills" %}
  <div class="overflow-x-auto">
    <table>
      <thead>
        <tr>
          <th>Skill Name</th>
          <th>Overview</th>
          <th>LvUp Change</th>
          <th>Lv6 Change</th>
          <th>Available Force Gauge</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Force Shield (LV.1) フォースシールド</td>
          <td>Self-buff. Blocking releases a small magical burst of the selected element. Only Guards deal increased damage.</td>
          <td>Increased duration</td>
          <td>Damage increase</td>
          <td>-</td>
          <td>Can easily apply status with an active element enchantment.</td>
        </tr>
        <tr>
          <td>Slow Light (LV.3) スローライト</td>
          <td>Induces Torpor on enemies within a radius after a short period of time. *Automatically consumes a Force Gauge to improve skill performance</td>
          <td>Torpor debuff stack rate increases</td>
          <td>Range expansion</td>
          <td>Status starts at a higher level and increases rapidly.</td>
          <td>The longest lasting crowd control of any crowd control also affects the most bosses. Does not work on Formless, but works on some Spirit types</td>
        </tr>
        <tr>
          <td> Hypnos Light ヒュブノスラ仆</td>
          <td>Induces sleep in enemies within a conal radius after a short period of time. *Automatically consumes a Force Gauge to improve skill performance</td>
          <td>Sleep debuff accumulation rate increases</td>
          <td>Range expansion</td>
          <td>Status starts at a higher level and increases rapidly.</td>
          <td>Actions that would reduce enemy stamina will have greater effect while asleep. (i.e. attacking exposed weak point; shaking.) Some bosses' stamina gauge will disappear from the UI when put into sleep mode - the stamina gauge will still deplete accordingly. DO NOT STOP.</td>
        </tr>
        <tr>
          <td>Rampart Raid (LV.6) ランパートレイド</td>
          <td>Charge forward with your shield, dealing multiple blows, ending with a high-damage strike. *Automatically consumes a Force Gauge to improve skill performance</td>
          <td>Increases damage</td>
          <td>Increases the distance charged and the number of hits</td>
          <td>Damage increase</td>
          <td>Useful for damaging easily staggered enemies and downed bosses.</td>
        </tr>
        <tr>
          <td>Elemental Glow (LV.13) エレメントグロウ</td>
          <td>Area buff. Increases resistance to elements and elemental ailments based on the caster's weapon element. *Automatically consumes one Force Gauge to improve skill performance</td>
          <td>Increase % resistance</td>
          <td>Range expansion</td>
          <td>Increased duration</td>
          <td>This skill doesn't work well against pawns, but it's a great skill when you use it against Lind or Fire Golem</td>
        </tr>
        <tr>
          <td>Earth Shake (LV.13) アースシェイク</td>
          <td>Slams the ground, knocking enemies off balance. Does NOT deal damage.</td>
          <td>Reduce launch time</td>
          <td>Range expansion</td>
          <td>-</td>
          <td>Greatly affects the balance of large and boss type enemies. (i.e. Orcs and Cyclopes) Level 6 change is increased radius</td>
        </tr>
        <tr>
          <td>Binding Anchor (LV.20) バインドアンカー</td>
          <td>Hold an enemy down while you keep the skill active. Larger enemies will receive reduced stats.</td>
          <td>Reduce stamina consumption</td>
          <td>Range expansion</td>
          <td>-</td>
          <td>Linked enemies will receive x3 damage. Increase defense down, magic defense down, attack down, magic attack down</td>
        </tr>
        <tr>
          <td> Holy Wall (LV.25) セントウォール</td>
          <td>Auto-buff. Expands block radius, allows blocking from sides.</td>
          <td>Increased duration</td>
          <td>360° Coverage</td>
          <td>-</td>
          <td>Perfect for dealing with large numbers of enemies or anything with an area attack that can hit behind you.</td>
        </tr>
        <tr>
          <td>Element Light (LV.30) エレメントライト</td>
          <td>"Induces Decreased Elemental Resistance on enemies within a conal radius after a short period of time, depending on the current enchantment. *Automatically consumes a Power Gauge to improve skill performance"</td>
          <td>Elemental resistance debuff stacking rate increases</td>
          <td>Range expansion</td>
          <td>Status starts at a higher level and increases rapidly.</td>
          <td>The wizards will love you.</td>
        </tr>
        <tr>
          <td>Burst Stance (LV.30) ストーンライト</td>
          <td>Enters a stance that will counter the next attack.</td>
          <td>Damage increase</td>
          <td>The duration of the posture increases</td>
          <td>increases the number of blows and pushes</td>
          <td>Can be 'just guarded' - Just Guard will grant the user invincibility, as well as increasing stun at an alarming rate (3 perfect bursts are enough to stun a cyclops)</td>
        </tr>
        <tr>
          <td>Hands of God (LV.35) ハンズオブゴッド</td>
          <td>Creates an area that nullifies damage to allies</td>
          <td>Decreased launch time</td>
          <td>Range expansion</td>
          <td>-</td>
          <td>Does NOT cancel enemy status effect stacks. If you receive a status effect, you will be stunned, which means this skill will be canceled.</td>
        </tr>
        <tr>
          <td>Force Anchor フォースアンカー</td>
          <td>Shoot a light anchor and if it hits a target, it increases your power meter rapidly, as long as you don't cancel it.</td>
          <td>Decreases the stamina consumed when "anchoring"</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Stone Light ストーンライト</td>
          <td>Debuff Stone/Petrify similar to Slow Light</td>
          <td>Increased petrification power</td>
          <td>Range expansion</td>
          <td>Status starts at a higher level and increases rapidly.</td>
          <td></td>
        </tr>
        <tr>
          <td>Protection Swing プロテクションスイング</td>
          <td>Shake your shield while running around enemies.</td>
          <td>Energy boost even more</td>
          <td>Increases shield hold rate and number of hits</td>
          <td></td>
          <td>LV6: LV68 + Gorecyclops (x5) LV7: LV73+ Bifrest (x5) LV8: LV75 + Crazed Behemoth (x5) and White Griffin (x5) LV9: LV75 + Tarrasque (x3) LV10: LV75 + Wise Tarrasque (x5)</td>
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
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Counter (LV.1)</td>
          <td>Additional strength gauge gained when blocked attack matches player's current element.</td>
          <td>4</td>
          <td>Further increases the Power Meter.</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Adamance (LV.3)</td>
          <td>Reduce stamina lost after a successful block. (Works with fighter)</td>
          <td>3</td>
          <td>Further decreases Stamina consumption.</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td> Prominence (Lv.9)Dragon Appraisal Jewelry (Shield Sage)</td>
          <td>Increase Attract threat gain</td>
          <td>6</td>
          <td>Increase attention even further</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Supercharge (Lv. 13) 過給Dragon Appraisal Jewelry (Shield Sage)</td>
          <td>Increased Duration of Forced Enchantment</td>
          <td>7</td>
          <td>Increases duration even further</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Vibrant Defense (LV. 13)</td>
          <td>Reduced damage taken when staggered by overblocking</td>
          <td>3</td>
          <td>Reduces damage even further.</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Sanctuary (LV. 13)</td>
          <td>While in a “state of death”, physical and magical defense increased,</td>
          <td>6</td>
          <td>Further increases Defense and Magical Defense.</td>
          <td>Death status = below 15% HP, screen with red border</td>
          <td></td>
        </tr>
        <tr>
          <td>Perky 溌剌 (Lv. 20) Flower Appraisal Jewels</td>
          <td>Increases Strength after leaving the temple</td>
          <td>6</td>
          <td>Strength increases even further after leaving the temple</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td> Frugal Defense (Lv.25) Dragon Appraisal Jewelry (Shield Sage)</td>
          <td>Reduced h Gauge consumption</td>
          <td>9</td>
          <td>Increase the quantity even further.</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Prescience (LV.25)</td>
          <td>Just Guards are easier to execute (slightly improves the timing window).</td>
          <td>9</td>
          <td>Further extends the perfect blocking time window.</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Denial (LV.30)</td>
          <td>Damage taken is reduced after guard break (? This needs testing)</td>
          <td>3</td>
          <td>Reduces damage even further.</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Solid (LV.30)</td>
          <td>Increase Guard Power stat</td>
          <td>5</td>
          <td>Further increases the power of the guard.</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Trickle (LV.33)</td>
          <td>Force Gauge Gain Increase</td>
          <td>10</td>
          <td>It further increases the gain.</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Violent Release (Lv.33) 烈放 Dragon Appraisal Jewelry (Shield Sage)</td>
          <td>Increased potency of Force Burst status ailment</td>
          <td>10</td>
          <td>The rate of debilitation increases even further</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Dedication (Lv.35)</td>
          <td>Increase resistance to Magic Defense Down status</td>
          <td>4</td>
          <td>Further decreases the chance of distress.</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td> Perseverance(LV.35)</td>
          <td>Increase resistance to Low Physical Defense status</td>
          <td>4</td>
          <td>Further decreases the chance of distress.</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Holy Body (LV.35)</td>
          <td>Resist abnormal status from spells/curses</td>
          <td>5</td>
          <td>Further decreases the chance of distress.</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td> Fired up(LV.40)</td>
          <td>When health is above a certain level, increase physical and magical defense. (+15 at level 1, +5 at each subsequent level)</td>
          <td>7</td>
          <td>Further increases defense.</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td> Absorption(LV.40)</td>
          <td>Increases the strength meter gained from blocking</td>
          <td>10</td>
          <td>Further increases attack power consumption.</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td> Divert Energy (Lv.40) Dragon Appraisal Jewelry (Shield Sage)</td>
          <td>Stamina is restored when you receive guard action</td>
          <td>7</td>
          <td>Further increases recovered resistance</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td> Adaptation (Adaptation)</td>
          <td>The plow's operating time is reduced when staggering at the time of the shield and weapons at the time of the strike</td>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Barricade (Spanish)</td>
          <td>When resistance is greater than or equal to a constant, physical defense and magical defense strength increase.</td>
          <td>7</td>
          <td></td>
          <td>10,20,30</td>
          <td></td>
        </tr>
        <tr>
          <td>Invigorated (Lv.45) 活性 Star Appraisal Jewelry</td>
          <td>Max HP is increased</td>
          <td>8</td>
          <td></td>
          <td>200/250/300</td>
          <td></td>
        </tr>
        <tr>
          <td> Robust (Lv.45)Moon Appraisal Jewelry</td>
          <td>Increases physical defense and magical defense strength</td>
          <td>15</td>
          <td></td>
          <td>12 Def at level 3, not recommended unless you have nothing else to use</td>
          <td></td>
        </tr>
        <tr>
          <td>Tremor (Lv.45)</td>
          <td>Stamina recovers if the strength gauge is full (tbc)</td>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td> Lost Blade (Lv.45) SpecialMoon Appraisal Jewelry</td>
          <td>Increases resistance against slashing attacks</td>
          <td>8</td>
          <td></td>
          <td></td>
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
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Shield Blow: Slayer 盾打倒</td>
          <td>Increases Shield Bash damage</td>
          <td>3</td>
          <td>Damage increases even further</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Weak Light: Savage</td>
          <td>Increases Dim Light damage</td>
          <td>4</td>
          <td>Damage increases even further</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Protection</td>
          <td>Less likely to reduce max HP while defending</td>
          <td>3</td>
          <td>Increases the effect of the skill even further</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Force Burst: Crusher 攻爆砕</td>
          <td>Increases Force Burst damage</td>
          <td>4</td>
          <td>Damage increases further, Lv. 5~6 increases hit force power</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Shield Sequence: Savage 盾序烈</td>
          <td>Increases Shield Sequence damage</td>
          <td>3</td>
          <td>Damage increases further, Lv.5~6 Increases chance of inflicting abnormal status</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Attention 集視</td>
          <td>Attacks attract more attention from enemies</td>
          <td></td>
          <td>Increases the power of the attraction even further</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Shield Blow: Crusher 盾打砕</td>
          <td>Increases Shield Bash damage</td>
          <td></td>
          <td>Damage increases further, Lv. 5~6 increases hit force power</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Weak Light: Crusher 属照砕</td>
          <td>Increases Dim Light damage</td>
          <td></td>
          <td>Damage increases further, Lv. 5~6 increases hit force power</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Force Burst: Slayer 攻爆倒</td>
          <td>Increases Force Burst damage</td>
          <td></td>
          <td>Damage increases further, Lv. 5~6 increases hit force power</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Collapse Shield 盾崩</td>
          <td>Increases the power of the Hitting Strength of shield attacks</td>
          <td></td>
          <td>The power of the Strike Force increases even further</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Shield Sequence: Crusher 盾序砕</td>
          <td>Increases Shield Sequence damage</td>
          <td></td>
          <td>Damage increases further, Lv. 5~6 increases hit force power</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Pleasant Sight</td>
          <td>Decrease Attract Stamina consumption/More Attract</td>
          <td></td>
          <td>Further reduces Stamina consumption</td>
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
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> Penta Elemental Change(LV.9)</td>
          <td>Adds light and dark elements</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td> Shield Sequence(LV.13)</td>
          <td>Allows actions after blocking. (Forward-Forward) = Counterattack *High threat, will use Force Gauge; (Back-Back) = Evasion *Long retreat, very short invulnerability animation</td>
          <td> Counterattacking normally without using a Power Gauge will increase the threat level by about half, with a Power Gauge it will increase by 2 levels (2 arrows)</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td> More Attract(LV.20)</td>
          <td>Increase the range and power of Attract</td>
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