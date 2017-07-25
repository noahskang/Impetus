import React from 'react';
import {Link} from 'react-router-dom';

const ProjectIndexItem = ({project, user}) => {

  const percentFunded = Math.floor((project.funding_raised/project.funding_goal)*100);

  const daysToGo = Math.round(Math.abs((Date.parse(project.end_date) - (new Date()).getTime()) / 86400000));

  const shortenedDescription = project.description ? project.description.slice(0, 50) : "";

  return(
      <div className="project-index-item">
        <Link to={`/projects/${project.id}`}>
          <div>
            <img src={project.image_url}/>
            <div className="project-info">
              <h2 className="category">{project.category}</h2>
              <h2 className="title">{project.title}</h2>
              <h2 className="description">{`${shortenedDescription}...`}</h2>
              <h2 className="creator">{`by ${user.username}`}</h2>
              <h2 className="funding">{project.funding_raised} pledged</h2>
              <h2 className="percentFunded">{`${percentFunded}%`} funded</h2>
              <h2 className="daysToGo">{daysToGo} Days to go</h2>
            </div>
          </div>
        </Link>
      </div>
  );
};

export default ProjectIndexItem;
