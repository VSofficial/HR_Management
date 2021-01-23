from django.urls import path, include, re_path
from api.views import LeaveViewSetGET

urlpatterns = [
    path('', LeaveViewSetGET.as_view()),
]