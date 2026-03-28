# Portfolio Files - Quick Reference

## 📂 Your Portfolio Files

```
d:\portfolio/
├── index.html          - Main website file (open this in browser)
├── styles.css          - All styling & colors
├── script.js           - Interactive features
├── README.md           - Complete documentation
├── SETUP.md            - Getting started guide
├── CUSTOMIZATION.md    - How to edit everything
└── QUICK_START.md      - This file!
```

---

## 🚀 Quick Start (5 Minutes)

### 1. Open Your Portfolio
```
Double-click: d:\portfolio\index.html
```
Your portfolio opens in your default browser!

### 2. Edit Your Information
Open `index.html` with a text editor (Notepad, VS Code, etc.)

**Key things to change:**
- Line 30: `<div class="logo">SWETHA</div>` → Your name
- Line 53: `<p>Creative Computer Science...` → Your bio
- Line 55: `<span>📧 swetha2912a@gmail.com</span>` → Your email

### 3. Add Your Images
1. Create `images` folder in `d:\portfolio`
2. Add your photos there
3. Update paths in `index.html`

**Example:**
```html
<!-- Change this: -->
<div class="hero-image placeholder">Portfolio Image</div>

<!-- To this: -->
<img src="images/your-photo.jpg" alt="My Photo" class="hero-image">
```

### 4. Deploy Online
- **GitHub Pages** (free & easy): See SETUP.md
- **Netlify** (free & very easy): See SETUP.md

---

## 📖 Which File Should I Read?

### 👶 I'm brand new - Start here:
1. **SETUP.md** ← Read this first! (5 min read)
2. Open `index.html` in browser
3. Read next step below

### ✏️ I want to edit content:
1. **CUSTOMIZATION.md** ← Detailed editing guide
2. Search for the section you want to change
3. Follow the examples

### 🎨 I want to change colors/design:
1. **CUSTOMIZATION.md** → "Design Customization" section
2. Edit color codes in `styles.css`
3. See examples for popular colors

### 🌐 I want to deploy online:
1. **SETUP.md** → "Deploy Your Portfolio" section
2. Choose GitHub Pages, Netlify, or hosting
3. Follow step-by-step instructions

### 📚 I want complete documentation:
1. **README.md** ← Comprehensive guide
2. Covers everything about the portfolio
3. Includes troubleshooting

---

## 💡 Essential Edits (Do These First)

### Edit 1: Update Your Name (1 min)
**File:** `index.html`
**Find:** Line ~30
```html
<div class="logo">SWETHA</div>
```
**Change to:**
```html
<div class="logo">YOUR NAME</div>
```

### Edit 2: Update Your Bio (2 min)
**File:** `index.html`
**Find:** Line ~53
```html
<p>Creative Computer Science student...</p>
```
**Change to:**
```html
<p>YOUR BIO HERE</p>
```

### Edit 3: Update Email (1 min)
**File:** `index.html`
**Find:** Line ~55
```html
<span>📧 swetha2912a@gmail.com</span>
```
**Change to:**
```html
<span>📧 your.email@example.com</span>
```

---

## 🎨 Most Common Customizations

### Change Main Color (Red to Blue, Green, etc.)
**File:** `styles.css`
**Find:** Line ~8
```css
--primary-red: #8B1A1A;
```
**Change color code:**
- Blue: `#0066CC`
- Green: `#00664D`
- Purple: `#663366`
- Navy: `#003366`

### Add/Change Section Count
**File:** `index.html`
Just copy-paste entire `<section>` blocks and edit them.

### Change Text in a Section
**File:** `index.html`
- Find the heading in the section
- Update the `<h2>` or `<p>` text
- Save and refresh browser

---

## 🖼️ Adding Your Images (Important!)

1. **Create `images` folder**
   - Right-click in `d:\portfolio`
   - New → Folder → Name it "images"

2. **Copy your images**
   - Add photos to `d:\portfolio/images/`

3. **Update HTML**
   - Find `<div class="placeholder">` tags
   - Replace with: `<img src="images/yourfile.jpg" alt="Description">`

**Image size recommendations:**
- Hero image: 800×600px
- Projects: 500×400px
- About image: 600×700px

---

## 🔍 File Navigation Guide

| Want to... | Edit This File | Search For... |
|-----------|----------------|---------------|
| Change your name | `index.html` | `<div class="logo">SWETHA</div>` |
| Change your bio | `index.html` | `<p>Creative Computer Science...` |
| Change email | `index.html` | `swetha2912a@gmail.com` |
| Change main color | `styles.css` | `--primary-red: #8B1A1A;` |
| Change font | `styles.css` | `font-family: 'Segoe UI'` |
| Add scrolling effect | `script.js` | `IntersectionObserver` |
| Add section | `index.html` | Copy any `<section>` block |

---

## ✅ Checklist for Going Live

- [ ] Read SETUP.md
- [ ] Update name, bio, email
- [ ] Add your images
- [ ] Test in browser (all sections)
- [ ] Check on phone size
- [ ] Deploy using one of the methods in SETUP.md
- [ ] Share your portfolio link!

---

## 🚨 Common Mistakes to Avoid

❌ **DON'T:** Delete important tags like `<section>`, `<div>`, `</div>`
✅ **DO:** Only edit text content between `>` and `<`

❌ **DON'T:** Change file names
✅ **DO:** Keep files as: `index.html`, `styles.css`, `script.js`

❌ **DON'T:** Put images directly in folder
✅ **DO:** Create `images` subfolder first

❌ **DON'T:** Edit CSS without understanding it
✅ **DO:** Change only the properties you understand

---

## 🆘 If Something Breaks

### Browser shows errors?
- Hard refresh: **Ctrl+Shift+R** (Chrome) or **Cmd+Shift+R** (Mac)
- Close and reopen browser

### Images not showing?
- Check file path is correct
- Make sure images folder exists
- Use forward slashes: `images/photo.jpg`

### Styles look wrong?
- Hard refresh browser (Ctrl+Shift+R)
- Check `styles.css` is in same folder
- Make sure you saved the file

### Can't find what to edit?
- Use **Ctrl+F** in text editor to search
- Search for unique text like "SWETHA" or "swetha2912a@gmail.com"

---

## 📱 Testing Your Portfolio

**On Desktop:**
1. Open `index.html` in browser
2. Click navigation links
3. Scroll through all sections

**On Phone/Tablet:**
1. Share file over network OR
2. Deploy online (see SETUP.md)
3. Check all elements fit properly
4. Tap all buttons

---

## 🌟 Next Level: Improvements

After you get comfortable:
- [ ] Integrate contact form (Formspree/EmailJS)
- [ ] Add animations on scroll
- [ ] Add dark mode toggle
- [ ] Add project details modals
- [ ] Add testimonials section
- [ ] Add blog/articles section

See **CUSTOMIZATION.md** for more advanced changes.

---

## 🔗 Useful Links

- **GitHub Pages Setup**: github.com/new → Select your repo → Settings → Pages
- **Netlify Deploy**: netlify.com → "New site from Git"
- **Color Picker**: colorpicker.com
- **Optimize Images**: tinypng.com
- **Icons**: fontawesome.com
- **Google Fonts**: fonts.google.com

---

## 📞 Need Help?

### Common Issues & Solutions:

**Q: Where do I edit my name?**
- `index.html` line 30: `<div class="logo">SWETHA</div>`

**Q: How do I add images?**
- Create `images` folder → Add photos → Update src path in `index.html`

**Q: How do I change colors?**
- `styles.css` line 8: `--primary-red: #8B1A1A;` → Change to your color

**Q: How do I deploy online?**
- Read SETUP.md → Choose GitHub Pages or Netlify

**Q: Can I use this on multiple devices?**
- Yes! All files are portable - copy to any device

---

## 🎓 Learning Resources

- **HTML Basics**: w3schools.com/html
- **CSS Tutorial**: w3schools.com/css
- **JavaScript Guide**: mdn.mozilla.org/docs/web/javascript
- **Web Hosting**: bluehost.com, hostinger.com, namecheap.com

---

## 🎉 You're All Set!

### Your Portfolio Includes:
✅ Modern, responsive design
✅ All the code you need
✅ Step-by-step guides
✅ Customization examples
✅ Deployment instructions
✅ Troubleshooting help

### Ready to Start?
1. Open **SETUP.md** (5-minute read)
2. Edit your `index.html`
3. Add your images
4. Deploy online
5. Share and celebrate! 🚀

---

**Happy building! Your portfolio will be amazing! 💪**

For quick edits: See CUSTOMIZATION.md
For deployment: See SETUP.md
For complete info: See README.md
