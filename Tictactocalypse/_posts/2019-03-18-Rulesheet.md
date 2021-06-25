---
layout: article
title:  "Rulesheet"
category: Tictactocalypse
permalink: /Tictactocalypse/Rulesheet
tags:
- Game Design
- Gamedev
prefix_category: true
cover: /Tictactocalypse/assets/thumbnail.png
---

### Main Menu

Choose the number of players and the score to win by clicking on the corresponding buttons. To start the game, click on the button entitled “Play”.

### Goal

The goal is to be the first to have the required number of points to win.

You earn points by having three or more piece of your color aligned. Multiple line of three pieces can be aligned (a single piece can make multiple points at once).

The lines of three pieces (horizontal, vertical or diagonal) are counted every three seconds, thus giving players points (one point per piece).

To place a piece on the board, press your main action key (it varies depending of the player, see the table below). You can change to preview position by pressing the left and right keys. You will first have to choose the row, and then the actual slot.

Multiples preview piece will browse the board and press the main button to select a row on the board. If you press the main button once again, it will select a slot and finally place your piece on the slot. You can’t place your piece on a slot that already has a piece on it.

### Events

You can press your event buttons (two per players, they vary depending of the player, see the table below) to trigger events and disrupt other players. All events have a specific cooldown. You will have to wait before you can trigger an event with the button you previously pressed.

As events can’t overlay each other, you may not be able to trigger an event if it has not the space to happen around the board.

Some events may move your pieces around. If the piece falls off the grid, it is no longer part of the game and the slot it was on become empty. If the piece is moved away from its slot and is still on the board, after a short period of time indicated by a cooldown clock on the piece, it will go back to its slot.

### Inputs (all on a single keyboard)

<html>
   <head>
    <style>
      @font-face { font-family: Keyboard; src: url('/Tictactocalypse/assets/fonts/Keyboard.otf') format("opentype"); }
      .keyboard {
         font-family: Keyboard;
         font-size: 2.5em;
         text-align: center;
         margin-bottom: -5em;
      }
    </style>
   </head>
   <body>
<table style="width:100%">
  <tr>
    <th style="visibility:hidden;"></th>
    <th style="text-align: center">Main Button</th>
    <th style="text-align: center">Event Button 1</th>
    <th style="text-align: center">Event Button 2</th>
  </tr>
  <tr>
    <td>Player 1</td>
    <td class="keyboard">q</td>
    <td class="keyboard">s</td>
    <td class="keyboard">t</td>
  </tr>
  <tr>
    <td>Player 2</td>
    <td class="keyboard">W</td>
    <td class="keyboard">A</td>
    <td class="keyboard">D</td>
  </tr>
  <tr>
    <td>Player 3<sup id="fn1-rf"><a href="#fn1">1</a></sup> </td>
    <td class="keyboard">5</td>
    <td class="keyboard">4</td>
    <td class="keyboard">6</td>
  </tr>
  <tr>
    <td>Player 4</td>
    <td class="keyboard">I</td>
    <td class="keyboard">J</td>
    <td class="keyboard">L</td>
  </tr>
</table>

<aside class="wb-fnote" role="note">
 <dl>
  <dd id="fn1">
   <p class="fn-rtn"><a href="#fn1-rf">1.</a> On the numeric keypad</p>
  </dd>
 </dl>
</aside>
</body>
</html>
