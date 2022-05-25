import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Components/Dashboard/AddProduct';
import AddReview from './Components/Dashboard/AddReview';
import AllUser from './Components/Dashboard/AllUser';
import Dashboard from './Components/Dashboard/Dashboard';
import ManageOrder from './Components/Dashboard/ManageOrder';
import ManageProduct from './Components/Dashboard/ManageProduct';
import MyOrder from './Components/Dashboard/MyOrder';
import MyProfile from './Components/Dashboard/MyProfile';
import CarPartsDetails from './Components/Home/CarPartsDetails';
import Home from './Components/Home/Home';
import AuthRequir from './Components/Login/AuthRequir';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import NotFound from './Components/NotFound/NotFound';
import Blogs from './Components/Pages/Blogs';
import MyPortfolio from './Components/Pages/MyPortfolio';
import Purchase from './Components/Pages/Purchase';
import Footer from './Components/Shared/Footer';
import Navber from './Components/Shared/Navber';

function App() {
  return (
    <div className=''>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase' element={
            <AuthRequir>
              <Purchase></Purchase>
            </AuthRequir>}>
          </Route>
        <Route path='/carParts/:partsId' element={<CarPartsDetails></CarPartsDetails>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/my_portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/dashboard' 
        element={
          <AuthRequir>
            <Dashboard></Dashboard>
          </AuthRequir>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorder' element={<MyOrder></MyOrder>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          
          <Route path='alluser' element={<AllUser></AllUser>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageorder' element={<ManageOrder></ManageOrder>}></Route>
          <Route path='manageproduct' element={<ManageProduct></ManageProduct>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
