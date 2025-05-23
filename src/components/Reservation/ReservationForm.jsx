import ReservationEntries from './ReservationEntries'
import ReservationMap from './ReservationMap'

const ReservationForm = () => {
    return (
        <div className="container">
            <div className="row">
                <div className='reservation__main'>
                    <ReservationMap />
                    <ReservationEntries />
                </div>
            </div>
        </div>
    )
}

export default ReservationForm
