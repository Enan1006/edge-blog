import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Home from './pages/Home/Home/Home';
import AddBlog from './pages/AddBlog/AddBlog';
import Header from './pages/Shared/Header';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import ResetPass from './pages/Login/ResetPass';
import Blogs from './pages/Blogs/Blogs';
import SignleBlog from './pages/SignleBlog/SignleBlog';
import RequireAuth from './pages/Shared/ReaquireAuth';
import MyBlogs from './pages/MyBlogs/MyBlogs';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Dashboard />}></Route>
        </Route> */}
        <Route path='/reset-password' element={<ResetPass />}></Route>
        <Route path='/add-post' element={
          <RequireAuth>
            <AddBlog />
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/my-posts' element={<MyBlogs />}></Route>
        <Route path='/blogs/:blogId' element={<SignleBlog />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
