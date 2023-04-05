from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()

    def __str__(self) -> str:
        return f'Product {self.name}'

class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self) -> str:
        return f'Category {self.name}'