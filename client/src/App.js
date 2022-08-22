import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import SignPage from "./pages/SignPage";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserData,
  selectUserStatus,
  login,
} from "./redux/reducers/userSlice";
import AuthorizationService from "./services/auth/AuthorizationService";
import BackofficePage from "./pages/BackofficePage";
import BackofficeUsers from "./pages/BackofficeUsers";
import BackofficeProducts from "./pages/BackofficeProducts";
import BackofficeCategories from "./pages/BackofficeCategories";

function App() {
  const dispatch = useDispatch();
  var status = useSelector(selectUserStatus);

  useEffect(() => {
    if (status === false) {
      status = true;
      AuthorizationService.get("/auth/me").then((res) => {
        dispatch(login());
        dispatch(setUserData(res.data));
      });
    }
  }, [status]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<h1>Collection</h1>} />
          <Route path="/shop" element={<h1>Hola</h1>} />
          <Route path="/sign" element={<SignPage />} />
          {/* BACKOFFICE PAGES */}
          <Route path="/backoffice" element={<BackofficePage />} />
          <Route path="/backoffice/products" element={<BackofficeProducts />} />
          <Route path="/backoffice/users" element={<BackofficeUsers />} />
          <Route path="/backoffice/categories" element={<BackofficeCategories />} />
          <Route path="*" element={<h1>NOT FOUND 404</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
