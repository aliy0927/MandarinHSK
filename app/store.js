
import { configureStore } from '@reduxjs/toolkit'
import QuitReducer from '@/store/QuiteSlice'
import CommunicateSlice from '@/store/CommunicateSlice'
import UserSlice from '@/store/UserSlice'
export const store = configureStore({
  reducer: {
    AIChatQuit: QuitReducer,
    Communication: CommunicateSlice,
    user: UserSlice,
  },
})
