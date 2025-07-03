import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const BookingSection = () => {
  const benefits = [
    {
      icon: <Calendar className="w-5 h-5" />,
      text: '30-minute consultation',
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: 'Available within 48 hours',
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: 'No commitment required',
    },
  ];

  return (
    <section id="booking" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-dark-navy mb-6">
            Ready to Build Your <span className="text-warm-blue">MVP</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a free consultation to discuss your project and see how we can
            help bring your vision to life.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-2 text-gray-600"
              >
                <div className="text-warm-blue">{benefit.icon}</div>
                <span className="font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Google Calendar Embed - Replace src URL with your own calendar ID and timezone */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=wildan.adli.14%40gmail.com&ctz=Asia%2FJakarta"
              style={{ border: 0, width: '100%', height: '600px' }}
              frameBorder="0"
              scrolling="no"
              title="Google Calendar"
            ></iframe>
          </div>
        </motion.div>

        {/* Alternative Contact Method */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600">
            Prefer email? Reach out directly at{' '}
            <a
              href="mailto:support@danslab.me"
              className="text-warm-blue hover:underline font-medium"
            >
              support@danslab.me
            </a>
          </p>
        </motion.div>

        <div className="text-center mt-8">
          <a
            href="https://calendar.app.google/ozGPf7NwaPHFdZnp9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-warm-blue text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Book a Meeting
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
