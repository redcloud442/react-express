import { Target, TrendingUp, Users, Zap } from "lucide-react";

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    result: "10x Revenue Growth",
    quote: "The systematic approach completely transformed my business. From $10K to $100K monthly in just 90 days.",
    company: "SaaS Founder",
    avatar: "SC",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    result: "$2.3M Generated",
    quote: "This isn't just theory - it's a proven framework that generated $2.3M in new revenue within 6 months.",
    company: "E-commerce Owner",
    avatar: "MR",
  },
  {
    id: 3,
    name: "Jennifer Walsh",
    result: "Complete Freedom",
    quote: "Finally built a business that runs without me. The freedom is incredible. I'm so grateful for this system.",
    company: "Agency Owner",
    avatar: "JW",
  },
  {
    id: 4,
    name: "John Doe",
    result: "10x Revenue Growth",
    quote: "The systematic approach completely transformed my business. From $10K to $100K monthly in just 90 days.",
    company: "SaaS Founder",
    avatar: "JD",
  },
  {
    id: 5,
    name: "Jane Doe",
    result: "100% ROI",
    quote: "Guaranteed results or your money back. No questions asked. Recommended by 100+ clients.",
    company: "Agency Owner",
    avatar: "JD",
  },
  {
    id: 6,
    name: "John Doe",
    result: "Fast Results",
    quote:
      "I've seen results in just 30 days. It's a no-brainer. This is the best investment I've made in my business.",
    company: "SaaS Founder",
    avatar: "JD",
  },
] as const;

export const stats = [
  { number: "15K+", label: "Students", icon: Users },
  { number: "$500M+", label: "Revenue", icon: TrendingUp },
  { number: "97%", label: "Success Rate", icon: Target },
  { number: "24/7", label: "Support", icon: Zap },
] as const;
