from django.urls import path
from . import views # (. == current directory)

urlpatterns = [
    path('', views.home, name='blog-home'), # see note on blog-home
    path('about/', views.about, name='blog-about'),
]









""" NOTES
  blog-home:
    - prepending home is namespacing it, as other apps might exist within the project, we don't want collision
    - i.e blog-home vs store-home
"""
