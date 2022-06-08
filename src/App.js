import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useHistory,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { selectUser } from "./Components/Redux/userReducer";
import PrivateRoute from "./Components/Login/PrivateRoute";
function App() {
  const user = useSelector(selectUser);
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/app" element={<Home />} />
        </Routes>
        <Routes>
          <Route
            path="/app"
            element={
              <PrivateRoute redirectPath="/app" user={user}>
                {" "}
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>

        <Routes>
          <Route exact path="/" element={<Navigate to="/auth" />} />
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route path="/auth" element={<Login />} />
          <Route
            // path={user && user.accessToken ? "app" : "auth"}
            path="app"
            element={user && user.accessToken ? <Home /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
