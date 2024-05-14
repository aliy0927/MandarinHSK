import { createAction, createSlice } from '@reduxjs/toolkit'
const initialState = {
  baseURL: "",

}
const post = createAction("communicate/post")
const get = createAction("communicate/get")
const setbaseURL = createAction("communicate/setBaseURL")
const CommunicateSlice = createSlice({
  name: 'communication',
  initialState,
  reducers: {
    setBaseURL: (state, action) => {
      state.baseURL = action.payload
    },
    // post: async (state, path, message, action) => {//传入要发送的消息
    //   const { body, header } = message
    //   fetch(state.baseURL + path, {
    //     method: 'POST',
    //     headers: {
    //       ...header,

    //     },
    //     body: message
    //   })
    // }
  },
})
export const { setBaseURL } = CommunicateSlice.actions
export default CommunicateSlice.reducer