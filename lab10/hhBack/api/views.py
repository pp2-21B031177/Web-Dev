from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from rest_framework import generics
from .serializers import CompanySerializer

from api.models import Company, Vacancy

class CompanyAPIView(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

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

def getCompanies(req):
    companies = Company.objects.all()
    return render(req, 'companies.html', {"companies": companies})

def createCompany(req):
    if req.method == "POST":
        company = Company()
        company.name = req.POST.get("name")
        company.description = req.POST.get("description")
        company.city = req.POST.get("city")
        company.address = req.POST.get("address")
        company.save()
    return HttpResponseRedirect("/api/companies/")

def editCompanyById(req, id):
    try:
        company = Company.objects.get(id=id)
        if req.method == "POST":
            company = Company()
            company.name = req.POST.get("name")
            company.description = req.POST.get("description")
            company.city = req.POST.get("city")
            company.address = req.POST.get("address")
            company.save()
            return HttpResponseRedirect("/api/companies/")
        else:
            return render(req, 'editCompany.html', {"company": company})
    except Company.DoesNotExist:
        return HttpResponseNotFound("<h2>Company not found</h2>")

def deleteCompanyById(req, id):
    try:
        company = Company.objects.get(id=id)
        company.delete()
        return HttpResponseRedirect("/api/companies/")
    except Company.DoesNotExist:
        return HttpResponseNotFound("<h2>Company not found</h2>")
    
def getVacancies(req):
    vacancies = Vacancy.objects.all()
    return render(req, 'vacancies.html', {"vacancies": vacancies})

def createVacancy(req):
    if req.method == "POST":
        vacancy = Vacancy()
        vacancy.name = req.POST.get("name")
        vacancy.description = req.POST.get("description")
        vacancy.salary = req.POST.get("salary")
        try:
            vacancy.company = Company.objects.get(id=req.POST.get("companyId"))
        except Company.DoesNotExist:
            return HttpResponseNotFound("<h2>Company not found</h2>")
        vacancy.save()
    return HttpResponseRedirect("/api/vacancies/")

def editVacancyById(req, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        if req.method == "POST":
            vacancy = Vacancy()
            vacancy.name = req.POST.get("name")
            vacancy.description = req.POST.get("description")
            vacancy.salary = req.POST.get("salary")
            try:
                vacancy.company = Company.objects.get(id=req.POST.get("companyId"))
            except Company.DoesNotExist:
                return HttpResponseNotFound("<h2>Company not found</h2>")
            vacancy.save()
            return HttpResponseRedirect("/api/vacancies/")
        else:
            return render(req, 'editVacancy.html', {"vacancy": vacancy})
    except Vacancy.DoesNotExist:
        return HttpResponseNotFound("<h2>Vacancy not found</h2>")
    
def deleteVacancyById(req, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        vacancy.delete()
        return HttpResponseRedirect("/api/vacancies/")
    except Vacancy.DoesNotExist:
        return HttpResponseNotFound("<h2>Vacancy not found</h2>")
    
