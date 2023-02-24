import pandas as pd
import csv
import json

headers = ['description','purchase_price','sold_price','tax','shipping_cost','profit','amount_due_to_customer','net_profit','roi','date_sold','notes']
output = '[{'
row_counter = 0
colmn_counter = 0
with open('all_items.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
    for row in spamreader:
        if row_counter == 0:
            pass
        else:
            output +=   '"model":"inventory.item","pk":'
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
    print(row_counter)

f = open("datatest.txt", 'w')
f.write(output)
f.close()

        

