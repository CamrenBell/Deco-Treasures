import pandas as pd
import csv
import json

def listing_formater ():
    
    with open('ebay.csv', newline='') as csvfile:
        headers = [
            'order_id',	'listed_price',	'date_listed',	'final_value_fee',	'add_fee'
        ]
        output = '[{'
        row_counter = 0
        colmn_counter = 0
        spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
        for row in spamreader:
            if row_counter == 0:
                pass
            else:
                output +=   '"model":"inventory.ebay_listing","pk":'
                output +=   str(row_counter)
                output +=   ',"fields":{'
                colmn_counter = 0
                for column in row:
                    output += '"'
                    output += headers[colmn_counter]
                    output += '":"'
                    output += column
                    output += '",'
                    colmn_counter += 1
                output += '}},{'
            row_counter += 1

    with open('amazon.csv', newline='') as csvfile:
        headers = [
        'order_id',	'listed_price',	'date_listed',	'total_amazon_fees'
        ]
        row_counter = 257
        colmn_counter = 0
        spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
        for row in spamreader:
            if row_counter == 257:
                pass
            else:
                output +=   '"model":"inventory.amazon_listing","pk":'
                output +=   str(row_counter)
                output +=   ',"fields":{'
                colmn_counter = 0
                for column in row:
                    output += '"'
                    output += headers[colmn_counter]
                    output += '":"'
                    output += column
                    output += '",'
                    colmn_counter += 1
                output += '}},{'
            row_counter += 1

    with open('poshmark.csv', newline='') as csvfile:
        headers = [
        'order_id',	'listed_price',	'date_listed',	'total_poshmark_fees'
        ]
        row_counter = 273
        colmn_counter = 0
        spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
        for row in spamreader:
            if row_counter == 273:
                pass
            else:
                output +=   '"model":"inventory.poshmark_listing","pk":'
                output +=   str(row_counter)
                output +=   ',"fields":{'
                colmn_counter = 0
                for column in row:
                    output += '"'
                    output += headers[colmn_counter]
                    output += '":"'
                    output += column
                    output += '",'
                    colmn_counter += 1
                output += '}},{'
            row_counter += 1

    with open('mercari.csv', newline='') as csvfile:
        headers = [
        'order_id',	'listed_price',	'date_listed',	'total_mercari_fees'
        ]
        row_counter = 287
        colmn_counter = 0
        spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
        for row in spamreader:
            if row_counter == 287:
                pass
            else:
                output +=   '"model":"inventory.mercari_listing","pk":'
                output +=   str(row_counter)
                output +=   ',"fields":{'
                colmn_counter = 0
                for column in row:
                    output += '"'
                    output += headers[colmn_counter]
                    output += '":"'
                    output += column
                    output += '",'
                    colmn_counter += 1
                output += '}},{'
            row_counter += 1
    output = output[:-2]
    output += ']'
    print (output)
    return output


output = listing_formater()
f = open("listing_data.txt", 'w')
f.write(output)
f.close()
