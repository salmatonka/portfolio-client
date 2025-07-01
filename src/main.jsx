import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'
import "aos/dist/aos.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';;

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={routes} />
    </QueryClientProvider>
  </React.StrictMode>,
)
