---
layout: article
title:  "First Prototype"
tags:
- Gamedev
category: GrenGame
permalink: /GrenGame/First-Prototype
cover: /GrenGame/assets/thumbnails/plants.jpg
---

I decided to use [Unity](https://unity.com/) engine, because it's the game engine I'm the most comfortable working with.
First I started to work on a plant system. I want the player to be able to plant plants and watch them grow in fast motion.
To create plants, I decided to generate the plant meshes procedurally in order to generate plants based on the surroundings.

The plants are constructed with multiple cylinders with varying width and position.

<div style="text-align: center">
<figure style="width:80%; padding: 10px; margin: 0 auto;">
<img src="/GrenGame/assets/prototype/SectionSegment.PNG">
<figcaption>The meshes are constructed from triangles</figcaption>
</figure>
</div>

I then wrote some code to procedurally generate this mesh, starting with a single segment.

<div style="clear: none;">
<figure style="display: inline-block; width:calc(50%-10px); padding: 10px">
<img src="/GrenGame/assets/prototype/MeshCreation2.gif">
<figcaption>A cylindrical mesh composed of only the two ends</figcaption>
</figure>
<figure style="display: inline-block; width:calc(50%-10px); padding: 10px">
<img src="/GrenGame/assets/prototype/MeshCreation3.gif">
<figcaption>The final result for a single plant segment</figcaption>
</figure>
</div>

The way I constructed the segments permitted me to easily animate the width of the segment with some noise

<div style="text-align: center">
<figure style="width:70%; padding: 10px; margin: 0 auto;">
<img src="/GrenGame/assets/prototype/MeshCreation4.gif">
<figcaption>An animated version of a single trunk segment</figcaption>
</figure>
</div>
