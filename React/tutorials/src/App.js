import './App.css';
import FuncComp from "./Components/FuncComp";
import {ClassComp, ClassComp1} from "./Components/ClassComp";
import Click from "./Components/click"
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';

function App() {
  return (
    <div>
    <h1>Hello World!</h1>
    <h1>Namaste World!</h1>
    <FuncComp name ="Learner 1" place="Pipariya"/>
    <ClassComp name="Listener-1" place = "Bhilwada">
    <p>This is the child.</p></ClassComp>
    <ClassComp name="Listener-2" place = "Bhilwada">
      <button>
        Click
      </button>
      </ClassComp>
    <ClassComp name="Listener-3" place = "Bhilwada"/>
    <ClassComp1 />
    <Click />
    <Counter />
    <ParentComp/>
    </div>
  );
}

export default App;
