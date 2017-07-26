class Api::RewardsController < ApplicationController
  # before_action :require_signed_in!, only: [:create, :destroy]
  # before_action :require_user_owns_project!, only: [:create, :destroy]

  def create
    @reward = Reward.new(reward_params)

    if @reward.save
      @reward = Reward.includes(:pledges).find(@reward.id)
      render "api/rewards/show"
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  def show
    @reward = Reward.includes(:pledges).find(params[:id])
  end

  def index
    @rewards = Reward.includes(:pledges).where(project_id: params[:project_id])
  end

  def destroy
    @reward = Reward.includes(:pledges).find(params[:id])
    @reward.destroy
    render "api/rewards/show"
  end

  private
  def require_user_owns_project!
    return if current_user.projects.find_by(id: params[:project_id])
    render json: "Forbidden", status: :forbidden
  end

  def reward_params
    params.require(:reward).permit(:id, :title, :description, :amount, :project_id, :backing_limit, :delivery_date)
  end

end
