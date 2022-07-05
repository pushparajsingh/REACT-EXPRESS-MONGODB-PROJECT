import './App.css';
import { useState } from 'react';
import { Routes , Route } from 'react-router';

import Header from './HeaderComponent/Header';
import Banner from './BannerComponent/Banner';
import Content from './ContentComponent/Content';
import Footer from './FooterComponent/Footer';
import About from './AboutComponent/About';
import Register from './RegisterComponent/Register';
import Login from './LoginComponent/Login';
import AdminHome from './AdminHomeComponent/AdminHome';
import UserHome from './UserHomeComponent/UserHome';
import Logout from './LogoutComponent/Logout';

function App() {

  const [myuser , setUser] = useState("admin@gmail.com")

  return (
<div id="tooplate_wrapper">
    
    <Header myuser={myuser} />
    
    <Banner />
    
    <Routes>
      <Route path="/" element={<Content myuser={myuser} />} ></Route>
      <Route path="/about" element={<About myuser={myuser} />} ></Route>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/admin" element={<AdminHome />} ></Route>
      <Route path="/user" element={<UserHome />} ></Route>
      <Route path="/logout" element={<Logout />} ></Route>
    </Routes>

    <Footer />

</div>


  );
}

export default App;
