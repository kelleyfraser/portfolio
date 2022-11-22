import React from "react";
import ResumeCard from "../common/resumeCard";

const jobs = [
  {
    date: "2019-2020",
    title: "Lab Technician",
    subtitle: "University of Calgary, Alberta CA",
    list:
      [
        "Separated minerals from whole rock samples using standard techniques.",
        "Worked directed with clients to determine the best single grains to select for dating based on their project goals.",
        "Hand selected apatite and zircon grains for (U-Th)/He radiometric dating.",
        "Operated an Alphachron helium extration line to measure (U-Th)/He ages in minerals",
        "Trained and supervised students to use the mineral separation laboratory."
      ],
    icons: []
  },
  {
    date: "2018-2020",
    title: "Teaching Assistant",
    subtitle: "University of Calgary, Alberta CA",
    list:
      [
        "Developed weekly laboratory assignments relevant to topics discussed during lecture.",
        "Taught 3-hour weekly labs to groups of ~20 students",
        "Was available one hour per week for additonal one-one tutoring."
      ],
    icons: []
  },
  {
    date: "2015-2018",
    title: "Research Assistant",
    subtitle: "Appalachian State University, NC USA",
    list:
      [
        "Ordered lab supplies and maintained a working lab for several students and faculty.",
        "Collected whole rock samples from the field for later separation and analysis.",
        "Separated minerals from whole rock samples using standard techniques.",
        "Prepared zircon separates for fission track dating.",
        "Performed zircon fission track dating using an Autoscan stage."
      ],
    icons: []
  }
]

const WorkBlock = () => {
  return (
    <>
      {jobs.map(job => (
        <ResumeCard key={job.title} date={job.date} title={job.title}
          subtitle={job.subtitle} icons={job.icons} list={job.list} />
      ))
      }
    </>
  )
}

export default WorkBlock;