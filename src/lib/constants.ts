import {
  Mic, Brain, ShieldCheck, FileText, Plug, BarChart3,
  Search, FileSearch, Cpu, CheckCircle, Zap, Workflow,
  Scale, RefreshCw, BookOpen, Map,
  Heart, Scan, Droplets, Target, Globe, Lock, Calendar,
  Upload, LineChart, Users, Clock, Headphones, Fingerprint,
  Star, ArrowRight,
} from "lucide-react";
import type {
  NavItem, StatItem, FeatureItem, IntegrationItem,
  WorkflowStep, DifferentiatorItem,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#features" },
  { label: "Coding Engine", href: "#coding-engine" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_STATS: StatItem[] = [
  { value: "~100%", label: "Transcription Accuracy" },
  { value: "96%+", label: "Coding Accuracy" },
  { value: "98%+", label: "Clean Claim Rate" },
  { value: "18 Days", label: "Avg. Time to Payment" },
];

export const HERO_FEATURES = [
  { icon: LineChart, title: "Real-Time Analysis", description: "Get actionable insights at your fingertips." },
  { icon: Brain, title: "Personalized Health Insights", description: "Tailored recommendations based on your unique needs." },
  { icon: Heart, title: "Holistic Revenue Monitoring", description: "Combining clinical, financial, and compliance data." },
];

export const PLATFORM_FEATURES: FeatureItem[] = [
  {
    icon: Mic,
    title: "Voice-Powered Scribing",
    description: "Eliminate documentation burden with real-time voice-powered scribing. Create clinically accurate documentation instantly.",
  },
  {
    icon: Brain,
    title: "Intelligent Coding Engine",
    description: "AI-powered CPT and ICD-10 coding that comprehends clinical context and coding rules with expert-level precision.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Validation",
    description: "Every code validated against CCI edits, MUE limits, and health plan rules before reaching your billing team.",
  },
  {
    icon: FileText,
    title: "Claims Management",
    description: "Manage, submit, and track claims through the complete lifecycle with real-time status updates.",
  },
  {
    icon: Plug,
    title: "EHR Integration",
    description: "Seamless connectivity with eClinicalWorks via integrated workflows. Exchange data directly.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track coding accuracy, claim status, denial rates, and financial performance with real-time analytics.",
  },
];

export const SHOWCASE_CARDS = [
  { stat: "98%", label: "Coding Accuracy", title: "Precision Coding", description: "AI-driven code selection based on clinical context." },
  { stat: "24/7", label: "Access to Klaimos", title: "Anytime, Anywhere", description: "Get instant coding support anytime—day or night." },
  { stat: "85%", label: "Faster Processing", title: "Speed That Fits You", description: "Accelerate your revenue cycle with intelligent automation." },
];

export const SCRIBING_FEATURES = [
  { title: "Near Perfect ASR Accuracy", description: "Industry-leading speech recognition tuned for medical vocabulary across 40+ specialties." },
  { title: "Structured Documentation", description: "Automatically organizes dictation into standardized clinical documentation formats." },
  { title: "2026 Documentation Guidance", description: "Real-time prompts ensure notes meet current coding criteria." },
  { title: "Specialty Vocabulary", description: "Pre-loaded medical terminology for procedures, anatomy, and clinical terms." },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { icon: Search, label: "Extract", description: "Parse clinical text and extract procedure details." },
  { icon: FileSearch, label: "Analysis", description: "Understand context, anatomical placement, and clinical intent." },
  { icon: Cpu, label: "Predict", description: "Generate CPT codes, ICD-10 codes, and modifiers." },
  { icon: CheckCircle, label: "Validate", description: "Check MUE, NCCI edits, and payer-specific rules." },
  { icon: Zap, label: "Complete", description: "Submit validated codes to billing workflow." },
];

export const DIFFERENTIATORS: DifferentiatorItem[] = [
  { icon: Workflow, title: "Procedure & Placement Intelligence", description: "Distinguishes between similar procedures based on anatomical placement." },
  { icon: Scale, title: "Confidence Scoring", description: "Every code prediction includes a confidence score for human review." },
  { icon: RefreshCw, title: "Audit-Ready Rationale", description: "AI explains code selections with clinical documentation references." },
  { icon: BookOpen, title: "Modifier Logic", description: "Automatically applies appropriate modifiers based on documentation." },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    icon: Upload,
    title: "Upload Your Data",
    description: "Easily submit your clinical documentation and patient records through our secure platform.",
  },
  {
    step: "02",
    icon: LineChart,
    title: "Get Personalized Insights",
    description: "Our AI analyzes your data, generates precise codes, and highlights key patterns for review.",
  },
  {
    step: "03",
    icon: Users,
    title: "Consult Experts",
    description: "Discuss your results with our specialists and take the right actions for maximum reimbursement.",
  },
];

export const WHY_CHOOSE_US = [
  { icon: Clock, title: "Results Within Minutes", description: "Get expert support anytime.", bullets: ["One-on-one consultations", "Professional coding recommendations", "Reliable and accurate guidance"] },
  { icon: Fingerprint, title: "Personalized Approach", description: "Insights tailored to you.", bullets: ["Recommendations based on your data", "Plans designed for your practice", "Track progress easily"] },
  { icon: Lock, title: "Trusted & Secure", description: "Your data stays protected.", bullets: ["Industry-standard privacy", "Encrypted data storage", "Complete confidentiality"] },
];

export const TESTIMONIALS = [
  { name: "Dr. Sarah M.", role: "Interventional Radiologist", rating: 5, text: "The coding accuracy is incredible. I received my procedure codes almost instantly and could easily verify the selections. The team guided me step by step, making the whole experience smooth." },
  { name: "Dr. James P.", role: "Practice Manager", rating: 5, text: "Consulting Klaimos's AI coding engine was seamless and professional. The recommendations were tailored to our practice, and the results were clear and actionable." },
  { name: "Dr. Nadia S.", role: "Dental Surgeon", rating: 5, text: "I can actually see the difference in our revenue cycle after switching to Klaimos. The before & after results are amazing." },
  { name: "Dr. Michael R.", role: "Cardiologist", rating: 5, text: "The AI coding service is a game-changer. I could verify codes instantly and felt confident about my billing decisions." },
  { name: "Dr. Rafi K.", role: "Family Practice", rating: 5, text: "Thanks to Klaimos, our revenue cycle is now closely monitored and under control. The platform provided detailed guidance and actionable insights." },
];

export const FAQ_ITEMS = [
  { question: "How does the service work?", answer: "Klaimos uses advanced AI to analyze clinical documentation, extract relevant procedure details, and generate accurate CPT and ICD-10 codes. Simply upload your documentation or use our voice-powered scribing, and our engine handles the rest." },
  { question: "Do I need special software or hardware?", answer: "No special software or hardware is needed. Klaimos works through your web browser and integrates directly with popular EHR systems like eClinicalWorks." },
  { question: "Is my patient data safe?", answer: "Absolutely. We use industry-standard encryption, HIPAA-compliant data storage, and strict access controls. Your data is never shared with third parties." },
  { question: "How long does it take to get coding results?", answer: "Most coding results are generated within seconds of submitting your clinical documentation. Complex cases may take up to a few minutes for thorough analysis." },
  { question: "What payment methods do you accept?", answer: "We accept all major credit cards, ACH transfers, and offer flexible billing options for practices of all sizes. Contact us for custom enterprise pricing." },
];

export const CPT_CARDS = [
  { title: "Updated Code Libraries", description: "2026 CPT codes, descriptors, and relative values loaded and ready for day-one compliance." },
  { title: "Documentation Prompts", description: "Scribing prompts guide providers to capture the specific detail 2026 codes require." },
  { title: "Automatic Code Mapping", description: "AI-powered crosswalk maps previous-year claims to new 2026 code structures." },
];

export const INTEGRATIONS: IntegrationItem[] = [
  { name: "eClinicalWorks", description: "Full EHR integration for bidirectional data exchange.", tags: ["EHR", "Data Exchange"], badge: "eClinicalWorks" },
  { name: "Availity", description: "Real-time connectivity with over 97 health plans.", tags: ["Eligibility", "Claims"], badge: "Availity" },
  { name: "HL7v2 ADT Listener", description: "Real-time capture of admission, discharge, and transfer events.", tags: ["ADT", "Real-Time"], badge: "HL7v2" },
  { name: "More Integrations", description: "Additional EHR and clearinghouse integrations available.", tags: ["Contact Us"] },
];

export const SPECIALTIES: FeatureItem[] = [
  { icon: Heart, title: "Vascular Interventions", description: "From vascular access to complex recanalization and embolization procedures." },
  { icon: Scan, title: "Non-Vascular Interventions", description: "Biopsies and drainage procedures across anatomical regions." },
  { icon: Droplets, title: "Dialysis Access", description: "Fistula creation and management procedures." },
  { icon: Target, title: "Oncology Interventions", description: "Ablation, chemoembolization, and radioembolization procedures." },
];

export const SOLUTION_FEATURES: FeatureItem[] = [
  { icon: Globe, title: "End-to-End Coverage", description: "Klaimos handles every piece of the revenue cycle. One platform, one vendor, complete visibility." },
  { icon: Brain, title: "AI That Understands Context", description: "Our engine understands procedures, anatomical relationships, and clinical intent beyond simple codes." },
  { icon: Calendar, title: "2026-Ready Today", description: "While competitors rush to update, Klaimos already incorporates 2026 guidelines. No surprises." },
  { icon: Lock, title: "Compliance Built-In", description: "Every code validated against NCCI, MUE, and payer-specific rules before it leaves the system." },
];

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Coding Engine", href: "#coding-engine" },
    { label: "Integrations", href: "#integrations" },
    { label: "Pricing", href: "#" },
  ],
  support: [
    { label: "Documentation", href: "#" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact Us", href: "#schedule" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
};
