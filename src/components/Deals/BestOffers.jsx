import OfferCards from './OfferCards';
import SearchDeals from './SearchDeals'

const BestOffers = () => {
    return (
        <div className='deals__offers'>
            <div className="container">
                <div className="row">
                    <SearchDeals />
                    <OfferCards />
                </div>
            </div>
        </div>
    )
}

export default BestOffers;