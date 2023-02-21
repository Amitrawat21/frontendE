import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Registration from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router , Routes , Route , Navigate , Redi} from "react-router-dom"
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser && state.user.currentUser.length!=0) ;
  return(

<Router>
  <Routes>
    <Route exact path = "/" element = {<Home/>}/>
    <Route exact path = "/product/:id" element = {<Product/>}/> 
    <Route exact path = "/products/:category" element = {  <ProductList/>}/> 
    <Route exact path = "/cart" element = {  <Cart/>}/>
  <Route exact path = "/success" element = {  <Success/>}/>
  <Route exact path = "/login"  element = {user?<Navigate to = "/"/> : <Login/>}/> 
  <Route exact path = "/register" element = {user?<Navigate to = "/login"/> : <Registration/>}/>
  </Routes>
</Router>
  )
};

export default App;