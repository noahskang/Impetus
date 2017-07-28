import { values } from 'lodash';

export const selectAllProjects = projects => values(projects);

export const selectProject = ({projects}, id) => {
  const project = projects[id] || {};
  return project;
};

export const selectUserProjects = (projects, user) => {
  const userProjects = (Object.values(projects)).filter((project)=>(project.creator_id == user.id));
  return userProjects;
};

export const selectProjectRewards= (projectId, rewards) => {
  let allRewards = Object.values(rewards) || [];
  if(allRewards.length>1){
    let projectRewards = allRewards.filter(reward=>(reward.project_id === projectId));
    return projectRewards;
  } else{
    return [];
  }
};
