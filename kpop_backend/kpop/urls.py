from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ArtistViewSet, AlbumViewSet, SongViewSet

# Set up a router for ViewSets
router = DefaultRouter()
router.register(r'artists', ArtistViewSet)
router.register(r'albums', AlbumViewSet)
router.register(r'songs', SongViewSet)

urlpatterns = [
    path('', include(router.urls)),  # This will expose all the API endpoints
]
