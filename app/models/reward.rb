class Reward < ActiveRecord::Base
  validates :amount, :description, :project_id, :backing_limit, :title, :delivery_date, presence: true

  belongs_to :project
  has_many :pledges
  has_many :backers, through: :pledges, source: :backer

  def pledge_count
    self.pledges.count
  end
  def backer_count
    self.backers.count
  end

end
