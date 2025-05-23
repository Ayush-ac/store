import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReservationCards from "../../data/ReservationCards";

const ReservationContacts = () => {
    return (
        <div className='reservation__cards'>
            {
                ReservationCards.map(({ id, icon, firstText, secondText }) => (
                    <div className="reservation__cards__item" key={id}>
                        <span className="reservation__cards__item__icon"><FontAwesomeIcon icon={icon} /></span>
                        <p className="reservation__cards__item__first-text">{firstText}</p>
                        <p className="reservation__cards__item__second-text">{secondText}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ReservationContacts;