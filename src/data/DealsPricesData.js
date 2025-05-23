import MainCountingIDGenerator, { insertIDIntoData } from "./MainCountingID";

const DealsPricesData = [
    {
        priceShowing: "$100 - $250",
        priceValue: "100"
    },
    {
        priceShowing: "$250 - $500",
        priceValue: "250"
    },
    {
        priceShowing: "$500 - $1,000",
        priceValue: "500"
    },
    {
        priceShowing: "$1,000 - $2,500",
        priceValue: "1000"
    },
    {
        priceShowing: "$2,500 +",
        priceValue: "2500"
    },
];

(() => {
    insertIDIntoData(MainCountingIDGenerator, DealsPricesData);
})();

export default DealsPricesData;