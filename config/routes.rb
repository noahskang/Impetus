Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resource :users, only: [:create]
    resources :projects
  end

  root "static_pages#root"
end
