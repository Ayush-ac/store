import MainCountingIDGenerator, { insertIDIntoData } from "./MainCountingID";
import { faClock, faMap } from '@fortawesome/free-solid-svg-icons';

const DealsWeeklyBestOfferData = [
    {
        offerCardImage: "./assets/images/deals/deals-01.jpg",
        offerDurationText: "limited offer today",
        cityName: "glasgow city",
        durationInDays: {
            icon: faClock,
            text: "5 days"
        },
        durationInPlaces: {
            icon: faMap,
            text: "daily places"
        },
        offerDescription: "Lorem ipsum dolor sit amet dire consectetur adipiscing elit."
    },
    {
        offerCardImage: "./assets/images/deals/deals-02.jpg",
        offerDurationText: "today & tomorrow only",
        cityName: "venezia italy",
        durationInDays: {
            icon: faClock,
            text: "5 days"
        },
        durationInPlaces: {
            icon: faMap,
            text: "daily places"
        },
        offerDescription: "Lorem ipsum dolor sit amet dire consectetur adipiscing elit."
    },
    {
        offerCardImage: "./assets/images/deals/deals-03.jpg",
        offerDurationText: "limited offer today",
        cityName: "glasgow city",
        durationInDays: {
            icon: faClock,
            text: "5 days"
        },
        durationInPlaces: {
            icon: faMap,
            text: "daily places"
        },
        offerDescription: "Lorem ipsum dolor sit amet dire consectetur adipiscing elit."
    },
    {
        offerCardImage: "./assets/images/deals/deals-04.jpg",
        offerDurationText: "offer until 24th march",
        cityName: "glasgow city",
        durationInDays: {
            icon: faClock,
            text: "5 days"
        },
        durationInPlaces: {
            icon: faMap,
            text: "daily places"
        },
        offerDescription: "Lorem ipsum dolor sit amet dire consectetur adipiscing elit."
    },
];

(() => {
    insertIDIntoData(MainCountingIDGenerator, DealsWeeklyBestOfferData);
})();

export default DealsWeeklyBestOfferData;