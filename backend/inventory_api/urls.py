from django.urls import path
from . import views

urlpatterns = [
    path('', views.InventoryView.as_view(), name='inventory_list'), # for listing and creating
    path('<int:item_id>', views.InventoryView.as_view(), name='inventory_detail'), # for detail, updating, and deleting
    path('ebay', views.EbayView.as_view(), name='ebay_list'),
    path('amazon', views.AmazonView.as_view(), name='amazon_list'),
    path('poshmark', views.PoshmarkView.as_view(), name='poshmark_list'),
    path('mercari', views.MercariView.as_view(), name='mercari_list'),
]