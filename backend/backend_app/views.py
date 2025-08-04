from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from backend_app.serializers import OrdersSerializer

# Create your views here.
@api_view(['POST'])
def create_order(request):
    if request.method == 'POST':
        serializer = OrdersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
