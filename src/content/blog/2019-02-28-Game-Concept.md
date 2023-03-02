---
title: Heist Game Concept
tags:
- Gamedev
- Idea
- CSUMB
- Game Design
cover: /assets/posts/Robbers/cover.jpg
article_header:
  type: cover
  image:
    src: /assets/posts/Robbers/cover.jpg
description: >
    Multiplayer museum robbery coop/competitive arcade game. Players need to cooperate in order to steal a valuable item in a museum or a jeweler. However, there is not enough stuff to steal for all players (you have to be the fastest and use low blows). Fast paced cartoonish visuals and mechanics. Guards keep the things to rob and they adapt each time they catch a player (like in Hello Neighbor)
date: "2019-02-28"
---

## Pitch

_Multiplayer museum robbery coop/competitive arcade game.
Players need to cooperate in order to steal a valuable item in a museum or a jeweler. However, there is not enough stuff to steal for all players (you have to be the fastest and use low blows). Fast paced cartoonish visuals and mechanics. Guards keep the things to rob and they adapt each time they catch a player (like in Hello Neighbor)_

Finally, I think the game will be more about infiltration and cooperation, not much competition between players. I want the atmosphere to be a little bit oppressive, so when players are focused when sabotaging traps or forcing open doors, they can be really scared as the keeper rushes toward them.
I think I want the game to feel like in the game Hello Neighbor, that is when you are investigating inside the neighbor’s house, you feel pressured as every noise could be him or not, and sometimes you are trapped inside, because you discover the layout of rooms and door as you get chased.
You feel insecure as soon as you enter his property, because there is no place he can’t reach or find you.

![The thing to rob](/assets/posts/Robbers/items.png)

## The Keeper

The keeper is an AI. It can place traps and security systems.
I’m thinking that multiple keepers can be a good alternative to compensate for the number of players, instead of having only one keeper that is impossible to fool.

<div style="display:flex; flex-direction: row; justify-content: center; ">
<img class="image image--md" src="/assets/posts/Robbers/guard.jpg"/>
<ul>
<li>Players need to complete skill checks to disable security systems.</li>
<li>Players walk slower than the security guard, so when a player gets chased, he can escape only if he outsmarts the guard. If a player get caught, the guard will carry on his back and throw him out of the building (The player will have lost all his stuff, and he will be back at the main entrance of the building).</li>
<li>The main idea behind the fact that the guard adapts from players behavior is that he will remember where and when he has seen players, and he will place traps in the most frequently used spots (for example, in the middle of a corridor).</li>
</ul>
</div>

![The thing to rob](/assets/posts/Robbers/securities.png)

## Players

<div style="display:flex; flex-direction: row; justify-content: center; ">
<img class="image image--md" src="/assets/posts/Robbers/player.jpg" style="aspect-ratio: 16/9"/>
<ul>
<li>Players will be able to gather items, such as a flashlight, a grappling hook, some firecrackers to distract the guard and more.</li>
<li>Because players are smaller than the guard, they can fit and crawl through vents in the place they rob. However, if players use vents too often, the guard will seal off vents and players will have to use special items in order to unblock them. Even if the guard can’t fit in the vents, you can’t stay in it because he can steal, grab you and carry you out.</li>
</ul>

</div>


When a player reaches the thing to steal and try to walk with it, the guard will be faster and the player carrying will be considerably slower. The player can throw the object in a direction to prevent the guard from getting it back.
If the guard gets the item back, he will put it back at its place and stay around to avoid players robbing it back as soon as it’s back.

When a player performs a disarming (or sabotage) action to disable a trap or open a closed door, He will have to do a skill check. A skill check is a quick action that he has to perform in a short period of time (for example, click on a button as soon as it’s green, and if he presses it when it’s red, he loses). If a player fails a skill check, the progress of the overall action will be stopped, and the guard will be notified of the position of the player (imagine the player making a big noise, this will draw the attention of the keeper).


## The Map

The map is composed of two parts:

* The outside, where players are safe and where the keeper will not chase players that tried to steal the hoard.
* The inside, where players can’t legally be. If the keeper sees them inside this zone, he will chase them.

Every time a player is caught inside by the keeper, he will be carried to a trash conduit that is directly connected to the outside.

The core loop of a game is that players enter the building through the main entrance, and by sabotaging barricades and by unlocking doors, they will have more and more access to the entirety of the building. New entrance will be unlocked and they will have to navigate through this maze of doors and rooms to find a way to access the main room, where the valuable things lie.
The keeper has access to all the rooms,so players must be very careful when entering an unexplored room, as he could be waiting inside.

A basic map could be a map with a direct view on the thing to steal, for example a painting. The players can’t access the painting directly, as it’s protected by multiple layers of security systems. For example, the door to the room is locked and the key is in another room. In addition, there are lasers around the painting that will trigger the emergency state of the building if something passes through. On top of that, the painting is in an indestructible glass box that has to be opened with care and the right tools (a blowtorch). Opening the box doesn’t make a lot of noise, but it takes a long time, so players have to plan their attack, and set up a lot of things beforehand.

![Core gameplay loop](/assets/posts/Robbers/GameplayLoop.png)
