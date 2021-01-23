from django.urls import path, include, re_path
from api.views import LeaveViewSet

urlpatterns = [
    path('', LeaveViewSet.as_view()),
]