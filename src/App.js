import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./Components/register/Register";
import Home from "./Components/home/Home";
import NotFound from "./Components/notfound/NotFound";
import PrivateRoute from "./services/privateRoute/PrivateRoute";
import { useUser } from "./context/userContext";
import Navbar from "./Components/navbar/Navbar";
import Logout from "./Components/logout/Logout";
import Footer from "./Components/Footer/Footer";
import DemoCard from "./Components/demoCard/DemoCard";
import CreateStory from "./Components/createStory/CreateStory";
import Login from "./Components/login/Login";
import Edit from "./Components/Edit/Edit";


function App() {
  const { state } = useUser();
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route
            path="/"
            element={
              <PrivateRoute element={<Home />} login={state.userLoggedIn} />
            }
          />
          <Route
            path="/logout"
            element={
              <PrivateRoute element={<Logout />} login={state.userLoggedIn} />
            }
          />
          <Route
            path="/create-new-story"
            element={
              <PrivateRoute element={<CreateStory />} login={state.userLoggedIn} />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <PrivateRoute element={<Edit />} login={state.userLoggedIn} />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/cardDemo" element={<DemoCard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
