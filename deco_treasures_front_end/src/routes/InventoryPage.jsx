import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from '../components/nav_bar/NavBar';
import ItemList from '../components/nav_bar/ItemLink';

export default function InventoryPage() {

  const [data, setData] = useState(1);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/inventory_api/`)
      .then(response => response.json())
      .then(json => setData(json))
  },[]);


    if(data.result ==null){
      return(
        <div>
          <h1>Deco Treasures</h1>
          <p>InventoryPage</p>
        </div>
      )
    }
    console.log(typeof data.result)
    console.log(data.result)
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