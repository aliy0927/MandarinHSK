import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: false,
}
const QuitSlice = createSlice({
  name: 'AIChatQuit',
  initialState,
  reducers: {
    transState: (state) => {
      state.value = !state.value
    }
  },
})
export const { transState } = QuitSlice.actions
export default QuitSlice.reducer