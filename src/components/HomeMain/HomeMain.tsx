import React, { useCallback, useState } from 'react';
import { cn } from '@bem-react/classname';
import { categories } from 'constants/categories';
import { useGalleryFilter } from 'hooks/useGalleryFilter';
import { useInnerWidth } from 'hooks/useInnerWidth';
import { galeryItems } from 'mocks/gallery-items';
import { Category } from 'types/categories.types';

import { Gallery } from 'components/Gallery';
import { FilterSelector } from 'components/Tabs';

import './HomeMain.scss';

const CnMain = cn('main');

export const HomeMain: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>(
        Category.All,
    );
    const [isDesktop, setIsDesktop] = useState(false);
    const [galleryCards, setGalleryCards] = useState(galeryItems);

    useInnerWidth(setIsDesktop);

    const handleActiveCategoryChange = useCallback(
        (category: Category) => {
            if (activeCategory !== category) {
                setActiveCategory(category);
            }
        },
        [activeCategory],
    );

    const handleCardDelete = useCallback((id: number) => {
        setGalleryCards((current) => current.filter((item) => item.id !== id));
    }, []);

    const galleryItems = useGalleryFilter({
        items: galleryCards,
        filter: activeCategory,
    });

    return (
        <main className={CnMain()}>
            <>
                <FilterSelector
                    categories={categories}
                    activeCategory={activeCategory}
                    handleActiveCategoryChange={handleActiveCategoryChange}
                    isDesktop={isDesktop}
                />
                <Gallery
                    items={galleryItems}
                    isDesktop={isDesktop}
                    handleActiveCategoryChange={handleActiveCategoryChange}
                    handleCardDelete={handleCardDelete}
                />
            </>
        </main>
    );
};
