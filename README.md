# maisie — marketing website

The marketing website for [maisieapp.com](https://maisieapp.com) — a high-end digital scrapbook and daily gratitude app for new mothers documenting their baby's first year.

Built with **Next.js 16**, **Tailwind CSS v4**, **TypeScript**, and **Montserrat** via Google Fonts.

---

## Local dev setup

```bash
# 1. Install dependencies
npm install

# 2. Copy the env example and fill in your credentials
cp .env.local.example .env.local

# 3. Start the dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

---

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Description |
|---|---|
| `KIT_API_KEY` | Your Kit (ConvertKit) API key |
| `KIT_FORM_ID` | The numeric ID of your Kit form |

### How to find your Kit API key

1. Log in to [app.kit.com](https://app.kit.com)
2. Go to **Settings → Developer → API Keys**
3. Copy your **API Key** (not the API Secret)

### How to find your Kit Form ID

1. In Kit, go to **Grow → Landing Pages & Forms**
2. Click **Edit** on your waitlist form
3. Look at the URL: `https://app.kit.com/forms/XXXXXXX/edit` — the number is your Form ID

### Custom fields in Kit

The form sends these custom fields. Create them in Kit first:

1. In Kit, go to **Subscribers → Custom Fields**
2. Create fields: `stage`, `due_date`, `country`, `referral`, `apps_used`

---

## Connecting Airtable via Zapier (non-technical guide)

Use Zapier to automatically copy every waitlist signup into an Airtable base:

1. **Create an Airtable base** called `maisie waitlist` with columns:
   - `Name`, `Email`, `Stage`, `Due Date`, `Country`, `Referral`, `Apps Used`, `Signed Up At`

2. **Create a Zap in Zapier**:
   - **Trigger**: Kit → New Subscriber (to your waitlist form)
   - **Action**: Airtable → Create Record

3. **Map the fields**:
   - Kit's `first_name` → Airtable's `Name`
   - Kit's `email_address` → Airtable's `Email`
   - Kit's custom fields `stage`, `due_date`, `country`, `referral`, `apps_used` → matching Airtable columns

4. Test the Zap, then turn it on. Every new signup flows straight into Airtable.

---

## Updating Neve's placeholder bio

Neve's bio is a placeholder. When ready to update:

**Illustration:** `components/illustrations/NevePlaceholder.tsx` — replace the SVG with a real portrait illustration

**Bio text:** `app/our-story/page.tsx` — find the comment `{/* placeholder — replace with Neve's actual bio when available */}` (around line 88) and replace the paragraph text below it with her real bio.

---

## Swapping placeholder testimonials for real ones

Testimonials are in `app/page.tsx`, in the Section 1.5 block near the bottom. Look for three `<TestimonialCard>` components and replace the `quote` and `author` props with real ones as they come in.

---

## After deploying — submitting to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **Add property** → enter `https://maisieapp.com`
3. Choose the **HTML tag** verification method
4. Copy the `content` value from the meta tag Google gives you (it looks like `abc123xyz...`)
5. Add it to Vercel: **Settings → Environment Variables → GOOGLE_SITE_VERIFICATION**
6. Redeploy the site (Vercel → Deployments → Redeploy)
7. Return to Search Console and click **Verify**
8. Go to **Sitemaps** → submit `https://maisieapp.com/sitemap.xml`
9. Google will begin crawling and indexing within 1–7 days

---

## Deployment to Vercel

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sineadchession-sudo/maisie)

### Manual deploy

1. Go to [vercel.com/new](https://vercel.com/new) and import the `sineadchession-sudo/maisie` repository
2. In **Environment Variables**, add `KIT_API_KEY` and `KIT_FORM_ID`
3. Click **Deploy**

Vercel auto-deploys on every push to `main`.

---

## File structure

```
app/
  layout.tsx            Root layout — Nav, Footer, Montserrat font
  page.tsx              Home page (sections 1.1–1.5)
  our-story/page.tsx    About / founder story
  waitlist/page.tsx     Waitlist form page
  api/waitlist/route.ts Kit API proxy

components/
  Nav.tsx               Sticky nav + mobile overlay
  Footer.tsx            Footer with social links
  WaitlistForm.tsx      Interactive form (client component)
  illustrations/
    PhoneMockup.tsx     SVG phone for hero
    FounderPortrait.tsx SVG Sinead portrait
    NevePlaceholder.tsx SVG Neve placeholder
    DecorativeBlobs.tsx Background decorative blobs
  ui/
    SectionTag.tsx      Small rotated label
    CTAButton.tsx       Reusable CTA button
    PillTag.tsx         Pill tag with colour variants

.env.local.example      Environment variable template
```

---

Built with love in Ireland 🇮🇪
