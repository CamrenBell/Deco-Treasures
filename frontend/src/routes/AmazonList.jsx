import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from '../components/nav_bar/NavBar';
import ItemList from '../components/ItemLink';
import axios from "axios";

export default function AmazonList() {

    const [data, setData] = useState(1);
    // const base_url = process.env.REACT_APP_BASE_URL
  
    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/inventory_api/amazon`)
        .then(response => setData(response.data))
      },[]);
  
  
      if(data.result == null){
        return(
          <div>
            <NavBar/>
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