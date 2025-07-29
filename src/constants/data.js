import { Camera, Video, Edit } from "lucide-react";

export const SERVICES = [
  {
    icon: Camera,
    title: "Photography",
    description:
      "Capture moments that tell your story with professional photography services.",
    features: [
      "Event Photography",
      "Portrait Sessions",
      "Sports Coverage",
      "Themed Shoots",
    ],
    popular: true,
  },
  {
    icon: Video,
    title: "Videography",
    description:
      "Bring your brand to life through compelling video content and storytelling.",
    features: [
      "Music Videos",
      "Event Coverage",
      "Promotional Content",
      "Highlight Reels",
    ],
  },
  {
    icon: Edit,
    title: "Content Editing",
    description:
      "Polish your content to perfection with professional editing services.",
    features: [
      "Photo Enhancement",
      "Video Production",
      "Color Grading",
      "Motion Graphics",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "David Martinez",
    role: "Owner, Martinez Bakery (Brooklyn)",
    content:
      "Stop Drop & Scroll helped us launch our Instagram presence when we opened our second location in Park Slope. Their food photography made our pastries look incredible, and we saw a 40% increase in weekend customers within two months.",
    rating: 5,
  },
  {
    name: "Jennifer Kim",
    role: "Marketing Manager, Tribeca Wellness Studio",
    content:
      "We needed professional content for our new yoga studio launch. Their team understood our brand vision immediately and delivered stunning class photos and promotional videos. Our social media engagement doubled since working with them.",
    rating: 5,
  },
  {
    name: "Anthony Russo",
    role: "Co-founder, Russo Brothers Construction (Queens)",
    content:
      "As a construction company, we never thought social media mattered until Stop Drop & Scroll showed us the power of before-and-after project showcases. We now get 3-4 new client inquiries per week from Instagram alone.",
    rating: 5,
  },
];

export const FAQS = [
  {
    question: "How much do your creative services cost?",
    answer:
      "Our pricing varies based on your specific needs and project scope. We offer flexible packages starting from $1,500 for basic photography services. Contact us for a customized quote based on your requirements.",
  },
  {
    question: "What types of creative services do you offer?",
    answer:
      "We specialize in photography, videography, and content editing. Our services include event photography, promotional videos, social media content, brand photography, video editing, and post-production work.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope. Photography sessions are typically delivered within 1-2 weeks, while video projects can take 2-4 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Absolutely! We work with everyone from small startups to established corporations. Our approach is tailored to each client's unique needs and budget, ensuring maximum value regardless of company size.",
  },
];

export const CONTACT_INFO = {
  email: "mark@stopdropscroll.co",
  phone: "202-555-0188",
  address: {
    street: "2727 Ocean Road",
    city: "Malibu, CA 90264",
  },
};

export const COMPANY_STATS = {
  projectsCompleted: "1000+",
  happyClients: "500+",
  yearsExperience: "5+",
  averageGrowth: "85%",
};
