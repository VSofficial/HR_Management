from rest_framework import serializers
from django.db.models import F
from django.http import HttpResponse
from rest_framework.response import Response
from .models import User, Leave

class PersonalInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('__all__')

    def create(self, request):
        data = request.data
        info = User()     
        info.first_name = data['first_name']
        info.last_name = data['last_name']
        info.username = data['username']
        info.email = data['email']
        info.phone = data['phone']
        info.role = data['role']
        info.gender = data['gender']
        info.dob = data['dob']
        info.salary = data['salary']
        info.team = data['team']
         
        info.save()
   
        return info
  
class CountSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('__all__')

class LeaveSerializer(serializers.ModelSerializer):
  
    class Meta:
        model = Leave 
        fields = ('__all__')



