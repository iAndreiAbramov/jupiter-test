import React from 'react';

import { HomeMain } from 'components/HomeMain';
import { Promo } from 'components/Promo';

export const HomePage: React.FC = () => {
    return (
        <>
            <Promo />
            <HomeMain />
        </>
    );
};
