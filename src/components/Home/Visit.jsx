import VisitCountry from './VisitCountry';
import VisitMap from './VisitMap';

const Visit = () => {

    return (
        <section className='visit' id='visit'>
            <div className="container">
                <div className="row">
                    <div className="visit__heading">
                        <h2 className="visit__heading__title">visit one of our countries now</h2>
                        <p className="visit__heading__desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>

                    <div className="visit__countries">
                        <VisitCountry />
                        <VisitMap />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Visit
