import Button from "./Button";

const EnterSection = ({ secName, firstSentence, titleSec, btnURL, valueTextBtn }) => {
    return (
        <div className='enter-section'>
            <p className={`${secName}__text enter-sec-text`}>{firstSentence}</p>

            <h3 className={`${secName}__title enter-sec-title`}>{titleSec}</h3>

            <Button urlValue={btnURL} valueText={valueTextBtn} second={false} btnCard={false} thirdType={false} fourthType={false} />
        </div>
    )
}

export default EnterSection;