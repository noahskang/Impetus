
export const fetchProjects = () => (
  $.ajax({
    method: 'GET',
    url: 'api/projects'
  })
);

export const fetchProject = id => (
  $.ajax({
    method: 'GET',
    url: `api/projects/${id}`
  })
);

export const createProject = data => (
  $.ajax({
    method: 'POST',
    url: 'api/projects',
    data
  })
);

export const updateProject = (data, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/projects/${id}`,
    data
  })
);

export const destroyProject = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/projects/${id}`,
  })
);
