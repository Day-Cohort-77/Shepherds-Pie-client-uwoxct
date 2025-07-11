import { } from "react-router-dom";
import "./App.css";
import { Welcome } from "./components/welcome/Welcome";
import { NavBar } from "./components/nav/NavBar";
import { PizzaTime } from "./components/PizzaTime/PizzaTime";
import { OrderButton } from "./components/pizzaBuilder/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div className="App">

      <Welcome />
      <NavBar />
      <PizzaTime />
      <OrderButton />
    </div>

  )
}


export default App;
