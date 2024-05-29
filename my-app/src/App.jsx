import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { Profile } from "./components/Start/display-data";
import { MyButton } from "./components/Start/MyButton";
import { ShoppingList } from "./components/Start/RenderList";
import Game from "./tic-tac-toe";
import ProductInfo from "./components/ProductInfo";
import { Counter } from './hooks/useState';
import { Clock } from './hooks/useEffect';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/tic-tac-toe">Tic Tac Toe</Link>
          </li>
          <li>
            <Link to="/my-button">My Button</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/shopping-list">Shopping List</Link>
          </li>
          <li>
            <Link to="/product-info">Product Info</Link>
          </li>
          <li>
            <Link to="/use-state">useState</Link>
          </li>
          <li>
            <Link to="/use-effect">useEffect</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/tic-tac-toe" element={<Game />} />
        <Route path="/my-button" element={<MyButton />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
        <Route path="/product-info" element={<ProductInfo />} />
        <Route path="/use-state" element={<Counter />} />
        <Route path="/use-effect" element={<Clock />} />
      </Routes>
    </Router>
  );
}

export default App;
