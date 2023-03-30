import "../../style/navbar.css"

export default function NavBar(){
  // const base_url = process.env.REACT_APP_BASE_URL
    return(
        <div className="navbar">
        <a href={`http://127.0.0.1:5173/`}>Home</a>
        <div className="dropdown">
            <button className="dropbtn">Inventory
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <a href={`http://127.0.0.1:5173/inventory`}>All</a>
                <a href={`http://127.0.0.1:5173/inventory/ebay`}>Ebay</a>
                <a href={`http://127.0.0.1:5173/inventory/amazon`}>Amazon</a>
                <a href={`http://127.0.0.1:5173/inventory/poshmark`}>Poshmark</a>
                <a href={`http://127.0.0.1:5173/inventory/mercari`}>Mercari</a>
            </div>
        </div>
        <a style={{float: 'right'}} href={`http://http://127.0.0.1:5173//inventory/new`}>New Item</a>
        </div>
    )
}