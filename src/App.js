import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Privetcomponent from "./components/Privetcomponent";
import Login from "./components/Login";
import Addproduct from "./components/Addproduct";
import Productlist from "./components/Productlist";
import Updateproduct from "./components/Updateproduct";

function App() {
  const auth = localStorage.getItem('user');
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element = {<Privetcomponent/>} >
          <Route path={"/"} element={<Productlist/>} />
          <Route path={"/add"} element={<Addproduct/>} />
          <Route path={"/updateproduct/:id"} element={<Updateproduct/>} />
          <Route path={"/logout"} element={<h3> Logout Page</h3>} />
          <Route path={"/profile"} element={<h3> Profile Page</h3>} />
          </Route>

          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
