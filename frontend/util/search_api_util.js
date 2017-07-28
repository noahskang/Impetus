export const fetchSearchProjects = () => (
  $.ajax({
    method: 'GET',
    url: '/api/search'
  })
);
