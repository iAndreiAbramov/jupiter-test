import { Category } from './categories.types';

export interface IGalleryItem {
    id: number;
    category: Category;
    name: string;
    image: string;
    imageRetina: string;
}
