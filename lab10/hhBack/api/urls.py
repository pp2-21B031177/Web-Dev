from django.urls import path

from . import views

urlpatterns = [
    path('companies/', views.getCompanies, name='companies'),
    path('companies/create/', views.createCompany, name='create-company'),
    path('companies/edit/<int:id>/', views.editCompanyById, name='edit-company'),
    path('companies/delete/<int:id>/', views.deleteCompanyById, name='delete-company'),
    path('companies/<int:id>/', views.companiesItem, name='companies-item'),
    path('companies/<int:id>/vacancies/', views.companiesItemWithVacancies, name='companies-item-with-vacancies'),

    path('vacancies/', views.getVacancies, name='vacancies'),
    path('vacancies/create/', views.createVacancy, name='create-vacancy'),
    path('vacancies/edit/<int:id>', views.editVacancyById, name='edit-vacancy'),
    path('vacancies/delete/<int:id>', views.deleteVacancyById, name='delete-vacancy'),
    path('vacancies/<int:id>/', views.vacanciesItem, name='vacancies-item'),
    path('vacancies/top-ten', views.top10Vacancies, name='top-10-vacancies'),
]