---
layout: article
title: Low Rez Guess
date: 2017-08-15
tags:
- Gamedev
- Game jam
cover: https://img.itch.zone/aW1hZ2UvMTY3NjEwLzc3NjI4NS5wbmc=/315x250%23c/yOGR3B.png
---

![LowRezGuess](/assets/posts/LowRezGuess/banner.png)

## Context

This game has been made for the [LowRez Jam 2017](https://itch.io/jam/lowrezjam2017). The goal of this jam is to create a game with a resolution of 64x64 pixels. There was no other restrictions (like a theme) but I think this is a very good constraint to work with.

_In this game, your goal is to guess what is shown in images from various categories (vehicles, animals, objects, etc.). The faster you guess the images, the more points you earn!_

## The idea

My idea was to use the low resolution constraint to make things hard to decipher on screen. I then thought of a growing picture, that could start by being 1 * 1 pixel, and as the image grow, at some point you can understand what the image is showing. The player could gain points based on his speed: the faster he gets the picture, the more points he gets.

## The game

At the beginning of a round, you will see 3 choices, that correspond to the left, right and up directional key. All rounds start with a really small and pixilated image at the center of the screen. As time goes on, the picture will grow to fill the entire screen. You have to press the key corresponding to what the image depicts. The faster you are, the more points you get!

There are various categories of objects (101 to be precise) and they come from training data for deep learning. The data set is available on [Caltech's website](http://www.vision.caltech.edu/Image_Datasets/Caltech101/).

I wanted to make a very accessible game, so I integrated internationalization by supporting 6 languages: English, French, Italian, Spanish, Portuguese and Deutsche. This was easy, because I only had to translate the 101 categories name, and some of the UI text. The major difficulty was find a readable pixilated font, that also support accented letters (for languages like french and spanish). I didn't manage to find one, so I edited one with only ASCII letters to add accented letters.

## Play the game

<div style="aspect-ratio: 1">
<iframe frameborder="0" src="https://itch.io/embed-upload/567546?color=8f0000" allowfullscreen="" width="100%" height="100%"><a href="https://gabrielvidal.itch.io/low-rez-guess">Play Low Rez Guess on itch.io</a></iframe>
</div>

## Tools

* I mostly used [Unity](https://unity.com/) for everything from animations, IO, scripting and integration of all elements.
* I made the music myself using [Bosca Ceoil](https://boscaceoil.net/)
* [Freesound.org](https://freesound.org/) for the sound effects
* As said earlier, all the images that the player can guess come from a training dataset for image recognition available on [Caltech's website](http://www.vision.caltech.edu/Image_Datasets/Caltech101/)