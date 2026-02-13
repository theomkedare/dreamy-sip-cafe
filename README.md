# Dreamy Sip Cafe Website 🎨☕

A stunning, portfolio-worthy website for **Dreamy Sip Cafe** featuring a dreamy aesthetic with smooth animations, elegant typography, and a responsive design.

## 🌟 Features

- **6 Complete Pages:**
  - Home - Hero section, features, testimonials, newsletter
  - Menu - Categorized items with pricing
  - About Us - Brand story and values
  - Gallery - Filterable photo gallery
  - Location & Hours - Address and operating hours
  - Contact - Reservation form and social media

- **🛒 NEW: Shopping Cart System:**
  - Functional "Add to Cart" on menu items
  - Cart icon with item count badge
  - Slide-out cart drawer
  - Quantity management
  - Automatic total calculation
  - LocalStorage persistence

- **📧 NEW: Working Contact Form:**
  - Form validation
  - Success/error messages
  - Loading states
  - Email integration ready
  - Date validation

- **Design Highlights:**
  - Dreamy purple-to-pink gradient aesthetic
  - Premium typography (Playfair Display & Cormorant Garamond)
  - Smooth animations and transitions
  - Fully responsive mobile design
  - Interactive elements and hover effects

## 📁 Project Structure

```
dreamy-sip-website/
├── public/
│   └── index.html              # Main HTML file
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Header navigation
│   │   └── Footer.jsx          # Footer component
│   ├── pages/
│   │   ├── HomePage.jsx        # Home page
│   │   ├── MenuPage.jsx        # Menu page
│   │   ├── AboutPage.jsx       # About page
│   │   ├── GalleryPage.jsx     # Gallery page
│   │   ├── LocationPage.jsx    # Location page
│   │   └── ContactPage.jsx     # Contact page
│   ├── styles/
│   │   └── animations.css      # Custom animations
│   ├── App.jsx                 # Main app component
│   └── index.jsx               # Entry point
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Colors
The color scheme uses purple-to-pink gradients with amber accents. To customize:
- Main gradient: `from-purple-600 to-pink-500`
- Accent colors in Tailwind CSS classes

### Fonts
- Display font: Playfair Display (headings)
- Body font: Cormorant Garamond (paragraphs)

### Content
Edit the content in each page component:
- Menu items: `src/pages/MenuPage.jsx`
- Testimonials: `src/pages/HomePage.jsx`
- Contact info: `src/pages/ContactPage.jsx`
- Gallery images: `src/pages/GalleryPage.jsx`

## 🛠️ Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Google Fonts** - Typography

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Key Features Implemented

✅ Mobile-friendly responsive design
✅ Smooth animations and transitions
✅ Interactive reservation form
✅ Filterable gallery
✅ SEO-optimized structure
✅ Social media integration
✅ Newsletter signup
✅ Customer testimonials
✅ Clear calls-to-action
✅ **NEW: Functional shopping cart**
✅ **NEW: Working contact form with validation**

**📖 For detailed feature documentation, see [FEATURES.md](FEATURES.md)**

## 📄 License

MIT License - feel free to use this for your portfolio!

## 🤝 Contributing

This is a portfolio project, but feel free to fork and customize it for your own needs!

## 📧 Contact

For questions or suggestions about this project, please reach out through the contact form on the website.

---

**Made with ❤️ and ☕ for Dreamy Sip Cafe**
