class Post < ApplicationRecord
  belongs_to :users
  # has_many :comments

  validates :title,
  presence: true,
  length: {in:10..100}
  
end
