import { useParams } from 'react-router-dom';
import React, {useState} from 'react';

export default function ItemPage() {

    let { itemID } = useParams();
    const [data, setData] = useState(1);

    fetch(`http://127.0.0.1:8000/inventory_api/${itemID}`)
        .then(response => response.json())
        .then(data => setData(data))

    return (
        <div>
          <h1>Deco Treasures</h1>
          <p>{data}</p>
        </div>
    );
  }