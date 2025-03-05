import './Link.scss';

interface LinkProps {
    text: string;
    url: string;
    isExternal?: boolean;
}

const Link = ({ text, url, isExternal }: LinkProps) => {
    return(
        <div className='wrapper-link'>
            <a href={url} target={isExternal ? '_blank' : ''}>{text}</a>
        </div>
    )
}

export default Link