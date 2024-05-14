import { createSlice } from "@reduxjs/toolkit"
import { User } from "@/app/class/user"

const initialState = new User({
  username: '游客',
})
const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser (state, action) {
      state = {
        ...state,
        ...action.payload
      }
      return state
    }
  }
})
export const { setUser } = UserSlice.actions
export default UserSlice.reducer