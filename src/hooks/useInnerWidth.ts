import { Dispatch, SetStateAction, useEffect } from 'react';
import { DESKTOP_START_WIDTH_PX } from 'constants/common';

export const useInnerWidth = (cb: Dispatch<SetStateAction<boolean>>): void => {
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= DESKTOP_START_WIDTH_PX) {
                cb(true);
            } else {
                cb(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [cb]);
};
