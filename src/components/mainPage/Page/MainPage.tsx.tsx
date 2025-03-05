import Header from "../Header/Header";
import './MainPage.scss'
import Container from "../../shared/Container/Container";
import LinkOrTextWithIcon from "../../shared/LinkOrTextWithIcon/LinkOrTextWithIcon";

const MainPage = () => {
    return(
        <div className="wrapper-main-page">
            <div className="first-row">
                <Header />
                <img src="/images/face-image.jpg" alt="my-face" />
            </div>

            <div className="second-row">
                <Container hover={true}>
                    <LinkOrTextWithIcon url="/#/projects" iconType={"project"} text="Go to my projects" isExternal={false} />
                </Container>
                <Container hover={true}>
                    <LinkOrTextWithIcon url="/#/contacts" iconType={"person"} text="Contact me" isExternal={false} />
                </Container>
            </div>
        </div>
    )
}

export default MainPage