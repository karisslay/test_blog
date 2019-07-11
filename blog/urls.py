from django.urls import path
from . import views

urlpatterns = [
    
    path("", views.index, name = "index"),

    path("findadventure/", views.find_an_adventure, name = "find an adventure"),

]