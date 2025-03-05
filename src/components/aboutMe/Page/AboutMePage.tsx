import { AboutMe } from '../../../common/const/AboutMe';
import SecondaryHeader from '../../shared/SecondaryHeader/SecondaryHeader';
import MenuItems from '../../shared/MenuItems/MenuItems';
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