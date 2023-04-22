import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../../src/store/store'
// Определяем тип части состояния(среза/slice)
interface CounterState {
  value: boolean
}

// Определение начального состояния, используя тип
const initialState: CounterState = {
  value: false,
}

export const asidebarSlice = createSlice({
  name: 'asidebar',
  // `createSlice` выведет тип состояния из аргумента `initialState`
  initialState,
  reducers: {
    openAsidebar: (state) => {
      state.value = true;
    },
    closeAsidebar: (state) => {
      state.value = false
    },
  },
})

// Сгенерированные Создатели Действий/ action creators
export const { openAsidebar, closeAsidebar } = asidebarSlice.actions

// Весь остальной код может использовать тип `RootState`
export const selectCount = (state: RootState) => state.counter.value

export default asidebarSlice.reducer