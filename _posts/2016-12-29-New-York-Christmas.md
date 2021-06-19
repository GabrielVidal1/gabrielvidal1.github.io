---
layout: article
title: New York Christmas
date: 2016-12-29
tags:
- Game jam
- Gamedev
cover: /assets/posts/NewYork-Christmas/thumbnail.png
---

![banner](/assets/posts/NewYork-Christmas/banner.jpg)

I made this game for the [Christmas GameJam 2016](https://itch.io/jam/xmas2016). My idea was to make a platformer game on the roofs of New york and the player can use *icycles* (like icy tentacles) to make bridges across the drops to move around buildings.

The *icycles* are procedurally generated and can break under the player's weight.

## The Lore

*Bad luck for Santa Claus on this Christmas Eve : his sleigh is broken and his reindeers are on strike! He needs now to deliver presents to all the New York City children...*

*You will have to jump from roof to roof, gather scattered presents to feed the targeted chimney with the help of a secret weapon... **Icy Tentacles**!*

*Discover the 10 first levels of this frozen Christmas night !*

## Controls

|--|--|
|**Move**|W A S D|
|**Look around**|Mouse|
|**Interact**|E|
|**Grow an icy tentacle**|Left Click|

## Screenshots of the game

<div class="swiper swiper-demo my-3 swiper-demo--0" style="height: auto;">
  <div class="swiper__wrapper">
  {% for i in (1..4) %}
    <div class="swiper__slide"><img class="lightbox-ignore" src="/assets/posts/NewYork-Christmas/screen{{i}}.png"/></div>
  {% endfor %}
  </div>
  <div class="swiper__button swiper__button--prev fas fa-chevron-left"></div>
  <div class="swiper__button swiper__button--next fas fa-chevron-right"></div>
</div>

## Download the game

<iframe frameborder="0" src="https://itch.io/embed/75019" width="100%" height="167"><a href="https://gabrielvidal.itch.io/nyxmas">New York Christmas by Gabriel Vidal</a></iframe>

<script>
  {%- include scripts/lib/swiper.js -%}
  var SOURCES = window.TEXT_VARIABLES.sources;
  window.Lazyload.js(SOURCES.jquery, function() {
    $('.swiper-demo--0').swiper();
  });
</script>