import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Main } from './components/Main';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {

  return (
    <div className='bg-slate-200'>
      <AuthProvider>
        <Routes>
          <Route path='/' element={
              <Main/>
            } />
          <Route path='/home' element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          } />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App;
