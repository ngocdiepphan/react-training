import './App.css';
import { Profile } from './start/display-data';
import { MyButton } from './start/my-button';
import { ShoppingList } from './start/render-list';

function App() {
  return (
    <div className="App">
      <h1 className='title'>This is my app</h1>
      <MyButton/>
      <Profile/>
      <ShoppingList/>
    </div>
  );
}

export default App;
