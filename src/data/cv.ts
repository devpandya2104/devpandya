// Single source of truth for all factual content on the site.
// Every value here is sourced directly from Dev Pandya's CV — nothing invented.

export const profile = {
  name: "Dev Pandya",
  initials: "DP",
  role: "Head of Department, Outbound Marketing & SEO",
  company: "Amrytt Media LLC",
  location: "Ahmedabad, Gujarat, India",
  phone: "+91 7405555354",
  email: "devpandya2104@gmail.com",
  linkedin: "https://www.linkedin.com/in/dev-pandya-21april",
  linkedinLabel: "linkedin.com/in/dev-pandya-21april",
  resumeHref: "/resume/Dev-Pandya-Resume.docx",
  summary:
    "E-commerce and digital outreach leader with 4+ years of progressive experience across marketplace operations, outbound marketing, brand partnerships, and SEO-driven outreach. Currently leads a 12-person outbound team and scaled a publisher network from 25,000 to 70,000 partners (180% growth) within one year through process redesign and AI-driven workflow automation. Recognized as a company representative at international SEO conferences across Southeast Asia. Combines operational discipline, relationship-building, and data-backed execution.",
  positioning:
    "Builds and scales outbound networks — then builds the machines that run them.",
} as const;

export const heroStats = [
  { value: 70000, prefix: "", suffix: "", label: "active publisher partners", detail: "up from 25,000 in 12 months" },
  { value: 180, prefix: "", suffix: "%", label: "network growth", detail: "in a single year" },
  { value: 12, prefix: "", suffix: "", label: "outbound team led", detail: "hired, trained, mentored" },
  { value: 200, prefix: "$", suffix: "K+", label: "business closed", detail: "from one conference deal, 8 months" },
] as const;

export const tickerItems = [
  "25,000 → 70,000 PARTNERS",
  "180% GROWTH / 12 MONTHS",
  "12-PERSON OUTBOUND TEAM",
  "$200K+ CLOSED DEAL",
  "5,000+ SITES / DAY AUTOMATED",
  "3 INTERNATIONAL SEO SUMMITS",
  "4 MARKETS · IN · UK · US · EU",
  "AHMEDABAD, INDIA",
] as const;

export type Achievement = {
  id: string;
  headline: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    id: "network",
    headline: "Scaled the publisher network from 25,000 to 70,000 active partners (180% growth) within 12 months",
    detail: "Achieved by redesigning outreach processes and integrating AI/automation into the outbound workflow.",
  },
  {
    id: "team",
    headline: "Leads and mentors a 12-member outbound marketing team",
    detail: "Consistently exceeding outreach and campaign performance targets.",
  },
  {
    id: "conferences",
    headline: "Selected as company representative at international SEO industry events",
    detail: "SEOMastery Vietnam, CMSEO Chiang Mai (Thailand), and Phuket SEO Summit (Thailand).",
  },
  {
    id: "deal",
    headline: "Closed a B2B partnership deal with a major marketplace at an international SEO conference",
    detail: "Onboarded them as a client; the relationship has since grown into $200K+ in business within 8 months.",
  },
  {
    id: "regions",
    headline: "Led multi-region e-commerce operations across India, UK, USA, and Europe",
    detail: "Ensuring smooth order fulfillment, listing compliance, and customer satisfaction.",
  },
  {
    id: "tools",
    headline: "Built internal automation tools that transformed team output",
    detail:
      "An AI-powered email scraper (OpenAI & n8n) scaled prospecting from 200–300 websites/day (manual, 1 dedicated hire) to 5,000+ websites/day; an AI website categoriser increased throughput from 200–500 sites/day to 3,000+/day; and an internal LMS built from scratch to streamline new-joiner onboarding.",
  },
  {
    id: "partners",
    headline: "Onboarded high-value global partners",
    detail: "Expanding service offerings and strengthening international reach.",
  },
  {
    id: "relationships",
    headline: "Built and sustained long-term partnerships",
    detail: "With website owners, vendors, and clients — ensuring consistent backlink quality and brand credibility.",
  },
];

export type ExperienceRole = {
  title: string;
  start: string;
  end: string;
  bullets: string[];
};

export type ExperienceEntry = {
  id: string;
  company: string;
  location?: string;
  roles: ExperienceRole[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "amrytt",
    company: "Amrytt Media LLC",
    location: "Sheridan, Wyoming, USA",
    roles: [
      {
        title: "Head of Department – Outbound Marketing",
        start: "June 2025",
        end: "Present",
        bullets: [
          "Lead outbound marketing strategy for client acquisition, partnerships, and revenue growth across a 12-person team.",
          "Scaled the publisher network from 25,000 to 70,000 partners (180% growth) within a year by overhauling processes and embedding AI into outreach workflows.",
          "Oversee global client and vendor communications, negotiations, and collaborations to build sustainable, win–win partnerships.",
          "Represented the company at international SEO conferences: SEOMastery Vietnam, CMSEO Chiang Mai (Thailand), and Phuket SEO Summit (Thailand).",
          "Closed a B2B agency partnership with a major marketplace at one of these conferences — grown into $200K+ in business within 8 months of onboarding.",
          "Improved campaign conversion rates through refined targeting, messaging, and data-led optimization.",
        ],
      },
      {
        title: "Team Lead – Blogger Outreach",
        start: "October 2024",
        end: "May 2025",
        bullets: [
          "Led blogger outreach campaigns focused on quality backlink acquisition and SEO performance.",
          "Managed daily communication with website owners, negotiated placements, and enforced link quality standards.",
          "Supported team execution while maintaining strong relationships with publishers and partners.",
        ],
      },
    ],
  },
  {
    id: "ecommex",
    company: "Ecommex Sourcing Private Limited",
    roles: [
      {
        title: "E-commerce Manager",
        start: "May 2024",
        end: "October 2024",
        bullets: [
          "Managed day-to-day e-commerce operations, ensuring platform efficiency and performance continuity.",
          "Coordinated listings, pricing, and operational workflows across marketplaces.",
        ],
      },
      {
        title: "Product Performance Executive",
        start: "January 2022",
        end: "July 2023",
        bullets: [
          "Managed Amazon Seller Central operations for UK and USA markets.",
          "Oversaw European marketplaces including OTTO, Kaufland, ManoMano, eBay, and Shopify.",
          "Ensured listing accuracy, SEO optimization, and compliance to enhance discoverability.",
          "Used analytics and ERP systems to streamline operations and support business decisions.",
        ],
      },
    ],
  },
];

export type Build = {
  id: string;
  name: string;
  tag: string;
  problem: string;
  solution: string;
  impact: string;
  before: string;
  after: string;
  unit: string;
  stack: string[];
};

export const builds: Build[] = [
  {
    id: "email-scraper",
    name: "AI Email Scraper",
    tag: "01 — Prospecting",
    problem: "Manual prospecting for outreach targets relied on one dedicated hire, capping throughput at 200–300 websites per day.",
    solution: "Designed and built an AI-powered scraping and enrichment pipeline using OpenAI and n8n to automate discovery and qualification of prospect websites.",
    impact: "Prospecting throughput increased more than 16x, freeing the team to focus on relationship-building instead of manual research.",
    before: "200–300",
    after: "5,000+",
    unit: "sites / day",
    stack: ["OpenAI", "n8n", "Automation Workflows"],
  },
  {
    id: "website-categoriser",
    name: "AI Website Categoriser",
    tag: "02 — Qualification",
    problem: "Sorting prospect websites by niche and quality for the right outreach campaigns was a manual bottleneck at 200–500 sites per day.",
    solution: "Built an AI-driven categorisation system to automatically classify and route websites, integrated directly into the outbound workflow.",
    impact: "Throughput increased roughly 6–15x, letting the outbound team match campaigns to the right publishers at scale.",
    before: "200–500",
    after: "3,000+",
    unit: "sites / day",
    stack: ["OpenAI", "n8n", "Workflow Automation"],
  },
  {
    id: "internal-lms",
    name: "Internal LMS",
    tag: "03 — Onboarding",
    problem: "As the outbound team scaled to 12 members, ad-hoc onboarding couldn't keep pace with new joiners.",
    solution: "Built an internal learning-management system from scratch to standardize and streamline new-joiner onboarding.",
    impact: "Consistent, repeatable onboarding that scales with team growth.",
    before: "Ad-hoc",
    after: "Systemized",
    unit: "onboarding process",
    stack: ["Internal Tooling", "Process Design"],
  },
];

export type Conference = {
  id: string;
  name: string;
  location: string;
  date: string;
  url: string;
  monogram: string;
};

export const conferences: Conference[] = [
  {
    id: "seomastery",
    name: "SEOMastery Vietnam",
    location: "Vietnam",
    date: "March 2025",
    url: "https://seomasterysummit.com/",
    monogram: "SM",
  },
  {
    id: "cmseo",
    name: "CMSEO Chiang Mai",
    location: "Thailand",
    date: "November 2025",
    url: "https://chiangmaiseoconference.com/",
    monogram: "CM",
  },
  {
    id: "phuket",
    name: "Phuket SEO Summit",
    location: "Thailand",
    date: "April 2026",
    url: "https://phuketsummit.com/",
    monogram: "PS",
  },
];

export type SkillGroup = {
  id: string;
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "ecommerce",
    label: "E-commerce Platforms",
    skills: ["Amazon Seller Central (UK & USA)", "OTTO", "Kaufland", "ManoMano", "eBay", "Shopify", "Magento", "WordPress"],
  },
  {
    id: "seo",
    label: "SEO & Outreach",
    skills: ["Blogger & Brand Outreach", "Link Building", "Content & Listing Optimization", "Outbound Marketing"],
  },
  {
    id: "tools",
    label: "Tools & Tech",
    skills: ["CRM Tools", "ERP Management", "MS Excel", "n8n Automation", "AI / OpenAI Workflow Integration", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "leadership",
    label: "Leadership & Strategy",
    skills: ["Team Leadership", "Strategic Negotiation", "Pricing & Profitability Analysis", "Business Development", "Stakeholder Communication", "Data Analysis & Reporting"],
  },
];

export const education = [
  {
    id: "parul",
    degree: "B.Tech – Computer Science Engineering (Discontinued)",
    school: "Parul University",
    period: "2022 – 2023",
  },
  {
    id: "narayan",
    degree: "Higher Secondary Education (Science Stream)",
    school: "Narayan Vidhyalaya, Bharuch",
    period: "74%",
  },
] as const;

export const languages = ["English", "Hindi", "Gujarati"] as const;
