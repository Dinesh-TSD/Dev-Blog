import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: Github,
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: Twitter,
      color: 'hover:text-blue-500'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: Linkedin,
      color: 'hover:text-blue-700'
    },
    {
      name: 'Email',
      href: 'mailto:hello@devblog.com',
      icon: Mail,
      color: 'hover:text-green-600'
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">DevBlog</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              A modern blog platform for developers. Share your knowledge, 
              learn from others, and stay updated with the latest in web development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-gray-400 transition-colors duration-200 ${link.color}`}
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/?tag=React" className="hover:text-white transition-colors duration-200">
                  React
                </a>
              </li>
              <li>
                <a href="/?tag=TypeScript" className="hover:text-white transition-colors duration-200">
                  TypeScript
                </a>
              </li>
              <li>
                <a href="/?tag=Node.js" className="hover:text-white transition-colors duration-200">
                  Node.js
                </a>
              </li>
              <li>
                <a href="/?tag=CSS" className="hover:text-white transition-colors duration-200">
                  CSS
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} DevBlog. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 sm:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by developers, for developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;