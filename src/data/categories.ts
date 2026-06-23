export interface Category {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string; // inline svg path data (single <path d="...">)
}

export const categories: Category[] = [
  {
    slug: "email-marketing",
    name: "Email Marketing",
    shortName: "Email",
    tagline: "Send campaigns, newsletters & broadcasts",
    description:
      "Email marketing platforms help you build lists, design campaigns, and send broadcasts or newsletters at scale. The best ones pair deliverability with segmentation and reporting so every send earns its place in the inbox.",
    icon: "M2.25 6.75c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 20 19H4a1.75 1.75 0 0 1-1.75-1.75V6.75Zm2.5-.25 7.25 5.25L19.25 6.5",
  },
  {
    slug: "marketing-automation",
    name: "Marketing Automation",
    shortName: "Automation",
    tagline: "Workflows, lead nurturing & lifecycle",
    description:
      "Marketing automation platforms orchestrate multi-step journeys across email, SMS, and the web. They score leads, trigger workflows on behavior, and hand qualified contacts to sales, replacing dozens of manual touchpoints.",
    icon: "M12 3v4m0 10v4m9-9h-4M7 12H3m13.95-6.95-2.83 2.83m-4.24 4.24-2.83 2.83m12.73 0-2.83-2.83M9.05 9.05 6.22 6.22",
  },
  {
    slug: "seo",
    name: "SEO & Content",
    shortName: "SEO",
    tagline: "Keyword research, audits & rank tracking",
    description:
      "SEO platforms surface the keywords worth chasing, audit your site for technical issues, track rankings, and reveal what competitors rank for. They turn organic search from guesswork into a measurable channel.",
    icon: "M21 21l-4.35-4.35M17 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z",
  },
  {
    slug: "social-media",
    name: "Social Media Management",
    shortName: "Social",
    tagline: "Schedule, publish & analyze social",
    description:
      "Social media management tools let teams plan, schedule, and publish across every network from one calendar, then measure engagement and respond to comments, without living inside ten different apps.",
    icon: "M4 12a4 4 0 0 1 4-4h8a4 4 0 0 1 0 8H8a4 4 0 0 1-4-4Zm4 0h.01M16 12h.01",
  },
  {
    slug: "analytics",
    name: "Product & Marketing Analytics",
    shortName: "Analytics",
    tagline: "Funnels, retention & attribution",
    description:
      "Analytics platforms go beyond pageviews to show funnels, retention, and the events that drive revenue. They connect marketing spend to outcomes so you can double down on what actually converts.",
    icon: "M4 19V5m0 14h16M8 17v-5m4 5V8m4 9v-7",
  },
  {
    slug: "landing-pages",
    name: "Landing Pages & CRO",
    shortName: "Landing Pages",
    tagline: "Build pages & optimize conversions",
    description:
      "Landing page builders give marketers drag-and-drop pages, A/B testing, and conversion tooling without waiting on developers. The strongest options blend speed-to-publish with serious optimization features.",
    icon: "M4 5h16v4H4V5Zm0 8h7v6H4v-6Zm11 0h5v6h-5v-6Z",
  },
  {
    slug: "ai-content",
    name: "AI Content",
    shortName: "AI Content",
    tagline: "Generate copy, briefs & creative",
    description:
      "AI content platforms help teams draft, repurpose, and scale marketing copy, from ad variations to long-form articles, with brand voice controls and workflow features built for marketers, not just prompts.",
    icon: "M9.5 3 11 7.5 15.5 9 11 10.5 9.5 15 8 10.5 3.5 9 8 7.5 9.5 3Zm8 8 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z",
  },
  {
    slug: "digital-adoption",
    name: "Digital Adoption",
    shortName: "Adoption",
    tagline: "In-app guidance, onboarding & training",
    description:
      "Digital adoption platforms (DAPs) overlay your software with step-by-step walkthroughs, tooltips, and in-app guidance, speeding up onboarding, reducing errors, and cutting support tickets as teams learn new tools.",
    icon: "M5 3l14 8-6 1.5L11 19 5 3z",
  },
];

export const categoryBySlug = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);
