import { useEffect } from 'react';

export const useCardRemoveByDel = ({
    id,
    cb,
    isSelected,
}: {
    id: number;
    cb: (id: number) => void;
    isSelected: boolean;
}): void => {
    useEffect(() => {
        const handleDelPress = (evt: KeyboardEvent): void => {
            if (evt.key === 'Delete') {
                cb(id);
            }
        };

        if (isSelected) {
            window.addEventListener('keydown', handleDelPress);
        }

        return () => {
            window.removeEventListener('keydown', handleDelPress);
        };
    }, [cb, id, isSelected]);
};
