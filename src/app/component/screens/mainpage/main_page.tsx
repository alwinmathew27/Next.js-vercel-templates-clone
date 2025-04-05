"use client";
import { useState, useCallback } from "react";
import CardDetails from "../../../cards/page";
import FilterTemplates from "../../filter/filter";

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({});

  const handleFilterChange = useCallback((filters) => {
    setActiveFilters(filters);
  }, []);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return (
    <>
      <div className="wrapper flex justify-center pt-16">
        <div className="w-1/4 hidden md:block">
          <FilterTemplates
            onSearch={handleSearch}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="texting md:w-3/4">
          <CardDetails searchQuery={searchQuery} activeFilters={activeFilters} />
        </div>
      </div>
    </>
  );
}