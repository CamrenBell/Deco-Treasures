import NavBar from '../components/nav_bar/NavBar';
import NewItemForm from '../components/NewItemForm';

export default function NewItemPage() {

    return (
        <div>
            <NavBar/>
            <h1>New item</h1>
            <NewItemForm/>
        </div>
    )

}