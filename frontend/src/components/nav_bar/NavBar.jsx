import "../../style/navbar.css"

export default function NavBar(){
  const base_url = process.env.REACT_APP_BASE_URL
    return(
        <div class="navbar">
        <a href={`http:18.220.247.14`}>Home</a>
        <div class="dropdown">
            <button class="dropbtn">Inventory
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href={`http://18.220.247.14/inventory`}>All</a>
                <a href={`http://18.220.247.14/inventory/ebay`}>Ebay</a>
                <a href={`http://18.220.247.14/inventory/amazon`}>Amazon</a>
                <a href={`http://18.220.247.14/inventory/poshmark`}>Poshmark</a>
                <a href={`http://18.220.247.14/inventory/mercari`}>Mercari</a>
            </div>
        </div>
        <a style={{float: 'right'}} href={`http://18.220.247.14/inventory/new`}>New Item</a>
        </div>
    )
}