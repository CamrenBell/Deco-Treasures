import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import NavBar from '../components/nav_bar/NavBar';
import EditItemButton from '../components/nav_bar/EditItemButton';

export default function ItemPage() {

    let { itemID } = useParams();
    const [data, setData] = useState(1);

    useEffect(() => {
      fetch(`http://127.0.0.1:8000/inventory_api/${itemID}`)
        .then(response => response.json())
        .then(json => setData(json))
    },[]);

    
    if(data.result == null){
      return(
        <div>
          <NavBar/>
        </div>
      )
    }
    return (
        <div style={{textAlign:'left'}}>
          <NavBar/>
          <p>Item: {data.result.description}</p>
          <p>Purchase Price: ${data.result.purchase_price}</p>
          <p>Sold Price: ${data.result.sold_price}</p>
          <p>Tax: ${data.result.tax}</p>
          <p>Shipping Cost: ${data.result.shipping_cost}</p>
          <p>Profit: ${data.result.profit}</p>
          <p>Amount Due to Customer: ${data.result.amount_due_to_customer}</p>
          <p>Net Profit: ${data.result.net_profit}</p>
          <p>ROI: {data.result.roi}</p>
          <p>Date Sold: {data.result.date_sold}</p>
          <p>Notes: {data.result.notes}</p>
          <EditItemButton/>
        </div>
    );
  }