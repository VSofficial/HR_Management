from rest_framework.routers import DefaultRouter
from api.views import LeaveViewSet

router = DefaultRouter()
router.register(r'', LeaveViewSet, base_name='leave')
urlpatterns = router.urls
