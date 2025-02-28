import './Link.scss';

interface LinkProps {
    text: string;
    url: string;
}

const Link = ({ text, url }: LinkProps) => {
    return(
        <div className='wrapper-link'>
            <a href={url} target='_blank'>{text}</a>
        </div>
    )
}

export default Link