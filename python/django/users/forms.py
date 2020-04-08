from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class UserRegisterForm(UserCreationForm):
  email = forms.EmailField(required=True)       # see notes on required

  class Meta: # see notes on Meta
    model  =  User
    fields =  ['username', 'email', 'password1', 'password2']

""" NOTES
  required
    - default for this value is True
  Meta
    - this specifies what models this class will interact with

  Meta.fields
    - what fields to show on the form
    - what order to show the fields in
 """
