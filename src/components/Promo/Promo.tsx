import React from 'react';
import { cn } from '@bem-react/classname';

import { PageHeader } from 'components/PageHeader';

import './Promo.scss';

const CnPromo = cn('promo');

export const Promo: React.FC = () => {
    return (
        <div className={CnPromo()}>
            <PageHeader />
            <div className={CnPromo('content')}>
                <h1 className={CnPromo('title')}>Portfolio</h1>
                <span className={CnPromo('text')}>
                    Agency provides a full service range including technical
                    skills, design, business understanding.
                </span>
            </div>
        </div>
    );
};
