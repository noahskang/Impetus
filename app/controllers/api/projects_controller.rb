class Api::ProjectsController < ApplicationController
  before_action :require_signed_in!, only: [:create, :update, :destroy]
  before_action :require_user_owns_project!, only: [:update, :destroy]

  def new
  end

  def create
    @project = Project.new(project_params)
    @rewards = []

    if @project.save
      render "api/projects/project"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def edit
  end

# dealing with N+2 query
  def show
    @project = Project.find(params[:id])
    @rewards = @project.rewards.includes(:pledges, :backers)
  end

  def index
    @projects = Project.includes(:rewards).all
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      @rewards = []
      render "api/projects/show"
    else
       flash.now[:errors] = @sub.errors.full_messages
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    @rewards = []
    render "api/projects/show"
  end

  private
  def require_user_owns_project!
    return if current_user.projects.find_by(id: params[:id])
    render json: "Forbidden", status: :forbidden
  end

  def project_params
    params.require(:project).permit(:title, :website_url, :description, :category, :creator_id, :funding_goal, :funding_raised, :end_date, :image_url)
  end

end
