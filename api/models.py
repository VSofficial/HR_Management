from django.db import models
from datetime import date

class Holiday(models.Model):
    title = models.CharField(max_length=50)
    date = models.DateField()

    def __str__(self):
        return self.title

class User(models.Model):
  
  first_name = models.CharField(max_length=40)
  last_name = models.CharField(max_length=40)
  username = models.CharField(max_length=10, null=False,unique=True, primary_key=True)
  email = models.EmailField(max_length=100)
  date_joined = models.DateField(auto_now=True,null=True)
  phone = models.CharField(max_length=10, null=True, blank=True)
  role = models.CharField(max_length=40, null=True, blank=True)
  password = models.CharField(max_length=100, null=True)
  # Required References
  gender = models.CharField(max_length=10, null=True, blank=True)
  dob = models.DateField(null=True,blank=True)
  salary = models.CharField(max_length=10,null=True,blank=True)
  team = models.CharField(max_length=100,null=True,blank=True)
  #Additional References
  date_from = models.DateField(null=True, blank=True)
  date_to = models.DateField(null=True, blank=True)
  status = models.CharField(max_length=10,null=True,blank=True)
  

  def __str__(self):
    return self.username


class Leave(models.Model):
    # Forign key Emp I
    date_from = models.DateField()
    date_to = models.DateField()
    status = models.CharField(max_length=10)
    reason = models.CharField(max_length=100)
    username = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
     return self.username


