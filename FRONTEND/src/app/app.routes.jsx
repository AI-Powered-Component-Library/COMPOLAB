import { createBrowserRouter } from "react-router-dom"
import Create from "../features/components/pages/Create.jsx"
import ComponentDetail from "../features/components/pages/ComponentDetail.jsx"
import ComponentList from "../features/components/pages/ComponentList.jsx"
import EditComponent from "../features/components/pages/EditComponent.jsx"
import App from "./App.jsx"
import Login from "../features/auth/pages/Login.jsx"
import Register from "../features/auth/pages/Register.jsx"
import Home from "../features/auth/pages/Home.jsx"

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element : <Home/>
            },
            {
                path : "/login",
                element : <Login/>
            },{
                path  : "/register",
                element : <Register/>
            },
            {
                path: "/c/create",
                element: <Create />

            },
            {
                path: "/c/:cid",
                element: <ComponentDetail />
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
    }
])

export default router;