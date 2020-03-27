import { homePath } from './../../../routing/urlGenerator';
import { isBrowser } from './../../../utility/environmentUtilities';
import { useLayoutEffect, useRef } from 'react';
import { throttle } from 'lodash';
import { useMatch } from '@reach/router';

export type ScrollPosition = {
    x: number;
    y: number;
};

const windowScrolThrottle = 300;

const createTopOfPagePosition = (): ScrollPosition => ({ x: 0, y: 0 });

const resolveCurrentScrollPosition = (): ScrollPosition => {
    if (!isBrowser) {
        return createTopOfPagePosition();
    }

    return {
        x: Math.abs(window.scrollX),
        y: Math.abs(window.scrollY),
    };
};

export default function useStoreLastScrollPosition() {
    const positionRef = useRef<ScrollPosition>(resolveCurrentScrollPosition());

    const isHomepageMatch = useMatch(homePath);

    const onWindowScroll = throttle(
        () => {
            if (!isHomepageMatch) {
                return;
            }

            positionRef.current = resolveCurrentScrollPosition();
        },
        windowScrolThrottle,
        { leading: false, trailing: true }
    );

    useLayoutEffect(() => {
        window.addEventListener('scroll', onWindowScroll);

        return () => window.removeEventListener('scroll', onWindowScroll);
    });

    const reset = () => (positionRef.current = createTopOfPagePosition());

    return { positionRef, reset };
}
