from django.urls import path, include, re_path
from api.views import LeaveViewSetMain

urlpatterns = [
    path('', LeaveViewSetMain.as_view()),
]