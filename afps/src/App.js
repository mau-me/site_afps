import Footer from './components/footer/footer';
import Header from './components/header/header';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/register/RegisterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
