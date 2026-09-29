# Little Moment

A responsive, browser-only demo for creating personalized celebration pages.

## Run it

Open `index.html` in a browser, or serve this folder with any static web server. There is no build step, framework installation, account, or payment integration.

## Demo flow

1. Browse or filter the occasion cards.
2. Select an occasion or featured design to open the editor.
3. Edit the recipient, sender, and note. The card preview updates as you type.
4. Choose a color theme or select a photo from your device for a local preview.
5. Copy a share link. Opening that link restores the text and color theme in the demo editor.

The share link is a frontend demonstration. It does not publish a hosted page, and a photo selected from the device is not uploaded or included in the link. Fonts and sample photos load from Google Fonts and Unsplash when available; the site otherwise keeps its layout and controls without them.

## Files

- `index.html` — page structure and accessible controls
- `styles.css` — responsive layout, colors, animation, and reduced-motion support
- `app.js` — occasion data, filters, editor preview, photo selection, and demo sharing
