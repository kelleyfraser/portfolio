import React from "react";
import { useLocation } from 'react-router-dom';
import TabItem from './tabItem';

const TabBar = () => {
  const location = useLocation().pathname.split('').splice(12).join('');

  return (
    <div className="tab-container">
      <ul className="list list--inline tab-list">
        <TabItem currentTab={location} path={"education"} label={"Formal Education"} />
        <TabItem currentTab={location} path={"work"} label="Work" />
        <TabItem currentTab={location} path={"courses"} label={"Courses"} />
      </ul>
    </div>
  )
}

export default TabBar;