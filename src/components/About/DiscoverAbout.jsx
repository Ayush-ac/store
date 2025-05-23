import React from 'react'
import Button from '../Global/Button'
import DiscoverCards from './DiscoverCards'

const DiscoverAbout = () => {
    return (
        <section className="about__discover">
            <div className="container">
                <div className="row">
                    <div className="about__discover__img">
                        <img src="./assets/images/about/about-left-image.jpg" alt="About Discover" draggable={false} />
                    </div>

                    <div className="about__discover__info">
                        <h3 className="about__discover__info__title">discover more about our country</h3>

                        <p className="about__discover__info__desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </p>

                        <div className="about__discover__info__cards">
                            <DiscoverCards />
                        </div>

                        <p className="about__discover__info__explain">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </p>

                        <Button urlValue={"/"} valueText="discover more" className="btn-url"
                            second={true} btnCard={false} thirdType={false} fourthType={false} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DiscoverAbout;
