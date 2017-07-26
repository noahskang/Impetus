class Project < ActiveRecord::Base

  validates :title, :website_url, :description, :category, :creator_id, :funding_goal, :end_date, presence: true;

  belongs_to(:creator, foreign_key: :creator_id, primary_key: :id, class_name: "User")

  has_many :rewards

  def reward_sum
    self.rewards.sum(:amount)
  end

end
