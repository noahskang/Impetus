export const fetchRewards = (project_id) => (
  $.ajax({
    method: 'GET',
    url: `api/projects/${project_id}/rewards/`
  })
);

export const createReward = (reward) => (
  $.ajax({
    method: 'POST',
    url: `api/projects/${reward.project_id}/rewards/`,
    data: {reward}
  })
);

export const destroyReward = (reward) => (
  $.ajax({
    method: 'DELETE',
    url: `api/projects/${reward.project_id}/rewards/${reward.id}`,
  })
);
