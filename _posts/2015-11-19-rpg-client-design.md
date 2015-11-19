---
title: Game development : Multiplayer Action RPG Design - Client
updated: 2015-11-19 00:57
---

# Multiplayer Action RPG Design - Client

## Commands

- 1 : direct damage (low cost)
- 2 : damage over time
- 3 : special
- 4 : area of effect
- defense: damage reduction cooldown
- boost: empower attacks

## Resources

Every player use mana to cast special attacks.
Every skills costs double mana with the boost effect active.

## Classes

### Warrior

#### Stats

- hp: 300
- mana: 150
- speed: 100

- 1 : slash (dd, medium cost, small aoe)
- 2 : rend (dot)
- 3 : overpower (proc)
- 4 : thunderclap (aoe, low damage)
- defense: shield block (damage reduction)
- 1 + boost: shield slam (dd, stun)
- 2 + boost: mortal strike (cooldown)
- 3 + boost: block (reaction, high damage)
- 4 + boost: dragon roar (aoe, snare)
- defense + boost: rage(health regen, mana regen, +damage)

#### Description
The warrior can sustain a lot of injuries and fight in melee range for a long period of time.
He has low mobility but high stamina and high sustained damage.

### Rogue

#### Stats

- hp: 150
- mana: 100
- speed: 300

- 1 : strike
- 2 : kick (timing, stun)
- 3 : throw weapon (medium range)
- 4 : execute (low health, high damage)
- defense: roll (damage reduction, short time, short cd)
- 1 + boost: eviscerate (proc, cooldown)
- 2 + boost: poison (timing)
- 3 + boost: spam of knives (cooldown, aoe)
- 4 + boost: backstab (positional, high damage)
- defense + boost: sprint (speed increase)

Rogue has fast, reactive gameplay, can do nice target swap and relies on high mobility.
He excels on high burst single target damage.
His weakness are derived on a high proc/cooldown dependency.

### Wizard

#### Stats

- hp: 100
- energy: 300
- speed: 150

- 1 : magic missile (dd, low cost)
- 2 : fireball (dot)
- 3 : frost wind (slow aoe)
- 4 : lightning (line)
- defense: ice block
- 1 + boost: curse (high cost)
- 2 + boost: dragon breath (aoe cone + dot, cooldown, high cost)
- 3 + boost: finger of death (dd, melee, high cost, on execute)
- 4 + boost: chain lightning (more damage, cone, high cost)
- defense + boost: evocation( mana regen, cooldown )

The wizard gameplay is around managing cooldown, mana and distance from enemies.
It's a really challenging class to master that excels on area damage.
His weakness is based on mana dependency for long fights and low resistance.
