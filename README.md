# 🚗 Shree Balaji Motor Training School

Premium Next.js website — built with Next.js 14, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/
│   ├── globals.css        # Global styles + Tailwind + Google Fonts
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── page.tsx           # Main page composition
├── components/
│   ├── Navbar.tsx         # Sticky navbar + mobile menu
│   ├── Hero.tsx           # Full-screen cinematic hero
│   ├── Stats.tsx          # Animated counters section
│   ├── WhyUs.tsx          # Premium feature cards
│   ├── Journey.tsx        # Training journey + dashboard visual
│   ├── Reels.tsx          # Instagram reels showcase
│   ├── Reviews.tsx        # Student testimonials
│   ├── Contact.tsx        # Contact + inquiry form
│   ├── Footer.tsx         # Premium footer
│   ├── WhatsAppFloat.tsx  # Floating WhatsApp button
│   └── ScrollProgress.tsx # Top scroll progress bar
├── tailwind.config.ts     # Custom colors, fonts, animations
├── package.json
└── tsconfig.json
```

## Customization

### Phone Number
`+919850114660` 

### Colors
Edit `tailwind.config.ts` → `theme.extend.colors`.

### Font
Fonts loaded via Google Fonts in `globals.css`.

## Tech Stack

- **Next.js 14** — App Router, SSR, SEO-optimized
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Premium scroll animations, stagger effects, spring physics
- **TypeScript** — Type safety throughout

## Features

- ✅ Cinematic hero with animated road lines
- ✅ Animated counters on scroll
- ✅ Glassmorphism feature cards with hover effects  
- ✅ Framer Motion scroll-reveal on every section
- ✅ Draggable Instagram reels carousel
- ✅ Marathi student testimonials
- ✅ Contact + inquiry form
- ✅ Floating WhatsApp button
- ✅ Scroll progress bar
- ✅ Mobile-first responsive design
- ✅ Custom Tailwind animations
- ✅ SEO metadata
