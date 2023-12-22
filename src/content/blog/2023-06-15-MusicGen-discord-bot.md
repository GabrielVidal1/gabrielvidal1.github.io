---
title: MusicGen Discord Bot
tags:
  - AI
techs:
  - Python
cover: /assets/posts/MusicGenDiscord/preview.png
date: "2023-06-15"
description: A music bot for discord that generates music with AI using the MusicGen model hosted on Banana.dev
links:
  - "https://github.com/GabrielVidal1/serverless-musicgen"
  - "https://github.com/GabrielVidal1/musicgen-discord-bot"
---

<a href="https://resume.gabriel.vidal--ayrinhac.xyz/" target="_blank" >
<img src="/assets/posts/MusicGenDiscord/preview.png" alt="" class="w-full rounded-lg shadow-lg">
</a>

I was really impressed by the samples show on the [MusicGen](https://ai.honu.io/papers/musicgen/) website and I wanted to make a discord bot that uses this model to generate music. Besides, I recently discovered [Banana.dev](https://www.banana.dev/), a platform that allows you to host your models and use them with a simple API call. So I decided to use it to host the MusicGen model.

I previously tried to use vast.ai to host the model but the setup was too complicated and barely worked. With Banana.dev, it was really easy to host the model and use it in my bot.

Here is basically how the music generation works:

```python
def gen(model: MusicGen, prompt: str, samples=1, duration=8):
    model.set_generation_params(duration=duration)
    wav = model.generate([prompt] * samples)  # generates samples.

    results = []
    with tempfile.TemporaryDirectory() as tmpdirname:
        for idx, one_wav in enumerate(wav):
            # Will save under {idx}.wav, with loudness normalization at -14 db LUFS.
            path = audio_write(
                os.path.join(tmpdirname, f"{idx}.mp3"),
                one_wav.cpu(),
                model.sample_rate,
                format="mp3",
            )
            print(f"Saving {path} with prompt: {prompt}")

            # read the file and convert it to base64 string
            with open(path, "rb") as audio_file:
                encoded_string = base64.b64encode(audio_file.read())
                results.append(
                    {
                        "prompt": prompt,
                        "audio": encoded_string.decode("utf-8"),
                    }
                )
    return results
```
