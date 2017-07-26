export const createPledge = pledge => (
  $.ajax({
    method: 'POST',
    url: 'api/rewards/pledges',
    data: {pledge}
  })
);
