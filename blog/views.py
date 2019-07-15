from django.shortcuts import render
from django.utils import timezone
from .models import Post



def index(request):
    return render(request, "index.html", {})


def find_an_adventure(request):
    
    return render(request, "find_adventure.html", {})


def home(request):
    
    return render(request, "home.html", {})


def about_us(request):
    
    return render(request, "about_us.html", {})

def gmasp(request):

    return render(request, "gmasp.html", {})

