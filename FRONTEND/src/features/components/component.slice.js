import { createSlice } from "@reduxjs/toolkit"

const componentSlice = createSlice({
    name: "compo",
    initialState: {
        code: "",
        currentComponent: null,
        components: []
    },
    reducers: {
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

export const { setCode, setComponents, setCurrentComponent } = componentSlice.actions
export default componentSlice.reducer