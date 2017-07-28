class Reward < ActiveRecord::Base
  validates :amount, :description, :project_id, :backing_limit, :title, :delivery_date, presence: true

  belongs_to :project
  has_many :pledges
  has_many :backers, through: :pledges, source: :backer

  def pledge_count
    self.pledges.count
  end

  def current_user_is_backer(currentUser)
    if currentUser
      return true if self.backers.where(id: currentUser.id).first
    end
    false
  end
end
