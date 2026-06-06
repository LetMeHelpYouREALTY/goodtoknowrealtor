# Environment Variables Setup Guide

## Overview
This guide explains how to properly configure environment variables for the Good To Know REALTOR® site across all environments (Development, Preview, Production).

## Variable Classification

### Public Variables (NEXT_PUBLIC_*)
These are exposed to the browser and safe for public access:

| Variable | Environment | Description |
|----------|-------------|-------------|
| `NEXT_PUBLIC_WORDPRESS_API_URL` | All | WordPress REST API endpoint (public) |
| `NEXT_PUBLIC_BASE_URL` | All | Site base URL |

### Private Variables (Server-only)
These are NEVER exposed to the browser:

| Variable | Environment | Sensitive? | Description |
|----------|-------------|------------|-------------|
| `WORDPRESS_API_URL` | All | No | WordPress API endpoint (server-side) |
| `WORDPRESS_USER` | All | No | WordPress username |
| `WORDPRESS_APP_PASSWORD` | All | **YES** | WordPress application password |
| `WP_USER` | All | No | Legacy WordPress username |
| `WP_APP_PASS` | All | **YES** | Legacy WordPress app password |
| `REVALIDATE_SECRET` | Production/Preview | **YES** | Secret for ISR revalidation endpoint |
| `BLOG_SOURCE_URL` | All | No | WordPress blog URL for scraping |

## Vercel Dashboard Setup

### 1. Access Environment Variables
1. Go to [Vercel Dashboard](https://vercel.com/janet-duffys-projects/goodtoknowrealtor-1)
2. Click **Settings** tab
3. Click **Environment Variables** in sidebar

### 2. Add Variables by Environment

#### Development Environment
```bash
NEXT_PUBLIC_WORDPRESS_API_URL=https://www.bhhscp.com/wp-json/wp/v2
NEXT_PUBLIC_BASE_URL=http://localhost:3000
WORDPRESS_API_URL=https://www.bhhscp.com/wp-json/wp/v2
BLOG_SOURCE_URL=https://www.bhhscp.com/blog
WORDPRESS_USER=dev_user
WORDPRESS_APP_PASSWORD=dev_password_here
WP_USER=dev_user
WP_APP_PASS=dev_password_here
REVALIDATE_SECRET=dev_secret_key
```

**For each variable:**
1. Click **Add Variable**
2. Enter name and value
3. Select **Development** checkbox
4. For sensitive vars: Check **Sensitive** box
5. Click **Save**

#### Preview Environment
```bash
NEXT_PUBLIC_WORDPRESS_API_URL=https://www.bhhscp.com/wp-json/wp/v2
NEXT_PUBLIC_BASE_URL=https://goodtoknowrealtor-1-preview.vercel.app
WORDPRESS_API_URL=https://www.bhhscp.com/wp-json/wp/v2
BLOG_SOURCE_URL=https://www.bhhscp.com/blog
WORDPRESS_USER=preview_user  # ⚠️ Use different credentials!
WORDPRESS_APP_PASSWORD=preview_password_here  # ⚠️ DIFFERENT from production
WP_USER=preview_user
WP_APP_PASS=preview_password_here
REVALIDATE_SECRET=preview_secret_key  # ⚠️ DIFFERENT from production
```

**Important:** 
- Check **Preview** checkbox when adding these
- Use DIFFERENT credentials from Production
- Mark sensitive vars as **Sensitive**

#### Production Environment
```bash
NEXT_PUBLIC_WORDPRESS_API_URL=https://www.bhhscp.com/wp-json/wp/v2
NEXT_PUBLIC_BASE_URL=https://www.goodtoknowrealtor.com
WORDPRESS_API_URL=https://www.bhhscp.com/wp-json/wp/v2
BLOG_SOURCE_URL=https://www.bhhscp.com/blog
WORDPRESS_USER=production_user  # ⚠️ Production credentials only
WORDPRESS_APP_PASSWORD=production_password_here  # ⚠️ STRONG password
WP_USER=production_user
WP_APP_PASS=production_password_here
REVALIDATE_SECRET=production_secret_key  # ⚠️ Cryptographically random
```

**Important:**
- Check **Production** checkbox when adding these
- Use STRONGEST credentials
- ALWAYS mark these as **Sensitive**:
  - `WORDPRESS_APP_PASSWORD`
  - `WP_APP_PASS`
  - `REVALIDATE_SECRET`

### 3. Mark Variables as Sensitive

**Variables that MUST be marked sensitive:**
1. Click on variable name
2. Check **Sensitive** checkbox
3. Click **Save**

**What this does:**
- Encrypts value at rest
- Redacts from build logs (if 32+ chars)
- Prevents accidental exposure
- Cannot be read back after saving

**Which variables to mark:**
- `WORDPRESS_APP_PASSWORD` ✅
- `WP_APP_PASS` ✅
- `REVALIDATE_SECRET` ✅
- Any future API keys or tokens ✅

**Which variables NOT to mark:**
- `NEXT_PUBLIC_*` (already public)
- URLs and usernames (not secret)

## Local Development Setup

### 1. Create .env.local
```bash
# Copy template
cp .env.local.example .env.local
```

### 2. Fill in values
Edit `.env.local`:
```bash
BLOG_SOURCE_URL=https://www.bhhscp.com/blog
WORDPRESS_API_URL=https://www.bhhscp.com/wp-json/wp/v2
REVALIDATE_SECRET=local_dev_secret_key

NEXT_PUBLIC_WORDPRESS_API_URL=https://www.bhhscp.com/wp-json/wp/v2
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# WordPress Auth (get from WordPress admin)
WORDPRESS_USER=your_username
WORDPRESS_APP_PASSWORD=xxxx xxxx xxxx xxxx xxxx xxxx

# Legacy compatibility
WP_USER=your_username
WP_APP_PASS=xxxx xxxx xxxx xxxx xxxx xxxx

VERCEL=0
```

### 3. Get WordPress Application Password
1. Log into WordPress admin
2. Go to **Users** → **Profile**
3. Scroll to **Application Passwords**
4. Enter name: "Local Development"
5. Click **Add New Application Password**
6. Copy the generated password (format: `xxxx xxxx xxxx xxxx xxxx xxxx`)
7. Paste into `.env.local`

**Security:**
- ✅ `.env.local` is in `.gitignore`
- ✅ NEVER commit `.env.local` to git
- ✅ Create separate app passwords for each environment

## Verification Checklist

### After adding all variables:

#### Vercel Dashboard
- [ ] All variables added for all 3 environments
- [ ] Sensitive variables marked as **Sensitive**
- [ ] Different credentials for Preview vs Production
- [ ] `NEXT_PUBLIC_BASE_URL` matches environment domain

#### Local Development
- [ ] `.env.local` exists and populated
- [ ] `.env.local` in `.gitignore`
- [ ] WordPress credentials working
- [ ] Dev server starts without errors: `npm run dev`

#### Test Deployments
1. **Preview deployment:**
   - [ ] Push to feature branch
   - [ ] Preview deployment succeeds
   - [ ] Blog content loads
   - [ ] Check environment: should use Preview credentials

2. **Production deployment:**
   - [ ] Merge to `main`
   - [ ] Production deployment succeeds
   - [ ] Blog content loads
   - [ ] Check environment: should use Production credentials

## Security Best Practices

### DO ✅
- Use different WordPress users for each environment
- Create application passwords (not main WordPress password)
- Mark sensitive variables in Vercel dashboard
- Rotate secrets every 90 days
- Use strong, random secrets (32+ chars)
- Keep `.env.local.example` updated for team
- Document what each variable does

### DON'T ❌
- Never commit `.env.local` to git
- Never use production credentials in preview/dev
- Never add `NEXT_PUBLIC_` to secrets
- Never share secrets in Slack/email
- Never reuse passwords across environments
- Never disable "Sensitive" marking to debug

## Rotating Secrets

When credentials are compromised or on schedule (every 90 days):

### 1. Create new credential
- WordPress: Generate new Application Password
- Secret keys: Use crypto-random generator

### 2. Update Vercel
1. Go to Environment Variables
2. Edit the variable
3. Update value
4. Save (triggers automatic redeployment)

### 3. Verify deployment
1. Wait for deployment to complete
2. Test affected functionality
3. Monitor for errors

### 4. Wait 24 hours
- Ensures all deployments use new credential
- Old previews still accessible with old credential

### 5. Revoke old credential
- WordPress: Delete old Application Password
- Other services: Invalidate old key

## Troubleshooting

### Build failing with "Missing environment variable"
1. Check Vercel dashboard has variable for that environment
2. Verify environment name matches (Production/Preview/Development)
3. Check variable name spelling (case-sensitive)
4. Redeploy to pick up changes

### "Unauthorized" errors in production
1. Verify Production environment uses production credentials
2. Check WordPress user has required permissions
3. Verify Application Password is active in WordPress
4. Check for typos in password (no spaces between parts)

### Variable not updating after change
1. Edit variable in Vercel dashboard
2. Save changes
3. Trigger new deployment (push commit or manual redeploy)
4. Clear browser cache if testing client-side variables

### Sensitive variable showing in logs
1. Variable must be 32+ characters to auto-redact
2. Verify "Sensitive" checkbox is enabled
3. Shorter secrets may need manual redaction in code

## Adding New Variables

When adding new environment variables:

1. **Decide visibility:**
   - Client needs it? → `NEXT_PUBLIC_*`
   - Server only? → No prefix

2. **Determine sensitivity:**
   - Password, secret, token? → Mark sensitive
   - Public URL, username? → Don't mark sensitive

3. **Add to all places:**
   - [ ] Vercel dashboard (all environments)
   - [ ] `.env.local.example` (placeholder value)
   - [ ] This documentation
   - [ ] Code that uses it

4. **Test in order:**
   - [ ] Local development works
   - [ ] Preview deployment works
   - [ ] Production deployment works

## Support

If you need help:
- Vercel docs: https://vercel.com/docs/environment-variables
- WordPress docs: https://wordpress.org/support/article/application-passwords/
- Security concerns: Review `VERCEL_BEST_PRACTICES.md`
