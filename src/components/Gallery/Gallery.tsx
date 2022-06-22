import React from 'react';
import { cn } from '@bem-react/classname';

import { GalleryCard } from 'components/GalleryCard';

import { IGalleryProps } from './Gallery.types';

import './Gallery.scss';

const CnGallery = cn('gallery');

export const Gallery: React.FC<IGalleryProps> = ({
    items,
    isDesktop,
    handleActiveCategoryChange,
    handleCardDelete,
    handleMoreButtonClick,
    isMoreButtonVisible,
}) => {
    return (
        <section className={`${CnGallery()} container`}>
            <h2 className="visually-hidden">Gallery of images</h2>
            <div className={CnGallery('list')}>
                {items?.length > 0 &&
                    items.map((item) => (
                        <GalleryCard
                            key={item.id}
                            galleryItem={item}
                            isDesktop={isDesktop}
                            handleActiveCategoryChange={
                                handleActiveCategoryChange
                            }
                            handleCardDelete={handleCardDelete}
                        />
                    ))}
            </div>
            {isMoreButtonVisible && (
                <button
                    className={CnGallery('moreButton')}
                    onClick={handleMoreButtonClick}
                >
                    Load More
                </button>
            )}
        </section>
    );
};
