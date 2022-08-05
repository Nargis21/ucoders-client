import { Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home/Home";
import Html from "./pages/Html/Html";
import Navbar from './pages/Shared/Navbar';
import HtmlContent from './pages/Html/HtmlContent'
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
import ContentIndex from "./pages/Shared/ContentIndex";
import DashboardIndex from "./pages/Dashboard/DashboardIndex";
import Css from "./pages/Css/Css";
import CssContent from "./pages/Css/CssContent";
import AddCss from "./pages/Dashboard/AddCss";
import UpdateCss from './pages/Dashboard/UpdateCss'
import Javascript from "./pages/Javascript/Javascript";
import JavascriptContent from "./pages/Javascript/JavascriptContent";
import AddJavascript from "./pages/Dashboard/AddJavascript";
import UpdateJavascript from "./pages/Dashboard/UpdateJavascript";
import ReactJs from "./pages/React/ReactJs";
import ReactContent from "./pages/React/ReactContent";
import AddReact from "./pages/Dashboard/AddReact";
import UpdateReact from "./pages/Dashboard/UpdateReact";
import NodeJs from "./pages/NodeJs/NodeJs";
import NodeJsContent from "./pages/NodeJs/NodeJsContent";
import AddNode from "./pages/Dashboard/AddNode";
import UpdateNode from "./pages/Dashboard/UpdateNode";
import Dom from "./pages/Dom/Dom";
import DomContent from "./pages/Dom/DomContent";
import AddDom from "./pages/Dashboard/AddDom";
import UpdateDom from "./pages/Dashboard/UpdateDom";

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
          <Route index element={<ContentIndex></ContentIndex>}></Route>
          <Route path="lesson/:id" element={<HtmlContent></HtmlContent>}></Route>
        </Route>
        <Route path="/css" element={<Css></Css>}>
          <Route index element={<ContentIndex></ContentIndex>}></Route>
          <Route path="lesson/:id" element={<CssContent></CssContent>}></Route>
        </Route>
        <Route path="/javascript" element={<Javascript></Javascript>}>
          <Route index element={<ContentIndex></ContentIndex>}></Route>
          <Route path="lesson/:id" element={<JavascriptContent></JavascriptContent>}></Route>
        </Route>
        <Route path="/react" element={<ReactJs></ReactJs>}>
          <Route index element={<ContentIndex></ContentIndex>}></Route>
          <Route path="lesson/:id" element={<ReactContent></ReactContent>}></Route>
        </Route>
        <Route path="/node" element={<NodeJs></NodeJs>}>
          <Route index element={<ContentIndex></ContentIndex>}></Route>
          <Route path="lesson/:id" element={<NodeJsContent></NodeJsContent>}></Route>
        </Route>
        <Route path="/dom" element={<Dom></Dom>}>
          <Route index element={<ContentIndex></ContentIndex>}></Route>
          <Route path="lesson/:id" element={<DomContent></DomContent>}></Route>
        </Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<DashboardIndex></DashboardIndex>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="myLearning" element={<MyLearning></MyLearning>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          <Route path="addHtml" element={<RequireAdmin><AddHtml></AddHtml></RequireAdmin>}></Route>
          <Route path="updateHtml" element={<RequireAdmin><UpdateHtml></UpdateHtml></RequireAdmin>}></Route>
          <Route path="addCss" element={<RequireAdmin><AddCss></AddCss></RequireAdmin>}></Route>
          <Route path="updateCss" element={<RequireAdmin><UpdateCss></UpdateCss></RequireAdmin>}></Route>
          <Route path="addJavascript" element={<RequireAdmin><AddJavascript></AddJavascript></RequireAdmin>}></Route>
          <Route path="updateJavascript" element={<RequireAdmin><UpdateJavascript></UpdateJavascript></RequireAdmin>}></Route>
          <Route path="addReact" element={<RequireAdmin><AddReact></AddReact></RequireAdmin>}></Route>
          <Route path="updateReact" element={<RequireAdmin><UpdateReact></UpdateReact></RequireAdmin>}></Route>
          <Route path="addNode" element={<RequireAdmin><AddNode></AddNode></RequireAdmin>}></Route>
          <Route path="updateNode" element={<RequireAdmin><UpdateNode></UpdateNode></RequireAdmin>}></Route>
          <Route path="addDom" element={<RequireAdmin><AddDom></AddDom></RequireAdmin>}></Route>
          <Route path="updateDom" element={<RequireAdmin><UpdateDom></UpdateDom></RequireAdmin>}></Route>

        </Route>

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
