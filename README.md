# Pecify - Advanced Payment Infrastructure Solution

A modern, professional payment gateway website for **Pecify Infra Payment Solution Pvt Ltd** with a stunning modern design and comprehensive developer documentation.

## Company Information

- **Company Name:** Pecify Infra Payment Solution Pvt Ltd  
- **Email:** pecifypvtltd@gmail.com
- **Phone:** +91 93134 17507
- **Address:** 434, SHIVEN SQUARE, NR., BLUE WEST, Adajan, Surat-395009, Gujarat, India
- **GST Number:** 24AAPCP8032R1ZN

## Features

### Design & Branding
- **Modern Teal & Blue Color Scheme** - Professional fintech colors (#14B8A6 teal primary, #3B82F6 blue secondary, #F59E0B amber accent)
- **Dark/Light Theme Support** - Smooth theme switching with persistent preferences
- **Custom Cursor Effect** - Interactive glowing cursor for desktop users
- **Smooth Animations** - Framer Motion powered animations throughout
- **Glassmorphism UI** - Modern card designs with backdrop blur effects
- **Responsive Design** - Mobile-first approach, works perfectly on all devices

### Website Pages
1. **Home Page** (`/`) - Eye-catching hero section with animated background, stats cards, and feature highlights
2. **About Page** (`/about`) - Company story, mission, vision, values, and statistics
3. **Contact Page** (`/contact`) - Contact form with real company information
4. **Pricing Page** (`/pricing`) - Three pricing tiers with detailed feature comparison
5. **Developer Portal** (`/developers`) - Complete developer documentation hub
6. **API Reference** (`/developers/api-reference`) - Comprehensive REST API documentation
7. **SDK Documentation** (`/developers/sdk`) - Multi-language SDK examples (Node.js, Python, PHP, Java, Ruby, Go)
8. **Integration Guides** (`/developers/guides`) - Step-by-step integration tutorials

## Tech Stack

- **Framework:** Next.js 16 (App Router with Turbopack)
- **Language:** TypeScript
- **Styling:** Styled Components
- **Animations:** Framer Motion
- **Icons:** React Icons (Feather Icons)
- **Fonts:** Inter, Space Grotesk

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The website will be available at **http://localhost:3001** (or http://localhost:3000 if that port is available)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Key Differences from Davspay

### Branding & Design
- **Color Scheme:** Changed from violet/purple (#A78BFA) to teal/blue (#14B8A6)
- **Company Name:** Pecify (instead of Davspay Solution)
- **Tagline:** "Advanced Payment Infrastructure Solution" (instead of "Modern UPI Payment Gateway")

### Contact Information
- All contact details updated to Pecify's information
- Email, phone, address, and GST number updated throughout
- API documentation updated with pecify.com domain

### Content & Messaging
- More enterprise-focused messaging ("intelligent payment infrastructure")
- Updated mission, vision, and values to reflect Pecify's brand
- Modified hero section and about page content

## Project Structure

```
pecify/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with theme providers
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About page
│   ├── contact/page.tsx         # Contact page
│   ├── pricing/page.tsx         # Pricing page
│   └── developers/              # Developer portal
│       ├── page.tsx             # Developer hub
│       ├── api-reference/page.tsx   # API docs
│       ├── sdk/page.tsx         # SDK docs
│       └── guides/page.tsx      # Integration guides
├── components/
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx          # Button with variants
│   │   ├── Card.tsx            # Card with glassmorphism
│   │   └── CustomCursor.tsx    # Custom cursor effect
│   ├── layout/                  # Layout components
│   │   ├── Navbar.tsx          # Navigation with theme toggle
│   │   └── Footer.tsx          # Footer with contact info
│   └── sections/                # Page sections
│       ├── Hero.tsx            # Hero section
│       └── Features.tsx        # Features section
├── styles/
│   ├── themes/theme.ts         # Theme configuration (UPDATED COLORS)
│   └── GlobalStyles.ts         # Global styles & animations
├── lib/
│   ├── ThemeContext.tsx        # Theme provider
│   └── StyledComponentsRegistry.tsx
└── public/                      # Static assets
```

## Development Notes

### Theme Customization
The main theme colors are defined in `/styles/themes/theme.ts`. Modify the `darkTheme` and `lightTheme` objects to change the color scheme.

### Adding New Pages
1. Create a new folder in `/app` directory
2. Add a `page.tsx` file
3. Update navigation links in `/components/layout/Navbar.tsx` and `/components/layout/Footer.tsx`

### Modifying Content
- **Hero Section:** Edit `/components/sections/Hero.tsx`
- **Company Info:** Edit `/components/layout/Footer.tsx` and `/app/about/page.tsx`
- **Contact Details:** Edit `/app/contact/page.tsx`

## API Documentation

The developer portal includes comprehensive API documentation:
- Base URL: `https://api.pecify.com/v1`
- Authentication via Bearer tokens
- Complete endpoint documentation with examples
- SDK examples in 6 programming languages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Server-side rendering (SSR) for optimal performance
- Code splitting for faster page loads
- Optimized images and assets
- Lazy loading for components

## Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Screen reader friendly
- Proper ARIA labels

## License

ISC

---

**Built with ❤️ for Pecify Infra Payment Solution Pvt Ltd**

For support or questions, contact: pecifypvtltd@gmail.com | +91 93134 17507
