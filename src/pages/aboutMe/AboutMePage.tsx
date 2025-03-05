import { AboutMe } from '../../shared/const/AboutMe';
import SecondaryHeader from '../../components/secondaryHeader/SecondaryHeader';
import MenuItems from '../../components/menuItems/MenuItems';
import "./AboutMePage.scss";

const AboutMePage = () => {

    const items = {
        'Description': [...AboutMe.description], 
        'Education': [...AboutMe.education], 
        'Work Experience': [...AboutMe.workExperience]
    }

    return(
        <div className="wrapper-about-me-page">
            <SecondaryHeader title={AboutMe.title}/>
            <MenuItems items={items} />
        </div>
    )
}

export default AboutMePage