export interface IAction {
    type: string,
}

export interface IStore {
    comments: number,
    favorites: number,
}

export const initStore: IStore = {
    comments: 0,
    favorites: 0,
};

const enum ActionTypes {
    'ADD_COMMENTS' = 'ADD_COMMENTS',
    'ADD_FAVORITES' = 'ADD_FAVORITES',
}

export const addComments = { type: ActionTypes.ADD_COMMENTS };
export const addFavorites = { type: ActionTypes.ADD_FAVORITES };

export const reducer = (state: IStore, action: IAction): IStore => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, comments: state.comments + 1 };
        case ActionTypes.ADD_FAVORITES:
            return { ...state, favorites: state.favorites + 1 };
        default:
            return state;
    }
};
