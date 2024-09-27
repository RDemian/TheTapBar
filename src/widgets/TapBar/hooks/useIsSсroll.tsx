import { useEffect, useState } from 'react';

const MIN_SCROLL = 200;

/**
 * Возвращает false при прокрутке странице, true - при остановке прокрутки
 */
export const useIsSсroll = () => {
    const [isScrolling, setIsScrolling] = useState(true);

	useEffect(() => {
		const abortController = new AbortController();
		let timerId: number | null = null;
        let prevScroll = scrollY;

		window.addEventListener('scroll', () => {
            const diff = scrollY - prevScroll;
            if (diff > MIN_SCROLL) {
                setIsScrolling(false);
            }
			
			if(timerId !== null) {
				clearTimeout(timerId);        
			}
			timerId = setTimeout(function() {
				setIsScrolling(true);
                prevScroll = scrollY;
			}, 1000);
		}, {
			signal: abortController.signal,
		});

		return () => abortController.abort();
	}, []);

    return isScrolling;
};
