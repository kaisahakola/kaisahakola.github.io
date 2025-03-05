import './ImageContainer.scss';
import { ImageType } from '../../../common/types/ProjectTypes';

interface ImageProps {
    url: string;
    height: string;
    width: string;
    altText: string;
    imageType: ImageType;
}

const ImageContainer = ({ url, height, width, altText, imageType }: ImageProps) => {
    return (
        <div className='wrapper-image-container'>
            {imageType === "mobile" ? (
                <div className='mobile'>
                    <img src={url} alt={altText} height={height} width={width} />
                </div>
            ) : (
                <div className="desktop">
                    <img src={url} alt={altText} height={height} width={width} />
                </div>
            )}
        </div>
    );
}

export default ImageContainer;