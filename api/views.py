from rest_framework import viewsets
import json

from rest_framework.generics import ListAPIView, CreateAPIView, ListCreateAPIView
from rest_framework.views import APIView
from django.http import HttpResponse
from django.db.models import F
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)

from .models import User, Leave
from .serializers import LeaveSerializer, PersonalInfoSerializer, CountSerializer



class PersonalInfoViewSet(viewsets.ModelViewSet):
    serializer_class = PersonalInfoSerializer
    queryset = User.objects.all()

    def create(self, request):
        serializer = PersonalInfoSerializer(data=request.data)
        if serializer.is_valid():
            info = serializer.create(request)
            if info:
                return Response(status=HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST)

class LeaveViewSet(CreateAPIView):
    
    queryset = Leave.objects.all()
    serializer_class = LeaveSerializer

    @classmethod
    def get_extra_actions(cls):
        return []
    
    def update(self, request, *args, **kwargs):
        instance = self.get_object(username)
        instance.date_to = Leave.objects.filter(username=request.data['username'])
        instance.date_from = Leave.objects.filter(username=request.data['username'])
        instance.save()
        
        obj = Product.objects.get(pk=pk)
        obj.name = "some_new_value"
        obj.save()

        serializer = self.get_serializer(instance)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(serializer.data)

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
    queryset = User.objects.all()
    
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request):

        all_count = User.objects.all()
        male_count = User.objects.filter(gender='M').count()
        female_count = User.objects.filter(gender='F').count()
        counting = all_count.count()

        return Response({'employee': counting,'male': male_count, 'female' : female_count})


class LeaveViewSetGET(ListAPIView):
    serializer_class = LeaveSerializer
    queryset = Leave.objects.all().first()

    def get(self, request):
        queryset = Leave.objects.all()
        return Response({queryset})



