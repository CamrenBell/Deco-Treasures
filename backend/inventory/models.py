from django.db import models

# Create your models here.
class Item(models.Model):
    description = models.CharField(max_length=500)
    purchase_price = models.DecimalField(max_digits=10, decimal_places=2)
    sold_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    tax = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    shipping_cost = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    profit = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    amount_due_to_customer = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    net_profit = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    roi = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    date_sold = models.DateField(null=True, blank=True)
    notes = models.TextField(null=True, blank=True)

class Ebay_Listing(models.Model):
    item = models.OneToOneField(Item, on_delete=models.CASCADE, primary_key=True, related_name="ebay_listing")
    order_id = models.CharField(max_length=200)
    listed_price = models.DecimalField(max_digits=10, decimal_places=2)
    date_listed = models.DateField()
    final_value_fee = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    add_fee = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

class Amazon_Listing(models.Model):
    item = models.OneToOneField(Item, on_delete=models.CASCADE, primary_key=True, related_name="amazon_listing")
    order_id = models.CharField(max_length=200)
    listed_price = models.DecimalField(max_digits=10, decimal_places=2)
    date_listed = models.DateField()
    total_amazon_fees = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

class Poshmark_Listing(models.Model):
    item = models.OneToOneField(Item, on_delete=models.CASCADE, primary_key=True, related_name="poshmark_listing")
    order_id = models.CharField(max_length=200)
    listed_price = models.DecimalField(max_digits=10, decimal_places=2)
    date_listed = models.DateField()
    total_poshmark_fees = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

class Mercari_Listing(models.Model):
    item = models.OneToOneField(Item, on_delete=models.CASCADE, primary_key=True, related_name="mercari_listing")    
    order_id = models.CharField(max_length=200)
    listed_price = models.DecimalField(max_digits=10, decimal_places=2)
    date_listed = models.DateField()
    total_mercari_fees = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

