---
categories:
- GrenGame
cover: /Projects/GrenGame/assets/temple/Temple_Before.PNG
date: "2017-12-20T00:00:00Z"
prefix_category: true
tags:
- Gamedev
title: Temple under attack!
url: Projects/GrenGame/Temple-tests
---
To test my [first prototype](/GrenGame/First-Prototype) of growing plants, I wanted to have a temple I could cover in plants, so I created... **the TEMPLE!**
I don't have any 3D skills so I just used cubes of different colors inside Unity to create a big structure.

### BEHOLD... THE TEMPLE

<div class="figure">
  <figure>
    <img style="box-shadow: 0px 0px 10px 5px black;" src="assets/temple/Temple_Before.PNG">
  </figure>
</div>

### First attacks

I first used a default green color for the plants and only changed their width.

<div class="grid">
  <div class="cell cell--12 cell--lg-6 figure">
    <figure>
      <img src="assets/temple/Temple_After.PNG">
      <figcaption>Really big beanstalks are attacking the temple!!</figcaption>
    </figure>
  </div>
  <div class="cell cell--12 cell--lg-6 figure">
    <figure>
      <img src="assets/temple/Temple_After2.PNG">
      <figcaption>Oh no!! Now vines are covering the temple!...</figcaption>
    </figure>
  </div>
</div>

### Material experimentation

I wanted to experiment different materials for the plants so here is a few of numerous tests I made:

<div class="swiper swiper-demo my-3 swiper-demo--0" style="height: auto;">
  <div class="swiper__wrapper">
  {% for i in (1..10) %}
    <div class="swiper__slide"><img class="lightbox-ignore" src="assets/temple/Attack{{i}}.PNG"/></div>
  {% endfor %}
  </div>
  <div class="swiper__button swiper__button--prev fas fa-chevron-left"></div>
  <div class="swiper__button swiper__button--next fas fa-chevron-right"></div>
</div>

### Different plants

With the tools I created, I was able to make important variations in the shape, length, girth and noise of the plants, that can completely change the type of plant (in a single color for now).

<div class="swiper swiper-demo my-3 swiper-demo--1" style="height: auto;">
  <div class="swiper__wrapper">
  {% for i in (1..3) %}
    <div class="swiper__slide"><img class="lightbox-ignore" src="assets/temple/test{{i}}.png"/></div>
  {% endfor %}
  </div>
  <div class="swiper__button swiper__button--prev fas fa-chevron-left"></div>
  <div class="swiper__button swiper__button--next fas fa-chevron-right"></div>
</div>

<script>
  {%- include scripts/lib/swiper.js -%}
  var SOURCES = window.TEXT_VARIABLES.sources;
  window.Lazyload.js(SOURCES.jquery, function() {
    $('.swiper-demo--0').swiper();
    $('.swiper-demo--1').swiper();
  });
</script>
