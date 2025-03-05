import './LinkWithIcon.scss';
import { IconType } from '../../shared/types/IconType';
import WebIcon from "../../assets/icons/icon-web.png";
import GithubIcon from "../../assets/icons/github.webp";
import LinkedInIcon from "../../assets/icons/linkedIn2.png";
import EmailIcon from "../../assets/icons/emailIcon.webp";

interface LinkProps {
    url?: string;
    text?: string;
    iconType: IconType;
}

const LinkOrTextWithIcon = ({ url, text, iconType}: LinkProps) => {
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
        default:
            iconSrc = "";
    }

    return (
        <div>
            {url ? (
                <div className='wrapper-link-with-icon'>
                    <a href={url} target='_blank' rel="noopener noreferrer">
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