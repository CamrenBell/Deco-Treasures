## item_api/serializers.py
from rest_framework import serializers
from .models import Item, Ebay_Listing, Poshmark_Listing, Amazon_Listing, Mercari_Listing
from drf_writable_nested import UniqueFieldsMixin

class Ebay_listingSerializer(UniqueFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = Ebay_Listing
        fields = '__all__'
        extra_kwargs = {
            'item': {'validators': []},
            'item': {'required': False}
        }

class Poshmark_ListingSerializer(UniqueFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = Poshmark_Listing
        fields = '__all__'
        extra_kwargs = {
            'item': {'validators': []},
            'item': {'required': False}
        }

class Amazon_ListingSerializer(UniqueFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = Amazon_Listing
        fields = '__all__'
        extra_kwargs = {
            'item': {'validators': []},
            'item': {'required': False}
        }

class Mercari_ListingSerializer(UniqueFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = Mercari_Listing
        fields = '__all__'
        extra_kwargs = {
            'item': {'validators': []},
            'item': {'required': False}
        }

class ItemSerializer(UniqueFieldsMixin, serializers.ModelSerializer):
    ebay_listing = Ebay_listingSerializer(required=False, allow_null=True)
    poshmark_listing = Poshmark_ListingSerializer(required=False, allow_null=True)
    amazon_listing = Amazon_ListingSerializer(required=False, allow_null=True)
    mercari_listing = Mercari_ListingSerializer(required=False, allow_null=True)
    
    class Meta:
        model = Item
        fields = '__all__'
        
    def create(self, validated_data):
        ebay_listing_exists = False
        poshmark_listing_exists = False
        amazon_listing_exists = False
        mercari_listing_exists = False

        if validated_data.get('ebay_listing'):
            ebay_listing_exists = True
            ebay_listing = validated_data.pop('ebay_listing')
        if validated_data.get('poshmark_listing'):
            poshmark_listing_exists = True
            poshmark_listing = validated_data.pop('poshmark_listing')
        if validated_data.get('amazon_listing'):
            amazon_listing_exists = True
            amazon_listing = validated_data.pop('amazon_listing')
        if validated_data.get('mercari_listing'):
            mercari_listing_exists = True
            mercari_listing = validated_data.pop('mercari_listing')

        item = Item.objects.create(**validated_data)

        if ebay_listing_exists:
            Ebay_Listing.objects.create(item=item, **ebay_listing)
        if poshmark_listing_exists:
            Poshmark_Listing.objects.create(item=item, **poshmark_listing)
        if amazon_listing_exists:
            Amazon_Listing.objects.create(item=item, **amazon_listing)
        if mercari_listing_exists:
            Mercari_Listing.objects.create(item=item, **mercari_listing)

        return item

    def update(self, instance, validated_data):
        if validated_data.get('ebay_listing'):
            ebay_listing = validated_data.pop('ebay_listing')
            if Ebay_Listing.objects.filter(item=instance.id).exists():
                Ebay_Listing.objects.get(item=instance.id).delete()
            Ebay_Listing.objects.create(**ebay_listing )
        else:
            if Ebay_Listing.objects.filter(item=instance.id).exists():
                Ebay_Listing.objects.get(item=instance.id).delete()

        if validated_data.get('poshmark_listing'):
            poshmark_listing = validated_data.pop('poshmark_listing')
            if Poshmark_Listing.objects.filter(item=instance.id).exists():
                Poshmark_Listing.objects.get(item=instance.id).delete()
            Poshmark_Listing.objects.create(**poshmark_listing )
        else:
            if Poshmark_Listing.objects.filter(item=instance.id).exists():
                Poshmark_Listing.objects.get(item=instance.id).delete()

        if validated_data.get('amazon_listing'):
            amazon_listing = validated_data.pop('amazon_listing')
            if Amazon_Listing.objects.filter(item=instance.id).exists():
                Amazon_Listing.objects.get(item=instance.id).delete()
            Amazon_Listing.objects.create(**amazon_listing )
        else:
            if Amazon_Listing.objects.filter(item=instance.id).exists():
                Amazon_Listing.objects.get(item=instance.id).delete()

        if validated_data.get('mercari_listing'):
            mercari_listing = validated_data.pop('mercari_listing')
            if Mercari_Listing.objects.filter(item=instance.id).exists():
                Mercari_Listing.objects.get(item=instance.id).delete()
            Mercari_Listing.objects.create(**mercari_listing )
        else:
            if Mercari_Listing.objects.filter(item=instance.id).exists():
                Mercari_Listing.objects.get(item=instance.id).delete()

        return super(ItemSerializer, self).update(instance, validated_data)
        