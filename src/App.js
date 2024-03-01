import logo from "./logo.svg";
import "./App.css";
import HookCounter from "./components/HookCounter";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import ToggleSwitch from "./components/ToggleSwitch";
import TodoList from "./components/TodoList";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="App">
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <HookCounterFour></HookCounterFour> */}
      {/* <ToggleSwitch /> */}
      {/* <TodoList></TodoList> */}
      <ThemeSwitcher></ThemeSwitcher>
    </div>
  );
}

export default App;
