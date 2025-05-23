import Button from "./Button";

const FirstFooter = () => {
    return (
        <section className="first-footer" id="first-footer">
            <div className="container">
                <div className="row">
                    <div className="first-footer__left">
                        <p className="first-footer__left__title">
                            are you looking to travel?
                        </p>
                        <p className="first-footer__left__desc">
                            make a reservation by clicking the button
                        </p>
                    </div>

                    <div className="first-footer__btn">
                        <Button urlValue={"/about"} valueText="book yours now" className="btn-url" second={true} btnCard={false} thirdType={true} fourthType={false} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstFooter;