Rails.application.routes.draw do
  resources :product_variants
  root 'products#index'
  resources :products
end
