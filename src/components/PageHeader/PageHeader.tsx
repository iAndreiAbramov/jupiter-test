import React from 'react';
import { cn } from '@bem-react/classname';

import { HeaderLogo } from 'components/HeaderLogo';
import { HeaderNav } from 'components/HeaderNav';

import './PageHeader.scss';

const CnHeader = cn('pageHeader');

export const PageHeader: React.FC = () => {
    return (
        <header className={`${CnHeader()} container`}>
            <HeaderLogo />
            <HeaderNav />
            <button className={CnHeader('button')}>Contact</button>
        </header>
    );
};
