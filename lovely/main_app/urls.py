from django.urls import path
from .views import main_page_view

app_name = "main_app"
urlpatterns = [
    path('', main_page_view, name='main_page'),

]




