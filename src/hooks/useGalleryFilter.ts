import { useMemo } from 'react';
import { Category } from 'types/categories.types';
import { IGalleryItem } from 'types/gallery-items.types';

export const useGalleryFilter = ({
    filter,
    items,
}: {
    filter: Category;
    items: IGalleryItem[];
}): IGalleryItem[] => {
    return useMemo(() => {
        if (filter === Category.All) {
            return items;
        }
        return items.filter((item) => item.category === filter);
    }, [items, filter]);
};
