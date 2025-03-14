from django.contrib import admin
from django.urls import path, include  # Include function is needed

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('kpop.urls')),  # Add this line to include kpop app routes
]
