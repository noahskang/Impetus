import { values } from 'lodash';

export const selectAllProjects = projects => values(projects);

export const selectProject = ({projects}, id) => {
  const project = projects[id] || {};
  return project;
};
