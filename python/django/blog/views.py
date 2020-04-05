from django.shortcuts import render

# dummy data - TODO - delete later
posts = [
  {
    'author': 'CoreyMs',
    'title': 'blog poost 1',
    'date_posted': 'August 27, 2018',
    'content': 'first post content',
  },
  {
    'author': 'jane doe',
    'title': 'blog poost 2',
    'date_posted': 'August 28, 2018',
    'content': 'second post content',
  },
]

# Create your views here.
def home(request):
  context = {
    'posts': posts,
  }
  return render(request, 'blog/home.html', context)


def about(request):
  return render(request, 'blog/about.html', {'title': 'About'})
