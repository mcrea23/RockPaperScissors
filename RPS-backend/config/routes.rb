Rails.application.routes.draw do

  resources :games
 
  resources :users

  #restful routes in controller 
  
  # devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
