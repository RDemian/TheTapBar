import { useEffect, useState } from 'react';

const MIN_SCROLL = 200;

/**
 * Возвращает true при прокрутке страницы вниз, false - при остановке прокрутки
 */
export const useIsBottomSсroll = () => {
    const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		const abortController = new AbortController();
		let timerId: number | null = null;
        let lastScroll = scrollY;
		let prevScroll = scrollY;

		window.addEventListener('scroll', () => {
            if (scrollY < lastScroll) {
				prevScroll = scrollY;
			} else {
				const diff = scrollY - prevScroll;
				
				if (diff > MIN_SCROLL) {
					setIsScrolling(true);
				}
				
				if(timerId !== null) {
					clearTimeout(timerId);        
				}

				timerId = setTimeout(function() {
					setIsScrolling(false);
					prevScroll = scrollY;
				}, 1000);
			}

			lastScroll = scrollY;
		}, {
			signal: abortController.signal,
		});

		return () => abortController.abort();
	}, []);

    return isScrolling;
};
