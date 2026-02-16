# Deployment Guide - Analytics Dashboard

## Quick Start - Hostinger Deployment

### Prerequisites
- Hostinger account with hosting plan
- FTP access credentials (from Hostinger control panel)
- FileZilla or similar FTP client

### Step-by-Step Deployment

#### 1. Build the Project Locally

```bash
# Navigate to project directory
cd analytics-dashboard

# Install dependencies (if not already done)
npm install

# Build for production
npm run build
```

This creates a `dist/` folder with optimized production files.

#### 2. Connect to Hostinger via FTP

**Option A: Using FileZilla**
1. Open FileZilla
2. File → Site Manager → New Site
3. Enter Hostinger FTP credentials:
   - Host: Your FTP hostname (e.g., ftp.yoursite.com)
   - Port: 21
   - Protocol: FTP - File Transfer Protocol
   - Encryption: Use explicit FTP over TLS if available
   - User: Your FTP username
   - Password: Your FTP password
4. Click "Connect"

**Option B: Using Hostinger File Manager**
1. Log into Hostinger control panel
2. Go to Files → File Manager
3. Navigate to public_html directory

#### 3. Upload Files

**Upload the contents of the `dist/` folder (NOT the dist folder itself)**

Your files should be in:
- `public_html/` (for main domain)
- OR `public_html/subdirectory/` (for subdomain/subdirectory)

Files to upload:
```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── .htaccess (create if needed)
```

#### 4. Configure .htaccess (Important!)

Create a `.htaccess` file in your upload directory with:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

#### 5. Test Your Deployment

1. Visit your domain: `https://yoursite.com`
2. Check all charts load correctly
3. Test responsive design on mobile
4. Verify all interactive features work

### Common Issues & Solutions

**Issue: Blank page after deployment**
- Solution: Check browser console for errors
- Verify all files uploaded correctly
- Ensure .htaccess is properly configured
- Check file permissions (should be 644 for files, 755 for directories)

**Issue: Assets not loading (404 errors)**
- Solution: Verify the base path in vite.config.js
- If deployed in subdirectory, add: `base: '/subdirectory/'`

**Issue: Styling not working**
- Solution: Check that CSS file is uploaded
- Clear browser cache
- Verify Tailwind CSS compiled correctly in build

## Alternative Deployment Options

### Deploy to Vercel (Recommended for Quick Setup)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

4. Follow prompts to configure deployment
5. Your site will be live at: `https://your-project.vercel.app`

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update package.json:
```json
{
  "homepage": "https://yourusername.github.io/analytics-dashboard",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update vite.config.js:
```javascript
export default defineConfig({
  base: '/analytics-dashboard/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

## Environment Variables (If Needed)

Create `.env` file for API endpoints:

```env
VITE_API_URL=https://api.yoursite.com
VITE_API_KEY=your_api_key_here
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Post-Deployment Checklist

- [ ] Dashboard loads correctly
- [ ] All charts render properly
- [ ] Data displays accurately
- [ ] Mobile responsive design works
- [ ] No console errors
- [ ] Browser caching configured
- [ ] HTTPS enabled
- [ ] Performance optimized (check with Lighthouse)
- [ ] SEO meta tags added (if needed)

## Monitoring & Maintenance

### Performance Monitoring
- Use Google Analytics for visitor tracking
- Monitor with Google PageSpeed Insights
- Set up uptime monitoring (UptimeRobot, Pingdom)

### Regular Updates
```bash
# Update dependencies
npm update

# Rebuild and redeploy
npm run build
# Upload new dist/ files
```

### Backup Strategy
- Keep local copy of project
- Use Git for version control
- Regular backups of data sources
- Document any custom configurations

## Support

For deployment issues:
- Check Hostinger knowledge base
- Contact Hostinger support
- Review error logs in hosting control panel

---

**Need help?** Contact Touray Solutions for deployment assistance.
