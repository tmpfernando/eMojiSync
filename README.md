# 🎙️ eMojiSync

[Demonstration Video](https://www.youtube.com/watch?v=lNu-XfCwCkg)

**eMojiSync** is a minimalist desktop voice-reactive avatar application (PNGTuber style). Built with Electron, it was specifically designed for streamers who need an avatar that reacts to the microphone in real-time, eliminating performance bottlenecks and capture issues common in browser-based tools.

![Version](https://img.shields.io/badge/Version-1.1.0-brightgreen)
![Platform](https://img.shields.io/badge/Platform-Windows-blue)
![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey)

## 📜 License
This project is licensed under **Creative Commons Attribution-NonCommercial 4.0 International**.  
You are free to use, share, and adapt this software, but **you may not use the material for commercial purposes**.

## ✨ Why eMojiSync?
Unlike web-based solutions, eMojiSync runs as a standalone process, ensuring higher stability and cleaner screen capture.
- **Dual-Window System:** A dedicated Control Panel for settings and a clean "Avatar Window" for OBS capture.
- **System Tray Integration:** Minimize the app to the system tray (near the clock) to keep your taskbar clean while keeping the microphone active.
- **Zero Lag:** Instantaneous synchronization between your voice and the emoji animation.
- **Ghost Window:** The avatar window doesn't clutter your taskbar, making it perfect for clean desktop management.

---

## 📥 Installation

For users who just want to run the program (no coding required):

1. Navigate to the [**Releases**](https://github.com/tmpfernando/eMojiSync/releases/tag/eMojiSync_x64) tab.
2. Download the `eMojiSync-win32-x64.zip` file.
3. Extract the contents to a folder of your choice.
4. Run the **`eMojiSync.exe`** file.
5. **Tip:** Right-click `eMojiSync.exe` and select `Send to > Desktop (Create shortcut)` for quick access.

---

## 🛠️ Configuration

1. **Microphone:** Click **START MICROPHONE** upon launching to enable voice detection.
2. **Customization:** - **Idle Emoji:** The emoji displayed when you are silent.
   - **Talking Emojis:** A sequence of emojis (e.g., 😲😮😧) that creates the talking animation.
3. **Fine-Tuning:**
   - **Sensitivity:** Adjust to ignore background noise or mechanical keyboard clicks.
   - **Zoom/Position:** Control the framing of the avatar within the capture window.
4. **💡 Pro Tip (Background Running):** - When you click **Minimize**, the dashboard hides in the **System Tray** (near the Windows clock). 
   - This prevents Windows from freezing the audio process. 
   - To open settings again, **double-click** the icon in the tray.

---

## 📺 OBS Studio Setup

To integrate the avatar into your stream:

1. Open **eMojiSync** and set up your emojis.
2. In OBS, add a new **Window Capture** source.
3. Select the window: `[eMojiSync.exe]: eMojiSync - Avatar Window`.
4. **IMPORTANT:** In the *Capture Method* field, select **Windows 10 (1903 or higher)**.
5. **Note:** Even if you minimize the dashboard to the tray, the avatar will remain visible to OBS as long as you don't manually close the app.

---

## 💖 Support the Project

If **eMojiSync** helps your stream, consider supporting the developer:

* [🚀 Support via APOIA.se (Brazil)](https://apoia.se/YOUR_LINK_HERE)
* [💸 Support via LivePix](https://livepix.gg/YOUR_LINK_HERE)

---

## ❓ Troubleshooting

**Avatar window is not appearing in OBS:**
- Ensure the app is running (check the System Tray near the clock).
- Try running OBS as an **Administrator**.

**The Avatar screen is black in OBS:**
- In the Window Capture properties, you **must** change the *Capture Method* to "Windows 10 (1903 or higher)".

**The Emoji is not moving:**
- Ensure you have clicked the "START MICROPHONE" button.
- Check if your microphone is set as the "Default Device" in Windows Sound Settings.

---

## 👨‍💻 For Developers (Build)

If you wish to modify the source code or contribute (Node.js required):

```powershell
# Install dependencies
npm install

# Run in development mode
npm start

# Generate the executable/distributables
npm run make
