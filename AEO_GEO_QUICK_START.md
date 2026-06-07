# AEO/GEO Quick Start Guide

## 💡 The AI Search Revolution (Nate's Newsletter)

**Critical Insight**: *"AI is eating your search traffic. Google clicks down 15% YoY. LLM attention > human attention."*

**What This Means**:
- Traditional SEO = Getting ranked in a list
- AI-era SEO = Getting **named in the answer**
- You're competing for "parameter space" in AI models, not just page ranks

**Our Strategy**: Make Dr. Jan Duffy's brand so clear, consistent, and authoritative that when ChatGPT/Perplexity/Google SGE answers "Who's the best Las Vegas realtor?", we're in the response.

## 🚀 Quick Implementation Checklist

### For Every New Page

#### 1. Add Freshness Metadata
```tsx
export const metadata = generatePageMetadata({
  title: 'Your Page Title',
  description: 'Your description',
  lastModified: new Date().toISOString().split('T')[0], // ⭐ CRITICAL for AEO
  publishedTime: '2026-01-01',
  url: '/your-page',
});
```

#### 2. Add AEO Answer Block (40-60 words)
```tsx
import { AnswerBlock } from '@/components/seo/AnswerBlock';

<AnswerBlock
  question="What is [your topic]?"
  answer="Your 40-60 word answer that directly addresses the question..."
/>
```

#### 3. Add Appropriate Schema
```tsx
import { generatePlaceSchema, generateQAPageSchema } from '@/lib/seo';

// For neighborhood pages:
const placeSchema = generatePlaceSchema({
  name: 'Summerlin',
  description: '...',
  latitude: 36.1830,
  longitude: -115.3275,
  address: { city: 'Las Vegas', state: 'NV', zipCode: '89135' }
});

// For Q&A pages:
const qaSchema = generateQAPageSchema(
  'Your question?',
  'Your answer (can be longer than AEO block)'
);
```

## 📋 Schema Type Reference

### Use This Schema For...

| Page Type | Schema Function | Example |
|-----------|----------------|---------|
| **Property Listing** | `generatePropertySchema()` | Individual property pages |
| **Neighborhood** | `generatePlaceSchema()` | Summerlin, Henderson pages |
| **Q&A Content** | `generateQAPageSchema()` | FAQ-style pages |
| **Blog Post** | `generateArticleSchema()` | Market updates, guides |
| **Service Page** | `generateServiceSchema()` | Already on homepage |
| **Video Content** | `generateEnhancedVideoSchema()` | Virtual tours |
| **Market Update** | `generateSpecialAnnouncementSchema()` | Urgent market news |
| **Process Guide** | `generateHowToSchema()` | Buying/selling process |

## 🎯 AEO Answer Block Examples

### Good (52 words) ✅
```
Dr. Jan Duffy is Las Vegas's premier real estate agent with over $127M in sales and 20+ years expertise. Specializing in luxury homes, investment properties, and first-time buyers across Summerlin, Henderson, and Downtown Las Vegas. Top 1% agent providing personalized service, deep market knowledge, and exceptional results for every client.
```

### Too Short (28 words) ⚠️
```
Dr. Jan Duffy is a top Las Vegas realtor with expertise in luxury homes and investment properties. Contact her for expert real estate service.
```

### Too Long (73 words) ⚠️
```
Dr. Jan Duffy is Las Vegas's premier real estate agent with over $127M in sales volume and more than 20 years of expertise in the Las Vegas market. She specializes in luxury homes, investment properties, and helping first-time home buyers across all major Las Vegas neighborhoods including Summerlin, Henderson, Downtown Las Vegas, North Las Vegas, and Green Valley. As a Top 1% agent, she provides personalized service, deep local market knowledge, and exceptional results.
```

## 🗺️ Geographic SEO Implementation

### Add to Page Metadata
```tsx
export const metadata = generatePageMetadata({
  // ... other fields
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Las Vegas', // or specific neighborhood
    'geo.position': '36.1699;-115.1398',
  }
});
```

### Neighborhood Coordinates
```typescript
const LOCATIONS = {
  summerlin: { lat: 36.1830, lng: -115.3275 },
  henderson: { lat: 36.0397, lng: -114.9817 },
  downtown: { lat: 36.1716, lng: -115.1391 },
  northLasVegas: { lat: 36.1989, lng: -115.1175 },
  greenValley: { lat: 36.0714, lng: -115.0786 },
};
```

## 📝 Content Freshness Strategy

### Update Schedule
- **Homepage**: Weekly (market stats, featured listings)
- **Blog Posts**: Refresh after 6 months
- **Neighborhood Pages**: Quarterly (community updates)
- **Service Pages**: Semi-annually
- **Property Listings**: Daily (auto-updated)

### How to Update
```tsx
// In any page.tsx
export const metadata = generatePageMetadata({
  // ... other fields
  lastModified: new Date().toISOString().split('T')[0], // Today's date
});
```

## 🎬 Video Content Optimization

### With Transcript (Recommended for AEO)
```tsx
import { generateEnhancedVideoSchema } from '@/lib/seo';

const videoSchema = generateEnhancedVideoSchema({
  name: 'Summerlin Community Tour',
  description: 'Explore luxury living in Summerlin',
  thumbnailUrl: '/images/video-thumbs/summerlin.jpg',
  uploadDate: '2026-06-01',
  duration: 'PT5M30S', // 5 minutes 30 seconds
  contentUrl: 'https://youtube.com/watch?v=...',
  transcript: `Welcome to Summerlin, Las Vegas's premier master-planned community. 
               [Full transcript improves AI understanding]...`
});
```

## 🏆 E-E-A-T Signal Checklist

### Experience
- ✅ Use first-person language ("I've helped 500+ families")
- ✅ Include specific examples and case studies
- ✅ Show real results and testimonials

### Expertise  
- ✅ Highlight credentials (Top 1%, certifications)
- ✅ Reference years of experience
- ✅ Demonstrate market knowledge

### Authoritativeness
- ✅ Link to authoritative sources (MLS, census data)
- ✅ Get cited on other real estate sites
- ✅ Build profiles on industry platforms

### Trustworthiness
- ✅ Display real reviews and ratings
- ✅ Show contact information prominently
- ✅ Include privacy policy and terms
- ✅ Use HTTPS (already implemented)

## 🔧 Development Mode Features

### AEO Answer Block Validation
When `NODE_ENV=development`:
```tsx
<AnswerBlock
  answer="Your answer..."
/>
// Shows: "AEO: 45 words ✓" or "AEO: 72 words ⚠️"
```

### Console Warnings
```javascript
// Warns if answer block is not optimal length
AEO Warning: Answer block has 35 words. Optimal range is 40-60 words for AI citations.
```

## 📊 Testing Checklist

### Before Deploying New Pages

- [ ] AEO answer block present (40-60 words)
- [ ] `lastModified` date in metadata
- [ ] Appropriate schema markup added
- [ ] Geographic meta tags if location-specific
- [ ] Mobile responsive (test on phone)
- [ ] Passes Google Rich Results Test
- [ ] Passes Schema.org Validator
- [ ] Core Web Vitals acceptable (<2.5s LCP)

### Testing Tools
```bash
# Rich Results
https://search.google.com/test/rich-results

# Schema Validation
https://validator.schema.org/

# PageSpeed
https://pagespeed.web.dev/
```

## 🎯 Priority Implementation Order

### Week 1: Core Pages
1. Homepage (✅ Already updated)
2. About page
3. Contact page
4. Services page

### Week 2: Geographic Pages
1. Summerlin page
2. Henderson page  
3. Downtown page
4. North Las Vegas page

### Week 3: Service Pages
1. Buying page
2. Selling page
3. Luxury page
4. Investing page

### Week 4: Content Pages
1. Blog posts (add answer blocks)
2. FAQ page (enhance with QAPage schema)
3. Testimonials (ensure Review schema)

## 💡 Pro Tips

1. **Answer First, Details Later**: Put the AEO answer block at the very top of your content, before any images or CTAs.

2. **Natural Language**: Write answers how you'd speak to a client asking the question.

3. **Update Dates**: Set a reminder to refresh `lastModified` dates every 6 months minimum.

4. **Local Keywords**: Always include "Las Vegas" or specific neighborhood names in answers.

5. **Mobile Testing**: AI assistants are heavily used on mobile - always test mobile experience.

6. **Transcripts Matter**: For any video content, get a full transcript. It dramatically improves AI understanding.

7. **Schema Everything**: More schema = more opportunities for AI citations and rich results.

## 🚨 Common Mistakes to Avoid

❌ **DON'T**: Forget the `lastModified` date  
✅ **DO**: Add it to every page

❌ **DON'T**: Write answer blocks > 60 words  
✅ **DO**: Keep it 40-60 words (AI optimal extraction range)

❌ **DON'T**: Use vague answers ("We're the best!")  
✅ **DO**: Be specific ("Top 1% agent, $127M sales, 20+ years")

❌ **DON'T**: Ignore geographic signals  
✅ **DO**: Always include Las Vegas/neighborhood names

❌ **DON'T**: Set and forget  
✅ **DO**: Update content every 6 months

❌ **DON'T**: Skip schema validation  
✅ **DO**: Test with Google Rich Results before deploying

---

**Need Help?** Check the full documentation: `SEO_AEO_GEO_2026_BEST_PRACTICES.md`
