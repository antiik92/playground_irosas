# blog/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('registro/', views.registro, name='registro'),
    path('inicio/', views.inicio, name='inicio'),
    # Otras rutas de URL para tus vistas
]
