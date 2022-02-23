import React from 'react'
import { UserType } from '../../HW8'
import {homeWorkReducer} from '../homeWorkReducer'

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

 test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT-NAME-UP'})

    console.log(newState)
    expect(newState[0]).toStrictEqual({_id: 1, name: 'Александр', age: 66})
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT-NAME-DOWN'})
    expect(newState[0]).toStrictEqual({_id: 0, name: 'Кот', age: 3})

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'CHECK-18'})
    expect(newState).toStrictEqual([
        {_id: 1, name: 'Александр', age: 66},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55}
    ])
})
