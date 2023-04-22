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

export const levelListSlice = createSlice({
  name: 'asidebar',
  // `createSlice` выведет тип состояния из аргумента `initialState`
  initialState,
  reducers: {
    openLevelList: (state) => {
      state.value = true;
    },
    closeLevelList: (state) => {
      state.value = false
    },
  },
})

// Сгенерированные Создатели Действий/ action creators
export const { openLevelList, closeLevelList } = levelListSlice.actions

// Весь остальной код может использовать тип `RootState`
export const selectCount = (state: RootState) => state.counter.value

export default levelListSlice.reducer