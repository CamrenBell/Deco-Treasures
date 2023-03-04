import { useState, useEffect } from "react";
import NavBar from '../components/nav_bar/NavBar';
import ItemList from '../components/ItemLink';
import axios from "axios";

export default function MercariList() {

    const [data, setData] = useState(1);
  
    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/inventory_api/mercari`)
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