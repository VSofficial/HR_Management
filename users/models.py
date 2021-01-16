from django.db import models
from django import forms
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
  
  firstname = models.CharField(max_length=40)
  lastname = models.CharField(max_length=40)
  username = models.CharField(max_length=6, unique=True)
  email = models.EmailField(max_length=100)
  datetime = models.DateTimeField(auto_now=True)
  
  
  def __str__(self):
    return self.username

class UserForm(forms.ModelForm):
    password = forms.CharField(max_length=200,widget=forms.PasswordInput())
    class Meta:
        model = User
        fields = ('password',)



class Employee(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username
