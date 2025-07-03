import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';
import { getPostBySlug } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - DevBlog</title>
        <meta name="description" content={post.summary} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://devblog.com/post/${post.slug}`} />
        <meta property="article:author" content={post.author.name} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:tag" content={post.tags.join(', ')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.summary} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Articles</span>
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full"
                >
                  <Tag className="w-3 h-3" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{post.author.name}</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-blue-600 pl-6 bg-blue-50 dark:bg-blue-900/20 py-4 rounded-r-lg">
              {post.summary}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="prose prose-lg prose-blue dark:prose-invert max-w-none p-8 sm:p-12">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {children}
                    </p>
                  ),
                  code: ({ inline, children }) => (
                    inline ? (
                      <code className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-2 py-1 rounded text-sm">
                        {children}
                      </code>
                    ) : (
                      <code className="block bg-gray-900 dark:bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {children}
                      </code>
                    )
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      {children}
                    </ol>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/20 py-4 rounded-r-lg mb-4">
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Back to Articles Button */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to All Articles</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;