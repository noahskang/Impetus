import React from 'react';
import {Link} from 'react-router-dom';

const ProjectIndexItem = ({project}) => {

  const percentFunded = Math.floor((project.funding_raised/project.funding_goal)*100);

  const daysToGo = Math.floor(( new Date() - Date.parse(project.end_date) ) / 86400000);

  return(
      <div className="project-index-item col-full col-sm-12-24 col-lg-8-24">
        <Link to={`/projects/${project.id}`}>
          <div>
            <h2>{project.category}</h2>
            <h2>{project.id}</h2>
            <img src={project.image_url}/>
            <br/>
            <h1>Title:{project.title}</h1>
            <h2>{project.description}</h2>
            {`by ${project.creator}`}
            <br/>
            {project.funding_raised} pledged
            <br/>
            {percentFunded} funded
            <br/>
            {daysToGo} Days to go
          </div>
        </Link>
      </div>
  );
};

export default ProjectIndexItem;
