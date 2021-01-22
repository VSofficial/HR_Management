from rest_framework.routers import DefaultRouter
from api.views import PersonalInfoViewSet

router = DefaultRouter()
router.register(r'', PersonalInfoViewSet, base_name='personalinfo')
urlpatterns = router.urls
