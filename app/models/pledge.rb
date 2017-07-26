class Pledge < ActiveRecord::Base
  validates :reward_id, :user_id, presence: true;

  belongs_to :reward
  belongs_to :user
  
end
