import MainCountingIDGenerator, { insertIDIntoData } from "./MainCountingID";
import { faUser, faGlobe, faHouse, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const VisitDataCountry = [
    {
        cardImage: "./assets/images/country/country-01.jpg",
        firstRegion: "switzerland",
        secondRegion: "europe",
        cardDesc: "Woox Travel is a professional Bootstrap 5 theme HTML CSS layout for your website. You can use this layout for your commercial work.",
        people: {
            icon: faUser,
            number: "8.66"
        },
        areaInKilo: {
            icon: faGlobe,
            number: "41.290"
        },
        home: {
            icon: faHouse,
            number: "1.100.200"
        },
        dirCard: {
            link: "/",
            text: "need directions?",
            icon: faArrowRight
        }
    },
    {
        cardImage: "./assets/images/country/country-02.jpg",
        firstRegion: "caribbean",
        secondRegion: "north america",
        cardDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        people: {
            icon: faUser,
            number: "44.48"
        },
        areaInKilo: {
            icon: faGlobe,
            number: "275.400"
        },
        home: {
            icon: faHouse,
            number: "946.000"
        },
        dirCard: {
            link: "/",
            text: "need directions?",
            icon: faArrowRight
        }
    },
    {
        cardImage: "./assets/images/country/country-03.jpg",
        firstRegion: "germany",
        secondRegion: "europe",
        cardDesc: "We hope this WoOx template is useful for you, please support us a small amount of PayPal to info [at] templatemo.com for our survival. We really appreciate your contribution.",
        people: {
            icon: faUser,
            number: "67.41"
        },
        areaInKilo: {
            icon: faGlobe,
            number: "551.500"
        },
        home: {
            icon: faHouse,
            number: "425.600"
        },
        dirCard: {
            link: "/",
            text: "need directions?",
            icon: faArrowRight
        }
    },
];

(() => {
    insertIDIntoData(MainCountingIDGenerator, VisitDataCountry);
})();

export default VisitDataCountry;