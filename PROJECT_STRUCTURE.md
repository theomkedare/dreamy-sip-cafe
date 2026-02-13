# Dreamy Sip Website - Project Structure

## 📂 Complete File Structure

```
dreamy-sip-website/
│
├── 📄 README.md                    # Project documentation & setup guide
├── 📄 package.json                 # NPM dependencies and scripts
├── 📄 vite.config.js               # Vite bundler configuration
├── 📄 .gitignore                   # Git ignore rules
│
├── 📁 public/
│   └── 📄 index.html               # Main HTML entry point
│
└── 📁 src/
    │
    ├── 📄 index.jsx                # React app entry point
    ├── 📄 App.jsx                  # Main app component with routing logic
    │
    ├── 📁 components/              # Reusable components
    │   ├── 📄 Navigation.jsx       # Header navigation bar
    │   └── 📄 Footer.jsx           # Footer with links & info
    │
    ├── 📁 pages/                   # Individual page components
    │   ├── 📄 HomePage.jsx         # Landing page with hero & features
    │   ├── 📄 MenuPage.jsx         # Menu with categories & items
    │   ├── 📄 AboutPage.jsx        # About us & brand story
    │   ├── 📄 GalleryPage.jsx      # Image gallery with filters
    │   ├── 📄 LocationPage.jsx     # Address, hours, map
    │   └── 📄 ContactPage.jsx      # Contact form & social media
    │
    └── 📁 styles/                  # CSS files
        └── 📄 animations.css       # Custom animations & fonts
```

## 🎯 File Descriptions

### Root Files

- **README.md** - Complete documentation with setup instructions
- **package.json** - Project dependencies (React, Vite, Tailwind, Lucide)
- **vite.config.js** - Development server configuration
- **.gitignore** - Files to exclude from version control

### Public Folder

- **index.html** - Main HTML file with SEO meta tags and root div

### Source Folder

#### Main Files
- **index.jsx** - React DOM rendering entry point
- **App.jsx** - Main component handling page routing and state

#### Components Folder
- **Navigation.jsx** - Responsive navbar with mobile menu
- **Footer.jsx** - Footer with quick links and contact info

#### Pages Folder
- **HomePage.jsx** - Hero section, features, testimonials, newsletter
- **MenuPage.jsx** - Food & drink menu with pricing
- **AboutPage.jsx** - Brand story, values, mission
- **GalleryPage.jsx** - Photo gallery with category filters
- **LocationPage.jsx** - Address, opening hours, map placeholder
- **ContactPage.jsx** - Reservation form, contact details, social media

#### Styles Folder
- **animations.css** - Custom CSS animations and Google Fonts import

## 🔧 Component Hierarchy

```
App.jsx
├── Navigation.jsx
├── [Current Page]
│   ├── HomePage.jsx
│   ├── MenuPage.jsx
│   ├── AboutPage.jsx
│   ├── GalleryPage.jsx
│   ├── LocationPage.jsx
│   └── ContactPage.jsx
└── Footer.jsx
```

## 🎨 Key Features by File

### HomePage.jsx
- Hero section with floating animations
- Feature cards with hover effects
- Customer testimonials
- Newsletter signup form

### MenuPage.jsx
- 4 categories: Coffee, Food, Pastries, Drinks
- Item cards with pricing
- "Add to Order" buttons
- Online ordering CTA

### AboutPage.jsx
- Brand story with imagery
- Core values section
- Mission statement

### GalleryPage.jsx
- Filterable image grid (All, Interior, Food, Drinks)
- Hover effects on images
- Social media integration

### LocationPage.jsx
- Address card with directions button
- Operating hours schedule
- Map placeholder

### ContactPage.jsx
- Full reservation form
- Contact information cards
- Social media buttons

### Navigation.jsx
- Fixed header with scroll effects
- Desktop navigation menu
- Mobile hamburger menu
- Active page indicators

### Footer.jsx
- Quick navigation links
- Business hours
- Contact information
- Copyright notice

## 🚀 How to Run

1. Open terminal in project root
2. Run `npm install`
3. Run `npm run dev`
4. Visit `http://localhost:3000`

## 📦 Dependencies

- react: UI library
- react-dom: React rendering
- lucide-react: Icon library
- vite: Build tool
- @vitejs/plugin-react: React support for Vite
- tailwindcss: Utility-first CSS

## 🎨 Design System

**Colors:**
- Purple: #9333EA (primary)
- Pink: #EC4899 (secondary)
- Amber: #F59E0B (accent)

**Fonts:**
- Playfair Display (headings)
- Cormorant Garamond (body)

**Animations:**
- fadeIn, fadeInUp, fadeInLeft, fadeInRight
- float (for floating elements)

---

**Total Files:** 15
**Total Folders:** 5
**Lines of Code:** ~2000+
