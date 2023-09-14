"use client";

import React from "react";
import Link from "next/link";

import { ICourse } from "share/interfaces/course";

const Courses = ({ courses }: { courses: ICourse[] }): React.JSX.Element => {
  return (
    <div className="courses">
      {courses.map((course: ICourse) => (
        <div key={course.id} className="card">
          <h2>{course.title}</h2>
          <small>{course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target="_blank" className="btn">
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
