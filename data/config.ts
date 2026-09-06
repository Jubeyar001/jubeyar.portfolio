// ─────────────────────────────────────────────────────────────
// ALL PERSONAL INFORMATION LIVES HERE.
// Edit this file to update your name, dates, companies, stats,
// education, and contact info anywhere across the whole site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Md. Jubeyar",
  role: "Sales Executive · Customer Service · Telesales · Digital Solutions",
  location: "Uttara, Dhaka, Bangladesh",
  email: "jubeyarhasan5690@gmail.com",
  phone: "+880 18916 66842",
  // Add real links when ready — leave blank to hide from the Contact section.
  linkedin: "",
  fiverr: "",
};

export const hero = {
  headline: "I turn conversations into opportunities.",
  subline: "Customer Service → Sales → Digital Solutions",
  intro:
    "I'm a customer-focused sales professional with experience across customer service, telesales, and digital solution sales — currently building on that foundation while finishing my degree.",
};

// Each entry becomes one "chapter" of the scroll story.
// visual: a short keyword used to pick the chapter's visual metaphor.
export const chapters = [
  {
    id: "genex",
    year: "2024",
    dateRange: "January 2024 — July 2024",
    company: "Genex Infosys",
    role: "Customer Service Officer",
    campaign: "GP",
    visual: "phone" as const,
    heading: "My first lesson was simple: listen before you sell.",
    body: "Working in customer service taught me how to communicate with different types of customers, understand their problems, and provide clear solutions.",
    process: ["Incoming Call", "Customer Question", "Problem Solving", "Resolution"],
    stats: [
      { value: 6, suffix: " mo", label: "Customer Service Experience" },
      { value: 80, suffix: "+", label: "Customers Served" },
    ],
  },
  {
    id: "skytech-telesales",
    year: "2025",
    dateRange: "April 2025 — October 2025",
    company: "SkyTech Solution",
    role: "Telesales Executive",
    campaign: "",
    visual: "call" as const,
    heading: "Every call became an opportunity.",
    body: "My telesales experience helped me move from simply solving customer problems to understanding how communication can influence decisions.",
    process: ["Lead", "Conversation", "Pitch", "Follow-up", "Opportunity"],
    stats: [],
  },
  {
    id: "solar",
    year: "2025",
    dateRange: "2025",
    company: "SkyTech Solution",
    role: "Sales Executive",
    campaign: "Solar Campaign",
    visual: "sun" as const,
    heading: "A new campaign. A new challenge.",
    body: "Moving into a solar campaign meant learning a new product, a new pitch, and a new kind of customer conversation — from first contact through to conversion.",
    process: ["Lead", "Qualification", "Conversation", "Product Explanation", "Follow-up", "Conversion"],
    stats: [],
  },
  {
    id: "digital",
    year: "Present",
    dateRange: "December 2025 — Present",
    company: "SparkTeach Agency",
    role: "Sales Executive",
    campaign: "Software & Website Sales",
    visual: "laptop" as const,
    heading: "From selling services to understanding solutions.",
    body: "My current role is focused on software, website, and digital service sales — understanding what a business actually needs before presenting the right solution.",
    process: ["Client: “I need a website.”", "Discovery", "Solution", "Proposal", "Follow-up", "Conversion"],
    stats: [],
  },
];

export const currentlyLearning = {
  heading: "I'm still learning.",
  university: "Canadian University of Bangladesh",
  degree: "Bachelor of Arts, English Language and Literature",
  status: "Currently Studying",
  expectedGraduation: "Expected Graduation, November 2027",
  body: "While building my professional experience, I'm continuing my academic journey and developing my communication, language, and analytical skills.",
};

export const timeline = [
  { year: "2024", label: "Genex Infosys", detail: "Customer Service", chapterId: "genex" },
  { year: "2025", label: "SkyTech Solution", detail: "Telesales", chapterId: "skytech-telesales" },
  { year: "2025", label: "Solar Campaign", detail: "Sales", chapterId: "solar" },
  { year: "Present", label: "SparkTeach Agency", detail: "Digital & Software Sales", chapterId: "digital" },
  { year: "Now", label: "University", detail: "Professional Growth", chapterId: null },
];

export const skills = [
  { title: "Customer Service", detail: "Listening, problem solving, and customer support." },
  { title: "Communication", detail: "Clear and confident professional communication." },
  { title: "Telesales", detail: "Outbound communication, pitching, and follow-up." },
  { title: "Sales", detail: "Lead nurturing and conversion-focused communication." },
  { title: "Client Understanding", detail: "Understanding requirements before presenting solutions." },
  { title: "Digital Solutions", detail: "Website, software, and digital service sales." },
];

export const lessons = [
  { statement: "Listen first.", detail: "Customer service taught me empathy." },
  { statement: "Ask better questions.", detail: "Sales taught me discovery." },
  { statement: "Follow up.", detail: "Opportunities don't always convert on the first conversation." },
  { statement: "Keep learning.", detail: "Experience grows when learning never stops." },
];

export const about = {
  heading: "Beyond the job titles.",
  body: [
    "I started my career learning how to listen — handling customer questions and problems before I ever tried to sell anything. That habit carried into telesales, then into a solar campaign, and now into software and website sales, where understanding a client's actual need still comes before any pitch.",
    "Alongside that, I'm finishing a degree in English Language and Literature, which shapes how I write and communicate day to day. I'm most interested in the point where sales meets digital products — where a good conversation turns into a solution someone actually uses.",
  ],
};

// Only confirmed numbers. Anything without a verified figure is left as
// an editable placeholder — replace [NUMBER] once you have the real value.
export const achievements = [
  { value: "6+", label: "Months in Customer Service" },
  { value: "80+", label: "Customers Served" },
  { value: "4", label: "Roles Across Sales & Support" },
  { value: "[NUMBER]", label: "Sales Conversations" },
];

export const contact = {
  heading: "Every opportunity starts with a conversation.",
  body: "Have an opportunity, project, or idea? Let's talk.",
  cta: "Start a Conversation",
};

export const nav = [
  { label: "Story", href: "#story" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
