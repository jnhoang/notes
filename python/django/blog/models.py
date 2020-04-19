from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse

# Create your models here.
class Post(models.Model):
  title       =  models.CharField(max_length=100)
  content     =  models.TextField()
  date_posted =  models.DateTimeField(default=timezone.now)
  author      =  models.ForeignKey(User, on_delete=models.CASCADE) # see notes on_delete

  def __str__(self):
    return self.title


  def get_absolute_url(self):
    return reverse('post-detail', kwargs={'pk': self.pk})      # see notes on reverse()



""" NOTES
  on_delete (CASCADE)
    - deleting the 1st argument will delete the instance of this Post
    - one way street (deleting this post will not delete the User)

  classes defined here will need to be migrated (executed/committed to the db)
    - to view the the sql statement that will be run: `python manage.py sqlmigrate blog <MIGRATION_NUMBER>
    - see readme django commands for more info

  reverse():
    - returns the full path of url as a string
 """
