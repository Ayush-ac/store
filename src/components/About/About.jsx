import AboutGlass from './AboutGlass'
import DiscoverAbout from './DiscoverAbout'
import FirstCitiesSwiper from './FirstCitiesSwiper'
import FirstFooter from '../Global/FirstFooter'
import SecondFooter from '../Global/SecondFooter'

const About = () => {
    return (
        <section className='about' id='about'>
            <AboutGlass />
            <FirstCitiesSwiper />
            <DiscoverAbout />
            <FirstFooter />
            <SecondFooter />
        </section>
    )
}

export default About
