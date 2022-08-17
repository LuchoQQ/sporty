import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './layout/Header'
import HomePage from "./pages/HomePage";
import SignPage from "./pages/SignPage";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/collection' element={<h1>Collection</h1>} />
          <Route path='/shop' element={<h1>Hola</h1>} />
          <Route path='/sign' element={<SignPage />} />
          <Route path='*' element={<h1>NOT FOUND 404</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
