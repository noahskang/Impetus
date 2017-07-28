export const fetchSearchProjects = query => (
  $.ajax({
    method: 'GET',
    url: '/api/projects/',
    data: {query}
  })
);
