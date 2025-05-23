import DealsDestinationsData from '../../data/DealsDestinationsData'
import Button from '../Global/Button'

const ReservationEntries = () => {
    return (
        <>
            <div className="reservation__main__contact">
                <h3 className="reservation__main__contact__title">
                    make your <span>reservation</span> through this <span>form</span>
                </h3>

                <form className="reservation__main__contact__form" autoComplete='off'>
                    <div className="container">
                        <div className="row">
                            <div className="reservation__main__contact__form__input-container">
                                <label htmlFor="your-first-name">your first name</label>
                                <input type="text" name="your-first-name" id="your-first-name" placeholder='ex. john doe' />
                            </div>

                            <div className="reservation__main__contact__form__input-container">
                                <label htmlFor="your-second-name">your second name</label>
                                <input type="text" name="your-second-name" id="your-second-name" placeholder='ex. john doe' />
                            </div>

                            <div className="reservation__main__contact__form__input-container">
                                <label htmlFor="your-phone">your phone number</label>
                                <input type="text" name="your-phone" id="your-phone" placeholder='ex. +xxxx xxx xxxx' />
                            </div>

                            <div className="reservation__main__contact__form__input-container">
                                <label htmlFor="num-guest">number of guests</label>
                                <input type="number" name="num-guest" id="num-guest" placeholder='ex. 1, 2, ..' min={1} max={15} />
                            </div>

                            <div className="reservation__main__contact__form__input-container">
                                <label htmlFor="check-date">check in date</label>
                                <input type="date" name="check-date" id="check-date" placeholder='mm/dd/yyyy' />
                            </div>

                            <div className="reservation__main__contact__form__input-container">
                                <label htmlFor="your-destination">choose your destination</label>
                                <select name="your-destination" id="your-destination">
                                    {
                                        DealsDestinationsData.map(({ id, countryName }) => (
                                            <option key={id} value={countryName}>
                                                {`${countryName.charAt(0).toUpperCase()}${countryName.slice(1)}`}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>

                            <Button urlValue={"/"} valueText={"submit"} second={false} btnCard={false} thirdType={false} fourthType={true} />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ReservationEntries
