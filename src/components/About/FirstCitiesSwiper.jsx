import CustomSlider from "../Global/CustomSlider";
import FirstCitiesSwiperData from "../../data/FirsCitiesSwiperData";

const FirstCitiesSwiper = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="about__first-slider">
                    <p className="about__first-slider__title">caribbean’s <span>cities & towns</span></p>
                    <CustomSlider DataArr={FirstCitiesSwiperData} />
                </div>
            </div>
        </div>
    )
}

export default FirstCitiesSwiper
