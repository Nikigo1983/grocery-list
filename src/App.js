import './App.css';
import image from './listfront3.jpg';
import imageTwo from './listfront2.jpg';
import { TodoList } from './TodoList';

function App() {
  return (
    <div className='app'>
    <div className="container">
    <img src={image} width="400px" alt="todolist"/>
    </div>
    <div className="container">
    <h1>TO-DO LIST</h1>
    <h2>for a frontend developer</h2>
    </div>
    <TodoList/>
    <div className="container">
    <img src={imageTwo} width="200px" alt="todolistTwo"/>
    </div>
    </div>
  );
}

export default App;
