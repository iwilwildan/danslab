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
      description:
        "A comprehensive toddler nutrition tracking app that helps parents monitor their child's dietary intake, growth patterns, and nutritional milestones. Built with React Native for cross-platform compatibility and real-time sync across devices.",
      image: nutribooImg,
      status: 'live',
      link: 'https://nutriboo.netlify.app',
      linkText: 'View Live Demo',
      tags: ['React Native', 'Health Tech', 'Mobile App'],
      gradient: '',
    },
    {
      title: 'Tweads.xyz',
      description:
        'An intelligent social media scheduler designed for Threads that optimizes posting times. Features AI content generation and content planning tools.',
      image: tweadsImg,
      status: 'beta',
      link: 'https://tweads.xyz',
      linkText: 'Try Beta',
      tags: ['SaaS', 'Social Media', 'Analytics'],
      gradient: '',
    },
    {
      title: 'ProfileForge.net',
      description:
        'A lightweight builder that lets small businesses spin up a polished one-page company profile and download a tender-ready PDF in minutes—just pick a template, edit your details, and hit publish.',
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
                  <h3 className="text-2xl font-poppins font-bold text-dark-navy mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

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
