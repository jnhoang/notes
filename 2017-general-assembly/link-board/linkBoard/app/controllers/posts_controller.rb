class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    user = @current_user
    user.posts.create(post_params)
    user.save
    flash[:success] = 'New post created'

    redirect_to posts_path
  end

  def update
    p = Post.find(params[:id])
    post_params = {'title'=>p.title, 'link'=>p.link, 'user_id'=>p.user.id, 'points'=>p.points +=1}
    p.update(post_path)

    redirect_to posts_path
  end

  private

  def post_params
    params.require(:post).permit(:title, :link, :user_id, :points)
  end
end
