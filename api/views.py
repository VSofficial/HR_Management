from rest_framework import viewsets
import json
from rest_framework.generics import ListAPIView, CreateAPIView, ListCreateAPIView
from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)

from .models import Assignment, GradedAssignment, User
from .serializers import AssignmentSerializer, GradedAssignmentSerializer, PersonalInfoSerializer, CountSerializer

#from users.models import User


class PersonalInfoViewSet(viewsets.ModelViewSet):
    serializer_class = PersonalInfoSerializer
   # serializer_class = UserSerializer
   # queryset = PersonalInfo.objects.all()
    queryset = User.objects.all()

    def create(self, request):
        serializer = PersonalInfoSerializer(data=request.data)
        if serializer.is_valid():
            info = serializer.create(request)
            if info:
                return Response(status=HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST)



class LeaveViewSet(viewsets.ModelViewSet):

   serializer_class = PersonalInfoSerializer
   # serializer_class = UserSerializer
   # queryset = PersonalInfo.objects.all()
   queryset = User.objects.all()

   def get(self):
      if self.request.method == "GET":
          content = {'user_count': '2'}
          return HttpResponse(json.dumps(content), content_type='application/json')

class PersonalInfoCreateView(CreateAPIView):
    serializer_class = PersonalInfoSerializer
    queryset = User.objects.all()

    def post(self, request):
        print(request.data)
        serializer = PersonalInfoSerializer(data=request.data)
        serializer.is_valid()
        info_this = serializer.create(request)
        if info_this:
            return Response(status=HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST)

class CountViewSet(CreateAPIView):
    serializer_class = CountSerializer
   # serializer_class = UserSerializer
   # queryset = PersonalInfo.objects.all()
    queryset = User.objects.all()
    #user1 = User.username
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request):

        all_count = User.objects.all()
      #  user_name = request.query_params['username']
        male_count = User.objects.filter(gender='M').count()
        female_count = User.objects.filter(gender='F').count()

        counting = all_count.count()


        return Response({'employee': counting,'male': male_count, 'female' : female_count})

'''
 class MaleCount(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        
        male_count = User.objects.filter(gender='M').count()
        #gender = self.request.query_params.get('gender', None)
        return male_count

 class FemaleCount(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        
        female_count = User.objects.filter(gender='F').count()
        #gender = self.request.query_params.get('gender', None)
        return female_count

'''

# Seperation Line

class AssignmentViewSet(viewsets.ModelViewSet):
    serializer_class = AssignmentSerializer
    queryset = Assignment.objects.all()

    def create(self, request):
        serializer = AssignmentSerializer(data=request.data)
        if serializer.is_valid():
            assignment = serializer.create(request)
            if assignment:
                return Response(status=HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST)


class GradedAssignmentCreateView(CreateAPIView):
    serializer_class = GradedAssignmentSerializer
    queryset = GradedAssignment.objects.all()

    def post(self, request):
        print(request.data)
        serializer = GradedAssignmentSerializer(data=request.data)
        serializer.is_valid()
        graded_assignment = serializer.create(request)
        if graded_assignment:
            return Response(status=HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST)
