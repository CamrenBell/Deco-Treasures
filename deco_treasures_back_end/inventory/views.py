from django.shortcuts import render, redirect
from django.views.generic import TemplateView, ListView, FormView
from .models import *
from .forms import *
from decimal import *

# Create your views here.

def get_item(item_id):
    return Item.objects.get(id=item_id)

def get_ebay_listing(ebay_listing_id):
    return Ebay_Listing.objects.get(item_id=ebay_listing_id)

def get_amazon_listing(item_id):
    return Amazon_Listing.objects.get(item_id=item_id)

def get_poshmark_listing(item_id):
    return Poshmark_Listing.objects.get(item_id=item_id)

def get_mercari_listing(item_id):
    return Mercari_Listing.objects.get(item_id=item_id)

def item_list(request):
    items = Item.objects.all()
    return render(request, 'inventory/item_list.html', {'items': items})

def item_details(request, item_id):
    item = get_item(item_id)
    return render(request, 'inventory/item_detail.html', {'item': item})

def new_item(request):
    if request.method == "POST":
        form = ItemForm(request.POST)
        if form.is_valid():
            item = form.save(commit=False)
            item.save()
            return redirect('item_detail', item_id=item.id)
    else:
        form = ItemForm()
    return render(request, 'inventory/item_form.html', {'form': form, 'type_of_request': 'New'})

def edit_item(request, item_id):
    item = get_item(item_id)
    if request.method == "POST":
        form = ItemForm(request.POST, instance=item)
        if form.is_valid():
            item = form.save(commit=False)
            item.save()
            return redirect('item_detail', item_id=item.id)
    else:
        form = ItemForm(instance=item)
    return render(request, 'inventory/item_form.html', {'form': form, 'type_of_request': 'Edit'})

def delete_item(request, item_id):
    if request.method == "POST":
        item = get_item(item_id)
        item.delete()
    return redirect('item_list')

def new_ebay_listing(request, item_id):
    if request.method == "POST":
        form = EbayListingForm(request.POST)
        if form.is_valid():
            ebay_listing = form.save(commit=False)
            ebay_listing.item = get_item(item_id=item_id)
            ebay_listing.save()
            return redirect('item_detail', item_id=item_id)
    else:
        form = EbayListingForm()
    return render(request, 'inventory/ebay_listing_form.html', {'form': form, 'type_of_request': 'New'})

def edit_ebay_listing(request, item_id):
    item = get_item(item_id)
    ebay_listing = get_ebay_listing(item.id)
    if request.method == "POST":
        form = EbayListingForm(request.POST, instance=ebay_listing)
        if form.is_valid():
            ebay_listing = form.save(commit=False)
            ebay_listing.item = get_item(item.id)
            ebay_listing.save()
            return redirect('item_detail', ebay_listing.item.id)
    else:
        form = EbayListingForm(instance=ebay_listing)
    return render(request, 'inventory/ebay_listing_form.html', {'form': form, 'type_of_request': 'Edit'})

def delete_ebay_listing(request, item_id):
    if request.method == "POST":
        item = get_item(item_id)
        ebay_listing = get_ebay_listing(item.id)
        ebay_listing.delete()
    return redirect('item_detail', item_id)

def new_amazon_listing(request, item_id):
    if request.method == "POST":
        form = AmazonListingForm(request.POST)
        if form.is_valid():
            amazon_listing = form.save(commit=False)
            amazon_listing.item = get_item(item_id=item_id)
            amazon_listing.save()
            return redirect('item_detail', item_id=item_id)
    else:
        form = AmazonListingForm()
    return render(request, 'inventory/amazon_listing_form.html', {'form': form, 'type_of_request': 'New'})

def edit_amazon_listing(request, item_id):
    item = get_item(item_id)
    amazon_listing = get_amazon_listing(item.id)
    if request.method == "POST":
        form = AmazonListingForm(request.POST, instance=amazon_listing)
        if form.is_valid():
            amazon_listing = form.save(commit=False)
            amazon_listing.item = get_item(item.id)
            amazon_listing.save()
            return redirect('item_detail', amazon_listing.item.id)
    else:
        form = AmazonListingForm(instance=amazon_listing)
    return render(request, 'inventory/amazon_listing_form.html', {'form': form, 'type_of_request': 'Edit'})

def delete_amazon_listing(request, item_id):
    if request.method == "POST":
        item = get_item(item_id)
        amazon_listing = get_amazon_listing(item.id)
        amazon_listing.delete()
    return redirect('item_detail', item_id)

def new_poshmark_listing(request, item_id):
    if request.method == "POST":
        form = PoshmarkListingForm(request.POST)
        if form.is_valid():
            poshmark_listing = form.save(commit=False)
            poshmark_listing.item = get_item(item_id=item_id)
            poshmark_listing.save()
            return redirect('item_detail', item_id=item_id)
    else:
        form = PoshmarkListingForm()
    return render(request, 'inventory/poshmark_listing_form.html', {'form': form, 'type_of_request': 'New'})

def edit_poshmark_listing(request, item_id):
    item = get_item(item_id)
    poshmark_listing = get_poshmark_listing(item.id)
    if request.method == "POST":
        form = PoshmarkListingForm(request.POST, instance=poshmark_listing)
        if form.is_valid():
            poshmark_listing = form.save(commit=False)
            poshmark_listing.item = get_item(item.id)
            poshmark_listing.save()
            return redirect('item_detail', poshmark_listing.item.id)
    else:
        form = PoshmarkListingForm(instance=poshmark_listing)
    return render(request, 'inventory/poshmark_listing_form.html', {'form': form, 'type_of_request': 'Edit'})

def delete_poshmark_listing(request, item_id):
    if request.method == "POST":
        item = get_item(item_id)
        poshmark_listing = get_poshmark_listing(item.id)
        poshmark_listing.delete()
    return redirect('item_detail', item_id)

def new_mercari_listing(request, item_id):
    if request.method == "POST":
        form = MercariListingForm(request.POST)
        if form.is_valid():
            mercari_listing = form.save(commit=False)
            mercari_listing.item = get_item(item_id=item_id)
            mercari_listing.save()
            return redirect('item_detail', item_id=item_id)
    else:
        form = MercariListingForm()
    return render(request, 'inventory/mercari_listing_form.html', {'form': form, 'type_of_request': 'New'})

def edit_mercari_listing(request, item_id):
    item = get_item(item_id)
    mercari_listing = get_mercari_listing(item.id)
    if request.method == "POST":
        form = MercariListingForm(request.POST, instance=mercari_listing)
        if form.is_valid():
            mercari_listing = form.save(commit=False)
            mercari_listing.item = get_item(item.id)
            mercari_listing.save()
            return redirect('item_detail', mercari_listing.item.id)
    else:
        form = MercariListingForm(instance=mercari_listing)
    return render(request, 'inventory/mercari_listing_form.html', {'form': form, 'type_of_request': 'Edit'})

def delete_mercari_listing(request, item_id):
    if request.method == "POST":
        item = get_item(item_id)
        mercari_listing = get_mercari_listing(item.id)
        mercari_listing.delete()
    return redirect('item_detail', item_id)

def data_list(request):
    items = Item.objects.all()
    data =  {
        'shipping_cost': Decimal(0.0),
        'profit': Decimal(0.0),
        'cogs': Decimal(0.0),
        'fees': Decimal(0.0),
        'taxes': Decimal(0.0),
        'con_cust': Decimal(0.0),
        'net_profit': Decimal(0.0),
    }
    for item in items:
        if item.shipping_cost != None:
            data['shipping_cost'] += item.shipping_cost
        if item.profit != None:
            data['profit'] += item.profit
        if item.purchase_price != None:
            data['cogs'] += item.purchase_price
#        if item.fees != None:
#            data['fees'] += item.fees
        if item.tax != None:
            data['taxes'] += item.tax
        if item.amount_due_to_customer != None:
            data['con_cust'] += item.amount_due_to_customer
        if item.net_profit != None:
            data['net_profit'] += item.net_profit

    return render(request, 'inventory/data_list.html', {'items': items, 'data': data})

class SearchHomeView(FormView):
    template_name = 'inventory/search_home.html'
    form_class = SearchForm

class SearchResultsView(ListView):
    model = Item
    template_name = 'inventory/search_results.html'

    def get_queryset(self):
        query = self.request.GET.get('q')
        object_list = Item.objects.filter(description__icontains=query)
        return object_list

