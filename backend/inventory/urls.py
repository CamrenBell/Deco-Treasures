from django.urls import path
from . import views
from .views import SearchHomeView, SearchResultsView

urlpatterns = [
    path('', views.item_list, name='item_list'),
    path('data/', views.data_list, name='data_list'),
    path('new', views.new_item, name='new_item'),
    path('search/', SearchHomeView.as_view(), name='search_home'),
    path('searchResults/', SearchResultsView.as_view(), name='search_results'),
    path('<int:item_id>', views.item_details, name='item_detail'),
    path('<int:item_id>/edit', views.edit_item, name='edit_item'),
    path('<int:item_id>/delete', views.delete_item, name='delete_item'),
    path('<int:item_id>/Ebay/new', views.new_ebay_listing, name='new_ebay_listing'),
    path('<int:item_id>/Ebay/edit', views.edit_ebay_listing, name='edit_ebay_listing'),
    path('<int:item_id>/Ebay/delete', views.delete_ebay_listing, name='delete_ebay_listing'),
    path('<int:item_id>/Amazon/new', views.new_amazon_listing, name='new_amazon_listing'),
    path('<int:item_id>/Amazon/edit', views.edit_amazon_listing, name='edit_amazon_listing'),
    path('<int:item_id>/Amazon/delete', views.delete_amazon_listing, name='delete_amazon_listing'),
    path('<int:item_id>/Poshmark/new', views.new_poshmark_listing, name='new_poshmark_listing'),
    path('<int:item_id>/Poshmark/edit', views.edit_poshmark_listing, name='edit_poshmark_listing'),
    path('<int:item_id>/Poshmark/delete', views.delete_poshmark_listing, name='delete_poshmark_listing'),
    path('<int:item_id>/Mercari/new', views.new_mercari_listing, name='new_mercari_listing'),
    path('<int:item_id>/Mercari/edit', views.edit_mercari_listing, name='edit_mercari_listing'),
    path('<int:item_id>/Mercari/delete', views.delete_mercari_listing, name='delete_mercari_listing'),
]