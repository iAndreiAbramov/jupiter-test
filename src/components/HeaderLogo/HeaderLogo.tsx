import React from 'react';
import { ReactComponent as Logo } from 'svg/polygon.svg';

import './HeaderLogo.scss';

export const HeaderLogo: React.FC = () => {
    return (
        <div className="logoWrapper">
            <Logo />
            <span className="logoText">Agency</span>
        </div>
    );
};
