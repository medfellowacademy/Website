# Med Fellow Academy

A premium medical fellowship academy website built with modern web technologies, focusing on clean, academic design principles.

## 🎯 Project Overview

Med Fellow Academy is a sophisticated platform for advanced fellowship programs designed for practicing doctors. The website emphasizes academic credibility, professional design, and doctor-first user experience.

## ✨ Key Features

### Design Philosophy
- **Clean & Premium**: Minimal animations, generous white space
- **Academic-First**: Professional, respectful design for medical professionals
- **Doctor-Focused UX**: Larger text, calm scrolling, no flashy effects
- **Card-Based Layout**: Clean, organized content presentation

### Color Palette
- **Primary**: Deep Academic Navy (#1E2A44) - Headers, navbar, buttons
- **Secondary**: Soft Teal (#2FA4A9) - Highlights, icons, tags
- **Background**: Off White (#F7F9FC) - Easy on eyes, premium feel
- **Accent**: Muted Gold (#E0B15C) - Certifications, badges (used sparingly)
- **Text**: Dark Grey (#1F2937, #6B7280) - Primary and secondary text

### Typography
- **Headings**: Poppins (600 weight)
- **Body**: Inter (400-600 weight)
- **Sizes**:
  - H1: 40-48px
  - H2: 32px
  - H3: 24px
  - Body: 16-18px

## 📋 Homepage Sections

1. **Hero Section**
   - Strong statement: "Advanced Fellowship Programs for Practicing Doctors"
   - Minimal CTA: "View Programs"
   - Trust indicators (500+ Fellows, 50+ Hospital Partners, 98% Certification Rate)

2. **Why Med Fellow Academy**
   - Academic Credibility
   - Hospital Exposure
   - Certification Value

3. **Fellowship Programs**
   - Card grid layout
   - 6 specialized programs:
     - Emergency Medicine
     - Critical Care Medicine
     - Interventional Cardiology
     - Minimally Invasive Surgery
     - Pediatric Intensive Care
     - Clinical Research

4. **Faculty & Mentors**
   - Doctor profiles with credentials
   - Clean, no-fancy-effects design
   - Academic credentials prominently displayed

5. **Certification & Accreditation**
   - International recognition
   - Gold accent implementation
   - Accreditation bodies listed

6. **Testimonials**
   - Text-first approach
   - Not flashy, professional presentation
   - Real fellow experiences

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **Fonts**: Google Fonts (Inter & Poppins)

## 🛠️ Installation & Setup

```bash
# Navigate to project directory
cd med-fellow-academy

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
med-fellow-academy/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── WhyMedFellow.tsx    # Benefits section
│   ├── FellowshipPrograms.tsx  # Programs grid
│   ├── Faculty.tsx         # Faculty profiles
│   ├── Certification.tsx   # Certification section
│   ├── Testimonials.tsx    # Testimonials
│   └── Footer.tsx          # Footer
├── tailwind.config.ts      # Tailwind configuration
└── package.json
```

## 🎨 Design Principles

### What Makes This Stand Out

✅ **Calm Academic Colors** - Professional color palette avoiding bright, flashy colors
✅ **Minimal Animations** - Subtle transitions, no distracting effects
✅ **Doctor-First UX** - Designed for medical professionals, not students
✅ **Fellowship-Focused Language** - Academic terminology and professional tone
✅ **Premium Spacing & Typography** - Generous whitespace for readability

### Design Rules
- Less color + more white space = premium feel
- No stock medical clichés
- Line icons over photographs
- Bigger, readable text (18px minimum for body)
- Rounded corners: 12-16px for cards
- Academic-first, not sales-first approach

## 🌐 Access the Website

Once the development server is running:
- **Local**: http://localhost:3001
- **Network**: http://192.168.0.27:3001

## 📝 Customization

### Update Colors
Edit `tailwind.config.ts` to modify the color scheme.

### Add Fellowship Programs
Edit `components/FellowshipPrograms.tsx` and add to the `programs` array.

### Add Faculty Members
Edit `components/Faculty.tsx` and add to the `faculty` array.

### Modify Content
Each component is modular and can be edited independently.

## 🎯 Best Practices Implemented

- Semantic HTML structure
- Responsive design (mobile-first approach)
- Accessible color contrasts
- SEO-optimized metadata
- Fast loading times with Next.js
- Clean, maintainable code structure

## 📄 License

This project is created for Med Fellow Academy.

---

**Built with care for medical professionals** 🏥


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
