import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Check, Code, Smartphone, Bot, Users, ArrowRight, Lightbulb, Settings, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "SaaS MVPs",
      description: "Full-stack web applications that validate your business idea and attract early customers"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile & Web Apps",
      description: "Cross-platform applications that work seamlessly across all devices and platforms"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Integrations",
      description: "Smart features powered by machine learning to give your product a competitive edge"
    },
    /*{
      icon: <Users className="w-6 h-6" />,
      title: "Ongoing CTO Guidance",
      description: "Strategic technical leadership to help you scale and make informed decisions"
    }*/
  ];

  const processSteps = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Discovery & Strategy",
      description: "We start with a deep dive into your vision, goals, and target market to create a comprehensive technical roadmap.",
      duration: "Week 1"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Architecture & Design",
      description: "Our team designs the system architecture, user experience, and technical specifications for optimal performance.",
      duration: "Week 2-3"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development & Testing",
      description: "We build your MVP using modern technologies, with continuous testing and feedback integration throughout.",
      duration: "Week 4-8"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch & Scale",
      description: "Deploy your product to production with monitoring, analytics, and ongoing support for future growth.",
      duration: "Week 9+"
    }
  ];

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-dark-navy mb-6">
            What We <span className="text-warm-blue">Build Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial concept to production-ready application, we provide comprehensive technical expertise every step of the way.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-warm-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-warm-blue group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-poppins font-bold text-dark-navy mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            onClick={scrollToBooking}
            className="cta-button text-white px-8 py-4 text-lg rounded-xl font-semibold"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline"
                className="secondary-cta px-8 py-4 text-lg rounded-xl font-semibold border-2"
              >
                See How It Works
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-poppins font-bold text-dark-navy mb-4">
                  Our Development Process
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-warm-blue/10 rounded-2xl flex items-center justify-center text-warm-blue">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-poppins font-bold text-dark-navy">
                          {step.title}
                        </h3>
                        <span className="bg-accent-yellow/20 text-accent-yellow px-3 py-1 rounded-full text-sm font-medium">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Button 
                  onClick={scrollToBooking}
                  className="cta-button text-white px-6 py-3 rounded-lg font-semibold w-full"
                >
                  Let's Discuss Your Project
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;