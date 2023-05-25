import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import Exercise from '../../Classes/Execirse'
import CssSelectors from "../../json-exercises/css-selectors.json";
// Определяем тип части состояния(среза/slice)
interface ExerciseState {
    value: Exercise[]
}

let storedArrStr = localStorage.getItem('exercises');
let storedArr: Exercise[];

if (storedArrStr != null) {
    storedArr = JSON.parse(storedArrStr)
}
else {
    storedArr = CssSelectors;
}
// Определение начального состояния, используя тип
const initialState: ExerciseState = {
    value: storedArr,
}

export const exercisesSlice = createSlice({
    name: 'exercises',
    // `createSlice` выведет тип состояния из аргумента `initialState`
    initialState,
    reducers: {
        // Использование типа PayloadAction для объявления содержимого `action.payload`
        setExercises: (state, action: PayloadAction<Exercise[]>) => {
            state.value = action.payload
            localStorage.setItem('exercises', JSON.stringify(state.value));
        },
        resetEx: (state) => {
            state.value = CssSelectors;
            localStorage.setItem('exercises', JSON.stringify(state.value));
        },
        setCorectAnswer: (state,action:PayloadAction<number>) => {
            state.value[action.payload].isCompleted = true;
            localStorage.setItem('exercises', JSON.stringify(state.value));
        }
    },
})

// Сгенерированные Создатели Действий/ action creators
export const { setExercises, resetEx,setCorectAnswer } = exercisesSlice.actions

// Весь остальной код может использовать тип `RootState`
export const selectCount = (state: RootState) => state.counter.value

export default exercisesSlice.reducer