# 🎬 Prompt-to-Video Generator

An AI-powered web app that converts **text prompts** into short videos with automated visuals, captions, voiceovers, and background music.  
Built using **Next.js 15**, **Tailwind CSS**, and **shadcn/ui** for a modern and responsive UI.

---

## ✅ Current Setup
- ✅ Next.js 15 project initialized
- ✅ TailwindCSS installed and configured
- ✅ shadcn/ui initialized with **New York** theme
- ✅ Lucide Icons installed
- ✅ Aliases for components, lib, hooks configured
- ✅ `lib/utils.js` ready for class name utility
- ✅ Folder structure partially set up

---

## 🚀 Features (Planned)
- Enter a text prompt and generate a short video
- AI-generated images, captions, and voiceovers
- Progress bar and video preview UI
- Export videos for TikTok, Instagram Reels, YouTube Shorts
- Custom branding support (logos, colors)

---

## 🛠️ Tech Stack
- **Frontend:** Next.js 15 (App Router), TailwindCSS, shadcn/ui
- **Styling:** TailwindCSS + CSS Variables
- **Icons:** Lucide
- **Utilities:** clsx + tailwind-merge

---

## 📂 Project Structure
prompt-2-video-generator/
├── app/
│ ├── globals.css # Tailwind base styles
│ ├── page.js # Main UI page
├── components/
│ └── ui/ # shadcn UI components
├── lib/
│ └── utils.js # cn() helper function
├── hooks/ # Custom hooks
├── public/ # Static assets
├── tailwind.config.mjs # Tailwind config
├── postcss.config.js # PostCSS config
├── components.json # shadcn config
└── README.md # Project documentation
