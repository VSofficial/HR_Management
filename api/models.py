from django.db import models
from users.models import User

'''
class Holiday(models.Model):
    title = models.CharField(max_length=50)
    date = models.DateField()

    def __str__(self):
        return self.title

class PersonalInfo(models.Model):
    gender = models.BooleanField()
    age = models.SmallIntegerField()
    dateofbirth = models.DateField()
    salary = models.CharField(max_length=10)
    role = models.CharField(max_length=100)
    team = models.charField(max_length=100)
    description = models.CharField(max_legth=250)
    username = models.CharField(max_length=40)


class Project(models.Model):
    title = models.CharField()
    deadline = models.DateField() 

class Features(models.Model):
    leave_request=models.BooleanField()
    leave_date=models.DateField()
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
