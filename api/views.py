from rest_framework import viewsets
from rest_framework.generics import ListAPIView, CreateAPIView, ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)

from .models import Assignment, GradedAssignment, PersonalInfo
from .serializers import AssignmentSerializer, GradedAssignmentSerializer, PersonalInfoSerializer
from users.models import User

#class PersonalInfoViewSet(viewsets.ModelViewSet):
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

class PersonalInfoCreateView(CreateAPIView):
    serializer_class = PersonalInfoSerializer
    queryset = PersonalInfo.objects.all()

    def post(self, request):
        print(request.data)
        serializer = PersonalInfoSerializer(data=request.data)
        serializer.is_valid()
        info_this = serializer.create(request)
        if info_this:
            return Response(status=HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST)


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


class GradedAssignmentListView(ListAPIView):
    serializer_class = GradedAssignmentSerializer

    def get_queryset(self):
        queryset = GradedAssignment.objects.all()
        username = self.request.query_params.get('username', None)
        if username is not None:
            queryset = queryset.filter(student__username=username)
        return queryset


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
