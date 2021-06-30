---
layout: article
title:  "First Prototype"
category: GrenGame
permalink: Projects/GrenGame/First-Prototype
tags:
- Gamedev
prefix_category: true
cover: /GrenGame/assets/prototype/Noise_BlackHole.png
---

I decided to use [Unity](https://unity.com/) engine, because it's the game engine I'm the most comfortable working with.
First I started to work on a plant system. I want the player to be able to plant plants and watch them grow in fast motion.

## Mesh generation

To create plants, I decided to generate the plant meshes procedurally in order to generate plants based on the surroundings.

The plants are constructed with multiple cylinders with varying width and position.

<div class="figure">
  <figure>
    <img src="assets/prototype/SectionSegment.PNG">
    <figcaption>The meshes are constructed from triangles</figcaption>
  </figure>
</div>

I then wrote some code to procedurally generate this mesh, starting with a single segment.

<div class="grid">
  <div class="cell cell--12 cell--lg-6 figure">
    <figure>
      <img src="assets/prototype/MeshCreation2.gif">
      <figcaption>A cylindrical mesh composed of only the two ends</figcaption>
    </figure>
  </div>
  <div class="cell cell--12 cell--lg-6 figure">
    <figure>
      <img src="assets/prototype/MeshCreation3.gif">
      <figcaption>The final result for a single plant segment</figcaption>
    </figure>
  </div>
</div>

### Animation & Noise

I wanted to make the plant grow fast in front of the player. To do this, animating the meshes was the next step. One essential component is also noise, to make the plant diverse and procedural. The noise I used is a 3D Perlin noise.

* Radial noise (for the variation in the with of the trunk)
* Noise influence across the length of the stem
* Noise in the growth animation before reaching the final girth

These noises are controlled across the length of the stem and also across time.

The way I constructed the segments permitted me to easily animate the width of the segment with some noise.

<div class="figure">
  <figure>
    <img src="assets/prototype/MeshCreation4.gif">
    <figcaption>An animated version of a single trunk segment</figcaption>
  </figure>
</div>

The next step was putting these cylinders back to back to create growing stems. I tried to make all the parameters accessible to have a maximum of control on the way meshes are created. Only my imagination is the limit!

<div class="grid">
  <div class="cell cell--12 cell--lg-6 figure">
    <figure>
      <img src="assets/prototype/MeshCreation7.gif">
      <figcaption>A growing stem</figcaption>
    </figure>
  </div>
  <div class="cell cell--12 cell--lg-6 figure">
    <figure>
      <img src="assets/prototype/long.png">
      <figcaption>A really long and blocky plant (more like an icycle)</figcaption>
    </figure>
  </div>
</div>

### Collision

I wanted to make plants grow in the environnement and be completely procedural so the next step was making the plants collide with the surroundings.

I used Unity raycasts to calculate collision all at once when the mesh is created. After a lot of trial and error, I finally managed to make this work!

<div class="figure">
  <figure>
    <img src="assets/prototype/collision.PNG">
    <figcaption>A really long mesh trapped in a confined space</figcaption>
  </figure>
</div>

I then experiment with very thin, spaghetti-like plants, that would look like cables roaming through the white default sandbox.

<div class="grid">
  <div class="cell cell--12 cell--lg-6 figure">
    <figure>
      <img src="assets/prototype/cables1.png">
    </figure>
  </div>
  <div class="cell cell--12 cell--lg-6 figure">
    <figure>
      <img src="assets/prototype/cables2.png">
    </figure>
  </div>
</div>

<div class="figure">
  <figure style="max-width:100%; width: 100%">
    <img src="assets/prototype/cables3.png">
    <a href="https://www.reddit.com/r/pcmasterrace/comments/5r1cr4/cable_management_from_the_depths_of_hell/"> <figcaption style="font-style: italic;">Cable "management" from the depths of hell</figcaption></a>
  </figure>
</div>

### Gravitation influence

Another really important component is the influence of gravity along the plant. This value can be controlled along the stem, to have a plant go upwards (for trees for example), or be close to the ground, like vines or roots.

<div class="grid">
  <div class="cell cell--12 cell--lg-6 figure">
    <figure>
      <img src="assets/prototype/Gravity_Up.PNG">
      <figcaption>plants going upwards as they grow</figcaption>
    </figure>
  </div>
  <div class="cell cell--12 cell--lg-6 figure">
    <figure>
      <img src="assets/prototype/Gravity_Down.PNG">
      <figcaption>Plants with really heavy ends, so going downwards when reaching a certain height</figcaption>
    </figure>
  </div>
</div>

<div class="figure">
  <figure style="max-width:100%; width: 100%">
    <img src="assets/prototype/WIP7.PNG">
    <figcaption>A plant going straight up and then crawling on the floor</figcaption>
  </figure>
</div>

## Final results

Combining all these elements, we can get visuals like this:

<div class="figure">
  <figure>
    <img src="assets/prototype/Combination.gif">
    <figcaption>Procedural mesh generation with collision handling and animated growth</figcaption>
  </figure>
</div>