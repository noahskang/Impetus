class Api::ImagesController < ApplicationController
  def index
    @images = Image.all
    render :index
  end

  def create
    @image = Image.new(image_params)
    if @image.save
      render :show
    else
    end
  end

  private

  def image_params
    params.require(:image).permit(:url)
  end

end
