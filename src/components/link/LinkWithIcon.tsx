import './LinkWithIcon.scss';
import { IconType } from '../../shared/types/IconType';
import WebIcon from "../../assets/icons/icon-web.png";
import GithubIcon from "../../assets/icons/github.webp";
import LinkedInIcon from "../../assets/icons/linkedIn2.png";

interface LinkProps {
    url: string;
    iconType: IconType;
    text: string;
}

const LinkWithIcon = ({ url, iconType, text }: LinkProps) => {
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
        default:
            iconSrc = "";
    }

    return (
        <div className='wrapper-link-with-icon'>
            <a href={url} target='_blank' rel="noopener noreferrer">
                <img src={iconSrc} alt={`${iconType}-icon`} />
                {text}
            </a>
        </div>
        
    );
}

export default LinkWithIcon