from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render

from api.models import Company, Vacancy

def render_companies(companies):
    html = '<h1>Companies</h1>'

    for com in list(companies):
        html += f'''
        <ul style="margin: 10px 0;">
            <a href="./{com.id}"><h4>{com.name}</h4></a>
        </ul>''' 

    return html

def render_company(company):
    return f'''
        <h4>Company name: {company.name}<br>
        Company description: {company.description}<br>
        Company city: {company.city}<br>
        Company address: {company.address}<br>
        <a href=./vacancies>Vacancies</a></h4>
        '''

def render_vacancies(vacancies):
    html = '<h1>Vacancies</h1>'

    for vac in list(vacancies):
        html += f'''
        <ul style="margin: 10px 0;">
            <a href="/api/vacancies/{vac.id}"><h4>{vac.name}</h4></a>
        </ul>''' 

    return html

def render_vacancy(vacancy):
    return f'''
        <h4>Vacancy name: {vacancy.name}<br>
        Vacancy description: {vacancy.description}<br>
        Vacancy salary: {vacancy.salary}<br>
        Vacancy company: {vacancy.company}<br></h4>
        '''

def companies(req):
    companies = Company.objects.all()
    return HttpResponse(render_companies(companies))

def companiesItem(req, id):
    company = get_object_or_404(Company, id=id)
    return HttpResponse(render_company(company))

def vacancies(req):
    vacancies = Vacancy.objects.all()
    return HttpResponse(render_vacancies(vacancies))

def companiesItemWithVacancies(req, id):
    vacancies = Vacancy.objects.filter(company_id=id)
    return HttpResponse(render_vacancies(vacancies))

def vacanciesItem(req, id):
    vacancy = get_object_or_404(Vacancy, id=id)
    return HttpResponse(render_vacancy(vacancy))

def top10Vacancies(req):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    return HttpResponse(render_vacancies(vacancies))