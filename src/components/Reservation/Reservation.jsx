import EnterSection from '../Global/EnterSection'
import ReservationContacts from './ReservationContacts'
import ReservationForm from './ReservationForm'

const Reservation = () => {
    return (
        <>
            <section className='reservation' id='reservation'>
                <div className="container">
                    <div className="row">
                        <EnterSection secName="reservation" firstSentence="Book Preferred Deal Here"
                            titleSec="make your reservation" btnURL="/about" valueTextBtn="discover more" />
                    </div>

                    <ReservationContacts />
                    <ReservationForm />
                </div>
            </section>
        </>
    )
}

export default Reservation
