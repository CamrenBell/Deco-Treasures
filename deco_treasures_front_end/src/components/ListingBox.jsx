export default function ListingBox(props){
    const data = props.data

    return(
        <div className='grid-container'>
            <div className='grid-item'>
                <h4>Ebay Listing</h4>
                <p>{data.ebay_listing.order_id}</p>
            </div>
            <div className='grid-item'>
                <h4>Amazon Listing</h4>
            </div>
            <div className='grid-item'>
                <h4>Poshmark Listing</h4>
            </div>
            <div className='grid-item'>
                <h4>Mercari Listing</h4>
            </div>
        </div>
    )
}