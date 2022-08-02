import { Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home/Home";
import Html from "./pages/Html/Html";
import Navbar from './pages/Shared/Navbar';
import Content from './pages/Html/HtmlContent'
import Dashboard from "./pages/Dashboard/Dashboard";
import AddHtml from "./pages/Dashboard/AddHtml";
import UpdateHtml from "./pages/Dashboard/UpdateHtml";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import RequireAuth from './pages/Login/RequireAuth'
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import MyProfile from "./pages/Dashboard/MyProfile";
import RequireAdmin from "./pages/Dashboard/RequireAdmin";
import MyLearning from "./pages/Dashboard/MyLearning";
import HtmlIndex from "./pages/Html/HtmlIndex";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/html" element={<Html></Html>}>
          <Route index element={<HtmlIndex></HtmlIndex>}></Route>
          <Route path="lesson/:id" element={<Content></Content>}></Route>
        </Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myLearning" element={<MyLearning></MyLearning>}></Route>
          <Route path="addHtml" element={<RequireAdmin><AddHtml></AddHtml></RequireAdmin>}></Route>
          <Route path="updateHtml" element={<RequireAdmin><UpdateHtml></UpdateHtml></RequireAdmin>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
        </Route>

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
