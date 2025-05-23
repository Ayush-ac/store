import MainCountingIDGenerator, { insertIDIntoData } from "./MainCountingID";

const FirstCitiesSwiperData = [
    {
        imageURL: "./assets/images/cities/cities-01.jpg",
        imageAltText: "This is just a pic for a random city!"
    },
    {
        imageURL: "./assets/images/cities/cities-02.jpg",
        imageAltText: "This is just a pic for a random city!"
    },
    {
        imageURL: "./assets/images/cities/cities-03.jpg",
        imageAltText: "This is just a pic for a random city!"
    },
    {
        imageURL: "./assets/images/cities/cities-04.jpg",
        imageAltText: "This is just a pic for a random city!"
    },
    {
        imageURL: "./assets/images/cities/cities-05.jpg",
        imageAltText: "This is just a pic for a random city!"
    },
    {
        imageURL: "./assets/images/cities/cities-06.jpg",
        imageAltText: "This is just a pic for a random city!"
    },
    {
        imageURL: "./assets/images/cities/cities-07.jpg",
        imageAltText: "This is just a pic for a random city!"
    },
    {
        imageURL: "./assets/images/cities/cities-08.jpg",
        imageAltText: "This is just a pic for a random city!"
    },
];

(() => {
    insertIDIntoData(MainCountingIDGenerator, FirstCitiesSwiperData);
})();

export default FirstCitiesSwiperData;