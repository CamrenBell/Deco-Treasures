from django.urls import path
from . import views

urlpatterns = [
    path('', views.InventoryView.as_view(), name='inventory_list'), # for listing and creating
    path('<int:item_id>', views.InventoryView.as_view(), name='inventory_detail'), # for detail, updating, and deleting
    path('ebay', views.EbayView.as_view(), name='ebay_list')
]