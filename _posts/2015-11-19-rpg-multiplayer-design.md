---
title: Game development : Multiplayer Action RPG Design
updated: 2015-11-19 00:57
---

# Client

## Controls

Every character has 4 attack button plus two extra button: defense and boost.
Boost button acts as a modifier for every other attack, while the defense button usually serve as emergency cooldown.
If you combine your boost with the other 5 button you get a set of 10 actions.

| Key | Normal Effect | Boosted Effect |  
| --- | ------------- | ---------------|  
| 1   |               |                |
| 2   |               |                |
| 3   |               |                |
| 4   |               |                |
| def |               |                |  

If you press your boost button while moving, you'll be running in that direction, consuming 1% mana per second.

## Classes

### Warrior

#### Stats

| health | mana | speed |
| -------|------|-------|
| 300	 | 150  | 100   |

| Key | Normal Effect					| Boosted Effect 					|  
| --- | ------------------------------- | --------------------------------- |
| 1   | pierce (medium cost) 			| counterattack (proc, high damage)	|
| 2   | slash (medium cost, dot)		| whirlwind (aoe, cooldown)			|
| 3   | shield bash (stun, cooldown)	| block (channel, damage reduction)	|
| 4   | thunderclap (aoe, low damage)	| mighty roar (aoe, stun)			|
| def | go defensive (health regen, less damage) | go aggressive (increase damage, mana regen) |

#### Description
The warrior excels in close quarter battles and can sustain a lot of injuries, being able to fight for a long period of time
- has low mobility but high stamina 
- high sustained single target damage
- can swap fighting style between aggressive and defensive to better fit to the current situation
- aggressive stance increase the damage dealt and the mana regeneration to speed up the attacks
- defensive reduces damage taken and gives health regen
- the only defensive ability is block (boost + 3) that reduces the incoming damage in one direction while channeled

### Rogue

#### Stats

| health | mana | speed |
| -------|------|-------|
| 150	 | 100  | 300   |

| Key | Normal Effect 							| Boosted Effect 						|
| --- | --------------------------------------- | ------------------------------------- | 
| 1   | stab									| sneak attack (proc, timing) 			|
| 2   | kick (timing, stun, low cost)			| poison (cooldown) 					|
| 3   | throw weapon (medium range)				| spam of knives (cooldown, aoe) 		|
| 4   | backstab (positional, high damage) 		| finish him (low health, high damage)	|
| def | roll (enable sneak attack, cooldown) 	| sprint (speed increase, cooldown) 	|

Rogue has a fast, reactive gameplay; 
- excels on high burst single target damage and target swapping.
- His weakness come from a high proc/cooldown dependency and low mana
- cant stay longer period in close range with enemies
- can finish off low health mobs faster than other classes
- his defense is based on being in the right spot at the right moment
- low mana means he can run out of mana quickly

### Wizard

#### Stats

| health | mana | speed |
| -------|------|-------|
| 100	 | 300  | 150   |

| Key | Normal Effect 								| Boosted Effect (channeling)									|
| --- | ------------------------------------------- | ------------------------------------------------------------- | 
| 1   | magic missile (low cost)					| lightning (line, short cooldown)								|
| 2   | acid arrow (dot, short cooldown)			| frost breath (slow aoe, channeling)							|
| 3   | fireball (aoe, dot, cooldown, high cost)	| earthquake (high damage, big aoe, channeled, long cooldown) 	|
| 4   | cure (high cost, healing, channeled) 		| finger of death (proc, melee, high cost, high damage) 		|
| def | force barrier (no damage in one direction) 	| evocation( mana regen, cooldown ) 							|

The wizard gameplay is around managing cooldown, mana and distance from enemies.
- It's a really challenging class to master 
- has a very flexible and bursty way of dealing damage to multiple enemies
- His weakness is based upon mana dependency and low physical resistance
- Many spells with cooldown means he have to think twice before spamming nukes around
- He can place a force barrier to block all the damage from one direction for a few seconds

### Bard

#### Stats

| health | mana | speed |
| -------|------|-------|
| 150	 | 200  | 200   |

| Key | Normal Effect 					| Boosted Effect (-all stacks) 				|
| --- | ------------------------------- | ----------------------------------------- | 
| 1   | do 								| sol (life bonus, high cost)				|
| 2   | re 								| la (mana bonus, high cost)				|
| 3   | mi 								| si (speed bonus, high cost)				|
| 4   | fa 								| start solo (damage increase, cooldown)	|
| def | cacophony (cone stun, -1 stack) | guitar smash (high damage, cooldown)		|

Bard gameplay is like playing guitar hero moving around the battlefield avoiding enemy attacks.
You dont have to aim at enemies, you are gonna hit them all anyway with your music.

- Every note you cast deals (0 to high) AoE damage to all the enemies on the screen.
- To increase the damage you have to pick the right notes with a perfect timing in a long streak.
- Every time you get a right note in time you earn a stack for 4 seconds, if you hit another correct note you refresh the duration
- 10 is the maximum number of stacks you can have, where you deal the highest damage
- More stacks you have, more fast the song became
- Every time you use a boosted note you get a particular bonus, getting back to 0 stacks
- When you play a wrong note you lose a stack, If you play the "wrongest" note, you lose 5 stacks
- When you get hit by an enemy you lose a stack
- The boost apply to all the party members, except for the "start solo" (boost+4)

# Boss Encounters

To give variety to the encounters some monsters will require a particular strategy to be killed, like damage reduction, aoe, weak spots, add summoning and so on.

## Examples

### Hugetron 3000, the Iron golem

- berserker: every 10% damage received, the golem deal an extra 5% damage, after 60% health this bonus doubles, after 30% triples.
- big smash: the golem aims a random party member to crush him with an astounding blow.

| health %  | damage bonus	|
| --------- | ------------- |
| 100-91	| 5%			|
| 90-81		| 10%			|
| 80-71		| 15%			|
| 70-61		| 20%			|
| 60-51		| 25% *2 = 50%	|
| 50-41		| 30% *2 = 60%	|
| 40-31		| 35% *2 = 70%	|
| 30-21		| 40% *3 = 120%	|
| 20-11		| 45% *3 = 135%	|
| 10-01		| 50% *3 = 150%	|

### The Crazy Druid

- Turtle form: 90% damage reduction
- Bee form: 50% damage increased, 50% more damage received
- Frog form: jumps around the screen, stomping players
- Worm form: heals 100% of the damage dealed

### Delicious Gelatinous cube

- dps race: you have to run the whole fight to avoid being eaten by the cube
- adds: every living being eaten by the cube heals him for 10% of his total health over 10 seconds
- traps: watch your step!

### Alana the succubi

- love me: alana tries to seduce the party members with her kisses (stun 4 seconds)
- fly: alana can disappear from the battlefield and send her deadly minions to fight for her
- LOVE ME I SAID: deals over time damage increased by the distance

### T-Rex with lasers

- stomp: massive crushing damage
- lazers: massive laser damage
- chomp: massive chewing damage
- rawr: aoe stun and damage

### Shiny the annoying paladin

- always perfect: every time he receives more than 1% damage he tries to heal to max hp (limited attempts)
- sparkles and lights: turn away or get stunned for 4 seconds
- bubble: immune immune immune immune
- holy despair: fuck the light!! help me i'm dying!!!! (under 50% becomes a blackguard)
- fire: all those lights just ignited the room...

### Ugly Tenctacle Thing

- tenctacles: adds that stun
- ugly: party members take 1% damage every 3 seconds
- things: that fall into your heads

### Air Elemental

- cold air: stay close to your party member or get increasing frost damage, move or take damage
- hot air: stay away from your party members or get increasing hot damage, stand still or take damage.

### Matrioska Phoenix Hydra

- every time you kill her she explodes and a smaller hydra comes to fight. with more heads.
	

### Black hole

- void touch: istant death. (really? are you trying to kill a black hole?)