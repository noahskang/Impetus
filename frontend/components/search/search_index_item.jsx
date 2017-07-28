import React from 'react';
import {Link} from 'react-router-dom';
import { Line } from 'rc-progress';

const SearchIndexItem = ({project, user}) => {

  const percentFunded = Math.floor((project.funding_raised/project.funding_goal)*100);
  const percentWithCap = Math.min(percentFunded, 100);
  const daysToGo = Math.round(Math.abs((Date.parse(project.end_date) - (new Date()).getTime()) / 86400000));

  const shortenedDescription = project.description ? project.description.slice(0, 50) : "";

  return(
      <div className="search-index-item animated fadeInUpBig">
        <div>
          <Link to={`/projects/${project.id}`}>
          <img src={project.image_url}/>
          </Link>
          <div className="project-index-info">
            <p className="category">{project.category}</p>
            <p>
              <Link className="title" to={`/projects/${project.id}`}>{project.title}:</Link>&nbsp;
              <span className="description">{`${shortenedDescription}...`}</span>
            </p>
            <Line percent={percentWithCap}
              strokeWidth="2" strokeColor="#2BDE73"
              trailColor="#e6e6e6" trailWidth="2" />
            <div className="search-index-item-stats">
              <p><span className="bolded">{`${project.funding_raised} `}</span><span>pledged</span></p>
              <p><span className="bolded">{`${percentFunded}% `}</span><span>funded</span></p>
              <p><span className="bolded">{daysToGo}</span>&nbsp;<span>days to go</span></p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SearchIndexItem;
