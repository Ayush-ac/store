import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import VisitDataCountry from '../../data/VisitDataCountry'
import Button from '../Global/Button'

const VisitCountry = () => {
    return (
        <>
            <div className="visit__countries__left">
                {
                    VisitDataCountry.map(({ id, cardImage, firstRegion, secondRegion, cardDesc, people, areaInKilo, home, dirCard }) => (
                        <div className='visit__countries__left__card' key={id}>
                            <div className='visit__countries__left__card__img'>
                                <img src={cardImage} alt='Country' />
                            </div>

                            <div className='visit__countries__left__card__info'>
                                <div className='visit__countries__left__card__info__top'>
                                    <div className='visit__countries__left__card__info__top__text'>
                                        <span className='visit__countries__left__card__info__top__text__region-1'>{firstRegion}</span>
                                        <span className='visit__countries__left__card__info__top__text__region-2'>{secondRegion}</span>
                                    </div>

                                    <Button urlValue={'/about'} valueText={'explore more'} second={true} btnCard={true} thirdType={false} fourthType={false} />
                                </div>

                                <p className='visit__countries__left__card__info__desc'>{cardDesc}</p>

                                <div className='custom-line'></div>

                                <div className='visit__countries__left__card__info__extra'>
                                    <div className='visit__countries__left__card__info__extra__people'>
                                        <span className='visit__countries__left__card__info__extra__icon'>
                                            <FontAwesomeIcon icon={people.icon} />
                                        </span>
                                        <span className='visit__countries__left__card__info__extra__num'>{people.number} Mil</span>
                                    </div>

                                    <div className='visit__countries__left__card__info__extra__area'>
                                        <span className='visit__countries__left__card__info__extra__icon'>
                                            <FontAwesomeIcon icon={areaInKilo.icon} />
                                        </span>
                                        <span className='visit__countries__left__card__info__extra__num'>{areaInKilo.number} km2</span>
                                    </div>

                                    <div className='visit__countries__left__card__info__extra__home'>
                                        <span className='visit__countries__left__card__info__extra__icon'>
                                            <FontAwesomeIcon icon={home.icon} />
                                        </span>
                                        <span className='visit__countries__left__card__info__extra__num'>${home.number}</span>
                                    </div>
                                </div>

                                <div className='custom-line'></div>

                                {
                                    <p className='visit__countries__left__card__info__link'>
                                        <Link to={dirCard.link} className="visit__countries__left__card__info__link__anchor">
                                            {dirCard.text}
                                            <FontAwesomeIcon icon={dirCard.icon} />
                                        </Link>
                                    </p>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default VisitCountry
