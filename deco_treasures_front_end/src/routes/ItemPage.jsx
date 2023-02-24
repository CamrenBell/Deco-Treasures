import { useParams } from 'react-router-dom';

export default function ItemPage() {

    let { itemID } = useParams();

    return (
        <div>
          <h1>Deco Treasures</h1>
          <p>{itemID}</p>
        </div>
    );
  }