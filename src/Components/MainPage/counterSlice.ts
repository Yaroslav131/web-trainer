import store from './../../store/store';

import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../src/store/store'


// Определяем тип части состояния(среза/slice)
interface CounterState {
  value: number
}

// Определение начального состояния, используя тип
const initialState: CounterState = {
  value: Number(localStorage.getItem('curentExIndex')) || 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` выведет тип состояния из аргумента `initialState`
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
      localStorage.setItem('curentExIndex', `${state.value}`);
    },
    decrement: (state) => {

      state.value -= 1
      localStorage.setItem('curentExIndex', `${state.value}`);

    },
    // Использование типа PayloadAction для объявления содержимого `action.payload`
    setByAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
    reset: (state) => {
      state.value = 0;
      localStorage.setItem('curentExIndex', `${state.value}`);
    }
  },
})

// Сгенерированные Создатели Действий/ action creators
export const { increment, decrement, setByAmount, reset } = counterSlice.actions

// Весь остальной код может использовать тип `RootState`
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer