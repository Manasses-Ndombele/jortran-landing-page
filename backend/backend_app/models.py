from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Orders(models.Model):
    client_fullname = models.CharField(max_length=150, unique=True, verbose_name='Nome completo')
    client_phonenumber = PhoneNumberField(unique=True, verbose_name='Telefone')
    neighborhood = models.CharField(max_length=200, verbose_name='Bairro')
    address = models.TextField(verbose_name='Endereço')
    quantity = models.IntegerField(verbose_name='Quantidade')

    def __str__(self):
        return f'{self.id} - {self.client_fullname}'

    class Meta:
        verbose_name = 'Pedido'
        verbose_name_plural = 'Pedidos'
