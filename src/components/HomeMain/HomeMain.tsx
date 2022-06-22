import React, { useCallback, useState } from 'react';
import { cn } from '@bem-react/classname';
import { categories, Category } from 'constants/categories';
import { useInnerWidth } from 'hooks/useInnerWidth';

import { FilterSelector } from 'components/Tabs';

import './HomeMain.scss';

const CnMain = cn('main');

export const HomeMain: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category | string>(
        Category.All,
    );
    const [isDesktop, setIsDesktop] = useState(false);

    useInnerWidth(setIsDesktop);

    const handleActiveCategoryChange = useCallback(
        (category: Category | string) => {
            if (activeCategory !== category) {
                setActiveCategory(category);
            }
        },
        [activeCategory],
    );

    return (
        <main className={CnMain()}>
            <>
                <FilterSelector
                    categories={categories}
                    activeCategory={activeCategory}
                    handleActiveCategoryChange={handleActiveCategoryChange}
                    isDesktop={isDesktop}
                />
            </>
        </main>
    );
};
