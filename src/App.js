import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import RequireAuth from './PrivateRoute/PrivateRoute';
import PropertyDetails from './pages/PropertyDetails/PropertyDetails';
import AllPropertyPage from './pages/AllPropertyPage/AllPropertyPage';
import AddProperty from './pages/AddProperty/AddProperty';
import Dashboard from './pages/Dashboard/Dashboard';
import UsersPosts from './pages/Dashboard/User/UserPost/UsersPosts';
import UsersWishList from './pages/Dashboard/User/UserWish/UsersWishList';
import UserRequest from './pages/Dashboard/User/UserRequest/UserRequest';
import AllUser from './pages/Dashboard/Admin/AllUser/AllUser';
import AdminRoute from './PrivateRoute/AdminRoute';
import AllPosts from './pages/Dashboard/Admin/AllPost/AllPosts';
import AllRequest from './pages/Dashboard/Admin/AllRequest/AllRequest';
import AllWishList from './pages/Dashboard/Admin/AllWish/AllWishList';
import UserProfile from './pages/Dashboard/User/UserProfile/UserProfile';
import useAuth from './Hooks/useAuth';


function App() {
  const {logOut} = useAuth()
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allProperty" element={<AllPropertyPage />} />
          <Route path="/details/:id" element={
            <RequireAuth>
              <PropertyDetails></PropertyDetails>
            </RequireAuth>
          } />
          <Route path="/addProperty" element={
            <RequireAuth>
              <AddProperty></AddProperty>
            </RequireAuth>
          } />
          <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          } >
            <Route path="/dashboard/userProfile" element={
              <RequireAuth>
              <UserProfile></UserProfile>
              </RequireAuth>
            } />
            <Route path="/dashboard/userPost" element={
              <RequireAuth>
                <UsersPosts></UsersPosts>
              </RequireAuth>
            } />
            <Route path="/dashboard/wishList" element={
              <RequireAuth>
                <UsersWishList></UsersWishList>
              </RequireAuth>
            } />
            <Route path="/dashboard/UserRequest" element={
              <RequireAuth>
                <UserRequest></UserRequest>
              </RequireAuth>
            } />
            <Route path="/dashboard/users" element={
              <AdminRoute>
                <AllUser></AllUser>
              </AdminRoute>
            } />
            <Route path="/dashboard/allPost" element={
              <AdminRoute>
                <AllPosts></AllPosts>
              </AdminRoute>
            } />
            <Route path="/dashboard/allRequest" element={
              <AdminRoute>
                <AllRequest></AllRequest>
              </AdminRoute>
            } />
            <Route path="/dashboard/allWishList" element={
              <AdminRoute>
                <AllWishList></AllWishList>
              </AdminRoute>
            } />

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
