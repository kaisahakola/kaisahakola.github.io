import { Heading } from '../../../common/const/Heading';
import './Header.scss'

const Header = () => {
    return(
        <div className="header">
            <p>{Heading.description}</p>
            <h1>{Heading.header}</h1>
            <h3>{Heading.subtitle}</h3>
        </div>
    )
}

export default Header