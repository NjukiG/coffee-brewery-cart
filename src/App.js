import "./App.css";
import "bootswatch/dist/superhero/bootstrap.min.css"; // Added this :boom:
import NavBar from "./components/Navbar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Error from "./pages/Error";
import CartProvider from "./CartContext";
import About from "./pages/About";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Container>
          <NavBar />
          <br />
          <br />
          <br />
          <Routes>
            <Route exact path="/" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
