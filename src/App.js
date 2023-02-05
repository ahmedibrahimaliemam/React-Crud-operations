import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Home from './component/Home';
import Products from './component/Products';
import AddProduct from './component/AddProduct';
import View from './component/View';
import Edit from './component/edit';
import Category from './component/Category';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <div className='row'>
        <div className='col-xl-2 col-lg-2 col-md-12 col-sm-12 bg-dark sidebar'>
          <Sidebar/>
        </div>
        <div className='col-xl-10 col-lg-10 col-md-12 col-sm-12'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Products' element={<Products/>}/ >
          <Route path='products/addProduct' element={<AddProduct/>} />
          <Route path="products/view/:id" element={<View/>} />
          <Route path="products/edit/:id" element={<Edit/>} />
          <Route path="/products/category" element={<Category/>}/>
          
        </Routes>
        </div>
      </div>
     </div>
     </BrowserRouter>
  )
}

export default App;
