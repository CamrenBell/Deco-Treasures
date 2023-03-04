import "../../style/navbar.css"

export default function NavBar(){
    return(
        <div class="navbar">
        <a href="http://127.0.0.1:5173/">Home</a>
        <div class="dropdown">
            <button class="dropbtn">Inventory
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="http://127.0.0.1:5173/inventory">All</a>
                <a href="http://127.0.0.1:5173/inventory/ebay">Ebay</a>
            </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Dropdown
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div>
        <a style={{float: 'right'}} href="http://127.0.0.1:5173/inventory/new">New Item</a>
        </div>
      </div> 
    )
}