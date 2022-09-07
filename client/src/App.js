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
import ShopPage from "./pages/ShopPage";
import { selectProducts, setProducts } from "./redux/reducers/productsSlice";
import axios from "axios";
import CartPage from "./pages/CartPage";

function App() {
  const dispatch = useDispatch();

  const product = useSelector(selectProducts);

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

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_BASE_URL}/products`)
        .then((res) => {
          dispatch(setProducts(res.data));
        });
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<h1>Collection</h1>} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/sign" element={<SignPage />} />
          <Route path='/cart' element={<CartPage />} />
          {/* BACKOFFICE PAGES */}
          <Route path="/backoffice" element={<BackofficePage />} />
          <Route path="/backoffice/products" element={<BackofficeProducts />} />
          <Route path="/backoffice/users" element={<BackofficeUsers />} />
          <Route
            path="/backoffice/categories"
            element={<BackofficeCategories />}
          />
          <Route path="*" element={<h1>NOT FOUND 404</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
