"use client";
import { useEffect, useState } from "react";
import CourseSearch from "../components/CourseSearch";
import Courses from "../components/Courses";
import LoadingPage from "./loading";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const getSearchResults = (results: any) => {
    setCourses(results);
  };
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);
  if (loading) return <LoadingPage />;
  return (
    <div>
      <h1>Welcome to Test Media</h1>
      <CourseSearch getSearchResults={getSearchResults} />
      <Courses courses={courses} />
    </div>
  );
};

export default HomePage;
