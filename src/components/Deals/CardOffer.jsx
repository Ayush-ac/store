import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import DealsWeeklyBestOfferData from '../../data/DealsWeeklyBestOfferData'
import Button from '../Global/Button'

const CardOffer = () => {
    return (
        <>
            {
                DealsWeeklyBestOfferData.map(({ id, offerCardImage, offerDurationText, cityName, durationInDays, durationInPlaces, offerDescription }) => (
                    <div className="deals__offers__cards__container__card" key={id}>
                        <div className="deals__offers__cards__container__card__img">
                            <img src={offerCardImage} alt="Just A Card" />
                        </div>

                        <div className="deals__offers__cards__container__card__info">
                            {
                                <>
                                    <p className='deals__offers__cards__container__card__info__duration'>* {offerDurationText}</p>

                                    <p className='deals__offers__cards__container__card__info__city'>{cityName}</p>

                                    <hr />

                                    <div className="deals__offers__cards__container__card__info__inner">
                                        <div className="deals__offers__cards__container__card__info__inner__part">
                                            <span><FontAwesomeIcon icon={durationInDays.icon} /></span>
                                            <span>{durationInDays.text}</span>
                                        </div>

                                        <div className="deals__offers__cards__container__card__info__inner__part">
                                            <span><FontAwesomeIcon icon={durationInPlaces.icon} /></span>
                                            <span>{durationInPlaces.text}</span>
                                        </div>
                                    </div>

                                    <hr />

                                    <p className='deals__offers__cards__container__card__info__desc'>{offerDescription}</p>

                                    <Button urlValue={"/about"} valueText="reserve" className="btn-url" second={false} btnCard={false} thirdType={false} fourthType={true} />
                                </>
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default CardOffer
