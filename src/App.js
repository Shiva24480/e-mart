import './App.css';
import { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './cart/Checkout'
import Login from './auth/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Register from './auth/Register';
import UserDetails from './Purchase/UserDetails';
import OrderPlaced from './Purchase/OrderPlaced';
import { ToastContainer, toast } from 'react-toastify';



function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("hello user", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, []);

  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/purchase" element={<UserDetails />} />
          <Route path="/orderplaced" element={<OrderPlaced />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
