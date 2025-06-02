//main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
// import { OrderProvider } from "./components/OrderContext.jsx";
import { Contact } from './components/Contact.jsx'
import Order from './components/Order.jsx'
import Authenticate from './components/Authenticate/Authenticate.jsx'
import Signup from './components/Signup/Signup.jsx'
import  Protected  from './components/Protected/Protected.jsx'
// import { AuthProvider } from './Contexts/AuthContext.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },

      { path: "authenticate", element: <Authenticate /> },
      { path: "signup", element: <Signup /> },

      {
        path: "",
        element: <Protected />,  
        children: [
          { path: "contact", element: <Contact /> },
          { path: "order", element: <Order /> }
        ]
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  // <OrderProvider>
  // <AuthProvider>
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>,
    // </AuthProvider>
    // </OrderProvider>
)