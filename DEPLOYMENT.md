# Flyology Website - Deployment Guide

This guide will help you deploy the Flyology promotional website to various hosting platforms.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and is created by the same team.

#### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Configure environment variables (see below)
   - Deploy!

3. **Environment Variables**
   Add these in Vercel dashboard:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   JWT_SECRET=your_secure_jwt_secret_here
   CONTACT_EMAIL=info@flyology.com
   ```

### Option 2: Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Same as Vercel

### Option 3: Traditional Hosting

For shared hosting or VPS:

1. **Build the application**
   ```bash
   npm run build
   npm run export  # If using static export
   ```

2. **Upload files**
   - Upload the `out` folder (for static) or entire project (for server)
   - Configure your web server (Apache/Nginx)

## 🔧 Environment Configuration

### Required Environment Variables

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Authentication
JWT_SECRET=your_very_secure_jwt_secret_key_minimum_32_characters

# Contact Form
CONTACT_EMAIL=info@flyology.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_specific_password

# Newsletter (Optional)
MAILCHIMP_API_KEY=your_mailchimp_api_key
MAILCHIMP_AUDIENCE_ID=your_mailchimp_audience_id

# Database (If using Supabase)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Generating JWT Secret

```bash
# Generate a secure JWT secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 📧 Email Configuration

### Gmail Setup

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in `SMTP_PASS`

### Alternative Email Providers

- **SendGrid**: Professional email service
- **Mailgun**: Developer-friendly email API
- **AWS SES**: Amazon's email service

## 🗄️ Database Setup (Optional)

### Supabase (Recommended)

1. **Create Project** at [supabase.com](https://supabase.com)
2. **Get Credentials** from Project Settings → API
3. **Add Environment Variables**
4. **Create Tables** (if implementing user auth)

### Alternative Databases

- **PlanetScale**: MySQL-compatible serverless database
- **Railway**: PostgreSQL hosting
- **Neon**: Serverless PostgreSQL

## 🔍 Pre-Deployment Checklist

### Performance
- [ ] Images optimized and compressed
- [ ] Lighthouse score > 90
- [ ] Bundle size analyzed
- [ ] Unused dependencies removed

### SEO
- [ ] Meta tags configured
- [ ] Open Graph images added
- [ ] Sitemap generated
- [ ] robots.txt configured

### Security
- [ ] Environment variables secured
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] API endpoints protected

### Content
- [ ] All placeholder content replaced
- [ ] Contact information updated
- [ ] Legal pages created (Privacy, Terms)
- [ ] 404 page implemented

## 🌐 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as shown
4. Wait for SSL certificate generation

### DNS Configuration
```
Type: CNAME
Name: www
Value: your-project.vercel.app

Type: A
Name: @
Value: 76.76.19.61 (Vercel's IP)
```

## 📊 Monitoring & Analytics

### Google Analytics
1. Create GA4 property
2. Add tracking code to `layout.tsx`
3. Configure goals and conversions

### Performance Monitoring
- **Vercel Analytics**: Built-in performance monitoring
- **Sentry**: Error tracking and performance monitoring
- **LogRocket**: Session replay and monitoring

## 🔄 CI/CD Pipeline

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (18+)
   - Clear `.next` folder and rebuild
   - Check for TypeScript errors

2. **Environment Variables Not Working**
   - Ensure `NEXT_PUBLIC_` prefix for client-side variables
   - Restart development server after changes
   - Check Vercel dashboard for proper configuration

3. **Images Not Loading**
   - Add domain to `next.config.js` if using external images
   - Check image paths and file extensions
   - Verify image optimization settings

4. **Contact Form Not Working**
   - Verify SMTP credentials
   - Check email provider settings
   - Test with a simple email service first

## 📞 Support

If you encounter issues during deployment:

1. Check the [Next.js deployment documentation](https://nextjs.org/docs/deployment)
2. Review Vercel's [troubleshooting guide](https://vercel.com/docs/concepts/deployments/troubleshoot-a-build)
3. Contact the development team at info@flyology.com

---

**Happy Deploying! 🎣** 