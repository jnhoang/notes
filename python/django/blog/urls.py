from django.urls import path
from .views import (
  PostListView,
  PostDetailView,
  PostCreateView,
  PostUpdateView,
  PostDeleteView,
)
from . import views # (. == current directory)

urlpatterns = [
  # path('', views.home, name='blog-home'), # see note on blog-home
  path('', PostListView.as_view(), name='blog-home'),     # see notes on clas-based-views
  path('post/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
  path('post/<int:pk>/update/', PostUpdateView.as_view(), name='post-update'),
  path('post/<int:pk>/delete/', PostDeleteView.as_view(), name='post-delete'),
  path('post/new/', PostCreateView.as_view(), name='post-create'),
  path('about/', views.about, name='blog-about'),
]









""" NOTES
  blog-home:
    - prepending home is namespacing it, as other apps might exist within the project, we don't want collision
    - i.e blog-home vs store-home
  class-based-views:
    - will default look for a template in the dir <APP>/<MODEL>_<VIEW_TYPE>.html
      - i.e blog/post_list.html
"""
