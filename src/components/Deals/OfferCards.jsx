import CardOffer from "./CardOffer"

const OfferCards = () => {
    return (
        <div className="deals__offers__cards">
            <p className="deals__offers__cards__title">best weekly offers in each city</p>
            <p className="deals__offers__cards__desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>

            <div className="deals__offers__cards__container">
                <CardOffer />
            </div>
        </div>
    )
}

export default OfferCards
