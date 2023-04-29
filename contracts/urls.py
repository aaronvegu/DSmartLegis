from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.render_index, name='index'),
    path('contrato-trabajo/', views.contrato_trabajo, name='contrato-trabajo'),
    path('handle-form-submission/', views.handle_form_submission, name='handle_form_submission')
]