/*   import logo from './logo.svg';  */
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/Home";
import Restaurants from "./components/Restaurants";
import RestaurantDetails from "./components/RestaurantDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurantdetails/:id' element={<RestaurantDetails/>}/>  
      </Routes>
    </Router>
  );
}

export default App;
