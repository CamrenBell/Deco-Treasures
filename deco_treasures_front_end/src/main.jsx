import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import ItemPage from './routes/ItemPage';
import InventoryPage from './routes/InventoryPage';
import NewItemPage from './routes/NewItemPage';
import EbayList from './routes/Ebaylist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "inventory",
    element: <InventoryPage/>,
  },
  {
    path: "inventory/:itemID",
    element: <ItemPage/>,
  },
  {
    path: "inventory/new",
    element: <NewItemPage/>
  },
  {
    path: "inventory/ebay",
    element: <EbayList/>
  }
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
