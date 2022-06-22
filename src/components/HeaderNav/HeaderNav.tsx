import React from 'react';
import { cn } from '@bem-react/classname';

import './HeaderNav.scss';

const CnHeaderNav = cn('headerNav');

export const HeaderNav: React.FC = () => {
    return (
        <nav className={CnHeaderNav()}>
            <ul className={CnHeaderNav('list')}>
                <li className={CnHeaderNav('item')}>
                    <a className={CnHeaderNav('link')} href="#">
                        About
                    </a>
                </li>
                <li className={CnHeaderNav('item')}>
                    <a className={CnHeaderNav('link')} href="#">
                        Services
                    </a>
                </li>
                <li className={CnHeaderNav('item')}>
                    <a className={CnHeaderNav('link')} href="#">
                        Pricing
                    </a>
                </li>
                <li className={CnHeaderNav('item')}>
                    <a className={CnHeaderNav('link')} href="#">
                        Blog
                    </a>
                </li>
            </ul>
        </nav>
    );
};
