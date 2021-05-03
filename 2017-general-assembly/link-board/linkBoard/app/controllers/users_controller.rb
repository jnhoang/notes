class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    c = User.new(user_params)
    c.save!
    flash[:success] = 'Account created!!'
    redirect_to login_path
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
