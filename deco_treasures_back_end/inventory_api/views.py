from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .serializers import ItemSerializer
from .models import Item


# Create your views here.
class InventoryView(APIView):

    def get(self, request, item_id=None):
        if item_id:  
            data = Item.objects.get(id=item_id)
            serializer = ItemSerializer(data)
        else:
            data = Item.objects.all()
            serializer = ItemSerializer(data, many=True)
        return Response({"result": serializer.data}, headers={'Access-Control-Allow-Origin': '*'})

    def post(self, request):
        item = request.data
        serializer = ItemSerializer(data=item)
        if serializer.is_valid(raise_exception=True):
            item_saved = serializer.save()
        return Response({"result": f"Item {item_saved.description}"})

    def put(self, request, item_id):
        saved_item = get_object_or_404(Item.objects.all(), id=item_id)
        data = request.data
        serializer = ItemSerializer(instance=saved_item, data=data, partial=True) #partial means not all fields are required 
        #The .is_valid() method takes an optional raise_exception flag that will cause it to raise a serializers.ValidationError exception if there are validation errors.
        if serializer.is_valid(raise_exception=True):#
            saved_item = serializer.save()
        return Response({"result": f"{saved_item.description} updated"})

    def delete(self, request, item_id):
        item = get_object_or_404(Item.objects.all(), id=item_id)
        item.delete()
        return Response({"result": f"Item id {item_id} deleted"},status=204)