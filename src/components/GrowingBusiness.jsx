import React from 'react';
// import animtion_vid from '../../\src\assets\images\vedios\disvid.MP4';

const GrowingBusiness = () => {
    return (
        <section className='growing-section hide-on-mobile'>
            <div className="container-fluid text-center">
                <div className='growing '>

                   
                   <div className='growingButton'>
                   <h2 className="mb-4 fw-bold text-primary">Let's Start <span className="text-dark">Growing Your Business.</span></h2>
                   <button className="btn btn-primary mb-5 px-4 py-2 fs-5 shadow">Get started</button>
                   </div>
    

                    {/* Centered Video */}
                    <div className="">
                        <video
                            autoPlay
                            muted
                            playsInline
                            
                        >
                            {/* <source src={animtion_vid} type="video/mp4" /> */}
                            Your browser does not support the video tag.
                        </video>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GrowingBusiness;
