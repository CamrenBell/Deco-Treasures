import "../../style/navbar.css"

export default function NavBar() {
    return (
        <div className='NavBar'>
            <ul className='NavBar'>
                <li className='NavBar'><a href="http://127.0.0.1:5173/">Home</a></li>
                <li className='NavBar'><a href="http://127.0.0.1:5173/inventory">Inventory</a></li>
                <li className='NavBar' style={{float: 'right'}}><a href="http://127.0.0.1:5173/inventory/new">New Item</a></li>
            </ul> 
        </div>
    );
  }