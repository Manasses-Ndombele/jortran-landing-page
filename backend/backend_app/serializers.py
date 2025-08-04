from rest_framework import serializers
from backend_app.models import Orders

class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = ['client_fullname', 'client_phonenumber', 'neighborhood', 'description', 'quantity']
