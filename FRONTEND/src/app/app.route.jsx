import { createBrowserRouter } from "react-router-dom"
import Login from "../features/auth/pages/Login"
import Register from "../features/auth/pages/Register"
import App from "./App"
import Home from "./Home"
import Generate from "../features/ai/Generate"
import Pricing from "../features/payment/pages/Pricing"
import Checkout from "../features/payment/pages/Checkout"


export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/generate",
                element: <Generate />
            },
            {
                path :"/pricing",
                element: <Pricing/>
            },
            {
                path : "/checkout",
                element : <Checkout/>
            }
        ]
    }
])