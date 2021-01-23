from rest_framework import viewsets
from django.shortcuts import render
from django.http import HttpResponse
from .models import User
from .serializers import UserSerializer
#from rest_framework.authtoken.models import Token
#from API.serializers import *
from rest_framework.renderers import JSONRenderer
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)




class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    
    #permission_classes = (IsAuthenticated,) 
    #authentication_classes = (Token,) 

    def create_auth(request):
     serialized = UserSerializer(data=request.DATA)
     if serialized.is_valid():
        User.objects.create_user(
            serialized.init_data['email'],
            serialized.init_data['username'],
            serialized.init_data['password']
        )
        return Response(serialized.data, status=status.HTTP_201_CREATED)
     else:
        return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)

    
