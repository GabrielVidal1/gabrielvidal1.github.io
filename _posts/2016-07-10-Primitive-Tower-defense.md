---
layout: article
title: Primitive Tower Defense
date: 2016-07-10
tags:
- Gamejam
- Gamedev
cover: /assets/posts/Primitive-Tower-Defense/thumbnail.png
---

In 2016, I did [Isart Digital Summer camps](https://www.isart.com/summer-camps/video-game-creation/) to learn to create video games on [Unity](https://unity.com/).
This camp gave me an introduction to creating video games. I discovered how to set up the rules (Gameplay), to create levels (Level Design) and to integrate the interactions of a game (Programming).

![banner](/assets/posts/Primitive-Tower-Defense/banner.png)

During this week I experimented with a lot of things in Unity, and by the end of the week, I managed to make a full game call Primitive Tower Defense. It's a very basic tower defense game, with waves of enemies and towers you can place to kill them.
Given I made this game in a week, I decided to submit it to the [My First Game Jam: Summer Edition](https://itch.io/jam/my-first-game-jam-summer-2016). You can see my submission [here](https://itch.io/jam/my-first-game-jam-summer-2016/rate/75019).

## Screenshots of the game

<div class="swiper swiper-demo my-3 swiper-demo--0" style="height: auto;">
  <div class="swiper__wrapper">
  {% for i in (1..4) %}
    <div class="swiper__slide"><img class="lightbox-ignore" src="/assets/posts/Primitive-Tower-Defense/screen{{i}}.png"/></div>
  {% endfor %}
  </div>
  <div class="swiper__button swiper__button--prev fas fa-chevron-left"></div>
  <div class="swiper__button swiper__button--next fas fa-chevron-right"></div>
</div>

## Download the game

<iframe frameborder="0" src="https://itch.io/embed/75019" width="100%" height="167"><a href="https://gabrielvidal.itch.io/primitive-tower-defense">Primitive Tower Defense by Gabriel Vidal</a></iframe>

<script>
  {%- include scripts/lib/swiper.js -%}
  var SOURCES = window.TEXT_VARIABLES.sources;
  window.Lazyload.js(SOURCES.jquery, function() {
    $('.swiper-demo--0').swiper();
  });
</script>