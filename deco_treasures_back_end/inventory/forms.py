from django import forms
from .models import *

class ItemForm(forms.ModelForm):
    class Meta:
        model = Item
        fields = (  'description',
                    'purchase_price',
                    'sold_price', 
                    'tax', 
                    'shipping_cost', 
                    'profit', 
                    'amount_due_to_customer', 
                    'net_profit',
                    'roi',
                    'date_sold',
                    'notes',
                )

class EbayListingForm(forms.ModelForm):
    class Meta:
        model = Ebay_Listing
        fields = (
            'order_id',
            'listed_price',
            'date_listed',
            'final_value_fee',
            'add_fee', 
        )

class AmazonListingForm(forms.ModelForm):
    class Meta:
        model = Amazon_Listing
        fields = (
            'order_id',
            'listed_price',
            'date_listed',
            'total_amazon_fees', 
        )

class PoshmarkListingForm(forms.ModelForm):
    class Meta:
        model = Poshmark_Listing
        fields = (
            'order_id',
            'listed_price',
            'date_listed',
            'total_poshmark_fees', 
        )

class MercariListingForm(forms.ModelForm):
    class Meta:
        model = Mercari_Listing
        fields = (
            'order_id',
            'listed_price',
            'date_listed',
            'total_mercari_fees', 
        )

class SearchForm(forms.Form):
    q = forms.CharField(label='Search', max_length=200)