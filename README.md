# ANON.md Portfolio

A recruiter-facing, terminal-inspired portfolio for Anon, Growth Specialist and Web3 Native.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **AI**: Gemini 2.0 Flash (via `@google/generative-ai`)

## Setup

1. **Clone and Install**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_google_ai_studio_api_key
   ```
   Get a free key at [aistudio.google.com](https://aistudio.google.com/apikey).

3. **Run Dev Server**:
   ```bash
   npm run dev
   ```

## How to Update the AI System Prompt

The AI chatbox logic is located in `app/api/chat/route.ts`. 
To update the data the AI uses to answer questions:
1. Open `app/api/chat/route.ts`.
2. Locate the `SYSTEM_PROMPT` constant.
3. Update the `CORE EXPERIENCE`, `IDENTITY`, or `SKILLS` sections with your new CV info.

## Design Philosophy

- **Accent**: Electric Cyan (#00FFFF)
- **Typography**: Space Mono (Display) & Geist Sans (Body)
- **Effects**: Scanline overlays, CRT glow, and redacted text reveals.
