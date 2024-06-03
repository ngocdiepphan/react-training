import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { Profile } from "./components/Start/DisplayData";
import { MyButton } from "./components/Start/MyButton";
import { ShoppingList } from "./components/Start/RenderList";
import Game from "./components/Tutorial/TicTacToe";
import ProductInfo from "./components/Describing/ProductInfo";
import { Counter } from './hooks/useState';
import { Clock } from './hooks/useEffect';
import TodoList from './components/Describing/markup';
import CurlyBraces from './components/Describing/CurlyBraces';
import Props from './components/Describing/Props/Props';
import SpreadSyntax from './components/Describing/Props/SpreadSyntax';
import PackingList from './components/Describing/Rendering/ConditionalReturn';
import List from './components/Describing/Rendering/RenderList';
import { Key } from './components/Describing/Rendering/RenderList/RenderKey';
import Purity from "./components/Describing/KeepComponents/Purity";
import Tree from "./components/Describing/RenderingTree/index";
import RespondEvent from "./components/AddInteract/index";

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
          <li>
            <Link to="/markup">Markup</Link>
          </li>
          <li>
            <Link to="/curly-braces">Curly Braces</Link>
          </li>
          <li>
            <Link to="/props">Props</Link>
          </li>
          <li>
            <Link to="/spread-syntax">Props with jsx spread syntax</Link>
          </li>
          <li>
            <Link to="/packing-list">Conditional return PackingList</Link>
          </li>
          <li>
            <Link to="/render-list">Render List</Link>
          </li>
          <li>
            <Link to="/render-key">Keeping list items in oder with key</Link>
          </li>
          <li>
            <Link to="/keeping-component">Keeping components Pure</Link>
          </li>
          <li>
            <Link to="/rendering-tree">Ui as a Tree</Link>
          </li>
          <li>
            <Link to="/responding-event">Adding interactivity</Link>
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
        <Route path="/markup" element={<TodoList />} />
        <Route path="/curly-braces" element={<CurlyBraces />} />
        <Route path="/props" element={<Props />} />
        <Route path="/spread-syntax" element={<SpreadSyntax />} />
        <Route path="/packing-list" element={<PackingList />} />
        <Route path="/render-list" element={<List />} />
        <Route path="/render-key" element={<Key />} />
        <Route path="/keeping-component" element={<Purity />} />
        <Route path="/rendering-tree" element={<Tree />} />
        <Route path="/responding-event" element={<RespondEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
