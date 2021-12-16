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


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details" element={
            <RequireAuth>
              <PropertyDetails></PropertyDetails>
            </RequireAuth>
          }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
