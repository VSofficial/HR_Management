from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('admin/', admin.site.urls),
    #path('leave/', include('api.leave.urls')),
    #path('leave_view/', include('api.leave_view.urls')),
    path('personalinfo/', include('api.personalinfo.urls')),
    path('emp_count/', include('api.emp_count.urls')),
    path('users/', include('users.urls')),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
    
]
