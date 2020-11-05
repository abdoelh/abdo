from django.http import HttpResponse
from django.shortcuts import render, redirect


# Create your views here.

def home(req):
    return render(req,"index.html",{})

def cv(req):
    return render(req,"cv.html",{})

def red(req):
    return redirect("/")