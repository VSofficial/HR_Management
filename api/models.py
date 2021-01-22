from django.db import models
from users.models import User


class Holiday(models.Model):
    title = models.CharField(max_length=50)
    date = models.DateField()

    def __str__(self):
        return self.title

class PersonalInfo(models.Model):

    
   
   # name = models.CharField(max_length=50)
    empid = models.CharField(max_length=10)
    phone = models.CharField(max_length=10)
    joindate = models.DateField()
    role = models.CharField(max_length=40)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    gender = models.BooleanField()
    dob = models.DateField()
    salary = models.CharField(max_length=10)
    team = models.CharField(max_length=100)
    
    def __str__(self):
        return self.first_name
    #NOTE Employee ID is the username in the model
'''
class Project(models.Model):
    title = models.CharField(max_length=50)
    #deadline = models.DateField() 


class Leave(models.Model):
    # Forign key Emp ID
    STATUS = (
        ('true', 'approved'),
        ('false', 'not approved'),
        ('null', 'no status'),
    )
    
    date_from = models.DateField()
    date_to = models.DateField()
    status = models.CharField(max_length=20, choices=STATUS, default=null)
    empid = models.CharField(max_length=50)


class Departments(models.Model):
    department = CharField(max_length=40)
    
'''
# Seperation Line

class Assignment(models.Model):
    title = models.CharField(max_length=50)
    teacher = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title



class GradedAssignment(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    assignment = models.ForeignKey(
        Assignment, on_delete=models.SET_NULL, blank=True, null=True)
    grade = models.FloatField()

    def __str__(self):
        return self.student.username


class Choice(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title


class Question(models.Model):
    question = models.CharField(max_length=200)
    choices = models.ManyToManyField(Choice)
    answer = models.ForeignKey(
        Choice, on_delete=models.CASCADE, related_name='answer', blank=True, null=True)
    assignment = models.ForeignKey(
        Assignment, on_delete=models.CASCADE, related_name='questions', blank=True, null=True)
    order = models.SmallIntegerField()

    def __str__(self):
        return self.question
