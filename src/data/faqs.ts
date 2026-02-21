export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "How much does a custom website cost?",
    answer: "It depends on complexity. A simple landing page starts at ₹15,000, while a full-scale SaaS application can range from ₹75,000 to ₹3 Lakhs. Use our 'Estimate' page to get a ballpark figure."
  },
  {
    question: "How long does it take to build a project?",
    answer: "Standard websites usually take 2-3 weeks. Custom web applications (MVPs) typically take 4-8 weeks depending on the features required."
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer: "Yes! We offer monthly maintenance packages (Standard Care & Growth Partner) that cover hosting, security updates, and regular backups so you don't have to worry about a thing."
  },
  {
    question: "What happens after the project is finished?",
    answer: "We provide 30 days of free support to fix any bugs. After that, you can choose a maintenance plan or we can hand over the code to your internal team."
  },
  {
    question: "Do I own the code?",
    answer: "Absolutely. Once the final payment is cleared, you own 100% of the Intellectual Property (IP), source code, and design assets."
  }
];