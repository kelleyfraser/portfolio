import React from "react";
import { Link } from "react-router-dom"

const TabItem = ({ currentTab, path, label }) => {
  let tabListItemClasses = "tab-list__item";

  currentTab === path ? tabListItemClasses += " selected" : tabListItemClasses += "";
  !currentTab && path === "education" ? tabListItemClasses += " selected" : tabListItemClasses += "";

  return (
    <li className={tabListItemClasses}><Link to={"/experience/" + path} className="tab-link">{label}</Link></li>
  )
}

export default TabItem;