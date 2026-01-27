# Quick Schedule Setup Guide

Your app now needs a small Cloudflare Worker to fetch your Twitch schedule automatically.

## Why?

Twitch's Schedule API requires authentication (Client ID + Secret). We can't put these in the app code (it's public), so we use a tiny backend worker that keeps the credentials safe.

## Setup (5 Minutes)

### Step 1: Get Twitch API Credentials

1. Go to https://dev.twitch.tv/console/apps
2. Click **"Register Your Application"**
3. Fill in:
   - **Name**: `Oki App Schedule`
   - **OAuth Redirect URLs**: `http://localhost`
   - **Category**: Website Integration
4. Click **Create**
5. Copy your **Client ID**
6. Click **"New Secret"** and copy your **Client Secret**

### Step 2: Create Cloudflare Worker

1. Go to **Cloudflare Dashboard** → **Workers & Pages**
2. Click **Create** → **Create Worker**
3. Name it: `twitch-schedule` (or anything you want)
4. Click **Deploy** (we'll add code next)

### Step 3: Add the Code

1. In your worker, click **Quick Edit**
2. Delete all existing code
3. Copy and paste the entire contents of `schedule-worker.js`
4. Click **Save and Deploy**

### Step 4: Add Environment Variables

1. In your worker, go to **Settings** → **Variables**
2. Click **Add variable** (encrypted)
3. Add these TWO variables:
   - Variable name: `TWITCH_CLIENT_ID`
     - Value: (paste your Client ID)
   - Variable name: `TWITCH_CLIENT_SECRET`
     - Value: (paste your Client Secret)
4. Click **Save**

### Step 5: Get Your Worker URL

Your worker URL will be something like:
```
https://twitch-schedule.YOUR-SUBDOMAIN.workers.dev
```

Copy this URL!

### Step 6: Update app.html

1. Open `app.html`
2. Find line ~7 (in the script section):
   ```javascript
   const SCHEDULE_API_URL = '';
   ```
3. Change it to:
   ```javascript
   const SCHEDULE_API_URL = 'https://twitch-schedule.YOUR-SUBDOMAIN.workers.dev';
   ```
4. Save and redeploy your app

### Step 7: Done! 🎉

Your schedule will now automatically show in the app!

## Testing

To test if your worker is working:
1. Visit your worker URL in a browser
2. You should see JSON with your schedule (or an empty array if no schedule)

Example response:
```json
{
  "segments": [
    {
      "title": "Your Stream Title",
      "start_time": "2026-01-28T19:00:00Z",
      "category": {
        "name": "Just Chatting"
      }
    }
  ]
}
```

## Setting Your Schedule in Twitch

To populate the schedule:
1. Go to **Twitch Creator Dashboard**
2. Click **Stream Manager** → **Schedule**
3. Add your upcoming streams
4. The app will automatically fetch and display them!

## Troubleshooting

**Schedule not showing:**
- Check browser console for errors (F12)
- Make sure `SCHEDULE_API_URL` is set correctly in app.html
- Verify environment variables are set in Cloudflare Worker settings
- Make sure you've added streams to your Twitch schedule

**Worker returns error:**
- Check the worker logs in Cloudflare Dashboard
- Verify Client ID and Secret are correct
- Make sure channel name is correct (currently set to 'mikooki')

## Cost

Cloudflare Workers Free Tier:
- ✅ 100,000 requests per day
- ✅ More than enough for this use case
- ✅ **$0/month**

Your app checks the schedule every 5 minutes, so even with 1000 users, you'll stay well within the free tier!

## Security

✅ Client ID and Secret are encrypted in Cloudflare
✅ Never exposed in your app code
✅ Safe to have public GitHub repo
✅ No one can steal your credentials
