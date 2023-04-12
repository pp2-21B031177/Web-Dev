from django.urls import path

from . import views

urlpatterns = [
    path('companies/', views.companies, name='companies'),
    path('companies/<int:id>/', views.companiesItem, name='companies-item'),
    path('companies/<int:id>/vacancies/', views.companiesItemWithVacancies, name='companies-item-with-vacancies'),

    path('vacancies/', views.vacancies, name='vacancies'),
    path('vacancies/<int:id>/', views.vacanciesItem, name='vacancies-item'),
    path('vacancies/top-ten', views.top10Vacancies, name='top-10-vacancies'),
]