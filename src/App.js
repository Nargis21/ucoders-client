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

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/html" element={<Html></Html>}>
          <Route path="lesson/:id" element={<Content></Content>}></Route>
        </Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}>
          <Route path="addHtml" element={<AddHtml></AddHtml>}></Route>
        </Route>

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
