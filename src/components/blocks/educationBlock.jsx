import React from "react";
import ResumeCard from "../common/resumeCard";

const schools = [
  {
    date: "2022-2023",
    title: "Web Development Bootcamp",
    subtitle: "HyperionDev",
    list:
      [
        "Topics: Javascript, HTML/CSS, React.js, Node.js, Git",
      ],
    icons: []
  },
  {
    date: "2018-2020",
    title: "M.Sc. Geology",
    subtitle: "University of Calgary, Alberta CA",
    list:
      [
        "Relevant course: Gravity and Magnetics (MATLAB)",
        "Publication: Fraser, K.I., Enkelmann, E., Jess, S., Gilbert, H., Grieco, R., 2021, Resolving the Cenozoic History of Rock Exhumation Along the Central Rocky Mountain Trench using Apatite Low-Temperature Thermochronology: Tectonics, v. 40"
      ],
    icons: []
  },
  {
    date: "2014-2018",
    title: "B.S. Quantitative Geoscience",
    subtitle: "Appalachian State University, NC USA",
    list:
      [
        "Minors: Mathematics and Physics",
        "Relevant course: Quantitative Data Analysis for Earth Scientists (MATLAB)"
      ],
    icons: []
  }
]

const EducationBlock = () => {
  return (
    <>
      {schools.map(school => (
        <ResumeCard key={school.title} date={school.date} title={school.title}
          subtitle={school.subtitle} icons={school.icons} list={school.list} />
      ))
      }
    </>
  )
}

export default EducationBlock;