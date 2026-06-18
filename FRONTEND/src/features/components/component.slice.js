import { createSlice } from "@reduxjs/toolkit"

const componentSlice = createSlice({
    name: "compo",
    initialState: {
        code: "",
        currentComponent: null,
        components: [],
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
        }
    }
})

export const { setCode, setComponents, setCurrentComponent , setCodeChunks } = componentSlice.actions
export default componentSlice.reducer