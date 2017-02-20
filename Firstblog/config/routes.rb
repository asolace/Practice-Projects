Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Root
  root 'posts#index', as: 'home'

  # Regular route:
  get 'about' => 'pages#about', as: 'about'

  # Resource route (maps HTTP verbs to controller actions)
  resources :posts do
  	resources :comments
  end
  
end
