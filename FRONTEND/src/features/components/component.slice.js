import { createSlice } from "@reduxjs/toolkit"

const componentSlice = createSlice({
    name: "compo",
    initialState: {
        code: "",
        currentComponent: null,
        components: [],
        webBuilder: false
    },
    reducers: {
        setCodeChunks: (state, { payload }) => {
            state.code += payload
        },
        setCode: (state, { payload }) => {
            state.code = payload
        },
        setComponents: (state, { payload }) => {
            state.components = payload
        },
        setCurrentComponent: (state, { payload }) => {
            state.currentComponent = payload
        },
        setWebBuilder: (state) => {
            state.webBuilder = !state.webBuilder
        }
    }
})

export const { setCode, setComponents, setCurrentComponent, setCodeChunks , setWebBuilder } = componentSlice.actions
export default componentSlice.reducer