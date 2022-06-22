import React from 'react';
import { cn } from '@bem-react/classname';

import { ITabProps } from './Tab.types';

import './Tab.scss';

const CnTab = cn('tab');

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
