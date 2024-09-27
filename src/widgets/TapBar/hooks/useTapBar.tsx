import { useCallback, useMemo, useReducer } from 'react';

import Shared from '../../../assets/shared.svg';
import PageUp from '../../../assets/pageUp.svg';
import Comments from '../../../assets/comments.svg';
import Heart from '../../../assets/heart.svg';

import { addComments, addFavorites, initStore, reducer } from '../../../components/store';
import { sharePage } from '../helpers/sharePage';
import { scrollToPosition } from '../helpers/scrollTo';

/**
 * Данные для панели навигации
 */
export const useTapBar = () => {
    const [state, dispatch] = useReducer(reducer, initStore);

    const addComment = useCallback(() => dispatch(addComments), []);
    const addFavorite = useCallback(() => dispatch(addFavorites), []);

	return useMemo(() => ([
        {
            id: 1,
            text: '',
            icon: {
                iconSrc: Shared,
                alt: 'Поделиться',
            },
            action: sharePage,
        },
        {
            id: 2,
            text: '',
            icon: {
                iconSrc: PageUp,
                alt: 'К началу страницы',
            },
            action: scrollToPosition,
        },
        {
            id: 3,
            text: state.comments || '',
            icon: {
                iconSrc: Comments,
                alt: 'Добавить коммент',
            },
            action: addComment,
        },
        {
            id: 3,
            text: state.favorites || '',
            icon: {
                iconSrc: Heart,
                alt: 'Добавить в избранное',
            },
            action: addFavorite,
        },
    ]), [state]);
};
