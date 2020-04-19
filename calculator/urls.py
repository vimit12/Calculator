"""calculator URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from basiccalculator import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path(r'basic/', views.basic_cal),
    path(r'area/', views.area),
    path(r'kids/', views.kids_section),
    path(r'body/', views.body_part),
    path(r'fruits/', views.fruits),
    path(r'vehicle/', views.vehicle),
    path(r'animal/', views.animal),
    path(r'convert/', views.convert),
    path(r'email/', views.email),
    # path(r'success.html/', views.success),
    path(r'draw/', views.draw_graph),
]
