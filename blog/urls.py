from django.urls import path
from . import views
app_name = 'Dashboard'

urlpatterns = [
    
    path("", views.index, name = "index"),

    path("home/", views.home, name = "home"),

    path("findadventure/", views.find_an_adventure, name = "find an adventure"),

    path("aboutus/", views.about_us, name = "about us"),

    path("gmasp/", views.gmasp, name = "map"),
    
]