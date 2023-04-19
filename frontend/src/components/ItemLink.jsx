import React, {use} from "react";
import '../style/InventoryPage.css'
export default function ItemList(value) {
    // const base_url = process.env.REACT_APP_BASE_URL
    return(
        <div>
            <ul>
                <li>
                    <a href={`http://127.0.0.1:5173/inventory/${value.value.id}`} >{value.value.id}: {value.value.description}</a>
                </li>
            </ul>
        </div>
    )

}
