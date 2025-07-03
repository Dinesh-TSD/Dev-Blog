import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { getAllPosts, getPostsByTag } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';
import TagFilter from '../components/TagFilter';
import { TrendingUp, Zap } from 'lucide-react';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const allPosts = getAllPosts();

  const filteredPosts = useMemo(() => {
    let posts = selectedTag ? getPostsByTag(selectedTag) : allPosts;

    if (searchTerm) {
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return posts;
  }, [searchTerm, selectedTag, allPosts]);

  const featuredPosts = allPosts.filter(post => post.featured);

  return (
    <>
      <Helmet>
        <title>DevBlog - Modern Web Development Blog</title>
        <meta name="description" content="Stay updated with the latest web development trends, tutorials, and best practices. Learn React, TypeScript, Node.js, and more." />
        <meta name="keywords" content="web development, react, typescript, javascript, node.js, css, blog" />
        <meta property="og:title" content="DevBlog - Modern Web Development Blog" />
        <meta property="og:description" content="Stay updated with the latest web development trends, tutorials, and best practices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devblog.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DevBlog - Modern Web Development Blog" />
        <meta name="twitter:description" content="Stay updated with the latest web development trends, tutorials, and best practices." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Welcome to DevBlog
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Discover the latest insights, tutorials, and best practices in modern web development
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Weekly Updates</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm">Expert Insights</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Find Your Next Read
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Search through our collection of articles or filter by technology to find content that interests you
              </p>
            </div>

            <div className="space-y-6">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Search articles by title, content, or tags..."
              />
              <TagFilter selectedTag={selectedTag} onTagChange={setSelectedTag} />
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && !searchTerm && !selectedTag && (
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Featured Articles
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {featuredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} featured />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {searchTerm || selectedTag ? 'Search Results' : 'Latest Articles'}
              </h2>
              <span className="text-gray-500 dark:text-gray-400">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </span>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 dark:text-gray-500 mb-4">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Try adjusting your search terms or clearing the filters
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTag('');
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;