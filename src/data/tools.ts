import { categories } from "./categories";

/* ------------------------------------------------------------------ */
/* Shared feature catalog, every tool answers the same questions so */
/* comparison tables line up row-for-row. */
/* ------------------------------------------------------------------ */

export interface FeatureDef {
  key: string;
  label: string;
}

export const featureCatalog: FeatureDef[] = [
  { key: "freePlan", label: "Free plan" },
  { key: "emailCampaigns", label: "Email campaigns" },
  { key: "automationWorkflows", label: "Automation workflows" },
  { key: "crm", label: "Built-in CRM" },
  { key: "landingPages", label: "Landing page builder" },
  { key: "abTesting", label: "A/B testing" },
  { key: "analyticsDashboards", label: "Analytics dashboards" },
  { key: "seoTools", label: "SEO tooling" },
  { key: "socialScheduling", label: "Social scheduling" },
  { key: "aiAssistant", label: "AI assistant" },
  { key: "apiAccess", label: "API & webhooks" },
  { key: "prioritySupport", label: "Priority / 24-7 support" },
];

export type FeatureKey = (typeof featureCatalog)[number]["key"];

/* ------------------------------------------------------------------ */
/* Tool model */
/* ------------------------------------------------------------------ */

export type BudgetTier = "budget" | "mid" | "premium";
export type Complexity = "beginner" | "intermediate" | "advanced";
export type TeamFit = "solo" | "startup" | "midmarket" | "enterprise";

export interface PricingTier {
  name: string;
  price: string; // human readable, e.g. "$0" or "$29/mo"
  blurb: string;
}

export interface Tool {
  slug: string;
  name: string;
  /** Short initials shown in the logo badge */
  badge: string;
  /** Tailwind gradient classes for the logo badge */
  badgeColor: string;
  primaryCategory: string; // category slug
  categories: string[]; // all category slugs it competes in
  tagline: string;
  website: string;
  founded: number;
  hq: string;
  rating: number; // editorial, out of 5
  reviewCount: number;
  startingPriceMonthly: number; // 0 = free tier available
  pricingNote: string;
  description: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  features: Partial<Record<FeatureKey, boolean>>;
  integrationsCount: number;
  popularIntegrations: string[];
  /* picker metadata */
  budgetTier: BudgetTier;
  complexity: Complexity;
  teamFit: TeamFit[];
}

/* ------------------------------------------------------------------ */
/* Seed data, 12 representative marketing SaaS tools */
/* ------------------------------------------------------------------ */

export const tools: Tool[] = [
  {
    slug: "hubspot",
    name: "HubSpot Marketing Hub",
    badge: "Hs",
    badgeColor: "from-orange-500 to-orange-600",
    primaryCategory: "marketing-automation",
    categories: [
      "marketing-automation",
      "email-marketing",
      "landing-pages",
      "analytics",
    ],
    tagline: "All-in-one marketing, CRM, and automation platform",
    website: "https://www.hubspot.com",
    founded: 2006,
    hq: "Cambridge, MA",
    rating: 4.5,
    reviewCount: 11240,
    startingPriceMonthly: 0,
    pricingNote:
      "Free tier; paid Marketing Hub from ~$15/seat/mo, scaling steeply",
    description:
      "HubSpot is the category-defining all-in-one platform that bundles a free CRM with marketing automation, email, landing pages, forms, and reporting. It shines for teams that want one source of truth across marketing and sales, but pricing climbs quickly as your contact list and feature needs grow.",
    bestFor:
      "Growing teams that want marketing, CRM, and sales unified in one place.",
    pros: [
      "Genuinely all-in-one, CRM, email, automation, and pages under one roof",
      "Best-in-class onboarding, academy, and documentation",
      "Huge app marketplace with 1,500+ integrations",
    ],
    cons: [
      "Costs escalate fast as contacts and tiers grow",
      "Advanced automation locked behind Professional/Enterprise",
      "Can be overkill for a simple newsletter",
    ],
    features: {
      freePlan: true,
      emailCampaigns: true,
      automationWorkflows: true,
      crm: true,
      landingPages: true,
      abTesting: true,
      analyticsDashboards: true,
      seoTools: true,
      socialScheduling: true,
      aiAssistant: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 1500,
    popularIntegrations: ["Salesforce", "Slack", "Shopify", "Zapier", "Gmail"],
    budgetTier: "premium",
    complexity: "intermediate",
    teamFit: ["startup", "midmarket", "enterprise"],
  },
  {
    slug: "mailchimp",
    name: "Mailchimp",
    badge: "Mc",
    badgeColor: "from-yellow-400 to-yellow-500",
    primaryCategory: "email-marketing",
    categories: ["email-marketing", "marketing-automation", "landing-pages"],
    tagline: "Approachable email marketing for small businesses",
    website: "https://www.mailchimp.com",
    founded: 2001,
    hq: "Atlanta, GA",
    rating: 4.1,
    reviewCount: 16800,
    startingPriceMonthly: 0,
    pricingNote: "Free up to 500 contacts; paid from ~$13/mo",
    description:
      "Mailchimp pioneered approachable email marketing and remains a go-to for small businesses and creators. It pairs a friendly editor with basic automation, landing pages, and a light CRM. Power users sometimes outgrow its automation, and per-contact pricing can sting at scale.",
    bestFor: "Small businesses and creators who want email that just works.",
    pros: [
      "Famously easy drag-and-drop editor",
      "Generous-enough free plan to get started",
      "Solid template library and content studio",
    ],
    cons: [
      "Automation is shallow versus dedicated platforms",
      "Pricing counts unsubscribed/archived contacts in some tiers",
      "Support is thin on lower plans",
    ],
    features: {
      freePlan: true,
      emailCampaigns: true,
      automationWorkflows: true,
      crm: true,
      landingPages: true,
      abTesting: true,
      analyticsDashboards: true,
      aiAssistant: true,
      apiAccess: true,
    },
    integrationsCount: 300,
    popularIntegrations: [
      "Shopify",
      "WooCommerce",
      "Canva",
      "Zapier",
      "Squarespace",
    ],
    budgetTier: "budget",
    complexity: "beginner",
    teamFit: ["solo", "startup", "midmarket"],
  },
  {
    slug: "activecampaign",
    name: "ActiveCampaign",
    badge: "Ac",
    badgeColor: "from-blue-500 to-indigo-600",
    primaryCategory: "marketing-automation",
    categories: ["marketing-automation", "email-marketing"],
    tagline: "Deep automation with a built-in CRM",
    website: "https://www.activecampaign.com",
    founded: 2003,
    hq: "Chicago, IL",
    rating: 4.4,
    reviewCount: 10200,
    startingPriceMonthly: 15,
    pricingNote: "From ~$15/mo; CRM add-on tiers cost more",
    description:
      "ActiveCampaign is beloved by marketers who live in automation. Its visual workflow builder is among the most flexible on the market, with conditional logic, split paths, and event triggers that rival enterprise tools at SMB prices. The trade-off is a steeper learning curve and no free plan.",
    bestFor:
      "Marketers who want enterprise-grade automation without enterprise pricing.",
    pros: [
      "Best-in-class visual automation builder",
      "Strong segmentation and conditional logic",
      "Built-in CRM with sales automation",
    ],
    cons: [
      "No free plan, only a trial",
      "Interface can overwhelm beginners",
      "Reporting is functional but not flashy",
    ],
    features: {
      emailCampaigns: true,
      automationWorkflows: true,
      crm: true,
      landingPages: true,
      abTesting: true,
      analyticsDashboards: true,
      aiAssistant: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 900,
    popularIntegrations: [
      "Shopify",
      "WordPress",
      "Salesforce",
      "Zapier",
      "Calendly",
    ],
    budgetTier: "mid",
    complexity: "advanced",
    teamFit: ["startup", "midmarket"],
  },
  {
    slug: "klaviyo",
    name: "Klaviyo",
    badge: "Kl",
    badgeColor: "from-emerald-500 to-green-600",
    primaryCategory: "email-marketing",
    categories: ["email-marketing", "marketing-automation", "analytics"],
    tagline: "Email & SMS built for ecommerce data",
    website: "https://www.klaviyo.com",
    founded: 2012,
    hq: "Boston, MA",
    rating: 4.5,
    reviewCount: 8600,
    startingPriceMonthly: 0,
    pricingNote: "Free up to 250 contacts; scales with list size + SMS",
    description:
      "Klaviyo is the default email and SMS platform for serious ecommerce brands. Its deep Shopify integration and event-level customer data power automations that feel personal, abandoned carts, post-purchase flows, predictive analytics. For non-ecommerce use cases it can be more than you need.",
    bestFor: "Ecommerce brands that want revenue-driven email & SMS.",
    pros: [
      "Unmatched ecommerce data model and segmentation",
      "Predictive analytics (CLV, churn risk) built in",
      "Email + SMS in one platform",
    ],
    cons: [
      "Pricing climbs sharply with list size",
      "Overkill for non-ecommerce senders",
      "Template editor less polished than rivals",
    ],
    features: {
      freePlan: true,
      emailCampaigns: true,
      automationWorkflows: true,
      abTesting: true,
      analyticsDashboards: true,
      aiAssistant: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 350,
    popularIntegrations: [
      "Shopify",
      "WooCommerce",
      "BigCommerce",
      "Recharge",
      "Gorgias",
    ],
    budgetTier: "mid",
    complexity: "intermediate",
    teamFit: ["startup", "midmarket", "enterprise"],
  },
  {
    slug: "brevo",
    name: "Brevo",
    badge: "Bv",
    badgeColor: "from-teal-500 to-cyan-600",
    primaryCategory: "email-marketing",
    categories: ["email-marketing", "marketing-automation"],
    tagline: "Affordable email, SMS & CRM (formerly Sendinblue)",
    website: "https://www.brevo.com",
    founded: 2012,
    hq: "Paris, France",
    rating: 4.3,
    reviewCount: 4100,
    startingPriceMonthly: 0,
    pricingNote: "Free up to 300 emails/day; paid plans priced by email volume",
    description:
      "Brevo (formerly Sendinblue) prices by emails sent rather than contacts stored, which makes it refreshingly affordable for businesses with large lists they email occasionally. It bundles email, SMS, chat, and a free CRM, a strong value play, though deliverability and UI polish trail the premium names.",
    bestFor: "Budget-conscious teams with big lists they email occasionally.",
    pros: [
      "Volume-based pricing is cheap for large lists",
      "Includes SMS, chat, and a free CRM",
      "Generous free tier for small senders",
    ],
    cons: [
      "Daily send limits on free/low tiers",
      "Automation less sophisticated than ActiveCampaign",
      "Interface feels dated in places",
    ],
    features: {
      freePlan: true,
      emailCampaigns: true,
      automationWorkflows: true,
      crm: true,
      landingPages: true,
      abTesting: true,
      analyticsDashboards: true,
      apiAccess: true,
    },
    integrationsCount: 150,
    popularIntegrations: [
      "Shopify",
      "WordPress",
      "WooCommerce",
      "Zapier",
      "Salesforce",
    ],
    budgetTier: "budget",
    complexity: "beginner",
    teamFit: ["solo", "startup", "midmarket"],
  },
  {
    slug: "semrush",
    name: "Semrush",
    badge: "Se",
    badgeColor: "from-orange-500 to-red-500",
    primaryCategory: "seo",
    categories: ["seo", "analytics"],
    tagline: "All-in-one SEO, content & competitive research",
    website: "https://www.semrush.com",
    founded: 2008,
    hq: "Boston, MA",
    rating: 4.5,
    reviewCount: 9300,
    startingPriceMonthly: 139,
    pricingNote: "From ~$139/mo; add-ons for extra users & data",
    description:
      "Semrush is the swiss-army knife of SEO and competitive research, spanning keyword research, rank tracking, site audits, backlink analysis, PPC, and even social and content tools. Its breadth is unmatched, though that same breadth means a learning curve and a price that solo bloggers may find steep.",
    bestFor:
      "Marketing teams that want one platform for SEO, PPC, and content.",
    pros: [
      "Enormous toolkit covering SEO, PPC, content & social",
      "Massive keyword and competitor database",
      "Excellent for competitive gap analysis",
    ],
    cons: [
      "Pricing is high for individuals",
      "Limited results/users per seat on base plan",
      "Can feel sprawling for a focused SEO task",
    ],
    features: {
      seoTools: true,
      analyticsDashboards: true,
      socialScheduling: true,
      aiAssistant: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 50,
    popularIntegrations: [
      "Google Analytics",
      "Search Console",
      "Looker Studio",
      "Trello",
      "Zapier",
    ],
    budgetTier: "premium",
    complexity: "advanced",
    teamFit: ["startup", "midmarket", "enterprise"],
  },
  {
    slug: "ahrefs",
    name: "Ahrefs",
    badge: "Ah",
    badgeColor: "from-blue-600 to-blue-800",
    primaryCategory: "seo",
    categories: ["seo"],
    tagline: "The backlink & keyword research powerhouse",
    website: "https://www.ahrefs.com",
    founded: 2010,
    hq: "Singapore",
    rating: 4.6,
    reviewCount: 6100,
    startingPriceMonthly: 129,
    pricingNote: "From ~$129/mo; no free trial, but free webmaster tools",
    description:
      "Ahrefs built its reputation on the best backlink index in the industry and has grown into a complete SEO suite with rank tracking, keyword research, content explorer, and site audits. Marketers love its data quality and clean UI; the catch is a credit-style limit system and no traditional free trial.",
    bestFor:
      "SEO specialists who prioritize backlink and keyword data quality.",
    pros: [
      "Widely regarded best-in-class backlink data",
      "Clean, fast, focused interface",
      "Free Webmaster Tools for your own site",
    ],
    cons: [
      "No free trial (paid trial only in some regions)",
      "Row/credit limits can frustrate heavy users",
      "No PPC or social tooling like Semrush",
    ],
    features: {
      seoTools: true,
      analyticsDashboards: true,
      aiAssistant: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 20,
    popularIntegrations: [
      "Search Console",
      "Google Analytics",
      "Looker Studio",
      "Slack",
    ],
    budgetTier: "premium",
    complexity: "intermediate",
    teamFit: ["solo", "startup", "midmarket", "enterprise"],
  },
  {
    slug: "hootsuite",
    name: "Hootsuite",
    badge: "Ho",
    badgeColor: "from-rose-500 to-pink-600",
    primaryCategory: "social-media",
    categories: ["social-media", "analytics"],
    tagline: "Enterprise social scheduling & listening",
    website: "https://www.hootsuite.com",
    founded: 2008,
    hq: "Vancouver, Canada",
    rating: 4.1,
    reviewCount: 5400,
    startingPriceMonthly: 99,
    pricingNote: "From ~$99/mo; team and enterprise tiers cost more",
    description:
      "Hootsuite is the veteran social media management platform built for teams that manage many profiles and need approval workflows, social listening, and reporting. It is feature-rich and enterprise-ready, but it is also one of the pricier options and has trimmed its free offering over the years.",
    bestFor: "Larger teams managing many social profiles with approvals.",
    pros: [
      "Manages many networks and profiles at once",
      "Robust approval workflows and team roles",
      "Social listening and analytics add-ons",
    ],
    cons: [
      "Among the more expensive options",
      "No meaningful free plan anymore",
      "Interface can feel cluttered",
    ],
    features: {
      socialScheduling: true,
      analyticsDashboards: true,
      aiAssistant: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 100,
    popularIntegrations: ["Instagram", "LinkedIn", "X", "Facebook", "TikTok"],
    budgetTier: "premium",
    complexity: "intermediate",
    teamFit: ["midmarket", "enterprise"],
  },
  {
    slug: "buffer",
    name: "Buffer",
    badge: "Bf",
    badgeColor: "from-sky-500 to-blue-500",
    primaryCategory: "social-media",
    categories: ["social-media"],
    tagline: "Simple, affordable social scheduling",
    website: "https://www.buffer.com",
    founded: 2010,
    hq: "Remote-first",
    rating: 4.4,
    reviewCount: 4700,
    startingPriceMonthly: 0,
    pricingNote: "Free for 3 channels; paid from ~$6/channel/mo",
    description:
      "Buffer is the friendly, no-fuss social scheduler favored by creators, solopreneurs, and small teams. It keeps publishing simple, prices per channel so you only pay for what you use, and adds an AI assistant and a landing-page builder. Power features like deep listening are intentionally absent.",
    bestFor: "Creators and small teams who want clean, cheap scheduling.",
    pros: [
      "Clean, beginner-friendly interface",
      "Per-channel pricing is fair for small accounts",
      "Free plan covers the basics",
    ],
    cons: [
      "Light on analytics and listening",
      "No approval workflows on lower tiers",
      "Fewer enterprise controls than Hootsuite",
    ],
    features: {
      freePlan: true,
      socialScheduling: true,
      landingPages: true,
      analyticsDashboards: true,
      aiAssistant: true,
      apiAccess: true,
    },
    integrationsCount: 30,
    popularIntegrations: ["Instagram", "LinkedIn", "X", "Facebook", "Canva"],
    budgetTier: "budget",
    complexity: "beginner",
    teamFit: ["solo", "startup"],
  },
  {
    slug: "mixpanel",
    name: "Mixpanel",
    badge: "Mx",
    badgeColor: "from-violet-500 to-purple-600",
    primaryCategory: "analytics",
    categories: ["analytics"],
    tagline: "Product & marketing analytics for funnels",
    website: "https://www.mixpanel.com",
    founded: 2009,
    hq: "San Francisco, CA",
    rating: 4.5,
    reviewCount: 3300,
    startingPriceMonthly: 0,
    pricingNote: "Free up to 1M events/mo; paid scales with events",
    description:
      "Mixpanel is event-based product and marketing analytics for teams that need to understand funnels, retention, and behavioral cohorts, not just pageviews. Its reports are fast and flexible, and the free tier is generous. Getting value requires clean event tracking, which is real upfront work.",
    bestFor: "Product-led teams measuring funnels, retention, and cohorts.",
    pros: [
      "Powerful funnel, retention, and cohort reports",
      "Generous free tier (up to ~1M events/mo)",
      "Fast, interactive querying",
    ],
    cons: [
      "Requires disciplined event instrumentation",
      "Not a web-analytics drop-in like GA4",
      "Advanced features gated to higher plans",
    ],
    features: {
      freePlan: true,
      analyticsDashboards: true,
      abTesting: true,
      apiAccess: true,
      aiAssistant: true,
    },
    integrationsCount: 80,
    popularIntegrations: [
      "Segment",
      "Snowflake",
      "Amplitude",
      "Slack",
      "Figma",
    ],
    budgetTier: "mid",
    complexity: "advanced",
    teamFit: ["startup", "midmarket", "enterprise"],
  },
  {
    slug: "unbounce",
    name: "Unbounce",
    badge: "Un",
    badgeColor: "from-fuchsia-500 to-pink-500",
    primaryCategory: "landing-pages",
    categories: ["landing-pages", "analytics"],
    tagline: "High-converting landing pages with A/B testing",
    website: "https://www.unbounce.com",
    founded: 2009,
    hq: "Vancouver, Canada",
    rating: 4.3,
    reviewCount: 2900,
    startingPriceMonthly: 99,
    pricingNote: "From ~$99/mo; conversion features on higher tiers",
    description:
      'Unbounce is a dedicated landing page builder for marketers focused on conversion. Beyond drag-and-drop pages it offers A/B testing, popups, sticky bars, and AI-powered "Smart Traffic" that routes visitors to the variant most likely to convert them. It is pricier than website-builder add-ons but more specialized.',
    bestFor: "Performance marketers running paid campaigns to landing pages.",
    pros: [
      "Purpose-built for conversion, not just pages",
      "Smart Traffic AI routing and A/B testing",
      "Popups and sticky bars included",
    ],
    cons: [
      "Higher entry price than bundled builders",
      "Conversion limits on lower tiers",
      "Editor has a learning curve",
    ],
    features: {
      landingPages: true,
      abTesting: true,
      analyticsDashboards: true,
      aiAssistant: true,
      apiAccess: true,
    },
    integrationsCount: 120,
    popularIntegrations: [
      "Google Ads",
      "Mailchimp",
      "HubSpot",
      "Zapier",
      "Salesforce",
    ],
    budgetTier: "mid",
    complexity: "intermediate",
    teamFit: ["startup", "midmarket"],
  },
  {
    slug: "jasper",
    name: "Jasper",
    badge: "Ja",
    badgeColor: "from-purple-500 to-indigo-500",
    primaryCategory: "ai-content",
    categories: ["ai-content"],
    tagline: "AI content platform with brand voice",
    website: "https://www.jasper.ai",
    founded: 2021,
    hq: "Austin, TX",
    rating: 4.2,
    reviewCount: 3100,
    startingPriceMonthly: 39,
    pricingNote: "From ~$39/seat/mo; business tier for teams",
    description:
      "Jasper is an AI content platform built for marketing teams rather than ad-hoc prompting. It layers brand voice controls, campaign workflows, templates, and a browser extension on top of leading language models. Casual users may be happy with cheaper general AI tools; Jasper earns its keep on team consistency and workflows.",
    bestFor: "Marketing teams scaling on-brand content production.",
    pros: [
      "Brand voice and style memory for consistency",
      "Marketing-specific templates and campaigns",
      "Team workflows and browser extension",
    ],
    cons: [
      "Pricier than general-purpose AI chat tools",
      "Output still needs human editing",
      "Value depends on volume of content you produce",
    ],
    features: {
      aiAssistant: true,
      seoTools: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 40,
    popularIntegrations: [
      "Surfer SEO",
      "Grammarly",
      "Webflow",
      "Google Docs",
      "Zapier",
    ],
    budgetTier: "mid",
    complexity: "beginner",
    teamFit: ["solo", "startup", "midmarket"],
  },
  {
    slug: "lemon-learning",
    name: "Lemon Learning",
    badge: "Le",
    badgeColor: "from-yellow-400 to-amber-500",
    primaryCategory: "digital-adoption",
    categories: ["digital-adoption"],
    tagline: "No-code in-app guidance built for fast adoption",
    website: "https://www.lemonlearning.com",
    founded: 2015,
    hq: "Paris, France",
    rating: 4.6,
    reviewCount: 420,
    startingPriceMonthly: -1,
    pricingNote:
      "Custom quote by users & features; generally more accessible and predictable than US incumbents",
    description:
      "Lemon Learning is a digital adoption platform built as a simpler, more agile alternative to heavyweight enterprise DAPs. Interactive, in-app walkthroughs guide users step by step inside any web software, Salesforce, Microsoft 365, Workday, ServiceNow, or custom apps, with no-code creation and broad coverage that extends to complex desktop environments.",
    bestFor:
      "Mid-market and growing enterprises that want fast adoption without enterprise overhead.",
    pros: [
      "No-code editor, teams ship guides in hours, no consultants needed",
      "Broad coverage: web, SaaS, and complex desktop apps (SAP GUI, Citrix, .NET, Java)",
      "European hosting and GDPR compliance by default",
    ],
    cons: [
      "Analytics less exhaustive than the pricier incumbents",
      "AI features still rolling out",
      "Customization geared toward simplicity over very advanced cases",
    ],
    features: {
      automationWorkflows: true,
      analyticsDashboards: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 40,
    popularIntegrations: [
      "Salesforce",
      "Microsoft 365",
      "Workday",
      "ServiceNow",
      "SAP",
    ],
    budgetTier: "mid",
    complexity: "beginner",
    teamFit: ["startup", "midmarket", "enterprise"],
  },
  {
    slug: "walkme",
    name: "WalkMe",
    badge: "Wm",
    badgeColor: "from-blue-500 to-indigo-600",
    primaryCategory: "digital-adoption",
    categories: ["digital-adoption"],
    tagline: "Enterprise digital adoption at massive scale",
    website: "https://www.walkme.com",
    founded: 2011,
    hq: "San Francisco, CA",
    rating: 4.2,
    reviewCount: 1500,
    startingPriceMonthly: -1,
    pricingNote:
      "No public rates; MAU-based custom quotes (~$79k/yr average), multi-year contracts + implementation",
    description:
      "Founded in 2011, WalkMe is the category pioneer that popularized the term “Digital Adoption Platform.” It targets large organizations rolling out complex software at massive scale, with powerful analytics and broad coverage across web, mobile, and heavy environments like SAP GUI, used by a large share of the Fortune 500.",
    bestFor:
      "Large enterprises with a dedicated adoption team and a budget to match.",
    pros: [
      "Built for adoption at massive, multi-app, multi-region scale",
      "Powerful analytics, segmentation, funnels, and journeys",
      "Mature ecosystem with 70+ integrations",
    ],
    cons: [
      "High, opaque pricing with multi-year commitments",
      "Steep learning curve; advanced cases can require code (jQuery)",
      "Guides can break when the underlying app changes",
    ],
    features: {
      automationWorkflows: true,
      abTesting: true,
      analyticsDashboards: true,
      aiAssistant: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 70,
    popularIntegrations: [
      "SAP",
      "Salesforce",
      "Workday",
      "ServiceNow",
      "Microsoft 365",
    ],
    budgetTier: "premium",
    complexity: "advanced",
    teamFit: ["enterprise"],
  },
  {
    slug: "pendo",
    name: "Pendo",
    badge: "Pe",
    badgeColor: "from-pink-500 to-rose-500",
    primaryCategory: "digital-adoption",
    categories: ["digital-adoption", "analytics"],
    tagline: "Product analytics + in-app guidance in one",
    website: "https://www.pendo.io",
    founded: 2013,
    hq: "Raleigh, NC",
    rating: 4.4,
    reviewCount: 1400,
    startingPriceMonthly: 0,
    pricingNote:
      "Free up to 500 MAU; paid plans (Base, Core, Ultimate) are MAU-based with unpublished rates",
    description:
      "Founded in 2013 in Raleigh, Pendo is first and foremost a product experience platform, combining product analytics, in-app guidance, feedback collection, and roadmapping. It is the pick for teams whose primary goal is connecting usage data to adoption, with billions of events processed per day across 14,000+ customers.",
    bestFor: "B2B SaaS product teams tying feature adoption to user feedback.",
    pros: [
      "Deep product analytics, funnels, paths, and retroactive data",
      "No-code guides, tooltips, and walkthroughs",
      "All-in-one: analytics, guidance, NPS surveys, and feedback",
    ],
    cons: [
      "Opaque, MAU-based pricing that scales fast",
      "Roughly one-hour data latency",
      "Web-centric, limited in complex desktop environments",
    ],
    features: {
      freePlan: true,
      automationWorkflows: true,
      abTesting: true,
      analyticsDashboards: true,
      aiAssistant: true,
      apiAccess: true,
      prioritySupport: true,
    },
    integrationsCount: 60,
    popularIntegrations: [
      "Salesforce",
      "Segment",
      "Slack",
      "Zendesk",
      "HubSpot",
    ],
    budgetTier: "mid",
    complexity: "intermediate",
    teamFit: ["startup", "midmarket", "enterprise"],
  },
];

/* ------------------------------------------------------------------ */
/* Helpers */
/* ------------------------------------------------------------------ */

export const toolBySlug = (slug: string): Tool | undefined =>
  tools.find((t) => t.slug === slug);

export const toolsInCategory = (categorySlug: string): Tool[] =>
  tools.filter((t) => t.categories.includes(categorySlug));

export const categoryName = (slug: string): string =>
  categories.find((c) => c.slug === slug)?.name ?? slug;

export const formatStartingPrice = (t: Tool): string =>
  t.startingPriceMonthly < 0
    ? "Custom pricing"
    : t.startingPriceMonthly === 0
      ? "Free plan"
      : `$${t.startingPriceMonthly}/mo`;

export const budgetLabel: Record<BudgetTier, string> = {
  budget: "Budget-friendly",
  mid: "Mid-range",
  premium: "Premium",
};

export const complexityLabel: Record<Complexity, string> = {
  beginner: "Beginner-friendly",
  intermediate: "Intermediate",
  advanced: "Advanced",
};
