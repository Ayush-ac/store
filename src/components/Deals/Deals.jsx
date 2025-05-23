import React from 'react'
import EnterSection from '../Global/EnterSection'
import SecondFooter from '../Global/SecondFooter'
import BestOffers from './BestOffers'

const Deals = () => {
    return (
        <section className='deals' id='deals'>
            <div className="container">
                <div className="row">
                    <EnterSection secName="deals" firstSentence="discover our weekly offers"
                        titleSec="amazing prices & more" btnURL="/about" valueTextBtn="discover more" />
                </div>
            </div>

            <BestOffers />
            <SecondFooter />
        </section>
    )
}

export default Deals;
