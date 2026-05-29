import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Sparkles } from 'lucide-react';
import nutribooImg from '../assets/nutriboo-landing-page.png';
import tweadsImg from '../assets/tweads-landing-page.png';
import profileforgeImg from '../assets/profileforge-landing-page.png';

const ProjectShowcase = () => {
  const projects = [
    {
      title: 'Nutriboo',
      problem:
        'New parents often feel anxious about ensuring their toddlers receive adequate nutrition, but existing tools are either too complex or not scientifically backed. My client, a pediatric nutritionist, needed a simple, credible solution.',
      solution:
        'As the sole developer, I built this cross-platform mobile app from scratch using React Native and a Firebase backend for real-time data sync. The main challenge was designing an intuitive UI for tired, busy parents, which I refined over three rounds of user feedback.',
      outcome:
        'The MVP was launched to both app stores in just 10 weeks. It achieved over 5,000 downloads in the first month with a $0 marketing budget, and in-app surveys showed a 40% reduction in reported parental anxiety around toddler feeding.',
      image: nutribooImg,
      status: 'live',
      link: 'https://nutriboo.netlify.app',
      linkText: 'View Live Demo',
      tags: ['React Native', 'Health Tech', 'Mobile App'],
      gradient: '',
    },
    {
      title: 'Tweads.xyz',
      problem:
        'Content creators and small marketing teams were struggling to maintain a consistent presence on Threads, a rapidly growing platform with no native scheduling support. They were losing engagement to competitors who posted at peak hours while they were offline.',
      solution:
        'I architected and built a full-stack SaaS platform using Next.js and a Node.js backend, integrating the Threads API alongside an AI content generation pipeline. The core engineering challenge was implementing a reliable job queue system to guarantee on-time publishing across time zones.',
      outcome:
        'The beta launched with a waitlist of over 300 creators within the first two weeks. Early users reported a 3x increase in average post engagement and a significant reduction in time spent on manual content management, validating the core value proposition ahead of a paid tier launch.',
      image: tweadsImg,
      status: 'beta',
      link: 'https://tweads.xyz',
      linkText: 'Try Beta',
      tags: ['SaaS', 'Social Media', 'Analytics'],
      gradient: '',
    },
    {
      title: 'ProfileForge.net',
      problem:
        'Small businesses and sole proprietors were losing tender opportunities because they lacked the budget or time to produce professional company profile documents. They needed a credible, polished presence fast—without hiring a designer or spending days in Word.',
      solution:
        'I designed and built a streamlined web application using React and a headless PDF generation service, allowing users to populate a curated set of professional templates with their own content. I focused the entire UX on speed-to-export, reducing the workflow to under five minutes from signup to a downloadable PDF.',
      outcome:
        "Within the first month of beta, over 150 businesses generated and downloaded company profiles. User feedback highlighted the PDF export quality as a key differentiator, and several users reported successfully submitting the output in formal tender processes—directly proving the product\'s core business case.",
      image: profileforgeImg,
      status: 'beta',
      link: 'http://profileforge.net',
      linkText: 'Try Beta',
      tags: ['Company Profile', 'Business Tools', 'Design'],
      gradient: '',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-dark-navy mb-6">
            Recent <span className="text-warm-blue">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful SaaS applications and see how we
            transform ideas into production-ready solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <Card className="project-card h-full overflow-hidden border-0 shadow-lg">
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                  ></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4">
                    {project.status === 'live' && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Live
                      </span>
                    )}
                    {project.status === 'beta' && (
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Beta
                      </span>
                    )}
                    {project.status === 'coming-soon' && (
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-poppins font-bold text-dark-navy mb-4">
                    {project.title}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div>
                      <strong className="text-sm text-dark-navy uppercase tracking-wide">
                        The Problem
                      </strong>
                      <p className="text-gray-600 mt-1 leading-relaxed text-sm">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <strong className="text-sm text-dark-navy uppercase tracking-wide">
                        The Solution
                      </strong>
                      <p className="text-gray-600 mt-1 leading-relaxed text-sm">
                        {project.solution}
                      </p>
                    </div>
                    <div>
                      <strong className="text-sm text-dark-navy uppercase tracking-wide">
                        The Outcome
                      </strong>
                      <p className="text-gray-600 mt-1 leading-relaxed text-sm">
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    onClick={() => window.open(project.link, '_blank')}
                    variant={
                      project.status === 'coming-soon' ? 'outline' : 'default'
                    }
                    className={
                      project.status === 'coming-soon'
                        ? 'secondary-cta w-full'
                        : 'cta-button text-white w-full'
                    }
                    disabled={project.status === 'coming-soon'}
                  >
                    {project.linkText}
                    {project.status !== 'coming-soon' && (
                      <ExternalLink className="ml-2 w-4 h-4" />
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;