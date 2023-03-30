import axios from "axios";
import React from 'react'
import  { useNavigate  } from 'react-router-dom'

export default function NewItemForm(){
    const navigate = useNavigate();
    // const base_url = process.env.REACT_APP_BASE_URL

    const handleSubmit= (e) => {
        e.preventDefault();
        const data = {
            "description": e.target['description'].value,
            "purchase_price": e.target['purchase_price'].value,
            "sold_price": e.target['sold_price'].value,
            "tax": e.target['tax'].value,
            "shipping_cost": e.target['shipping_cost'].value,
            "profit": e.target['profit'].value,
            "amount_due_to_customer": e.target['amount_due_to_customer'].value,
            "net_profit": e.target['net_profit'].value,
            "roi": e.target['roi'].value,
            "notes": e.target['notes'].value
        }
        if(e.target['date_sold'].value !== ""){
            data['date_sold']=e.target['date_sold'].value
        }
        sendData(data)
        
    }
        

      const sendData= (data)=>{
        axios.post(`http://127.0.0.1:8000/inventory_api/`, data)
        .then(res => {
            console.log(res);
            console.log(res.data);
            navigate('/inventory/')
      })

      }


    return(
        <form onSubmit={e=> {handleSubmit(e)}}>
            <label>
                Item:
                <input type={'text'} name='description' required/><br/>
            </label>
            <label>
                Purchase Price:
                <input type={'number'} step='0.01' name='purchase_price' required/><br/>
            </label>
            <label>
                Sold Price:
                <input type={'number'} step='0.01' name='sold_price' /><br/>
            </label>
            <label>
                Tax:
                <input type={'number'} step='0.01' name='tax' /><br/>
            </label>
            <label>
                Shipping Cost:
                <input type={'number'} step='0.01' name='shipping_cost' /><br/>
            </label>
            <label>
                Profit:
                <input type={'number'} step='0.01' name='profit' /><br/>
            </label>
            <label>
                Amount Due to Customer:
                <input type={'number'} step='0.01' name='amount_due_to_customer' /><br/>
            </label>
            <label>
                Net Profit:
                <input type={'number'} step='0.01' name='net_profit' /><br/>
            </label>
            <label>
                ROI:
                <input type={'text'} name='roi' /><br/>
            </label>
            <label>
                Date Sold:
                <input type={'date'} name='date_sold' /><br/>
            </label>
            <label>
                Notes:
                <input type={'text'} name='notes'/><br/>
            </label>
            <input type='submit' value={'Submit'}></input>
        </form>
    )
}