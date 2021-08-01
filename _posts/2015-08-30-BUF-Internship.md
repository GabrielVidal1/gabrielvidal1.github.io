---
layout: article
title: BUF discovery internship
tags:
- BUF
cover: /assets/posts/BUF/logo.png
---

This was a 2 weeks internship where I learned the basics of visual effects making, the workflow and managed to create my first 3D renders myself.

## Buf Compagnie

Founded in 1984, [BUF](https://buf.com/) has established itself as an industry leader in visual effects in Europe. As one of the few pioneers of computer-generated images, BUF has been blazing new trails for over 30 years providing stunning visual effects for more than 80 films and 1000 commercials.

<div class="figure">
  <figure style="max-width: 100%">
    <img src="/assets/posts/BUF/BUF_movies.png" >
    <figcaption>Here are a few of the most recent movies and series with BUF compagnie visual effects</figcaption>
  </figure>
</div>

### Bsuite

They develop their own software for all the steps of the workflow. More information on the Bsuite [here](https://bufsoftware.com/products/bsuite/).

A complete 3D pipeline studio from modeling, dynamics, animation to high end rendering, a node-based compositing software, a batch process manager and many more…

![B-suite](/assets/posts/BUF/bsuite.JPG)

#### Bstudio

I mainly used **Bstudio** during this internship as its the main software from 3D modeling to rendering (so accessible enough without having to learn a ton of concepts at one).

<div class="figure">
  <figure>
    <div class="swiper swiper-demo my-3 swiper-demo--0" style="width: 100%;">
        <div class="swiper__wrapper">
        {% for i in (1..4) %}
            <div class="swiper__slide"><img class="lightbox-ignore" src="/assets/posts/BUF/Bstudio{{i}}.png" style="width: 100%"/></div>
        {% endfor %}
        </div>
        <div class="swiper__button swiper__button--prev fas fa-chevron-left"></div>
        <div class="swiper__button swiper__button--next fas fa-chevron-right"></div>
    </div>
    <figcaption>Different screenshots to show to possibilities offered by <b>Bstudio</b></figcaption>
  </figure>
</div>

## Dominos simulation

My first exercise was to make a system to place 3D dominos along a curve. I made two renders with this basic system, first along a spiral and then with dominos varying in size.

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/j29_59VuraA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/YAK6nXidMjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I also made a script to place dominos in a triangular shape and made a big metal ball fall onto them.

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/S8hxOrLL2rA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Destructible objects

I also deigned a system to break 3D object in small pieces using a Voronoi noise by sampling points in a model, moving their position a little with noise, and cutting the object in multiple pieces (each with their own rigidbody). When the object is touched, the object is destroyed!

<div class="figure">
  <figure>
    <img src="/assets/posts/BUF/voronoi.png">
    <figcaption>The voronoise placing segment exactly in the middle of given points</figcaption>
  </figure>
</div>

I also experimented more in depth with procedural materials for the debris.

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/ejoGmIBnvq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/ewDP2wqkuP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/wucouZKj2Vg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/RYFBCli6Q9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Liquid simulation

I tried to make a liquid simulation but didn't manage to get the settings quite right.

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/PPSufAIzxcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<script>
  {%- include scripts/lib/swiper.js -%}
  var SOURCES = window.TEXT_VARIABLES.sources;
  window.Lazyload.js(SOURCES.jquery, function() {
    $('.swiper-demo--0').swiper();
  });
</script>
