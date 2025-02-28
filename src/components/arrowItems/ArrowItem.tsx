import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './ArrowItem.scss';

interface ArrowItemsProps {
    title: string;
    isActive?: boolean;
}

const ArrowItem = ({ title, isActive }: ArrowItemsProps) => {
    return(
        <div>
            {isActive !== undefined && (
                <div className={`wrapper-arrow-item ${isActive ? 'active' : ''}`}>
                    <p className='item-icon'><FontAwesomeIcon icon={faAngleRight} /></p>
                    <p>{title}</p>
                </div>
            )}
            {isActive === undefined && (
                <div className='wrapper-arrow-item-active-always'>
                    <p className='item-icon'><FontAwesomeIcon icon={faAngleRight} /></p>
                    <p>{title}</p>
                </div>
            )}
        </div>
    )
}

export default ArrowItem