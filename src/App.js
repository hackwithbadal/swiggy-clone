import './App.css';
import Header from './pages/Header';
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import Help from './pages/Help'
import Offers from './pages/Offers'
import Search from './pages/Search';
import Cart from './pages/Cart';
import Footer from './pages/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/help' element={<Help />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;