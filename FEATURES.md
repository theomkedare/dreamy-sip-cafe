# 🛒 New Features Guide

## ✨ What's New

Your Dreamy Sip website now includes **fully functional** shopping cart and contact form features!

---

## 🛍️ Shopping Cart System

### Features:
- ✅ **Add to Cart** from Menu page
- ✅ **Cart Badge** showing item count in navigation
- ✅ **Slide-out Cart Drawer** with smooth animations
- ✅ **Quantity Controls** (increase/decrease items)
- ✅ **Remove Items** individually
- ✅ **Clear Cart** option
- ✅ **Automatic Total Calculation**
- ✅ **LocalStorage Persistence** (cart survives page refresh)
- ✅ **Checkout Function** with order summary

### How It Works:

1. **Browse Menu** → Click "Add to Cart" on any item
2. **Cart Badge Updates** → See item count in navigation
3. **View Cart** → Click cart icon to open drawer
4. **Manage Items** → Adjust quantities or remove items
5. **Checkout** → Click checkout to place order

### For Developers:

**Cart Context** (`src/context/CartContext.jsx`):
- Manages global cart state
- Handles add/remove/update operations
- Calculates totals
- Persists to localStorage

**Cart Component** (`src/components/Cart.jsx`):
- Slide-out drawer UI
- Item management interface
- Checkout functionality

**Menu Integration** (`src/pages/MenuPage.jsx`):
- Each item has unique ID
- "Add to Cart" button triggers addToCart()
- Success feedback when items added

---

## 📧 Contact Form

### Features:
- ✅ **Form Validation** (required fields)
- ✅ **Date Validation** (can't book past dates)
- ✅ **Loading States** (submitting indicator)
- ✅ **Success/Error Messages** with animations
- ✅ **Auto-clear Form** after successful submission
- ✅ **Clickable Contact Info** (tel: and mailto: links)
- ✅ **Social Media Links**

### How It Works:

1. **Fill Form** → Name, email, phone, date, time, guests, special requests
2. **Submit** → Click "Submit Reservation"
3. **Confirmation** → See success message with animation
4. **Email Sent** → Form data logged (ready for backend integration)

### For Developers:

**Current Implementation**:
- Form validates all required fields
- Simulates API call with 1.5s delay
- Console logs reservation data
- Shows success/error messages

**To Connect Real Backend**:

Replace the try block in `ContactPage.jsx` (line ~19) with:

```javascript
// Option 1: Your Backend API
const response = await fetch('https://your-api.com/reservations', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});

// Option 2: EmailJS (install: npm install emailjs-com)
import emailjs from 'emailjs-com';
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);

// Option 3: Formspree (free, no signup needed)
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

---

## 🔧 Integration Options

### For Shopping Cart:

**Connect to Payment Gateway:**
```javascript
// In Cart.jsx handleCheckout function:
const stripe = await loadStripe('YOUR_STRIPE_KEY');
const { error } = await stripe.redirectToCheckout({
  lineItems: cartItems.map(item => ({
    price: item.priceId,
    quantity: item.quantity
  })),
  mode: 'payment',
  successUrl: 'https://yourdomain.com/success',
  cancelUrl: 'https://yourdomain.com/cart'
});
```

**Send Order to Backend:**
```javascript
const response = await fetch('/api/orders', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    items: cartItems,
    total: getCartTotal(),
    timestamp: new Date().toISOString()
  })
});
```

### For Contact Form:

**EmailJS Setup (Easiest):**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Install: `npm install emailjs-com`
3. Get Service ID, Template ID, and Public Key
4. Replace the code in ContactPage.jsx

**Formspree Setup (No Code):**
1. Go to [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update fetch URL in ContactPage.jsx

---

## 🎨 Customization

### Cart Colors:
Edit `src/components/Cart.jsx`:
- Line 54: Card background (`from-purple-50 to-pink-50`)
- Line 94: Button gradient (`from-purple-600 to-pink-500`)

### Form Styling:
Edit `src/pages/ContactPage.jsx`:
- Line 98: Input focus color (`focus:border-purple-500`)
- Line 176: Submit button gradient

### Cart Behavior:
Edit `src/context/CartContext.jsx`:
- Line 37-38: Auto-close cart after 2 seconds (change timeout)
- Line 67: Calculate custom fees/taxes in getCartTotal()

---

## 📱 Mobile Friendly

Both features are fully responsive:
- Cart drawer adapts to screen size (full width on mobile)
- Form layout stacks on small screens
- Touch-friendly button sizes
- Smooth animations on all devices

---

## 🐛 Troubleshooting

**Cart not showing items?**
- Check browser console for errors
- Clear localStorage: `localStorage.clear()`
- Refresh page

**Form not submitting?**
- Check all required fields are filled
- Check browser console for errors
- Ensure date is not in the past

**Cart icon not updating?**
- Make sure CartProvider wraps the entire app
- Check that useCart() is called inside CartProvider

---

## 🚀 Next Steps

1. **Test locally:** Add items to cart, submit form
2. **Customize:** Update colors, text, behavior
3. **Connect backend:** Add payment processing or email service
4. **Deploy:** Push to production
5. **Monitor:** Check submissions in your backend/email

---

**Need Help?** Check the code comments in:
- `src/context/CartContext.jsx`
- `src/components/Cart.jsx`
- `src/pages/ContactPage.jsx`

**Happy coding! ☕✨**
