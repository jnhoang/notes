from django.shortcuts import render
from django.views.generic import (
  ListView,
  DetailView,
  CreateView,
  UpdateView,
  DeleteView,
)
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from .models import Post  # see notes .models

# Create your views here.
# def home(request):
#   context = {
#     'posts': Post.objects.all(),
#   }
#   return render(request, 'blog/home.html', context)

class PostListView(ListView):
  model               =  Post
  template_name       =  'blog/home.html'       # see notes on class-based-views
  context_object_name =  'posts'                # see notes on context_object
  ordering            =  ['-date_posted', ]


class PostDetailView(DetailView):
  model =  Post


class PostCreateView(LoginRequiredMixin, CreateView):
  model  =  Post
  fields =  ['title', 'content']

  def form_valid(self, form):
    form.instance.author = self.request.user
    return super().form_valid(form)             # run the parent class method (after having injected the author)


class PostUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
  model  =  Post
  fields =  ['title', 'content']

  def form_valid(self, form):
    form.instance.author = self.request.user
    return super().form_valid(form)

  def test_func(self):
    post = self.get_object()
    if self.request.user == post.author:
      return True
    return False


class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
  model       =  Post
  success_url =  '/'

  def test_func(self):
    post = self.get_object()
    if self.request.user == post.author:
      return True
    return False


def about(request):
  return render(request, 'blog/about.html', {'title': 'About'})



""" NOTES

  .models
    - shortcut notation for the current package/directory
    - i.e blog/models and blog.views are sibling files
  class-based-views:
    - alternative to function based views
    - will default look for a template in the dir <APP>/<MODEL>_<VIEW_TYPE>.html
      - i.e blog/post_list.html
  context_object:
    - this value will be how the template references the context obj
    - by default the value will be the model injected
    - by default - templates will refer to this context object as "object"
 """
