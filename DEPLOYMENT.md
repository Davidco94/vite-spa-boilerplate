# Cloudflare Pages Deployment Guide

This guide will walk you through deploying the MindWave.AI Vite application to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free tier works great)
- Your GitHub repository: `Davidco94/vite-spa-boilerplate`
- The app built and ready (production files in `dist/` folder)

---

## Step-by-Step Deployment Process

### **Step 1: Access Cloudflare Pages**

1. Open your browser and navigate to: **https://dash.cloudflare.com/**
2. Log in to your Cloudflare account
   - If you don't have an account, click **"Sign Up"** and create one (it's free)
3. In the left sidebar, click on **"Workers & Pages"**
4. Click the **"Create application"** button (blue button in the top right)
5. Select the **"Pages"** tab at the top
6. Click **"Connect to Git"**

---

### **Step 2: Connect Your GitHub Repository**

1. Click the **"Connect GitHub"** button
2. A GitHub authorization popup will appear
   - Click **"Authorize Cloudflare"**
3. Select repository access:
   - Choose **"Only select repositories"**
   - Find and select: **`Davidco94/vite-spa-boilerplate`**
4. Click **"Install & Authorize"**
5. You'll be redirected back to Cloudflare

---

### **Step 3: Configure Build Settings**

You'll now see the "Set up builds and deployments" page. Fill in the following:

#### **Project Configuration:**

**Project name:**
```
mindwave-ai
```
> Note: This will be your subdomain: `mindwave-ai.pages.dev`
> You can choose any available name you prefer

**Production branch:**
```
main
```

---

#### **Build Settings:**

**Framework preset:**
- Click the dropdown and select: **"Vite"**
- Cloudflare will auto-fill some settings

**Build command:**
```
npm run build
```

**Build output directory:**
```
dist
```

**Root directory (optional):**
```
(leave empty)
```

---

#### **Environment Variables:**
- No environment variables needed for this project
- Leave this section empty

---

### **Step 4: Deploy Your Application**

1. Review all settings one more time
2. Click the **"Save and Deploy"** button at the bottom
3. Cloudflare Pages will now:
   - ✓ Clone your repository from GitHub
   - ✓ Install dependencies (`npm install`)
   - ✓ Build your application (`npm run build`)
   - ✓ Deploy the `dist/` folder to their global CDN

**Expected build time:** 1-3 minutes

You'll see a real-time build log showing progress. The log will show:
- Cloning repository
- Installing dependencies
- Running build command
- Deploying to Cloudflare's network

---

### **Step 5: Access Your Live Site**

1. Once the build completes, you'll see: **"Success! Your site is live! 🎉"**
2. Your deployment URL will be displayed:
   ```
   https://mindwave-ai.pages.dev
   ```
   (or whatever project name you chose)
3. Click the URL to view your live site
4. Share the link with anyone - it's now publicly accessible!

---

## Automatic Deployments

✅ **Continuous Deployment is now enabled!**

Every time you:
- Push commits to the `main` branch
- Merge a pull request to `main`

Cloudflare will automatically:
1. Detect the changes
2. Rebuild your application
3. Deploy the new version

**No manual deployment needed ever again!**

---

## Preview Deployments

Cloudflare also creates preview deployments for:
- Pull requests (before merging)
- Non-production branches

Each PR gets a unique preview URL like:
```
https://abc123.mindwave-ai.pages.dev
```

---

## Setting Up a Custom Domain (Optional)

If you own a custom domain (e.g., `mindwave.ai`):

### **Step 1: Add Custom Domain**
1. Go to your Cloudflare Pages project dashboard
2. Click the **"Custom domains"** tab
3. Click **"Set up a custom domain"**
4. Enter your domain name: `mindwave.ai` or `www.mindwave.ai`

### **Step 2: Configure DNS**
Cloudflare will provide DNS instructions:

**If your domain is already on Cloudflare:**
- DNS records will be added automatically
- Click **"Activate domain"**

**If your domain is elsewhere:**
- Add a CNAME record pointing to: `mindwave-ai.pages.dev`
- Or transfer your domain to Cloudflare (recommended)

### **Step 3: SSL Certificate**
- Cloudflare automatically provisions SSL certificates
- Your site will be accessible via HTTPS within minutes

---

## Monitoring and Analytics

### **View Deployments:**
1. Go to **Workers & Pages** in Cloudflare dashboard
2. Click on your project: **mindwave-ai**
3. View deployment history, build logs, and analytics

### **Rollback to Previous Version:**
1. Go to **Deployments** tab
2. Find the deployment you want to restore
3. Click **"Rollback to this deployment"**

---

## Troubleshooting

### **Build Failed:**
- Check the build log for errors
- Ensure `package.json` has correct scripts
- Verify dependencies are listed in `package.json`

### **Site Not Loading:**
- Verify build output directory is set to: `dist`
- Check browser console for errors
- Clear your browser cache

### **404 Errors on Routes:**
- For SPAs, Cloudflare Pages automatically handles routing
- No additional configuration needed for Vite apps

---

## Build Information

**Production Build Details:**
- **Build Command:** `npm run build`
- **Output Directory:** `dist/`
- **Build Time:** ~30 seconds
- **Bundle Size:** ~55 KB (optimized and gzipped)

**Generated Files:**
```
dist/
├── assets/
│   ├── index-C3VTVrc1.css  (18.00 KB)
│   └── index-TTo8SIHG.js   (33.98 KB)
├── finisher-header.es5.min.js
├── index.html              (3.52 KB)
└── vite.svg
```

---

## Performance Optimization

Cloudflare Pages automatically provides:
- ✓ Global CDN distribution (300+ locations)
- ✓ Automatic HTTPS/SSL
- ✓ HTTP/2 and HTTP/3 support
- ✓ Brotli compression
- ✓ DDoS protection
- ✓ 99.99% uptime SLA

**Expected Performance:**
- First load: ~200ms (worldwide)
- Subsequent loads: <50ms (cached)
- Perfect Lighthouse scores

---

## Cost

**Cloudflare Pages Free Tier includes:**
- Unlimited requests
- Unlimited bandwidth
- 500 builds per month
- 1 build at a time
- Automatic SSL certificates

**For this project:** The free tier is more than sufficient!

---

## Support

**Cloudflare Documentation:**
- https://developers.cloudflare.com/pages/

**Need Help?**
- Cloudflare Community: https://community.cloudflare.com/
- GitHub Issues: https://github.com/Davidco94/vite-spa-boilerplate/issues

---

## Next Steps After Deployment

1. ✓ Test your live site thoroughly
2. ✓ Share your deployment URL
3. ✓ Set up custom domain (if desired)
4. ✓ Monitor analytics in Cloudflare dashboard
5. ✓ Continue developing - pushes to `main` auto-deploy!

---

**🎉 Congratulations! Your MindWave.AI application is now live on Cloudflare Pages!**

---

*Last updated: October 17, 2025*
