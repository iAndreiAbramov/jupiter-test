import { Category } from 'types/categories.types';

export interface IFilterSelectorProps {
    categories: Category[];
    activeCategory: Category | string;
    handleActiveCategoryChange: (category: Category) => void;
    isDesktop: boolean;
}
