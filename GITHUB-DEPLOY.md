# GitHub Deployment Guide

## 🚀 Push to GitHub

### Step 1: Initialize Git Repository

```bash
cd ~/Downloads/analytics-dashboard
git init
git add .
git commit -m "Initial commit: Analytics Dashboard"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `analytics-dashboard`
3. Description: "Real-time analytics dashboard with React and Node.js"
4. Keep it Public (or Private if preferred)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/analytics-dashboard.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Frontend + Backend together:**

1. Go to https://vercel.com
2. Click "Import Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

5. Add Environment Variables (if needed):
   ```
   NODE_ENV=production
   ```

6. Deploy!

**For Backend API:**
Create `api/dashboard.js` in your project:

```javascript
export default function handler(req, res) {
  const dashboardData = {
    // Your data here
  };
  res.status(200).json(dashboardData);
}
```

### Option 2: Netlify

1. Go to https://netlify.com
2. Click "Add new site" → "Import existing project"
3. Connect to GitHub and select repository
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Deploy!

**Backend:** Deploy separately to Heroku or Railway (see below)

### Option 3: Railway (Full-Stack)

1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Railway will auto-detect and deploy both frontend and backend
6. You'll get a live URL automatically

### Option 4: Hostinger (Your Current Host)

**Upload via FTP/File Manager:**

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload `dist/` folder contents to `public_html/analytics/`

3. For backend, create `server.js` on Hostinger:
   - Use Node.js hosting
   - Upload server files
   - Configure Node.js app in control panel

4. Update API endpoint in production build

### Option 5: Render

**Frontend:**
1. Go to https://render.com
2. New → Static Site
3. Connect GitHub repo
4. Build command: `npm run build`
5. Publish directory: `dist`

**Backend:**
1. New → Web Service
2. Connect same repo
3. Build command: `npm install`
4. Start command: `npm run server`
5. Environment: Node

---

## 📝 Pre-Deployment Checklist

### 1. Update package.json scripts
Ensure these scripts exist:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "server": "node server/index.js",
    "start": "node server/index.js"
  }
}
```

### 2. Create .gitignore
Already included, but verify:
```
node_modules/
dist/
.env
.env.local
*.log
.DS_Store
```

### 3. Environment Variables
If deploying backend separately, create `.env`:
```
PORT=5000
NODE_ENV=production
```

Update frontend to use environment variable:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
```

### 4. Update CORS in server/index.js
For production, specify allowed origins:
```javascript
app.use(cors({
  origin: ['https://yourdomain.com', 'http://localhost:3000'],
  credentials: true
}));
```

---

## 🔒 Security Notes

Before deploying:
1. Never commit `.env` files with secrets
2. Use environment variables for sensitive data
3. Enable HTTPS on production
4. Add rate limiting to API endpoints
5. Validate all inputs

---

## 📊 Post-Deployment

After deployment, you'll have:
- Live dashboard URL (e.g., `https://analytics-dashboard.vercel.app`)
- API endpoint (e.g., `https://your-api.railway.app/api/dashboard`)
- Automatic GitHub deployments (push to main = auto-deploy)

---

## 🆘 Troubleshooting

**Build fails:**
- Check Node version (need 16+)
- Run `npm install` again
- Check all dependencies are in package.json

**API not connecting:**
- Update CORS settings
- Check API URL in frontend
- Verify backend is running

**Charts not showing:**
- Check browser console for errors
- Verify API returns correct data structure
- Check network tab in DevTools

---

## 📚 Useful Commands

```bash
# Check remote
git remote -v

# Push changes
git add .
git commit -m "Update dashboard"
git push

# View deployment logs
npm run build -- --debug
```

---

## 🎉 Next Steps

1. ✅ Push to GitHub
2. 🚀 Deploy to Vercel/Netlify/Railway
3. 🔗 Share your live URL
4. 📝 Update README with live demo link
5. ⭐ Get stars on GitHub!

Good luck with your deployment! 🚀
