import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

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
        <div></div>
      )
    }
    return (
        <div>
          <h1>Deco Treasures</h1>
          <p>{data.result.description}</p>
        </div>
    );
  }