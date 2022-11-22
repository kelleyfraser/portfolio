import React from "react";

const ResumeCard = ({ date, title, subtitle, icons, list }) => {
  return (
    <div>
      <div className="card">
        <div className="card-left">
          <p>{date}</p>
        </div>
        <div className="card-right">
          <div className="card-right__top-line">
            <h3>{title}</h3>
            <div className="icons">
              {icons.map(icon => (<img key={icon} src={icon}></img>))}
            </div>
          </div>
          <p>{subtitle}</p>
          <ul className="bulleted-list">
            {list.map(item => (<li key={item}>{item}</li>))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ResumeCard;