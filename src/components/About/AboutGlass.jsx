import Button from '../Global/Button'

const AboutGlass = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="about__glass">
                        <p className="about__glass__desc">explore our country</p>

                        <div className="about__glass__line"></div>

                        <h3 className="about__glass__title">welcome to caribbean</h3>

                        <p className='about__glass__info'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uttersi labore et dolore magna aliqua is ipsum suspendisse ultrices gravida
                        </p>

                        <Button urlValue={"/about"} valueText="explore more" className="btn-url" second={true} btnCard={false} thirdType={false} fourthType={true} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutGlass
