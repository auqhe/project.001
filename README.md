# ❤️ Romantic Love Story Website

A beautiful, responsive romantic website perfect for couples to share their love story, memories, and special moments. Features stunning animations, a photo gallery, slideshow, and romantic visual effects.

## ✨ Features

- **Romantic Hero Section** with background video support and floating heart animations
- **Interactive Photo Gallery** with filtering and full-screen modal viewer
- **Memory Slideshow** with automatic progression and touch gestures
- **Love Letters Section** for sharing romantic messages
- **Timeline** to showcase your journey together
- **Contact Form** with beautiful styling and validation
- **Fully Responsive** design that works on all devices
- **Smooth Animations** and romantic particle effects
- **Modern Design** with beautiful gradients and typography

## 🚀 Getting Started

1. **Download the files** to your computer
2. **Add your romantic background video** named `romantic-background.mp4` to the main folder
3. **Replace the sample images** in the gallery with your own photos
4. **Customize the content** to tell your unique love story
5. **Open `index.html`** in your web browser to view the website

## 📁 File Structure

```
romantic-website/
├── index.html          # Main homepage
├── memories.html       # Photo gallery and memories page
├── styles.css          # Main stylesheet
├── memories.css        # Memories page specific styles
├── script.js           # Main JavaScript functionality
├── memories.js         # Memories page JavaScript
├── romantic-background.mp4  # Your background video (add this)
└── README.md           # This file
```

## 🎨 Customization Guide

### 1. Adding Your Background Video

Replace the placeholder video with your own romantic background video:
- Name your video file `romantic-background.mp4`
- Place it in the main folder
- Recommended: 1920x1080 resolution, under 10MB for web optimization

### 2. Updating Photos

Replace the sample images in `memories.html`:
- Update the `src` attributes in the gallery images
- Change the `alt` text to describe your photos
- Update the gallery info (titles and descriptions)

### 3. Personalizing Content

Edit the text content in both HTML files:
- **Hero titles**: Change "Forever & Always" to your preferred title
- **Love story**: Update the about section with your story
- **Timeline events**: Modify dates and descriptions
- **Love letters**: Replace with your own romantic messages
- **Contact information**: Update the love stats and form

### 4. Color Scheme

Modify the CSS variables in `styles.css` to change colors:

```css
:root {
    --primary-color: #ff6b8a;     /* Main pink color */
    --secondary-color: #ff9fb2;   /* Lighter pink */
    --accent-color: #ffd1dc;      /* Very light pink */
    --dark-color: #2c2c2c;        /* Dark text */
    --light-color: #ffffff;       /* White */
}
```

### 5. Adding More Photos

To add more photos to the gallery:

1. Add new gallery items in `memories.html`:
```html
<div class="gallery-item" data-category="your-category">
    <div class="gallery-image">
        <img src="your-image.jpg" alt="Description" loading="lazy">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h3>Photo Title</h3>
                <p>Photo description</p>
                <i class="fas fa-heart"></i>
            </div>
        </div>
    </div>
</div>
```

2. Categories available: `dates`, `travel`, `special`

## 🎭 Interactive Features

### Gallery Filtering
- Click filter buttons to show specific photo categories
- Categories: All Memories, Romantic Dates, Adventures, Special Moments

### Slideshow Navigation
- **Auto-advance**: Slides change automatically every 8 seconds
- **Manual navigation**: Use arrow buttons or click indicators
- **Keyboard**: Use left/right arrow keys
- **Touch gestures**: Swipe left/right on mobile devices

### Image Modal
- **Click any gallery image** to view in full size
- **Navigation**: Use arrow buttons or keyboard arrows
- **Close**: Click X, press Escape, or click outside the image

### Mobile Features
- **Responsive design** adapts to all screen sizes
- **Touch-friendly** navigation and interactions
- **Hamburger menu** for mobile navigation

## 🌟 Animation Effects

The website includes several romantic animations:
- **Floating hearts** that drift across the screen
- **Sparkle effects** that follow your mouse cursor
- **Romantic particles** (hearts and stars) floating upward
- **Smooth transitions** and hover effects
- **Scroll animations** that reveal content as you browse

## 🛠️ Technical Requirements

- **Modern web browser** (Chrome, Firefox, Safari, Edge)
- **No server required** - works as static HTML files
- **Optional**: Web server for video playback optimization

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Tips

1. **Optimize images**: Compress photos to reduce loading times
2. **Video size**: Keep background video under 10MB
3. **Image formats**: Use WebP format for better compression
4. **Lazy loading**: Already implemented for gallery images

## 💝 Romantic Customization Ideas

### Content Ideas
- Add your first date location to the timeline
- Include anniversary dates and milestones
- Write personal love letters in the love letters section
- Add photos from special trips and moments

### Visual Enhancements
- Use your favorite colors in the color scheme
- Add your initials or names to the navigation logo
- Include meaningful quotes in the love letters
- Add more categories to the photo gallery

### Advanced Customizations
- Add music/audio player for your special song
- Include a countdown to your next anniversary
- Add a guestbook for friends and family
- Create additional pages for specific events

## 🚀 Deployment Options

### Option 1: Simple File Hosting
- Upload all files to any web hosting service
- Access via your domain name

### Option 2: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Enable GitHub Pages in repository settings
4. Access via `https://yourusername.github.io/repository-name`

### Option 3: Netlify (Free)
1. Drag and drop your folder to Netlify
2. Get instant hosting with custom domain support

## 💌 Support & Customization

This romantic website template is designed to be easily customizable. Feel free to modify any aspect to make it uniquely yours!

### Common Modifications
- Changing fonts in the CSS
- Adding new sections or pages
- Modifying the layout structure
- Adding social media links
- Including wedding or engagement details

---

Made with ❤️ for couples who want to share their beautiful love story with the world.

Enjoy creating your romantic digital memory book! 💕