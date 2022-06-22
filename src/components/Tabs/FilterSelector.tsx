import React, { useCallback, useState } from 'react';
import { cn } from '@bem-react/classname';
import { Category } from 'constants/categories';
import { useCloseByClick } from 'hooks/useCloseByClick';
import { useCloseByEsc } from 'hooks/useCloseByEsc';

import { Tab } from 'components/Tab';

import './FilterSelector.scss';

interface IFilterSelectorProps {
    categories: Category[];
    activeCategory: Category | string;
    handleActiveCategoryChange: (category: Category) => void;
    isDesktop: boolean;
}

const CnSelect = cn('select');

export const FilterSelector: React.FC<IFilterSelectorProps> = ({
    categories,
    activeCategory,
    handleActiveCategoryChange,
    isDesktop,
}) => {
    const [isDropdownShown, setIsDropdownShown] = useState(true);

    const handleWindowClick = useCallback(() => {
        setIsDropdownShown((current) => !current);
    }, []);

    const handleDropdownClose = useCallback(() => {
        setIsDropdownShown(false);
    }, []);

    useCloseByClick({ isShown: isDropdownShown, cb: handleDropdownClose });
    useCloseByEsc({ isShown: isDropdownShown, cb: handleDropdownClose });

    return (
        <>
            {isDesktop ? (
                <div className="tabs container">
                    {categories.length > 0 &&
                        categories.map((category) => (
                            <Tab
                                key={category}
                                name={category}
                                isActive={category === activeCategory}
                                handleClick={handleActiveCategoryChange}
                            />
                        ))}
                </div>
            ) : (
                <div className={`${CnSelect()} container`}>
                    <div
                        className={CnSelect('window')}
                        onClick={handleWindowClick}
                    >
                        {activeCategory}
                    </div>
                    {isDropdownShown && (
                        <div className={CnSelect('dropdown')}>
                            {categories.length > 0 &&
                                categories.map((category) => (
                                    <span
                                        key={category}
                                        className={CnSelect('option', {
                                            active: category === activeCategory,
                                        })}
                                        onClick={() =>
                                            handleActiveCategoryChange(category)
                                        }
                                    >
                                        {category}
                                    </span>
                                ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};
