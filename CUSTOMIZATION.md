# Portfolio Customization Guide

This guide shows you exactly what to change and where.

## 🎯 Quick Start - Essential Changes

### 1. Update Your Name (Logo & Title)

**Find this in `index.html`:**
```html
<div class="logo">SWETHA</div>
<title>Swetha - Web & App Developer Portfolio</title>
```

**Change to your name:**
```html
<div class="logo">YOUR NAME</div>
<title>Your Name - Your Profession Portfolio</title>
```

### 2. Update Hero Section

**Find in `index.html`:**
```html
<section id="portfolio" class="hero">
    <div class="hero-content">
        <h1>PORTFOLIO</h1>
        <div class="hero-grid">
            <div class="hero-text">
                <p>Creative Computer Science student specializing in...</p>
                <div class="contact-info">
                    <span>📧 swetha2912a@gmail.com</span>
                </div>
            </div>
```

**Update to your information:**
```html
<p>Your professional bio here...</p>
<span>📧 your.email@example.com</span>
```

### 3. Update Section Titles

**Change these in `index.html`:**
- "WEB DEVELOPMENT" → Your project category
- "APP DESIGNING" → Your expertise
- "ACHIEVEMENTS" → Your awards/recognition

### 4. Add Your Images (Important!)

**Replace placeholders like:**
```html
<div class="hero-image placeholder">Portfolio Image</div>
```

**With your images:**
```html
<img src="images/your-photo.jpg" alt="Your Project" class="hero-image">
```

**Create an `images` folder in your portfolio directory and add:**
- Profile photo
- Project screenshots
- Work samples
- Award/achievement images

### 5. Update Contact Information

**Find in footer:**
```html
<p>&copy; 2024 Swetha. All rights reserved.</p>
```

**Change to:**
```html
<p>&copy; 2024 Your Name. All rights reserved.</p>
```

**Update social links:**
```html
<div class="social-links">
    <a href="https://github.com/yourprofile">GitHub</a>
    <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
    <a href="https://twitter.com/yourprofile">Twitter</a>
</div>
```

## 🎨 Design Customization

### Change Primary Color

**In `styles.css`, modify:**
```css
:root {
    --primary-red: #8B1A1A;    /* Change this color code */
}
```

**Popular color codes:**
- Blue: `#0066CC` or `#003366`
- Green: `#00664D` or `#006644`
- Purple: `#663366` or `#660066`
- Navy: `#003366` or `#000066`
- Black: `#1a1a1a`

### Change Font

**In `styles.css`:**
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**Use Google Fonts:**
1. Go to fonts.google.com
2. Select your font
3. Copy the `@import` line to top of styles.css
4. Update the font-family in styles.css

Example:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

body {
    font-family: 'Poppins', sans-serif;
}
```

### Change Section Backgrounds

**In `styles.css`:**
```css
.red-bg {
    background: var(--primary-red);
}

.light-bg {
    background: var(--light-gray);
}
```

## 📋 Complete Content Update Example

### Before (Original):
```html
<section class="showcase-section red-bg">
    <div class="showcase-container">
        <h2>WEB DEVELOPMENT</h2>
        <div class="showcase-grid">
            <div class="showcase-image placeholder">Project 1</div>
            <div class="showcase-image placeholder">Project 2</div>
            <!-- more projects -->
        </div>
        <p class="showcase-desc">Building responsive, modern websites...</p>
    </div>
</section>
```

### After (Customized):
```html
<section class="showcase-section red-bg">
    <div class="showcase-container">
        <h2>MY PROJECTS</h2>
        <div class="showcase-grid">
            <img src="images/project1.jpg" alt="E-commerce Platform" class="showcase-image">
            <img src="images/project2.jpg" alt="Social Media App" class="showcase-image">
            <!-- add your project images -->
        </div>
        <p class="showcase-desc">I create beautiful, functional applications that solve real problems...</p>
    </div>
</section>
```

## 🔗 Adding Links to Projects

**In showcase sections:**
```html
<!-- Instead of just an image, wrap it in a link -->
<a href="https://github.com/yourproject" target="_blank">
    <img src="images/project1.jpg" alt="Project Name" class="showcase-image">
</a>
```

Or add project details:
```html
<div class="project-card">
    <img src="images/project1.jpg" alt="Project">
    <h4>Project Name</h4>
    <p>Brief description</p>
    <a href="https://link-to-project.com">View Project →</a>
</div>
```

## 📱 Text Content to Update

### Hero Section
- [ ] Bio/introduction paragraph
- [ ] Company name or title

### About Section
- [ ] About me description
- [ ] Statistics (projects, clients, etc.)

### Contact Section
- [ ] Email address
- [ ] Phone number
- [ ] Any additional contact info

### Footer
- [ ] Copyright name
- [ ] Social media links

## 📸 Image Recommendations

### Dimensions:
- Hero image: 800x600px
- Showcase images: 500x400px
- Project images: 600x400px
- About image: 600x700px
- Award images: 400x300px

### Format:
- Use JPG for photos
- Use PNG for graphics/logos
- Optimize images to reduce file size
- Use tools like: tinypng.com or compress.com

## 🚀 Next Steps After Customization

1. **Test on Mobile**: Open `index.html` in mobile browser
2. **Check Links**: Verify all links work correctly
3. **Spell Check**: Review all text for typos
4. **Image Quality**: Ensure images are clear and properly sized
5. **Deploy**: Upload to hosting (see README.md for options)

## 💡 Popular Customizations

### Add Download CV Button
```html
<a href="path/to/your/cv.pdf" download class="cta-button">
    Download CV →
</a>
```

### Change Section Order
Simply cut and paste entire `<section>` elements in `index.html` to reorder them.

### Add More Award Items
Copy the `<div class="award-item">` block and paste it multiple times:
```html
<div class="award-item">
    <img src="images/award.jpg" alt="Award" class="award-image">
    <h3>Award Name</h3>
</div>
```

### Add More Work Items
Copy `.work-item` elements in the `.work-grid`:
```html
<div class="work-item">
    <img src="images/work.jpg" alt="Work">
</div>
```

## ⚙️ Form Setup (For Email Submissions)

To make the contact form actually send emails, integrate with:

### Using Formspree (Easiest):
1. Go to formspree.io
2. Enter your email
3. Copy the form action URL
4. Update in `index.html`:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
    <!-- form fields -->
</form>
```

### Using EmailJS:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
```

## 🎓 Learning Resources

- **HTML**: W3Schools.com/html
- **CSS**: W3Schools.com/css
- **JavaScript**: MDN Web Docs (developer.mozilla.org)
- **Color Picker**: colorpicker.com
- **Image Compression**: tinypng.com

---

## ❓ Common Questions

**Q: How do I add more grid items?**
A: Copy the `<div class="showcase-image"></div>` block and paste it again.

**Q: Can I change the layout?**
A: Yes! Modify the `grid-template-columns` in CSS to change how many columns appear.

**Q: How do I make it mobile-only?**
A: You don't need to - it's already responsive!

**Q: Can I add animation effects?**
A: Yes! Modify the `@keyframes` in script.js or add new ones in styles.css.

---

**Happy customizing! Your portfolio will be unique and professional! 🎉**
