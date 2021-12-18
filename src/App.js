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
import AuthProvider from './context/AuthProvider';
import RequireAuth from './PrivateRoute/PrivateRoute';
import PropertyDetails from './pages/PropertyDetails/PropertyDetails';
import AllPropertyPage from './pages/AllPropertyPage/AllPropertyPage';
import AddProperty from './pages/AddProperty/AddProperty';
import Dashboard from './pages/Dashboard/Dashboard';
import UsersPosts from './pages/Dashboard/UsersPosts';
import UserRequest from './pages/Dashboard/UserRequest';
import UsersWishList from './pages/Dashboard/UsersWishList';
import AdminRoute from './PrivateRoute/AdminRoute';
import AllUser from './pages/Dashboard/AllUser';
import AllPosts from './pages/Dashboard/AllPosts';
import AllRequest from './pages/Dashboard/AllRequest';
import AllWishList from './pages/Dashboard/AllWishList';


function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
