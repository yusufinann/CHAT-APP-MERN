
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'

createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <AuthContextProvider>
        <SocketContextProvider>
        <App />
        </SocketContextProvider>
     
    </AuthContextProvider>
    </BrowserRouter>

)
