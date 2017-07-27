export const createPledge = pledge => (
  $.ajax({
    method: 'POST',
    url: `api/rewards/${pledge.reward_id}/pledges`,
    data: {pledge}
  })
);

export const fetchPledges = (reward_id) => (
  $.ajax({
    method: 'GET',
    url: `api/rewards/${reward_id}`
  })
);
