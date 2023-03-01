import { useParams, useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import NavBar from '../components/nav_bar/NavBar';
import axios from "axios";

export default function ItemPage() {

    let { itemID } = useParams();
    const [data, setData] = useState();
    const [tmpData, setTmpData] = useState();
    const [changed, setChanged] = useState(false);
    const navigate = useNavigate();
    

    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/inventory_api/${itemID}`)
        .then(response => {
          setData(response.data.result)
          setTmpData(response.data.result)
        })
    },[]);

    function updateItem(){
      axios.put(`http://127.0.0.1:8000/inventory_api/${itemID}`, tmpData)
      .then(res => {
        console.log(res);
        console.log(res.data);
    })
  }

  function delteItem(){
    axios.delete(`http://127.0.0.1:8000/inventory_api/${itemID}`)
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
          <p>Date Sold: <input type='data' onChange={(e) => {setChanged(true); setTmpData({...tmpData, date_sold: e.target.value})}} value={tmpData.date_sold}/></p>
          <p>Notes: <input type='text' onChange={(e) => {setChanged(true); setTmpData({...tmpData, notes: e.target.value})}} value={tmpData.notes}/></p>
          {changed ? <><button onClick={(e)=>{setTmpData({...data})}}>Cancel</button><button onClick={updateItem}>Save</button></>  : null}
          <button onClick={delteItem}>Delete Item</button>
        </div>
    );
  }