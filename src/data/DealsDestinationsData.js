import MainCountingIDGenerator, { insertIDIntoData } from "./MainCountingID";

const DealsDestinationsData = [
    {
        countryName: "italy"
    },
    {
        countryName: "albania"
    },
    {
        countryName: "jordan"
    },
    {
        countryName: "romania"
    },
    {
        countryName: "turkey"
    },
    {
        countryName: "tajikistan"
    },
    {
        countryName: "qatar"
    },
    {
        countryName: "netherlands"
    },
    {
        countryName: "mexico"
    },
];

(() => {
    insertIDIntoData(MainCountingIDGenerator, DealsDestinationsData);
})();

export default DealsDestinationsData;