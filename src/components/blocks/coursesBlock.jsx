import React from "react";
import ResumeCard from "../common/resumeCard";

const courses = [
  {
    date: "2022",
    title: "Back End Development and APIs Certification",
    subtitle: "freecodecamp.org",
    list: [],
    icons: ["/images/node.png", "/images/mongoDB.png"]
  },
  {
    date: "2022",
    title: "Complete SQL Mastery",
    subtitle: "codewithmosh.com",
    list: [],
    icons: ["/images/sql.png"]
  },
  {
    date: "2022",
    title: "The Ultimate Git Course",
    subtitle: "codewithmosh.com",
    list: [],
    icons: ["/images/git.png"]
  },
  {
    date: "2022",
    title: "The Ultimate Redux Course",
    subtitle: "codewithmosh.com",
    list: [],
    icons: ["/images/redux.png"]
  },
  {
    date: "2022",
    title: "Mastering React",
    subtitle: "codewithmosh.com",
    list: [],
    icons: ["/images/react.png"]
  },
  {
    date: "2022",
    title: "Front End Development Libraries",
    subtitle: "freecodecamp.org",
    list: [],
    icons: ["/images/bootstrap.png", "/images/jquery.png", "/images/sass.png", "/images/react.png", "/images/redux.png"]
  },
  {
    date: "2022",
    title: "JavaScript Algorithms and Data Structures",
    subtitle: "freecodecamp.org",
    list: [],
    icons: ["/images/javascript.png"]
  },
  {
    date: "2022",
    title: "The Ultimate JavaScript Part 1 & 2",
    subtitle: "codewithmosh.com",
    list: [],
    icons: ["/images/javascript.png"]
  },
  {
    date: "2022",
    title: "Introduction to Computer Science",
    subtitle: "Harvard (edx.org)",
    list: [],
    icons: ["/images/c.png", "/images/python.png"]
  },
  {
    date: "2022",
    title: "The HTML5 & CSS3 Part 1, 2 & 3",
    subtitle: "codewithmosh.com",
    list: [],
    icons: ["/images/html.png", "/images/css.png"]
  },
  {
    date: "2022",
    title: "Responsive Web Design",
    subtitle: "freecodecamp.org",
    list: [],
    icons: ["/images/html.png", "/images/css.png"]
  },
  {
    date: "2021",
    title: "The Ultimate Design Patterns Part 1, 2 & 3",
    subtitle: "codewithmosh.com",
    list: [],
    icons: ["/images/java.png"]
  },
  {
    date: "2021",
    title: "The Ultimate Data Structures and Algorithms Part 1, 2 & 3",
    subtitle: "codewithmosh.com",
    list: [],
    icons: ["/images/java.png"]
  },
  {
    date: "2021",
    title: "Ultimate Java Course Part 1, 2, & 3",
    subtitle: "codewithmosh.com",
    list: [],
    icons: ["/images/java.png"]
  }
]

const CoursesBlock = () => {
  return (
    <>
      {courses.map(course => (
        <ResumeCard key={course.title} date={course.date} title={course.title}
          subtitle={course.subtitle} icons={course.icons} list={course.list} />
      ))
      }
    </>
  )
}

export default CoursesBlock;