@rewards.each do |reward|
  json.set! reward.id do
    json.partial! 'api/rewards/reward', reward: reward,
    current_user: @current_user
  end
end
