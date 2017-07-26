Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :index]
    resources :projects do
      resources :rewards, only: [:create, :index, :show, :destroy]
    end
    resources :rewards, only: [:show] do
      resources :pledges, only: [:create]
    end
  end

  root "static_pages#root"
end
