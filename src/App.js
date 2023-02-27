import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Cart from './components/cart/cart';
import WishList from './pages/wishlist/WishList';
import Checkout from './pages/checkout/Checkout';
import SignIn from './components/login/SignIn';
import LoginPage from './components/login/LoginPage';

const router = createBrowserRouter([
  {path: '/', element: <Layout/>,
  children :[
    {path: '/', element: <Home/>},
    {path: '/products', element: <Products/>},
    {path: '/products/product/:id', element: <Product/>},
    {path: '/cart', element: <Cart/>},
    {path: '/wishlist', element: <WishList/>},
    {path: '/checkout',element: <Checkout/> }
  ]
  },
])

function Layout() {
  return(
    <div className='app'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
