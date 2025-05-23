import MainCountingIDGenerator, { insertIDIntoData } from "./MainCountingID";

const LandingExplore = [
  {
    texts: [
      { itemTitle: "Partners", itemNumber: "90+" },
      { itemTitle: "Footfalls Analysed", itemNumber: "1 M+" },
      { itemTitle: "Restaurants Secured", itemNumber: "28" }
    ]
  },
  {
    texts: [
      { itemTitle: "Cameras Integrated", itemNumber: "1000+" },
      { itemTitle: "Outlets Monitored", itemNumber: "264" },
      { itemTitle: "Better Ratings", itemNumber: "58%" }
    ]
  },
  {
    texts: [
      { itemTitle: "Incident Alerts", itemNumber: "2 Lakh+" },
      { itemTitle: "Revenue Uptick", itemNumber: "46%" },
      { itemTitle: "Hygiene Adherence", itemNumber: "100%" }
    ]
  }
];

(() => {
  insertIDIntoData(MainCountingIDGenerator, LandingExplore);
})();

export default LandingExplore;
