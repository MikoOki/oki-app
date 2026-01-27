# Oki App - MikoOki's Personal Hub

A Progressive Web App (PWA) that shows your Twitch stream status, schedule, and quick links to your projects.

## Files Included

- **install.html** - Installation/download page with instructions for iOS and Android
- **app.html** - The actual app that runs on your phone
- **manifest.json** - PWA configuration file
- **sw.js** - Service worker for offline functionality
- **icon-template.svg** - SVG template for creating custom icons
- **TWITCH_SETUP.md** - Instructions for setting up Twitch API integration

## Features

- 🔴 **Live Stream Status** - Shows when you're live on Twitch with preview, viewer count, and title
- 📅 **Stream Schedule** - Displays your upcoming Twitch streams  
- 🔗 **Quick Links** - Icon grid and list of your favorite sites
- 📱 **Native App Feel** - Installs to home screen like a real app
- ⚡ **Fast & Offline** - Works without internet after first load
- 🎨 **Custom Icon** - Purple gradient "OK" icon on your home screen
- 🔍 **Search** - Filter through your bookmarks
- 🕐 **Live Clock** - Current time displayed at the top
- 🆓 **No Backend Required** - Uses public Twitch APIs, completely free to host

## How to Use

### ⚡ Super Simple Setup - No Backend Needed!

Since we're using **public Twitch data**, you don't need any API keys or backend servers!

👉 **See SIMPLE_DEPLOYMENT.md for complete step-by-step instructions**

**Quick version:**
1. Upload files to GitHub
2. Enable GitHub Pages (or use Cloudflare Pages / Netlify)
3. Update your Twitch username in `app.html` (line ~7)
4. Done! 🎉

### 1. Choose Your Hosting Platform

Pick any of these **free** options:

- GitHub Pages (easiest)
- Cloudflare Pages
- Netlify
- Vercel
- Any static file host

### 2. Update Your Twitch Username

In `app.html`, change line ~7:
```javascript
const TWITCH_CHANNEL_NAME = 'mikooki';  // Change to your username
```

### 3. Create App Icons

### 3. Create App Icons

I've included an SVG template (`icon-template.svg`) with a purple gradient and "OK" text.

**Option 1: Use the SVG directly** (easiest)
- Use an online tool like https://svgtopng.com/ to convert the SVG to PNG
- Export as 192x192px → save as `icon-192.png`
- Export as 512x512px → save as `icon-512.png`

**Option 2: Create custom icons**
- Use any graphic editor (Photoshop, Figma, Canva, etc.)
- Create a 512x512px design
- Export as both 192x192px and 512x512px PNG files
- Name them `icon-192.png` and `icon-512.png`

**Option 3: Skip it**
- The app will still work but won't have a custom icon on the home screen

Upload the icon PNG files to the same directory as the other files.

### 4. Share the Install Page

Send users to `install.html` - they'll see:
- Platform-specific instructions (iOS/Android auto-detected)
- A big "Open QuickLinks App" button
- Step-by-step installation guide
- Features overview

### 4. Add Your Bookmarks

Edit the `bookmarks` array in **app.html** (around line 163):

```javascript
const bookmarks = [
  {
    id: 1,
    title: "Twitch Printer",
    url: "https://mikooki.github.io/twitch-printer/",
    icon: "printer",
    color: "#FF6B9D",
    favorite: true  // Shows in top grid
  },
  {
    id: 2,
    title: "My TCG System",
    url: "https://example.com/tcg",
    icon: "game",
    color: "#60a5fa",
    favorite: true
  },
  // Add more...
];
```

### Available Icons

- `printer` - Printer icon
- `code` - Code brackets
- `globe` - Globe/website
- `twitch` - Twitch logo
- `package` - Package/box
- `game` - Game controller

### Color Options

Use any hex color code for the `color` field. Examples:
- `#FF6B9D` - Pink
- `#60a5fa` - Blue
- `#34d399` - Green
- `#fbbf24` - Yellow
- `#a78bfa` - Purple

## Features

- **Native App Feel** - Full-screen, status bar integration, home screen icon
- **Live Clock** - Shows current time at the top
- **Search** - Filter through your bookmarks
- **Favorites Grid** - Quick access to favorite sites
- **Offline Support** - Works even without internet
- **Animated** - Smooth transitions and effects
- **Responsive** - Adapts to any screen size

## Installation Methods

### Android (Automatic!)
1. Open install.html in **Chrome**
2. Tap the **"Install MikoOki App"** button
3. Confirm - that's it!

The app automatically detects Android and shows a big install button that handles everything for you.

### iOS (Manual - Apple requires this)
1. Open install.html in **Safari**
2. Tap Share button
3. Select "Add to Home Screen"
4. Tap "Add"

iOS doesn't support automatic installation, so users need to use the Safari share menu method.

## Tips

- Set `favorite: true` for your most-used sites to show them in the top grid
- The app shows both the icon grid AND a full list of all bookmarks
- Search works on both titles and URLs
- The time updates every second automatically
- Works great on tablets too!

## Customization

You can customize the colors in app.html:
- Line 17: Change background gradient colors
- Line 163+: Change each bookmark's color
- The app uses the Inter font family for a clean, modern look

Enjoy your personal bookmark app! 📱✨
