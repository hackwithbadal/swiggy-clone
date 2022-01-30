import './App.css';
import Header from './pages/Header';
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import Help from './pages/Help'
import Offers from './pages/Offers'
import Search from './pages/Search';
import Cart from './pages/Cart';
import Footer from './pages/Footer';
import Restaurants1 from './pages/restaurantsDetails/Restaurants1';
import Restaurants2 from './pages/restaurantsDetails/Restaurants2';
import Restaurants3 from './pages/restaurantsDetails/Restaurants3';
import Restaurants4 from './pages/restaurantsDetails/Restaurants4';
import Restaurants5 from './pages/restaurantsDetails/Restaurants5';
import Restaurants6 from './pages/restaurantsDetails/Restaurants6';
import Restaurants7 from './pages/restaurantsDetails/Restaurants7';
import Restaurants8 from './pages/restaurantsDetails/Restaurants8';
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
          <Route path='/Restaurants1' element={<Restaurants1 />} />
          <Route path='/Restaurants2' element={<Restaurants2 />} />
          <Route path='/Restaurants3' element={<Restaurants3 />} />
          <Route path='/Restaurants4' element={<Restaurants4 />} />
          <Route path='/Restaurants5' element={<Restaurants5 />} />
          <Route path='/Restaurants6' element={<Restaurants6 />} />
          <Route path='/Restaurants7' element={<Restaurants7 />} />
          <Route path='/Restaurants8' element={<Restaurants8 />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;