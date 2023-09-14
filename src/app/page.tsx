"use client";

import React, { useState, useEffect } from "react";

import { ICourse } from "share/interfaces/course";

import Courses from "components/Courses";
import LoadingPage from "loading";
import CourseSearch from "components/CourseSearch";

const HomePage = (): React.JSX.Element => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  async function fetchCourses(): Promise<ICourse[]> {
    setLoading(true);

    const res = await fetch("/api/courses", {
      next: {
        revalidate: 60, // 60sec
      },
    });

    if (!res.ok) {
      setLoading(false);
      throw new Error("Failed to fetch data");
    }

    const courses = await res.json();

    setCourses(courses);
    setLoading(false);

    return courses;
  }

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome, Stanislav Cherednychenko</h1>
      <CourseSearch search={(courses: ICourse[]) => setCourses(courses)} />
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
