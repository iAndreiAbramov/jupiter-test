import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { cn } from '@bem-react/classname';
import { categories } from 'constants/categories';
import { CARDS_INCREMENT_STEP, INITIAL_CARDS_TO_SHOW } from 'constants/common';
import { useInnerWidth } from 'hooks/useInnerWidth';
import { galleryItems } from 'mocks/gallery-items';
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
    const [cardsCounter, setCardsCounter] = useState(INITIAL_CARDS_TO_SHOW);
    const [allCards, setAllCards] = useState(galleryItems);
    const [shownCards, setShownCards] = useState(
        allCards.slice(0, cardsCounter),
    );

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
        setAllCards((current) => current.filter((item) => item.id !== id));
    }, []);

    const handleMoreButtonClick = useCallback(() => {
        setCardsCounter((current) => current + CARDS_INCREMENT_STEP);
    }, []);

    const isMoreButtonVisible = useMemo(() => {
        if (activeCategory === Category.All) {
            return shownCards.length < allCards.length;
        }
        return (
            shownCards.length <
            allCards.filter((item) => item.category === activeCategory).length
        );
    }, [shownCards, allCards, activeCategory]);

    useEffect(() => {
        if (activeCategory === Category.All) {
            setShownCards(allCards.slice(0, cardsCounter));
        } else {
            setShownCards(
                allCards
                    .filter((item) => item.category === activeCategory)
                    .slice(0, cardsCounter),
            );
        }
    }, [activeCategory, cardsCounter, allCards]);

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
                    items={shownCards}
                    isDesktop={isDesktop}
                    handleActiveCategoryChange={handleActiveCategoryChange}
                    handleCardDelete={handleCardDelete}
                    handleMoreButtonClick={handleMoreButtonClick}
                    isMoreButtonVisible={isMoreButtonVisible}
                />
            </>
        </main>
    );
};
