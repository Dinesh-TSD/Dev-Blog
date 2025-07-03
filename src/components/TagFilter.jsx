import React from 'react';
import { getAllTags } from '../data/blogPosts';

const TagFilter = ({ selectedTag, onTagChange }) => {
  const tags = getAllTags();

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <button
        onClick={() => onTagChange('')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          selectedTag === ''
            ? 'bg-blue-600 text-white shadow-lg scale-105'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        All Posts
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedTag === tag
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;