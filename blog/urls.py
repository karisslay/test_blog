from django.urls import path
from . import views

urlpatterns = [
    
    path("", views.index, name = "index"),

    path("home/", views.home, name = "home"),

    path("findadventure/", views.find_an_adventure, name = "find an adventure"),

    path("aboutus/", views.about_us, name = "about us"),

]