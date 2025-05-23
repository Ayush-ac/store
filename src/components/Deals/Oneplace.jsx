import React from 'react'
import CustomSlider from '../../components/Global/CustomSlider';

const Oneplace = () => {
    const slideData = [
        {
            id: 1,
            heading: 'Footfall Tracking',
            subtext: 'Monitor store visitor counts with accurate breakdown of gender, age-group, and timing of store visit. Staff your store, tailor store layout and turn missed opportunities into sales conversions.',
            image: 'assets/images/best/football-img.png',
        },
        {
            id: 2,
            heading: 'Store Analytics',
            subtext: 'Track Foot Traffic with Precision Accurate footfall data, excluding staff Identify engaged vs casual visitors Tailor layout for individuals',
            image: 'assets/images/best/store-img.png',
        },
        {
            id: 3,
            heading: 'Vehicle Movement Tracking',
            subtext: 'Track entry and exit of every vehicle in the warehouse. Get summary reports of vehicle-type, peak entry and exit timings, reverse movement.',
            image: 'assets/images/best/vehicle-img.png',
        },
        {
            id: 4,
            heading: 'Monitor Inventory Movement',
            subtext: 'Leverage cutting-edge AI to identify and monitor sackbags in real-time. Enhance warehouse security, reduce risks of theft and mismatch,  with unparalleled precision and real-time alerts.',
            image: 'assets/images/best/monitor-img.png',
        },
        {
            id: 5,
            heading: 'Streamline Kitchen Operations',
            subtext: 'Peek into your store remotely from any location to know the real status with live snapshots, updated every minute.',
            image: 'assets/images/best/streamline-img.png',
        },
        {
            id: 6,
            heading: 'Live Footage',
            subtext: 'Get accurate reports and live alerts of incidents of Hairnet Breach by store staff, cross-contamination between veg and non-veg food, delays in order pickup, and extended waiting time for diners.',
            image: 'assets/images/best/footage-img.png',
        },
    ];
    return (
        <section  className='pt-0 pb-5 pt-lg-0'  id='Oneplace'>
        <div className="container-fluid">
            <div  className='oneplace m-auto'>
                <div className="row">
                    <div className="col-lg-12">
                    <div className="text-center mb-5">
                    <h2 className="subtitle sub-effort">Explore StorePulse Dashboard</h2>
                    <h1 className="title storepulseworks-title ">Manage it all in one place</h1>
                </div>
                        <div className='Oneplace-slider'>
                              <CustomSlider DataArr={slideData} />
                        </div>
                    </div>
              </div>
                 </div>
        </div>
</section>
    )
}

export default Oneplace;
