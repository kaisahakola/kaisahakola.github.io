import Header from "../Header/Header";
import './MainPage.scss'

const MainPage = () => {
    return(
        <div className="wrapper-main-page">
            <Header />
            <img src="/images/face-image.jpg" alt="my-face" />
        </div>
    )
}

export default MainPage