import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Users, Lightbulb, Target, Award, BookOpen } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'We focus on sharing high-quality, well-researched content that helps developers grow their skills and stay current with industry trends.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Our platform is built by developers, for developers. We believe in the power of community knowledge sharing and collaboration.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'We explore cutting-edge technologies and methodologies, helping you stay ahead of the curve in the fast-evolving tech landscape.'
    },
    {
      icon: Target,
      title: 'Practical Approach',
      description: 'Every article includes real-world examples, code snippets, and practical applications that you can implement immediately.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Articles Published' },
    { number: '10K+', label: 'Monthly Readers' },
    { number: '15+', label: 'Technologies Covered' },
    { number: '95%', label: 'Satisfaction Rate' }
  ];

  return (
    <>
      <Helmet>
        <title>About - DevBlog</title>
        <meta name="description" content="Learn about DevBlog, our mission to provide high-quality web development content, and meet our team of experienced developers." />
        <meta name="keywords" content="about devblog, web development blog, programming tutorials, developer community" />
        <meta property="og:title" content="About - DevBlog" />
        <meta property="og:description" content="Learn about DevBlog, our mission to provide high-quality web development content, and meet our team of experienced developers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devblog.com/about" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About DevBlog</h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Empowering developers with knowledge, insights, and practical skills to build better web applications
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We believe that great software is built by great developers. Our mission is to provide the highest quality 
                educational content, practical tutorials, and industry insights to help developers at all levels excel in their careers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Impact</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Numbers that reflect our commitment to the developer community
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Cover Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What We Cover</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our content spans the entire web development ecosystem, from frontend frameworks to backend architectures
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Frontend Development</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  React, Vue, Angular, TypeScript, CSS, and modern frontend tooling
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Vue.js', 'Angular', 'TypeScript', 'CSS'].map((tech) => (
                    <span key={tech} className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Backend Development</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Node.js, databases, APIs, microservices, and server-side architectures
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'].map((tech) => (
                    <span key={tech} className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">DevOps & Tools</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Docker, CI/CD, cloud platforms, monitoring, and development workflows
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'AWS', 'Kubernetes', 'GitHub Actions', 'Terraform'].map((tech) => (
                    <span key={tech} className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quality First</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We never compromise on quality. Every article is thoroughly researched, 
                  tested, and reviewed before publication.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community Focus</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're part of the developer community and understand the challenges 
                  and opportunities that come with building software.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're always exploring new technologies and methodologies to bring 
                  you the latest insights and best practices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;