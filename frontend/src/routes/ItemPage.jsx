import { useParams, useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import NavBar from '../components/nav_bar/NavBar';
import '../style/listingGrid.css'
import axios from "axios";

export default function ItemPage() {

  let { itemID } = useParams();
  const base_url = process.env.REACT_APP_BASE_URL
  const [data, setData] = useState();
  const [tmpData, setTmpData] = useState();
  const [tmpEbayListing, setTmpEbayListing] = useState({
    'item': itemID,
    "order_id": null,
    "listed_price": null,
    "date_listed": null,
    "final_value_fee": null,
    "add_fee": null
  });
  const [tmpAmazonListing, setTmpAmazonListing] = useState({
    'item': itemID,
    "order_id": null,
    "listed_price": null,
    "date_listed": null,
    "total_amazon_fees": null
  });
  const [tmpPoshmarkListing, setTmpPoshmarkListing] = useState({
    "item": itemID,
    "order_id": null,
    "listed_price": null,
    "date_listed": null,
    "total_poshmark_fees": null
  });
  const [tmpMercariListing, setTmpMercariListing] = useState({
    "item": itemID,
    "order_id": null,
    "listed_price": null,
    "date_listed": null,
    "total_mercari_fees": null
  });
  const [changed, setChanged] = useState(false);
  const navigate = useNavigate();
    
  useEffect(() => {
    axios.get(`http://18.220.241.77/inventory_api/${itemID}`)
      .then(response => {
        setData(response.data.result)
        setTmpData(response.data.result)
        if(response.data.result.ebay_listing){
          setTmpEbayListing(response.data.result.ebay_listing)
        }
        if(response.data.result.amazon_listing){
          setTmpAmazonListing(response.data.result.amazon_listing)
        }
        if(response.data.result.poshmark_listing){
          setTmpPoshmarkListing(response.data.result.poshmark_listing)
        }
        if(response.data.result.mercari_listing){setTmpMercariListing(response.data.result.mercari_listing)
        }
      })
  },[]);

  function updateItem(){
    if(tmpEbayListing['order_id'] != null){
      tmpData['ebay_listing'] = tmpEbayListing
    }else{tmpData['ebay_listing'] = null}
    if(tmpAmazonListing['order_id'] != null){
      tmpData['amazon_listing'] = tmpAmazonListing
    }else{tmpData['amazon_listing'] = null}
    if(tmpPoshmarkListing['order_id'] != null){
      tmpData['poshmark_listing'] = tmpPoshmarkListing
    }else{tmpData['poshmark_listing'] = null}
    if(tmpMercariListing['order_id'] != null){
      tmpData['mercari_listing'] = tmpMercariListing
    }else{tmpData['mercari_listing'] = null}
    
    
    
    
    axios.put(`http://18.220.241.77/inventory_api/${itemID}`, tmpData)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  function delteItem(){
    axios.delete(`http://18.220.241.77/inventory_api/${itemID}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      navigate('/inventory/')
    })
  }
    
  if(data == null){
    return(
      <div>
        <NavBar/>
      </div>
    )
  }
  return (
    <div style={{textAlign:'left'}}>
      <NavBar/>
      <p>Item ID: {data.id}</p>
      <p>Item: <input type ="text" onChange={(e) => {setChanged(true); setTmpData({...tmpData, description: e.target.value})}} value={tmpData.description}/></p>
      <p>Purchase Price: $<input type='number' onChange={(e) => {setChanged(true); setTmpData({...tmpData, purchase_price: e.target.value})}} value={tmpData.purchase_price}/></p>
      <p>Sold Price: $<input type='number' onChange={(e) => {setChanged(true); setTmpData({...tmpData, sold_price: e.target.value})}} value={tmpData.sold_price}/></p>
      <p>Tax: $<input type='number' onChange={(e) => {setChanged(true); setTmpData({...tmpData, tax: e.target.value})}} value={tmpData.tax}/></p>
      <p>Shipping Cost: $<input type='number' onChange={(e) => {setChanged(true); setTmpData({...tmpData, shipping_cost: e.target.value})}} value={tmpData.shipping_cost}/></p>
      <p>Profit: $<input type='number' onChange={(e) => {setChanged(true); setTmpData({...tmpData, profit: e.target.value})}} value={tmpData.profit}/></p>
      <p>Amount Due to Customer: $<input type='number' onChange={(e) => {setChanged(true); setTmpData({...tmpData, amount_due_to_customer: e.target.value})}} value={tmpData.amount_due_to_customer}/></p>
      <p>Net Profit: $<input type='number' onChange={(e) => {setChanged(true); setTmpData({...tmpData, net_profit: e.target.value})}} value={tmpData.net_profit}/></p>
      <p>ROI: <input type='number' onChange={(e) => {setChanged(true); setTmpData({...tmpData, roi: e.target.value})}} value={tmpData.roi}/></p>
      <p>Date Sold: <input type='date' onChange={(e) => {setChanged(true); setTmpData({...tmpData, date_sold: e.target.value})}} value={tmpData.date_sold}/></p>
      <p>Notes: <input type='text' onChange={(e) => {setChanged(true); setTmpData({...tmpData, notes: e.target.value})}} value={tmpData.notes}/></p>
      {changed ? <><button onClick={(e)=>{setTmpData({...data})}}>Cancel</button><button onClick={updateItem}>Save</button></>  : null}
      <button onClick={delteItem}>Delete Item</button>
      <div className='grid-container'>
            <div className='grid-item'>
              <h4>Ebay Listing</h4>
              <p>Ebay order id: <input type='text' onChange={(e) => {setChanged(true); setTmpEbayListing({...tmpEbayListing, order_id: e.target.value})}} value={tmpEbayListing.order_id}/></p>
              <p>Listed Price: $<input type='number' onChange={(e) => {setChanged(true); setTmpEbayListing({...tmpEbayListing, listed_price: e.target.value})}} value={tmpEbayListing.listed_price}/></p>
              <p>Date Listed: <input type='date' onChange={(e) => {setChanged(true); setTmpEbayListing({...tmpEbayListing, date_listed: e.target.value})}} value={tmpEbayListing.date_listed}/></p>
              <p>Fianl Value Fee: <input type='number' onChange={(e) => {setChanged(true); setTmpEbayListing({...tmpEbayListing, final_value_fee: e.target.value})}} value={tmpEbayListing.final_value_fee}/></p>
              <p>Add Fee: <input type='number' onChange={(e) => {setChanged(true); setTmpEbayListing({...tmpEbayListing, add_fee: e.target.value})}} value={tmpEbayListing.add_fee}/></p>
            </div>
            <div className='grid-item'>
                <h4>Amazon Listing</h4>
                <p>Amazon Order Id: <input type='text' onChange={(e) => {setChanged(true); setTmpAmazonListing({...tmpAmazonListing, order_id: e.target.value})}} value={tmpAmazonListing.order_id}/></p>
                <p>Listed Price: <input type='number' onChange={(e) => {setChanged(true); setTmpAmazonListing({...tmpAmazonListing, listed_price: e.target.value})}} value={tmpAmazonListing.listed_price}/></p>
                <p>Date Listed: <input type='date' onChange={(e) => {setChanged(true); setTmpAmazonListing({...tmpAmazonListing, date_listed: e.target.value})}} value={tmpAmazonListing.date_listed}/></p>
                <p>Total Amazon Fees: <input type='number' onChange={(e) => {setChanged(true); setTmpAmazonListing({...tmpAmazonListing, total_amazon_fees: e.target.value})}} value={tmpAmazonListing.total_amazon_fees}/></p>
            </div>
            <div className='grid-item'>
                <h4>Poshmark Listing</h4>
                <p>order_id: <input type='text' onChange={(e) => {setChanged(true); setTmpPoshmarkListing({...tmpPoshmarkListing, order_id: e.target.value})}} value={tmpPoshmarkListing.order_id}/></p>
                <p>listed_price: <input type='number' onChange={(e) => {setChanged(true); setTmpPoshmarkListing({...tmpPoshmarkListing, listed_price: e.target.value})}} value={tmpPoshmarkListing.listed_price}/></p>
                <p>date_listed: <input type='date' onChange={(e) => {setChanged(true); setTmpPoshmarkListing({...tmpPoshmarkListing, date_listed: e.target.value})}} value={tmpPoshmarkListing.date_listed}/></p>
                <p>total_poshmark_fees: <input type='number' onChange={(e) => {setChanged(true); setTmpPoshmarkListing({...tmpPoshmarkListing, total_poshmark_fees: e.target.value})}} value={tmpPoshmarkListing.total_poshmark_fees}/></p>
            </div>
            <div className='grid-item'>
                <h4>Mercari Listing</h4>
                <p>order_id: <input type='text' onChange={(e) => {setChanged(true); setTmpMercariListing({...tmpMercariListing, order_id: e.target.value})}} value={tmpMercariListing.order_id}/></p>
                <p>listed_price: <input type='number' onChange={(e) => {setChanged(true); setTmpMercariListing({...tmpMercariListing, listed_price: e.target.value})}} value={tmpMercariListing.listed_price}/></p>
                <p>date_listed: <input type='date' onChange={(e) => {setChanged(true); setTmpMercariListing({...tmpMercariListing, date_listed: e.target.value})}} value={tmpMercariListing.date_listed}/></p>
                <p>total_mercari_fees: <input type='number' onChange={(e) => {setChanged(true); setTmpMercariListing({...tmpMercariListing, total_mercari_fees: e.target.value})}} value={tmpMercariListing.total_mercari_fees}/></p>
            </div>
        </div>
    </div>
    );
  }