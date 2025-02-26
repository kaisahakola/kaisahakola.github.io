import Header from "../../components/header/Header";
import './MainPage.scss'

const MainPage = () => {
    return(
        <div className="wrapper">
            <Header />
            <img src="/images/face-image.jpg" alt="my-face" />
        </div>
    )
}

export default MainPage