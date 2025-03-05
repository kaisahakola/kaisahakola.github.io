import './LinkWithIcon.scss';
import { IconType } from '../../../common/types/IconType';
import WebIcon from "../../../assets/icons/icon-web.png";
import GithubIcon from "../../../assets/icons/github.webp";
import LinkedInIcon from "../../../assets/icons/linkedIn2.png";
import EmailIcon from "../../../assets/icons/emailIcon.webp";
import ProjectIcon from "../../../assets/icons/project-icon.png";
import PersonIcon from "../../../assets/icons/person-icon.png";

interface LinkProps {
    url?: string;
    text?: string;
    iconType: IconType;
    isExternal?: boolean;
}

const LinkOrTextWithIcon = ({ url, text, iconType, isExternal}: LinkProps) => {
    let iconSrc;

    switch (iconType) {
        case "web":
            iconSrc = WebIcon;
            break;
        case "github":
            iconSrc = GithubIcon;
            break;
        case "linkedin":
            iconSrc = LinkedInIcon;
            break;
        case "email":
            iconSrc = EmailIcon;
            break;
        case "project":
            iconSrc = ProjectIcon;
            break;
        case "person":
            iconSrc = PersonIcon;
            break
        default:
            iconSrc = "";
    }

    return (
        <div>
            {url ? (
                <div className='wrapper-link-with-icon'>
                    <a href={url} target={isExternal ? '_blank' : ''} rel="noopener noreferrer">
                        <img src={iconSrc} alt={`${iconType}-icon`} />
                        {text}
                    </a>
                </div>
            ) : (
                <div className='wrapper-text-with-icon'>
                    <img src={iconSrc} alt={`${iconType}-icon`} />
                    {text}
                </div>
            )}
        </div>
    );
}

export default LinkOrTextWithIcon