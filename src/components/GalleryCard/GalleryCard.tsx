import React, { useCallback, useState } from 'react';
import { cn } from '@bem-react/classname';
import { useCardRemoveByDel } from 'hooks/useCardRemoveByDel';

import { IGalleryCardProps } from './GalleryCard.types';

import './GalleryCard.scss';

const CnCard = cn('card');

export const GalleryCard: React.FC<IGalleryCardProps> = ({
    galleryItem,
    handleActiveCategoryChange,
    isDesktop,
    handleCardDelete,
}) => {
    const { category, name, image, imageRetina, id } = galleryItem;
    const [isSelected, setIsSelected] = useState(false);

    useCardRemoveByDel({ id, cb: handleCardDelete, isSelected });

    const handleCardClick = useCallback(() => {
        if (isDesktop) {
            setIsSelected((current) => !current);
        }
    }, [isDesktop]);

    return (
        <article className={CnCard({ selected: isSelected })}>
            <div className={CnCard('imageWrapper')} onClick={handleCardClick}>
                <img
                    src={image}
                    srcSet={`${image} 1x, ${imageRetina} 2x`}
                    alt="Gallery item"
                    width="370"
                    height="416"
                />
            </div>
            <div className={CnCard('infoWrapper')}>
                <button
                    className={CnCard('button')}
                    onClick={() => handleActiveCategoryChange(category)}
                >
                    {category}
                </button>
                <h3 className={CnCard('title')}>{name}</h3>
            </div>
        </article>
    );
};
