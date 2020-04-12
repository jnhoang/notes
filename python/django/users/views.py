from django.shortcuts import render, redirect
from django.contrib import messages     # see notes.message
from django.contrib.auth.decorators import login_required
from .forms import UserRegisterForm


# Create your views here.
def register(request):
  if request.method == 'POST':
    form = UserRegisterForm(request.POST)
    if form.is_valid():
      form.save()
      username = form.cleaned_data.get('username')
      messages.success(request, f'Your account has been created! You are now able to login')
      return redirect('login')
  else:
    form = UserRegisterForm()

  return render(request, 'users/register.html', {'form': form})


@login_required
def profile(request):
  return render(request, 'users/profile.html')



""" NOTES
  messages
    - sends flash messages (one time message)
    - can be themed (like bootstrap values) [debug, info, success, warning, error]
 """
