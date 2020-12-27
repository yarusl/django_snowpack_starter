from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url
#from django.conf.urls import handler404
#handler404 = 'frontend.views.error_404'

static_files = []
if settings.DEBUG == True:
    static_files = \
        static(settings.DIST_URL, document_root=settings.DIST_ROOT) + \
        static(settings.DEV_STATIC_URL, document_root=settings.DEV_STATIC_ROOT) + \
        []
    
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include('test_app.urls')),
] + static_files
