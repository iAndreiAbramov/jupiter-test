import { Category } from 'types/categories.types';

export interface ITabProps {
    name: Category;
    isActive: boolean;
    handleClick: (category: Category) => void;
}
