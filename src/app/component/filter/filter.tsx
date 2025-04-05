"use client";
import React, { useState, useCallback } from "react";
import { Search } from "lucide-react";

const FilterTemplates = ({ onSearch, onFilterChange }) => {
  const [expandedCategory, setExpandedCategory] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});

  const categories = [
    {
      name: "Use Case",
      items: ["AI", "Starter", "Ecommerce", "Blog", "Edge Function", "Edge Config", "Portfolio", "SaaS", "CMS", "Cron", "Multi-tenant apps", "Realtime Apps", "Documentation", "Virtual Event", "Monorepos", "Web3", "Vercel Firewall"],
    },
    {
      name: "Framework",
      items: ["Next.js", "Svelte", "React", "Python", "Vue", "Nuxt", "Remix", "Qwik"],
    },
    {
      name: "CSS",
      items: ["Tailwind", "Chakra", "Radix UI", "CSS Modules", "CSS-in-JSX", "Material UI"],
    },
    {
      name: "Database",
      items: ["Vercel KV", "Vercel Postgres", "Vercel Blob", "Upstash"],
    },
    {
      name: "CMS",
      items: ["WordPress", "Sanity", "Contentful", "Sitecore", "Storyblok"],
    },
    {
      name: "Authentication",
      items: ["Prismic", "Muk", "Builder.io", "Notion", "Agility"],
    },
    {
      name: "Analytics",
      items: ["LaunchDarkly", "Statsig", "Split", "Hypertune"],
    },
  ];

  const toggleCategory = useCallback((categoryName) => {
    setExpandedCategory(prev => prev === categoryName ? null : categoryName);
  }, []);

  const handleFilterChange = useCallback((category, item, checked) => {
    setSelectedFilters(prev => {
      const newFilters = {
        ...prev,
        [category]: {
          ...(prev[category] || {}),
          [item]: checked
        }
      };
      
      // Call onFilterChange after state update
      setTimeout(() => onFilterChange(newFilters), 0);
      return newFilters;
    });
  }, [onFilterChange]);

  const handleSearch = useCallback((value) => {
    onSearch(value);
  }, [onSearch]);

  return (
    <div className="w-full max-w-sm py-4">
      <h2 className="text-base font-bold mb-4">Filter Templates</h2>

      <div className="relative mb-4 pr-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 pl-10  rounded-lg border border-gray-200 focus:outline-none focus:border-gray-300"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-1">
        {categories.map((category) => (
          <div key={category.name}>
            <button
              onClick={() => toggleCategory(category.name)}
              className="w-full flex items-center p-3 text-left hover:bg-gray-50 rounded-lg text-sm"
            >
              <svg
                className={`w-5 h-5 text-gray-400 transform ${
                  expandedCategory === category.name ? "rotate-90" : ""
                }`}
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
              <span className="ml-3">{category.name}</span>
            </button>

            {expandedCategory === category.name && category.items.length > 0 && (
              <div className="bg-gray-50 mt-1 rounded-lg">
                {category.items.map((item) => (
                  <label
                    key={item}
                    className="flex items-center p-3 hover:bg-gray-100"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300"
                      checked={selectedFilters[category.name]?.[item] || false}
                      onChange={(e) => handleFilterChange(category.name, item, e.target.checked)}
                    />
                    <span className="ml-3">{item}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(FilterTemplates);