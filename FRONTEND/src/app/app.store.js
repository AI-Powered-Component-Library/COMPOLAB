import { configureStore } from "@reduxjs/toolkit";
import componentSlice from "../features/components/component.slice"

const store = configureStore({
    reducer: {
        component: componentSlice,
    }
})

export default store;