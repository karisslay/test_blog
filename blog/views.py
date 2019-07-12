from django.shortcuts import render
from django.utils import timezone
from .models import Post



def index(request):
    return render(request, "index.html", {})


def find_an_adventure(request):
    context={
        "page": "Find an Adventure",
    }
    return render(request, "find_adventure.html", context)


def home(request):
    context={
        "page": "Home",
    }
    return render(request, "home.html", context)
