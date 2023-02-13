import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
import StatefulGreeting from "./components/StatefulGreeting";
import HooksCounter from "./components/HooksCounter";
import ClassCounter from './components/ClassCounter';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting name="John" /> */}
      {/* <StatefulGreeting name="Anna" /> */}
      <ClassCounter />
      <HooksCounter name="Mike" />
    </div>
  );
}

export default App;
