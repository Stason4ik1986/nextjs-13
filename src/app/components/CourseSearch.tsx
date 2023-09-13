'use client';
import React, { useState, FormEvent } from 'react';
import { ICourse } from 'share/interfaces/course';

const CourseSearch = ({ search }: { search: (courses: ICourse[]) => void }): React.JSX.Element => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const res = await fetch(`/api/courses/search?query=${query}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    search(await res.json());
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        name="query"
        type="text"
        value={query}
        className="search-input"
        placeholder="Serach Courses"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default CourseSearch;
