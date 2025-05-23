import React from 'react'
import DealsDestinationsData from '../../data/DealsDestinationsData'
import DealsPricesData from '../../data/DealsPricesData'
import Button from '../Global/Button'

const SearchDeals = () => {
    return (
        <div className='deals__offers__search'>
            <form className="deals__offers__search__form">
                <span className="deals__offers__search__form__title">sort deals by:</span>

                <select name="destinations-countries" id="destinations-countries">
                    {
                        DealsDestinationsData.map(({ id, countryName }) => (
                            <option key={id} value={countryName}>{countryName}</option>
                        ))
                    }
                </select>

                <select name="destinations-prices" id="destinations-prices">
                    {
                        DealsPricesData.map(({ id, priceValue, priceShowing }) => (
                            <option key={id} value={priceValue}>{priceShowing}</option>
                        ))
                    }
                </select>

                <Button urlValue={"/about"} valueText="search result"
                    className="btn-url" second={true} btnCard={false} thirdType={true} fourthType={false} />
            </form>
        </div>
    )
}

export default SearchDeals
