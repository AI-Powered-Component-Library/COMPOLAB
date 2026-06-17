import { createBrowserRouter } from "react-router-dom"
import Login from "../features/auth/pages/Login"
import Register from "../features/auth/pages/Register"
import App from "./App"
import Home from "./Home"
import Generate from "../features/ai/Generate"
import Pricing from "../features/payment/pages/Pricing"
import Checkout from "../features/payment/pages/Checkout"
import ProtectedRoute from "../features/auth/pages/ProtectedRoute"
import PublicRoute from "../features/auth/pages/PublicRoute"
import CreateComponent from "../features/components/pages/Create"
import ComponentList from "../features/components/pages/ComponentList"
import EditComponent from "../features/components/pages/EditComponent"
import Google from "../features/auth/pages/Google"

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                element: <PublicRoute />,
                children: [
                    {
                        path: "/login",
                        element: <Google />
                    }
                ]
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "/generate",
                        element: <Generate />
                    },
                    {
                        path: "/pricing",
                        element: <Pricing />
                    },
                    {
                        path: "/checkout",
                        element: <Checkout />
                    },
                    {
                        path: "/c/create",
                        element: <CreateComponent />
                    },
                    {
                        path: "/c/:cid",
                        element: <Generate />
                    },
                    {
                        path: "/c/list",
                        element: <ComponentList />
                    },
                    {
                        path: "/c/:cid/edit",
                        element: <EditComponent />
                    },
                ]
            },


        ]
    }
])