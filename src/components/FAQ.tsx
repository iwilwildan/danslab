import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Github, Globe, Award, Shield } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to build an MVP?",
      answer: "Most MVPs take 6-12 weeks depending on complexity. We focus on core features that validate your business idea quickly, then iterate based on user feedback. Our process includes weekly check-ins and continuous deployment so you can see progress in real-time."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, scalable technologies including React/Next.js for frontend, Node.js/Python for backend, and cloud platforms like AWS/Vercel for deployment. Our tech stack is chosen based on your specific needs, ensuring long-term maintainability and performance."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Absolutely! We offer flexible support packages including bug fixes, feature additions, performance monitoring, and strategic CTO guidance. Many of our clients continue working with us as their dedicated technical team as they scale."
    },
    {
      question: "What makes DansLab different from other agencies?",
      answer: "We combine deep technical expertise with startup experience. Unlike typical agencies, we think like co-founders—considering business goals, user experience, and technical scalability. We're invested in your success and provide strategic guidance beyond just coding."
    }
  ];

  const trustBadges = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "1000+ Commits",
      description: "Active open source contributor"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "99.9% Uptime",
      description: "Reliable production deployments"
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "5-Star Reviews",
      description: "Consistently high client satisfaction"
    },
    /*{
      icon: <Shield className="w-6 h-6" />,
      label: "SOC 2 Ready",
      description: "Enterprise-grade security practices"
    }*/
  ];

  return (
    <section className="py-20 lg:py-32 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-dark-navy mb-6">
              Frequently Asked <span className="text-warm-blue">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about working with DansLab
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 px-6"
                >
                  <AccordionTrigger className="text-left font-poppins font-semibold text-dark-navy hover:text-warm-blue transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-poppins font-bold text-dark-navy mb-4">
              Trusted by Startups & Enterprises
            </h3>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-warm-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-warm-blue">
                  {badge.icon}
                </div>
                <h4 className="font-poppins font-bold text-dark-navy mb-2">
                  {badge.label}
                </h4>
                <p className="text-sm text-gray-600">
                  {badge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;