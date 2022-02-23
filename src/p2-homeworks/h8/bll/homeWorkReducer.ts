import { UserType } from "../HW8"

type ActionsType = ReturnType<typeof sortUpAC> | ReturnType<typeof sortDownAC> | ReturnType<typeof checkAC>

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'SORT-NAME-UP': {
            let copyState = [...state]
            copyState.sort((a, b) => a.name > b.name ? 1 : -1); 
            return copyState
        }
        case 'SORT-NAME-DOWN': {   
            return [...state.sort((a, b) => a.name < b.name ? 1 : -1)]; 
        }
        case 'CHECK-18': 
            return state.filter(ch => ch.age >= 18)
        default: return state
    }
}

export const sortUpAC = () => ({ type: 'SORT-NAME-UP'} as const)
export const sortDownAC = () => ({ type: 'SORT-NAME-DOWN'} as const)
export const checkAC = () => ({ type: 'CHECK-18'} as const)