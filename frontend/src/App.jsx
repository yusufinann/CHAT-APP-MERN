import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
import './App.css'

function App() {
  const {authUser}=useAuthContext();
  return (
    <div className='p-4 h-screen flex flex-col'>
      {/* Global toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Routes for different pages */}
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to="/login"/>} />
        <Route path='/login' element={authUser ? <Navigate to="/"/> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to="/"/> : <SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
