import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './ArrowItem.scss';

interface ArrowItemsProps {
    title: string;
    isActive?: boolean;
}

const ArrowItem = ({ title, isActive }: ArrowItemsProps) => {
    return(
        <div className='wrapper-arrow-items'>
            {isActive !== undefined && (
                <div className={`container-arrow-item ${isActive ? 'active' : ''}`}>
                    <p className='item-icon'><FontAwesomeIcon icon={faAngleRight} /></p>
                    <p>{title}</p>
                </div>
            )}
            {isActive === undefined && (
                <div className='container-arrow-item-active-always'>
                    <p className='item-icon'><FontAwesomeIcon icon={faAngleRight} /></p>
                    <p>{title}</p>
                </div>
            )}
        </div>
    )
}

export default ArrowItem