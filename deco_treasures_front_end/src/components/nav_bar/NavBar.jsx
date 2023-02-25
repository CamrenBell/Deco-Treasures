import "../../style/navbar.css"

export default function NavBar() {
    return (
        <div className='NavBar'>
            <ul className='NavBar'>
                <li className='NavBar'><a href="http://127.0.0.1:5173/" id='NavBar'>Home</a></li>
                <li className='NavBar'><a href="http://127.0.0.1:5173/inventory" id='NavBar'>Inventory</a></li>
            </ul> 
        </div>
    );
  }