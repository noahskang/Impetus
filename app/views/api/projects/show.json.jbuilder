json.partial! 'api/projects/project', project: @project

json.rewards do @rewards.each do |reward|
  json.set! reward.id do
    json.partial! 'api/rewards/reward', reward: reward
  end
end
end
