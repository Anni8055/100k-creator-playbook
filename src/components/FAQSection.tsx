import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will this work if I'm starting at 0 followers?",
    answer: "Absolutely! The Playbook is specifically designed for beginners. Phase 1 covers everything from setting up your profile correctly to getting your first 1,000 followers using proven strategies that work even if you're brand new to Instagram.",
  },
  {
    question: "Do I need to show my face on camera?",
    answer: "Not at all! Many successful creators use faceless content strategies. The Playbook includes specific tactics for faceless accounts, including how to use our Reel templates effectively without ever appearing on camera.",
  },
  {
    question: "Is this for Hindi or English creators?",
    answer: "Both! The strategies work regardless of the language you create in. We have examples and templates that work for Hindi, English, Hinglish, and regional language creators. The principles are universal.",
  },
  {
    question: "How do I receive the files after purchase?",
    answer: "Instantly! After payment, you'll receive an email with download links for all files. The ebook is in PDF format, Reel templates are Canva links (free Canva account works), and text templates are in Google Docs/Notion formats.",
  },
  {
    question: "Is this an online course or an ebook?",
    answer: "It's a comprehensive ebook bundle — not a video course. This means you can read at your own pace, search for specific topics, and reference the material anytime. Many creators prefer this format for quick implementation.",
  },
  {
    question: "Can I use the templates for client accounts?",
    answer: "Yes! Once you purchase, you have full rights to use the templates for your own accounts OR client accounts. Many freelancers and agencies use our templates to deliver better results for their clients.",
  },
  {
    question: "What if it doesn't work for me?",
    answer: "We offer a 7-day money-back guarantee. If you go through the material and genuinely feel it's not valuable, email us within 7 days for a full refund — no questions asked.",
  },
  {
    question: "Will I get future updates?",
    answer: "Yes! Instagram changes frequently, and so does our Playbook. All future updates are included free. When we add new templates or update strategies, you'll get access automatically.",
  },
];

const FAQSection = () => {
  return (
    <section id="faqs" className="section-padding bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know before getting the Playbook.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="mailto:hello@earnwithprerna.com" className="text-primary hover:underline font-medium">
              Email us anytime
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
