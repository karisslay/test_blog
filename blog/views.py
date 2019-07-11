from django.shortcuts import render
from django.utils import timezone
from .models import Post


def index(request):
    
    return render(request, "blog/index.html", {})

def find_an_adventure(request):
    return render(request, "blog/find_adventure.html", {})

