export interface Category {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string; // Lucide icon name (rendered as `lucide:<icon>` via astro-icon)
}

export const categories: Category[] = [
  {
    slug: "email-marketing",
    name: "Email Marketing",
    shortName: "Email",
    tagline: "Send campaigns, newsletters & broadcasts",
    description:
      "Email marketing platforms help you build lists, design campaigns, and send broadcasts or newsletters at scale. The best ones pair deliverability with segmentation and reporting so every send earns its place in the inbox.",
    icon: "mail",
  },
  {
    slug: "marketing-automation",
    name: "Marketing Automation",
    shortName: "Automation",
    tagline: "Workflows, lead nurturing & lifecycle",
    description:
      "Marketing automation platforms orchestrate multi-step journeys across email, SMS, and the web. They score leads, trigger workflows on behavior, and hand qualified contacts to sales, replacing dozens of manual touchpoints.",
    icon: "workflow",
  },
  {
    slug: "seo",
    name: "SEO & Content",
    shortName: "SEO",
    tagline: "Keyword research, audits & rank tracking",
    description:
      "SEO platforms surface the keywords worth chasing, audit your site for technical issues, track rankings, and reveal what competitors rank for. They turn organic search from guesswork into a measurable channel.",
    icon: "search",
  },
  {
    slug: "social-media",
    name: "Social Media Management",
    shortName: "Social",
    tagline: "Schedule, publish & analyze social",
    description:
      "Social media management tools let teams plan, schedule, and publish across every network from one calendar, then measure engagement and respond to comments, without living inside ten different apps.",
    icon: "megaphone",
  },
  {
    slug: "analytics",
    name: "Product & Marketing Analytics",
    shortName: "Analytics",
    tagline: "Funnels, retention & attribution",
    description:
      "Analytics platforms go beyond pageviews to show funnels, retention, and the events that drive revenue. They connect marketing spend to outcomes so you can double down on what actually converts.",
    icon: "chart-column",
  },
  {
    slug: "landing-pages",
    name: "Landing Pages & CRO",
    shortName: "Landing Pages",
    tagline: "Build pages & optimize conversions",
    description:
      "Landing page builders give marketers drag-and-drop pages, A/B testing, and conversion tooling without waiting on developers. The strongest options blend speed-to-publish with serious optimization features.",
    icon: "layout-template",
  },
  {
    slug: "ai-content",
    name: "AI Content",
    shortName: "AI Content",
    tagline: "Generate copy, briefs & creative",
    description:
      "AI content platforms help teams draft, repurpose, and scale marketing copy, from ad variations to long-form articles, with brand voice controls and workflow features built for marketers, not just prompts.",
    icon: "sparkles",
  },
  {
    slug: "digital-adoption",
    name: "Digital Adoption",
    shortName: "Adoption",
    tagline: "In-app guidance, onboarding & training",
    description:
      "Digital adoption platforms (DAPs) overlay your software with step-by-step walkthroughs, tooltips, and in-app guidance, speeding up onboarding, reducing errors, and cutting support tickets as teams learn new tools.",
    icon: "mouse-pointer-click",
  },
];

export const categoryBySlug = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);
