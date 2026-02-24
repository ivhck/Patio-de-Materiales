# Site Configuration Guide

## File Names to Replace

Use this guide to replace all placeholder text throughout the site.

### Global Replacements

Replace these across ALL HTML files:

| Placeholder | Replace With | Found In |
|------------|-------------|----------|
| `Your Company Name` | Your actual company name | All pages |
| `your@email.com` | info@yourcompany.com | Contact pages |
| `+1 (555) 123-4567` | Your phone number | Contact pages |
| `123 Business Street, City, State 12345` | Your address | Info sections |
| `yourdomain.com` | Your actual domain | sitemap.xml |

### Product Information

#### Homepage Featured Products

**Product 1:**
- Title: `Product Name 1` 
- Price: `$99.99`
- Description: Replace lorem ipsum
- Image: `assets/images/product-1.jpg`

**Product 2:**
- Title: `Product Name 2`
- Price: `$149.99`
- Description: Replace lorem ipsum
- Image: `assets/images/product-2.jpg`

**Product 3:**
- Title: `Product Name 3`
- Price: `$199.99`
- Description: Replace lorem ipsum
- Image: `assets/images/product-3.jpg`

### Product Categories

Update the three main categories to match your business:

1. **Category One** (🪨 emoji)
   - Update title and description
   - Can change emoji in `<span style="font-size: 4rem;">🪨</span>`

2. **Category Two** (🏗️ emoji)
   - Update title and description
   - Can change emoji

3. **Category Three** (🎨 emoji)
   - Update title and description
   - Can change emoji

### Image Files to Add

Place these in `assets/images/` folder:

**Essential Images:**
- `logo.png` - Your company logo
- `favicon.ico` - Browser tab icon
- `hero-bg.jpg` - Homepage hero background image

**Product Images:**
- `product-1.jpg` through `product-6.jpg`

**Gallery Images:**
- `gallery-1.jpg` through `gallery-12.jpg`

**Other Images:**
- `about-image.jpg` - Company/team photo
- `service-image.jpg` (3 needed) - Service section images

### Why Choose Us Section

Update these three benefits on homepage:

1. **Quality Products** (✓)
   - Title and description

2. **Fast Delivery** (⚡)
   - Title and description

3. **Best Prices** (💰)
   - Title and description

### Team Members

Update in `pages/about.html`:

For each of 3 team members:
- Name
- Position/Title
- Bio/Description
- (Add photo in assets/images/)

### Business Hours

Update in `pages/contact.html`:

Currently shows:
```
Monday - Friday: 9:00 AM - 6:00 PM
Saturday: 10:00 AM - 4:00 PM
Sunday: Closed
```

### Social Media Links

Update in footer (all pages):

```html
<a href="https://facebook.com/yourpage">f</a>
<a href="https://instagram.com/yourprofile">📷</a>
<a href="https://twitter.com/yourhandle">𝕏</a>
<a href="https://linkedin.com/company/yourcompany">in</a>
```

### Contact Form

In `pages/contact.html`:

Update the thank you message:
```javascript
alert('Thank you for your message! We will get back to you soon.');
```

### FAQs

Update the 3 FAQ items in `pages/contact.html`:

1. What are your business hours?
2. Do you offer delivery?
3. How can I track my order?

### Services Page

Update in `pages/services.html`:

**Service Cards (6 total):**
- Service name
- Service description
- Related emoji/icon

**Service Packages (3 total):**
- Package name
- Price
- Features list

### CSS Variables

Edit colors in `assets/css/style.css`:

```css
:root {
  --primary-color: #2c5f2d;      /* Main brand color */
  --secondary-color: #f39c12;    /* Accent color */
  --text-dark: #333333;          /* Dark text */
  --text-light: #666666;         /* Light text */
  --bg-light: #f8f9fa;           /* Light background */
  --bg-white: #ffffff;           /* White background */
  --border-color: #e0e0e0;       /* Border color */
}
```

### Meta Tags

Update in each page's `<head>`:

```html
<meta name="description" content="Your page description here">
<meta name="keywords" content="keyword1, keyword2, keyword3">
```

### XML Sitemap

Edit `sitemap.xml`:

1. Replace all instances of `yourdomain.com` with your domain
2. Update last modified dates
3. Adjust priority values (0.5 to 1.0)
4. Adjust change frequency (daily, weekly, monthly)

## Content Areas to Update

### Homepage Sections

1. **Hero Section**
   - Heading
   - Subtitle
   - CTA button text

2. **Featured Products Section**
   - Section title
   - Product details (3 items)

3. **Why Choose Us**
   - Section title
   - 3 benefit items

4. **Category Showcase**
   - 3 category cards

5. **Testimonials**
   - 3 customer quotes
   - Customer names/companies

### Products Page

1. Filter names
2. Product listings (6 items)
3. Product prices
4. Product descriptions

### Gallery Page

1. Gallery title
2. Category filters
3. 12 gallery images
4. Image captions

### About Page

1. Company story
2. Mission statement
3. 3 team members (name, position, bio)
4. Statistics/achievements
5. Certifications

### Services Page

1. Service introductions
2. 6 service cards
3. Detailed service descriptions
4. 3 pricing packages

### Contact Page

1. Contact form labels
2. Contact information
3. Business hours
4. 3 FAQ items

## Implementation Checklist

- [ ] Replace all "Your Company Name" references
- [ ] Update contact information
- [ ] Add company logo (logo.png)
- [ ] Add all product images
- [ ] Add all gallery images
- [ ] Update product information
- [ ] Update team member information
- [ ] Update service descriptions
- [ ] Update colors if desired
- [ ] Update social media links
- [ ] Update meta tags for SEO
- [ ] Update sitemap.xml
- [ ] Test all links on desktop
- [ ] Test all links on mobile
- [ ] Test forms
- [ ] Test gallery lightbox
- [ ] Test mobile menu
- [ ] Deploy to hosting

