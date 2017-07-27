class Pledge < ActiveRecord::Base
  validates :reward_id, :user_id, presence: true;

  belongs_to :reward
  belongs_to :backer, foreign_key: :user_id, class_name: 'User' 
end
