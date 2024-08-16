import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='p-4 h-screen flex flex-col'>
      {/* Global toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Routes for different pages */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
