from django.db import models
from django.contrib.auth.models import User

class ContractType(models.Model):
    type = models.CharField(max_length=150)
    title = models.CharField(max_length=200)
    description = models.TextField()
    cost = models.DecimalField(max_digits=10, decimal_places=2)

class Contract(models.Model):
    date_created = models.DateTimeField(auto_now_add=True)
    paid = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.ForeignKey(ContractType, on_delete=models.CASCADE)
