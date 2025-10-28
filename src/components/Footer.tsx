import { FlaskRound as Flask, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-navy text-gray-400">
      {/* Final CTA Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins text-white font-bold mb-4">
            Let's Build Something{' '}
            <span className="text-warm-blue">Amazing</span> Together
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to transform your idea into a production-ready SaaS? Start
            with a free consultation.
          </p>
          <Button
            onClick={scrollToBooking}
            className="cta-button text-white px-8 py-4 text-lg rounded-xl font-semibold"
          >
            Book Your Free Consult
          </Button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-warm-blue rounded-lg flex items-center justify-center">
              <Flask className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-poppins font-bold">DansLab</span>
              <p className="text-sm">Your friendly technical co-founder</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com/in/wildan-adli"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-warm-blue transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/iwilwildan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-warm-blue transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://threads.net/iwilwildan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-warm-blue transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© {currentYear} DansLab. All rights reserved.</p>
          <p className="mt-2 text-sm">PT DANSLAB DIGITAL INOVASI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
