const initState = {
    themes: "dark"
};

export const themeReducer = (state = initState, action: ActionsType): typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {
                ...state,
                themes: action.theme
            }
        }
        default: return state;
    }
};

type ActionsType = isChangeThemeActionType

type isChangeThemeActionType = {
    type: 'CHANGE-THEME'
    theme: string
}
export const changeThemeAC = (theme: string): isChangeThemeActionType => ({ type: 'CHANGE-THEME', theme } as const); // fix any