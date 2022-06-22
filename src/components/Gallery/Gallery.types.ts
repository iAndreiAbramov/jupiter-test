import { Category } from 'types/categories.types';
import { IGalleryItem } from 'types/gallery-items.types';

export interface IGalleryProps {
    items: IGalleryItem[];
    isDesktop: boolean;
    handleActiveCategoryChange: (category: Category) => void;
    handleCardDelete: (id: number) => void;
}
