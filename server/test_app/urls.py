from django.urls import path
from test_app.views import test_api 

urlpatterns = [
  path('api/test_api/', test_api, name='test_api')
]