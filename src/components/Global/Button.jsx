import { Link } from "react-router-dom";

const Button = ({ urlValue, valueText, second, btnCard, thirdType, fourthType }) => {
    return (
        <>
            <Link className={`btn-url ${second ? "second " : ""}${btnCard ? "btn-card" : ""}${thirdType ? "third" : ""}${fourthType ? "fourth" : ""}`}
                to={urlValue} href="#">{valueText}</Link>
        </>
    )
}

export default Button
