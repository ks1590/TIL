class PostsController < ApplicationController
  def index
    # @posts = Post.all
    @posts = Post.includes(:user)
  end
end
