import './MenuItems.scss';
import { useState } from 'react';
import ArrowItems from '../arrowItems/ArrowItem';

interface Props {
    items: Record<string, string[]>;
};

const MenuItems = ({ items }: Props) => {
    const [selectedText, setSelectedText] = useState<string[] | null>(items['Description']);
    const [activeItem, setActiveItem] = useState('Description');

    const openText = (title: string, text: string[]) => {
        setSelectedText(text);
        setActiveItem(title)
    }

    return (
        <div className="wrapper-menu-items">
            <div className='item-titles'>
                {Object.entries(items).map(([title, text], index) => (
                    <div
                        key={index} 
                        className={`item ${activeItem === title ? 'active' : ''}`} 
                        onClick={() => openText(title, text)}
                    >
                        <ArrowItems title={title} isActive={activeItem === title} />
                    </div>
                ))}
            </div>
            
            <div className="item-content">
                {selectedText && selectedText.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    )
}

export default MenuItems
