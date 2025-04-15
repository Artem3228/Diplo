import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useState, useEffect } from "react";
import courses from "../data/courses";
import "../App.css";

const SORT_KEYS = ["title", "slug", "id"];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate(".");
      setSortKey(undefined);
      setSortedCourses([...courses]);
    } else {
      // Обновляем URL при валидной сортировке
      navigate(`?sort=${sortKey}`, { replace: true });
      setSortedCourses(sortCourses(courses, sortKey));
    }
  }, [sortKey, navigate]);

  const handleSortChange = (e) => {
    const newSortKey = e.target.value || undefined;
    setSortKey(newSortKey);
  };

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : `Courses`}</h1>
      <div className="sort-controls">
        <label htmlFor="sort-select">Sort by: </label>
        <select
          id="sort-select"
          value={sortKey || ""}
          onChange={handleSortChange}
        >
          <option value="">None</option>
          {SORT_KEYS.map((key) => (
            <option key={key} value={key}>
              {key.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Courses;
