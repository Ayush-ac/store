import MainCountingIDGenerator, { insertIDIntoData } from "./MainCountingID";

const NavItems = [
    {
        itemName: "Our Solutions",
        itemURL: "#solutions",  
    },
    {
        itemName: "Industries",
        itemURL: "#industries", 
    },
    // {
    //     itemName: "Our Pricing",
    //     itemURL: "#pricing",    // <-- Scroll to this section
    // }
];


(() => {
    insertIDIntoData(MainCountingIDGenerator, NavItems);
})();

export default NavItems;