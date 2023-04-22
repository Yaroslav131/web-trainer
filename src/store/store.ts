import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../Components/MainPage/counterSlice'
import exercisesSlice from '../../src/Components/MainPage/exercisesSlice'
import asidebar from '../Components/MainPage/Sidebar/asidebarSlice'
import levelList from '../Components/MainPage/Sidebar/levelListSlice'

 const store = configureStore({
    reducer: {
        counter: counterSlice,
        exercises: exercisesSlice,
        asidebar: asidebar,
        levelList: levelList
    }
})

export type RootState = ReturnType<typeof store.getState>
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;