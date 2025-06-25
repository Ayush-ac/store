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
    {
        itemName: "FAQ",
        itemURL: "#faq",    // <-- Scroll to this section
    }
];


(() => {
    insertIDIntoData(MainCountingIDGenerator, NavItems);
})();

export default NavItems;