const ReservationMap = () => {
    return (
        <>
            <div className="reservation__main__map" id='map2'>
                <iframe id="map_canvas2" title='Google map'
                    src="https://maps.google.com/maps?q=Mansoura&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                </iframe>
            </div>
        </>
    )
}

export default ReservationMap
