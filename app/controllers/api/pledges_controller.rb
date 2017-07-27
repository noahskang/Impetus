class Api::PledgesController < ApplicationController

  def create
    @pledge = Pledge.new(pledge_params)
    @pledge.user_id = current_user.id

    if @pledge.save
      render "api/pledges/show"
    else
      render json: @pledge.errors.full_messages, status: 422
    end
  end

  private

  def pledge_params
    params.require(:pledge).permit(:id, :reward_id, :user_id)
  end

end
