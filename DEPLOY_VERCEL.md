# Deploy to Vercel

Your Next.js app is ready to deploy. Choose one of these options:

## Option 1: Deploy via Vercel website (recommended)

1. **Push your code to GitHub** (if you haven’t already):
   ```bash
   git add .
   git commit -m "Ready for Vercel"
   git remote add origin https://github.com/YOUR_USERNAME/rashi-homepage.git   # if needed
   git push -u origin main
   ```

2. **Connect the repo to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in (or create an account).
   - Click **Add New…** → **Project**.
   - Import your **rashi-homepage** repository.
   - Leave the defaults (Framework: Next.js, Build Command: `next build`, Output: automatic).
   - Click **Deploy**.

3. Vercel will build and deploy. You’ll get a URL like `rashi-homepage.vercel.app`. You can add a custom domain (e.g. `rashi.ai`) in the project **Settings → Domains**.

---

## Option 2: Deploy via Vercel CLI

1. Install the CLI and log in (one-time):
   ```bash
   npm i -g vercel
   vercel login
   ```

2. From your project folder, deploy:
   ```bash
   cd /Users/anushkasinghrajput/Desktop/rashi-homepage
   vercel
   ```
   Follow the prompts (link to existing project or create new one). Use `vercel --prod` to deploy to production.

---

No `vercel.json` is required; Vercel detects Next.js and uses the correct build settings.
