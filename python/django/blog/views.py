from django.shortcuts import render
from .models import Post  # see notes .models

# Create your views here.
def home(request):
  context = {
    'posts': Post.objects.all(),
  }
  return render(request, 'blog/home.html', context)


def about(request):
  return render(request, 'blog/about.html', {'title': 'About'})



""" NOTES

  .models
  - shortcut notation for the current package/directory
  - i.e blog/models and blog.views are sibling files
 """
