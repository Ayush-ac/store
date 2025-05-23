import MainCountingIDGenerator, { insertIDIntoData } from "./MainCountingID";

const DiscoverCardsData = [
    {
        discoverCardNum: "150.640",
        discoverCardDesc: "total guests yearly"
    },
    {
        discoverCardNum: "175.000",
        discoverCardDesc: "amazing accommodations"
    },
    {
        discoverCardNum: "12.560",
        discoverCardDesc: "amazing places"
    },
    {
        discoverCardNum: "240.580",
        discoverCardDesc: "different check-ins yearly"
    },
];

(() => {
    insertIDIntoData(MainCountingIDGenerator, DiscoverCardsData);
})();

export default DiscoverCardsData;