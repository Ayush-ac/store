import MainCountingIDGenerator, { insertIDIntoData } from "./MainCountingID";
import { faPhone, faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons'

const ReservationCards = [
    {
        icon: faPhone,
        firstText: "make a phone call",
        secondText: "+123 456 789 (0)"
    },
    {
        icon: faEnvelope,
        firstText: "contact us via email",
        secondText: "company@email.com"
    },
    {
        icon: faLocation,
        firstText: "visit our offices",
        secondText: "24th Street North Avenue London, UK"
    },
];

(() => {
    insertIDIntoData(MainCountingIDGenerator, ReservationCards);
})();

export default ReservationCards;