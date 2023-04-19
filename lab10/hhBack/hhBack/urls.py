from django.contrib import admin
from django.urls import path, include
from api.views import CompanyAPIView

urlpatterns = [
    path('api/', include('api.urls')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/v1/companyList/', CompanyAPIView.as_view())
]
