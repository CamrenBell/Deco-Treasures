import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from '../components/nav_bar/NavBar';
import ItemList from '../components/ItemLink';
import axios from "axios";

export default function EbayList() {

    const [data, setData] = useState(1);
  
    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/inventory_api/ebay`)
        .then(response => setData(response.data))
      },[]);
  
  
      if(data.result == null){
        return(
          <div>
            <h1>Deco Treasures</h1>
            <p>InventoryPage</p>
          </div>
        )
      }
      return (
        <div>
          <NavBar/>
          {
            Object.entries(data.result)
            .map(([key, value]) => <ItemList value={value}/>)
          }
        </div>
        );
    }