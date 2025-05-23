import LoadImage from "./assets/images//loading.svg";

const Loading = () => {
    return (
        <div className='loader'>
            <img src={LoadImage} alt="Loading ...." />
        </div>
    )
}

export default Loading
