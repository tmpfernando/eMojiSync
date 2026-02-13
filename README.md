# 🎙️ eMojiSync (Web Preview)

[Demonstration Video](https://www.youtube.com/watch?v=lNu-XfCwCkg) | [**Try it Online Now!**](https://tmpfernando.github.io/eMojiSync)

**eMojiSync Web** is the browser-based version of the minimalist voice-reactive avatar application. This version allows you to use your favorite emojis as a PNGTuber avatar directly from your browser, making it compatible with any OS (Windows, Mac, Linux) and perfect for quick setups using OBS Browser Source.

![Version](https://img.shields.io/badge/Version-Web--1.0-orange)
![Platform](https://img.shields.io/badge/Platform-Web--Browser-blue)
![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey)

---

## ✨ Web Version Highlights
- **Zero Installation:** Open the link and start streaming.
- **Cross-Platform:** Works on any modern browser (Chrome, Edge, Firefox).
- **Low Latency:** Optimized Web Audio API for instant voice reaction.

---

## 🚀 How to Use

1. **Access the Web App:** Open the [eMojiSync Web Link](https://tmpfernando.github.io/eMojiSync).
2. **Setup your Mic:** Select your microphone in the "Audio & OBS" section and click **START MIC**.
3. **Customize:**
   - **Idle:** Pick an emoji for silence.
   - **Sequence:** Type a sequence of emojis (e.g., `🫤😯😦😧😲😮🫨`) for the talking animation.
   - **Physics:** Adjust Sensitivity (Threshold), Zoom, and Motion Intensity.
4. **Scene:** Choose a background emoji if you want a static scenario behind your avatar.

---

## 📺 OBS Studio Integration

For the best experience (transparent background and clean capture):

1. Configure your avatar on the eMojiSync website.
2. Click the **🔗 Copy OBS Browser Link** button.
3. In OBS, add a new **Browser Source**.
4. Paste the copied URL (it should end with `?view=avatar`).
5. Set the width/height to match your stream (e.g., 1920x1080).
6. **Important:** - Browsers block auto-audio. Right-click the source in OBS > **Interact** and click anywhere on the screen to "wake up" the microphone detection.
   - Alternatively, check **"Control audio via OBS"** in the source properties.

---

## 📜 License
This project is licensed under **Creative Commons Attribution-NonCommercial 4.0 International**.  
You are free to use, share, and adapt this software, but **you may not use the material for commercial purposes**.

---

## 💖 Support the Project
Help me turn these emojis into exclusive hand-drawn art and professional software!

* [🚀 Support via APOIA.se (Brazil)](https://apoia.se/emojisync)

---

## 👨‍💻 Local Development
If you want to host this yourself or modify the web code:

1. Clone this repository.
2. No dependencies or `npm install` required for the web version!
3. Just open `index.html` in any modern browser.

---
*Created with ❤️ by [TMPfernando/GitHub]*
