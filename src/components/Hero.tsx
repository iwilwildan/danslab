import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Code, Rocket, Users } from 'lucide-react';

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const mockupImages = [
    {
      title: 'Nutriboo App',
      description: 'Toddler Nutrition Tracker',
      image:
        'https://images.pexels.com/photos/28011291/pexels-photo-28011291.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'Tweads.xyz',
      description: 'Social Media Scheduler',
      image:
        'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-green-500 to-teal-600',
    },
    {
      title: 'ProfileForge.net',
      description: 'Company Profile Generator',
      image:
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-500 to-purple-600',
    },
  ];

  return (
    <section className="relative min-h-screen hero-gradient flex items-center pt-16 lg:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-dark-navy leading-tight mb-6"
            >
              Your friendly technical{' '}
              <span className="text-warm-blue">co-founder</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Transform your ideas into production-ready SaaS applications with
              expert guidance and hands-on development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToBooking}
                className="cta-button text-white px-8 py-4 text-lg rounded-xl font-semibold group"
              >
                Book Your Free Consult
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={scrollToProjects}
                variant="outline"
                className="secondary-cta px-8 py-4 text-lg rounded-xl font-semibold border-2"
              >
                View Our Work
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start space-x-8 mt-12 text-gray-500"
            >
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5" />
                <span className="text-sm font-medium">Full-Stack</span>
              </div>
              <div className="flex items-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span className="text-sm font-medium">MVP Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">Startup Focused</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Mockup Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-1 gap-6">
              {mockupImages.map((mockup, index) => (
                <motion.div
                  key={mockup.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className={`relative rounded-2xl overflow-hidden shadow-2xl transform ${
                    index === 1
                      ? 'lg:translate-x-8'
                      : index === 2
                      ? 'lg:translate-x-4'
                      : ''
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${mockup.color} opacity-90`}
                  ></div>
                  <img
                    src={mockup.image}
                    alt={mockup.title}
                    className="w-full h-48 lg:h-56 object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-poppins font-bold mb-1">
                      {mockup.title}
                    </h3>
                    <p className="text-sm opacity-90">{mockup.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
