const VisitMap = () => {
    return (
        <div className="visit__countries__map" id='map'>
            <iframe id="map_canvas" title='Google map'
                src="https://maps.google.com/maps?q=Mansoura&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
            </iframe>
        </div>
    )
}

export default VisitMap
