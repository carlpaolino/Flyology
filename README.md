# Flyology - Official Website

**Georgia Tech's Premier Outdoor Recreation Company**

A modern, responsive promotional website for Flyology, featuring fly-fishing, conventional fishing, and boating experiences. Built with Next.js, TypeScript, and Tailwind CSS.

![Flyology Hero](https://via.placeholder.com/1200x400/1B5E20/FBC02D?text=Flyology+Adventures)

## 🎣 Features

### Core Functionality
- **Responsive Hero Carousel** - Eye-catching slides with parallax effects
- **Animated Statistics** - Scroll-triggered counters showcasing our impact
- **Activity Showcase** - Detailed cards for Fly Fishing, Fishing, and Boating
- **Image Gallery** - Masonry layout with lightbox functionality
- **Contact Forms** - Integrated contact and newsletter subscription
- **User Authentication** - JWT-based sign-up and login system

### Design & UX
- **Brand-Focused Design** - Georgia Tech green (#1B5E20) and gold (#FBC02D) palette
- **Smooth Animations** - Framer Motion and GSAP powered interactions
- **Mobile-First** - Fully responsive across all devices
- **Accessibility** - WCAG 2.2 AA compliant
- **Performance Optimized** - Lazy loading, image optimization, and fast loading

### Technical Highlights
- **Modern Stack** - Next.js 14, TypeScript, Tailwind CSS
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- **Production Ready** - Optimized builds and deployment configuration

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd flyology-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   JWT_SECRET=your_jwt_secret_key_here
   CONTACT_EMAIL=info@flyology.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
flyology-website/
├── public/
│   ├── assets/
│   │   └── logo-placeholder.svg
│   └── images/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navbar.tsx
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ActivitiesSection.tsx
│       ├── StatsSection.tsx
│       ├── GalleryPreview.tsx
│       ├── ContactSection.tsx
│       ├── Footer.tsx
│       └── NewsletterModal.tsx
├── tailwind.config.js
├── next.config.js
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: Forest Green (#1B5E20) - Main brand color
- **Accent**: Golden Yellow (#FBC02D) - Highlight color
- **Neutral**: Slate (#ECEFF1) - Background and text

### Typography
- **Headings**: Montserrat (Google Fonts)
- **Body**: Open Sans (Google Fonts)

### Components
- **Buttons**: `.btn-primary`, `.btn-secondary`, `.btn-outline`
- **Cards**: `.card` with hover animations
- **Forms**: `.form-input` with focus states

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### Adding Content

1. **Hero Images**: Place in `/public/images/` directory
2. **Gallery Photos**: Add to `/public/images/gallery/`
3. **Content Updates**: Modify component files in `/src/components/`

### Customization

- **Colors**: Update `tailwind.config.js`
- **Fonts**: Modify `src/app/globals.css`
- **Logo**: Replace `/public/assets/logo-placeholder.svg`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Automatic on git push

### Manual Deployment

```bash
npm run build
npm run start
```

### Environment Variables for Production

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
JWT_SECRET=your_production_jwt_secret
CONTACT_EMAIL=info@flyology.com
SMTP_HOST=smtp.gmail.com
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
MAILCHIMP_API_KEY=your_mailchimp_api_key
MAILCHIMP_AUDIENCE_ID=your_audience_id
```

## 📱 Features Implementation Status

| Feature | Status | Priority |
|---------|--------|----------|
| ✅ Landing Page | Complete | High |
| ✅ Navigation | Complete | High |
| ✅ Hero Carousel | Complete | High |
| ✅ Activities Section | Complete | High |
| ✅ Stats Counters | Complete | Medium |
| ✅ Gallery Preview | Complete | Medium |
| ✅ Contact Form | Complete | High |
| ✅ Newsletter Modal | Complete | Medium |
| ⏳ User Authentication | Planned | High |
| ⏳ Activity Detail Pages | Planned | High |
| ⏳ Full Gallery | Planned | Medium |
| ⏳ 404 Page | Planned | Low |

## 🔧 Technical Specifications

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **Forms**: React Hook Form
- **Icons**: Heroicons
- **Image Optimization**: Next.js Image
- **SEO**: Next.js Metadata API

## 📊 Performance Targets

- **Lighthouse Score**: 90+ across all metrics
- **LCP**: ≤ 2.5s on 3G
- **CLS**: ≤ 0.1
- **Accessibility**: WCAG 2.2 AA compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2024 Flyology. All rights reserved.

## 📞 Support

For questions or support:
- **Email**: info@flyology.com
- **Phone**: (404) 555-FISH

---

**Built with ❤️ by the Georgia Tech community**