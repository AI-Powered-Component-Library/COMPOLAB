import { createRoot } from 'react-dom/client'
import './app/index.css'
import { AuthProvider } from './features/auth/context/AuthContext.jsx'
import { Provider } from "react-redux"
import store from './app/app.store.js'
import { RouterProvider } from "react-router-dom";
import router from "./app/app.routes.jsx"

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </AuthProvider>
)
