import { useState, useEffect  } from "react"
import axios from "axios";

export default function DatePage(){
    
    const [month, setMonth] = useState();
    const [data, setData] = useState(1);
    // const base_url = process.env.REACT_APP_BASE_URL

    useEffect(() => {
        const d = new Date();
        setMonth(d.getMonth())
        if(month==undefined){
            setMonth(d.getMonth())
        }
        fetchItems(month);
        },[]);

    function fetchItems(month){
        console.log(month)
        axios.get(`http://127.0.0.1:8000/inventory_api/data/${month}`)
        .then(response => setData(response.data))
    }

    return(
        <p>The month is {month}</p>
    )
}