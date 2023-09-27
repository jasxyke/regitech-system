import { courses, years } from "../data/constants";

export const courseOptions = courses.map((course) => (
  <option key={course.id} value={course.id}>
    {course.name}
  </option>
));

export const yearOptions = years.map((year, index) => (
  <option key={index} value={year}>
    {year}
  </option>
));
