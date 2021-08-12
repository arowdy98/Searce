import './App.css';
import FuncComp from "./Components/FuncComp";
import {ClassComp, ClassComp1} from "./Components/ClassComp";
import Click from "./Components/click"
import Counter from './Components/Counter';

function App() {
  return (
    <div>
    <h1>Hello World!</h1>
    <h1>Namaste World!</h1>
    <FuncComp />
    <ClassComp />
    <ClassComp1 />
    <Click />
    <Counter />
    </div>
  );
}

export default App;
