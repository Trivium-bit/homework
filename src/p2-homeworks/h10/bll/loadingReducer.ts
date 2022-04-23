const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionsType): typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {
            ...state,
            isLoading: action.isLoading
        }
    }
        default: return state
    }
}
type ActionsType = isLoadingActionType;

type isLoadingActionType = {
    type: 'CHANGE-LOADING'
    isLoading: boolean
}


export const loadingAC = (isLoading: boolean): isLoadingActionType => ({ type: 'CHANGE-LOADING', isLoading } as const)// fix any