from rest_framework.routers import DefaultRouter
from api.views import CountViewSet

router = DefaultRouter()
router.register(r'', CountViewSet, base_name='count')
urlpatterns = router.urls
