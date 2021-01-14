from allauth.account.adapter import get_adapter
from rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from rest_framework.authtoken.models import Token

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('firstname','lastname','email','datetime', 'username', 'password', 'is_employee', 'is_management')


class CustomRegisterSerializer(RegisterSerializer):
    is_employee = serializers.BooleanField()
    is_management = serializers.BooleanField()

    class Meta:
        model = User
        fields = ('firstname','lastname','datetime','email', 'username', 'password', 'is_employee', 'is_management')

    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'is_employee': self.validated_data.get('is_employee', ''),
            'is_management': self.validated_data.get('is_management', ''),
            'firstname': self.validated_data.get('firstname', ''),
            'lastname': self.validated_data.get('lastname', ''),
            'datetime': self.validated_data.get('datetime', ''),
            
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.is_employee = self.cleaned_data.get('is_employee')
        user.is_management = self.cleaned_data.get('is_management')
        user.save()
        adapter.save_user(request, user, self)
        return user


class TokenSerializer(serializers.ModelSerializer):
    user_type = serializers.SerializerMethodField()

    class Meta:
        model = Token
        fields = ('key', 'user', 'user_type')

    def get_user_type(self, obj):
        serializer_data = UserSerializer(
            obj.user
        ).data
        is_management = serializer_data.get('is_management')
        is_employee = serializer_data.get('is_employee')
        return {
            'is_management': is_management,
            'is_employee' : is_employee
        }
