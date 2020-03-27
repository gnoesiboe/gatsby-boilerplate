import { usePlatformOverviewContext } from './../../../context/platformOverview/platformOverviewContext';
import { useEffect } from 'react';
import { isBrowser } from '../../../utility/environmentUtilities';

export default function useScrollToLastScrollPositionOnReturnToOverview() {
    const {
        lastScrollPositionRef,
        resetLastScrollPosition,
    } = usePlatformOverviewContext();

    useEffect(() => {
        if (!isBrowser || !lastScrollPositionRef) {
            return;
        }

        const { x, y } = lastScrollPositionRef.current;

        if (x === 0 && y === 0) {
            return;
        }

        window.scroll({
            top: y,
            left: x,
            behavior: 'smooth',
        });

        resetLastScrollPosition();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
