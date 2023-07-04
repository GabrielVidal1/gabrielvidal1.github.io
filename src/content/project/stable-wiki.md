---
title: Stable Wiki
date: "2023-01-23"
tags:
  - AI
techs:
  - Docusaurus
cover: /assets/projects/StableWiki/thumbnail.png
description: >
  The unofficial wiki for the AI image generation stable diffusion (WIP)
---

<img src="/assets/projects/StableWiki/thumbnail.png" width="100%"/>

As this technology was becoming more and mainstream, a lot new people started to get interested in it. As I witnessed this new wave of people, all the same questions asked on reddit, discord, twitter, etc. I realised something was missing: _a wiki_.

## The missing link

As I see it all the information is spread across multiple website, with various level of complexity :

- **The original research papers** on arxiv, which are very hard to understand for a non expert
- **The code to use and train the models**, ie the [diffusers library](https://huggingface.co/docs/diffusers/index) which implement the research papers, usually adding some extra features

And then at the end you have...

- **The clickbait youtube tutorials**, for the most part not very useful because just a click by click tutorial on how to use the [webui by automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui)

How are people supposed to know what CFG means and its effect on the image when they don't even know what a diffusion model is?

## The prompting wiki

When ChatGPT came out and LLMs became the ultra hype, the [Learn prompting Wiki](https://learnprompting.org/) quicly became the reference for the art of prompt engineering. It is a great source of information, but not really what I want to make for stable diffusion. I don't want to make a wiki about how to use stable diffusion, but rather a wiki about stable diffusion itself. Not prompting but really the architecture.

## The stable wiki

I struggled to find a good way of structuring the information, but then I remembered the MDA frameword I use in Game Design. It stands for Mechanics, Dynamics, Aesthetics and is a great way to structure all the game design related information about a game. After some adaptations, I came up with the MDP framework for Stable Diffusion.

- **Mechanics** are the the core building blocks of Stable Diffusion, including text encoders, autoencoders, diffusers, and more. Dive deep into each component to understand how it works in detail and discover how to build new tools and workflows to improve control and quality.

- **Dynamics** : How to assemble the different building blocks to create features such as text-to-image or image-to-image. Learn how to combine these blocks to achieve your desired output.

- **Parameters** and their effects on Stable Diffusion processes. Gain insight into how parameters impact the final generated image or video.

## Visualization

I think a key missing part in all the vulgarization methods I have seen for now is the lack of visuals and visual explanation. Also analogies for concepts that are too complex to understand.

I tried to use the [Reactflow](https://reactflow.dev/) library to make graphs for visualizing stable diffusion, for now it's pretty unimpressive but I know it has a lot of potential :)

<img src="/assets/projects/StableWiki/graph.png" width="80%"/>

## The future

For now I am the only one working on this wiki, but I hope to get more people involved in the future (for the design for sure lol).
I have been experimenting with chatbots on a knowledge base, and I think it could be a great way to make the wiki more interactive and accessible. Also with maybe a stable diffusion webapp similar to HF gradio spaces ?
