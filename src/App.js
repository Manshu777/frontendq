import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Sigup from './components/Signup';
import AdminLogin from './components/Admin/AdminLogin';
import Cart from './components/Cart'
import Dashi from './components/Admin/Dashi';
import Blogadd from './components/Admin/Blogadd';
import Slider from './components/Admin/Slider';
import Singleproduct from './components/Singleproduct';


import Profile from './components/Proflie';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
     <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={ <About/> } />
          <Route path="/contact" element={ <Contact/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/adminlogin" element={ <AdminLogin/> } />

 
          <Route path="/sproduct/:id" element={ <Singleproduct/> } />

          <Route path="/slider" element={ <Slider/> } />
        
          <Route path="/cart" element={ <Cart/> } />
    
          <Route path='/dashi' element={<Dashi/>} />
        <Route path='/blogadd' element={<Blogadd/>} />
        <Route path='/profile' element={<Profile/>} />








          <Route path="/signup" element={ <Sigup/> } />



        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
