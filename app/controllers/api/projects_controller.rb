class Api::ProjectsController < ApplicationController
  before_action :require_signed_in!, only: [:create, :update, :destroy]
  before_action :require_user_owns_project!, only: [:update, :destroy]

  def new
  end

  def create
    @project = Project.new(project_params)

    if @project.save
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def edit
  end 

  def show
    @project = Project.find(params[:id])
  end

  def index
    @projects = Project.all
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render "api/projects/show"
    else
       flash.now[:errors] = @sub.errors.full_messages
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    # render "api/projects/show"
  end

  private
  def require_user_owns_project!
    return if current_user.projects.find_by(id: params[:id])
    render json: "Forbidden", status: :forbidden
  end

  def project_params
    params.require(:project).permit(:title, :website_url, :description, :category, :creator_id, :funding_goal, :end_date)
  end

end
