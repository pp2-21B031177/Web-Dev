from rest_framework import serializers
from .models import Company, Vacancy
class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('name', 'description', 'city', 'address')