from django.urls import path, include, re_path
from api.views import CountViewSet

urlpatterns = [
    path('', CountViewSet.as_view()),
]
