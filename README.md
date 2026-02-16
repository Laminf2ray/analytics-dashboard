# 🌍 Striving for Inclusion -- Production Ready Website

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express.js-Backend-black)
![SQLite](https://img.shields.io/badge/Database-SQLite-blue)
![Stripe](https://img.shields.io/badge/Payments-Stripe-purple)
![License](https://img.shields.io/badge/License-Private-red)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)

A full-stack web platform supporting **Striving for Inclusion**,
empowering children, families, and communities through inclusive
education, SEND-friendly resources, and cultural identity programmes.

------------------------------------------------------------------------

## 🚀 Live Deployment

[![Deploy on
Railway](https://railway.app/button.svg)](https://railway.app/)
[![Deploy to
Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/)
[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new)

> Frontend can deploy to Vercel\
> Full-stack deployment recommended via Railway or Render

------------------------------------------------------------------------

# 🏗 Tech Stack

### Backend

-   Node.js
-   Express.js
-   SQLite
-   bcrypt
-   express-rate-limit
-   Stripe API

### Frontend

-   HTML5
-   Tailwind CSS
-   Vanilla JavaScript
-   Font Awesome

------------------------------------------------------------------------

# ✨ Features

✔ Event booking system\
✔ Workshop registration\
✔ Volunteer & ambassador applications\
✔ Stripe-powered donation integration\
✔ Admin authentication (bcrypt secured)\
✔ Rate limiting & basic security hardening\
✔ Newsletter archive

------------------------------------------------------------------------

# 📂 Project Structure

    strivinginclusion-prod-ready/
    │
    ├── public/                 # Static frontend files
    ├── server.js               # Express server
    ├── database.sqlite         # Local SQLite DB
    ├── generate-admin-hash.js  # Admin hash utility
    ├── package.json
    └── .env (ignored)

------------------------------------------------------------------------

# 🔐 Environment Setup

Create a `.env` file in the root:

PORT=3000\
ADMIN_PASSWORD_HASH=your_bcrypt_hash\
STRIPE_SECRET_KEY=your_stripe_secret

Generate admin password hash:

``` bash
node generate-admin-hash.js
```

------------------------------------------------------------------------

# 🛠 Local Development

### 1️⃣ Clone repository

``` bash
git clone https://github.com/Laminf2ray/strivinginclusion-prod-ready.git
cd strivinginclusion-prod-ready
```

### 2️⃣ Install dependencies

``` bash
npm install
```

### 3️⃣ Start server

``` bash
npm start
```

Server runs at:

http://localhost:3000

------------------------------------------------------------------------

# 🌐 Deployment Guide

## Railway (Recommended)

1.  Push repo to GitHub\
2.  Connect Railway to repo\
3.  Add environment variables in Railway dashboard\
4.  Deploy

## Render

1.  Create new Web Service\
2.  Connect GitHub repo\
3.  Set:
    -   Build Command: npm install
    -   Start Command: node server.js
4.  Add environment variables

## Vercel (Frontend Only)

Deploy /public folder as static site.

------------------------------------------------------------------------

# 🔒 Security Measures

-   `.env` excluded via `.gitignore`
-   Password hashing with bcrypt
-   Express rate limiting
-   Stripe keys stored as environment variables
-   node_modules excluded from repo

------------------------------------------------------------------------

# 📈 Future Improvements

-   PostgreSQL migration
-   Admin dashboard UI
-   Email notifications
-   CI/CD pipeline
-   Role-based access control
-   Automated newsletter publishing

------------------------------------------------------------------------

# 🧑‍💻 Maintainer

**Striving for Inclusion**\
Community-led inclusive education initiative

GitHub: https://github.com/Laminf2ray

------------------------------------------------------------------------

# 📜 License

Private project -- All rights reserved.
