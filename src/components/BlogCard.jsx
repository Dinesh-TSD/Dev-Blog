import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const BlogCard = ({ post, featured = false }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className={`group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 ${
      featured ? 'border-2 border-blue-200 dark:border-blue-800' : 'border border-gray-200 dark:border-gray-700'
    }`}>
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </span>
        </div>
      )}

      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          <Link to={`/post/${post.slug}`} className="stretched-link">
            {post.title}
          </Link>
        </h2>

        {/* Summary */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.summary}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {post.author.name}
                </span>
              </div>
            </div>
          </div>

          {/* Read More Arrow */}
          <Link
            to={`/post/${post.slug}`}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
          >
            <span className="mr-2">Read More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      {/* Hover Effect Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </article>
  );
};

export default BlogCard;