import DiscoverCardsData from "../../data/DiscoverCardsData";

const DiscoverCards = () => {
    return (
        <>
            {
                DiscoverCardsData.map(({ id, discoverCardNum, discoverCardDesc }) => (
                    <div className="about__discover__info__cards__one" key={id}>
                        <p className='about__discover__info__cards-number'>{discoverCardNum}</p>
                        <span>{discoverCardDesc}</span>
                    </div>
                ))
            }
        </>
    )
}

export default DiscoverCards
