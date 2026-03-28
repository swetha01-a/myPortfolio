# Swetha's Developer Portfolio

A modern, professional portfolio website built with HTML, CSS, and JavaScript. Designed with a clean layout and dark red/maroon color scheme.

## 📁 Project Structure

```
portfolio/
├── index.html      # Main HTML file with all sections
├── styles.css      # Complete styling and responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Scrolling** - Smooth navigation between sections
- **Modern Layout** - Grid-based, clean design inspired by professional portfolios
- **Contact Form** - Get in touch section with form validation
- **Interactive Elements** - Hover effects and animations
- **SEO Friendly** - Proper HTML5 semantic structure
- **Fast Loading** - Optimized CSS and minimal JavaScript

## 📝 Sections Included

1. **Navigation Bar** - Sticky navigation with smooth scrolling
2. **Hero/Portfolio Section** - Introduction with contact info
3. **Web Development** - Showcase your web projects
4. **Call to Action** - "Let's Work Together" section
5. **App Designing** - App development projects
6. **Selected Work** - Portfolio grid of your best work
7. **Specializations** - Your areas of expertise
8. **Achievements** - Awards and recognitions
9. **Experiences** - Skills and professional experiences
10. **Featured Project** - Highlight a special project
11. **About Me** - Personal introduction with statistics
12. **Contact Section** - Get in touch form and contact details
13. **Footer** - Copyright and social links

## 🎨 Customization Guide

### 1. **Change Colors**
Edit the color variables in `styles.css`:
```css
:root {
    --primary-red: #8B1A1A;      /* Main color */
    --dark-red: #6B1313;         /* Darker shade */
    --light-gray: #F5F5F5;       /* Background */
    --dark-text: #333;           /* Text color */
    --white: #ffffff;            /* White color */
}
```

### 2. **Update Personal Information**
In `index.html`, replace:
- `<title>` - Browser tab title
- `.logo` - Your name
- `.hero-text p` - Bio description
- `.contact-info` - Your email
- All placeholder text with your actual content

### 3. **Add Your Images**
Replace placeholder divs with your own images:
```html
<!-- Instead of: -->
<div class="hero-image placeholder">Portfolio Image</div>

<!-- Use: -->
<img src="path/to/your/image.jpg" alt="Your Image" class="hero-image">
```

### 4. **Update Social Links**
In the footer section, update:
```html
<div class="social-links">
    <a href="your-github-url">GitHub</a>
    <a href="your-linkedin-url">LinkedIn</a>
    <a href="your-twitter-url">Twitter</a>
</div>
```

### 5. **Customize Section Content**
Each section has editable heading and content:
- Update `<h2>` tags for section titles
- Modify `<p>` tags for descriptions
- Edit grid items for your projects

### 6. **Update Contact Information**
- Email: `swetha2912a@gmail.com` (change to your email)
- Add phone number if needed
- Update form action for backend processing

## 🔧 Making Changes

### Edit Text
Simply locate the section in `index.html` and update the text content.

### Edit Styles
Modify `styles.css` for colors, fonts, sizes, and spacing.

### Add Sections
Copy an existing section and modify it for your needs.

### Add Functionality
Extend `script.js` with additional JavaScript features.

## 📱 Responsive Breakpoints

The design is responsive at:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1200px
- **Mobile**: Below 768px

## 🌐 Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push these files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at: `https://yourusername.github.io/portfolio`

### Option 2: Netlify (Free)
1. Visit netlify.com
2. Drag and drop your portfolio folder
3. Your site will be deployed automatically

### Option 3: Traditional Hosting
Upload these files to any web hosting service using FTP or file manager.

## 🔗 File Usage

### index.html
- Main structure of the website
- Contains all sections and content
- Links to CSS and JavaScript files

### styles.css
- Complete styling for all elements
- Responsive design rules
- Animations and transitions

### script.js
- Smooth scrolling functionality
- Form handling
- Intersection Observer for animations
- Mobile menu support

## ✅ Customization Checklist

- [ ] Update your name in logo and title
- [ ] Replace bio text with your information
- [ ] Update email address
- [ ] Add your project descriptions
- [ ] Add your images (replace placeholders)
- [ ] Update social media links
- [ ] Change colors if desired
- [ ] Update phone number (if applicable)
- [ ] Review all text for accuracy
- [ ] Test on mobile devices
- [ ] Deploy to a hosting service

## 💡 Tips

1. **Images**: Use high-quality images for best results
2. **Text**: Keep descriptions concise and impactful
3. **Links**: Make sure all links point to correct pages/documents
4. **Testing**: Test your portfolio on multiple devices
5. **Updates**: Keep your portfolio updated with latest projects

## 🐛 Troubleshooting

### Links not scrolling?
- Make sure your `href="#sectionid"` matches the section's `id` attribute

### Images not showing?
- Verify the image path is correct
- Check file permissions
- Use relative paths like `images/photo.jpg`

### Form not submitting?
- Currently shows an alert. To send emails, integrate with:
  - Formspree
  - EmailJS
  - Backend service

### Styling issues?
- Clear browser cache (Ctrl+Shift+Del)
- Make sure styles.css is in the same folder
- Check for CSS conflicts

## 📧 Contact

For any questions or customization help:
- Email: swetha2912a@gmail.com

## 📄 License

This portfolio template is free to use and customize for personal use.

---

**Happy customizing! Good luck with your portfolio! 🚀**
