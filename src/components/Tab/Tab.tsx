import React from 'react';
import { cn } from '@bem-react/classname';
import { Category } from 'constants/categories';

import './Tab.scss';

const CnTab = cn('tab');

interface ITabProps {
    name: Category;
    isActive: boolean;
    handleClick: (category: Category) => void;
}

export const Tab: React.FC<ITabProps> = ({ name, isActive, handleClick }) => {
    return (
        <div
            className={CnTab({ active: isActive })}
            onClick={() => handleClick(name)}
        >
            {name}
        </div>
    );
};
