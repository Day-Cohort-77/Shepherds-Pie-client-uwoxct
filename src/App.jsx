import { } from "react-router-dom";
import "./App.css";
import { Welcome } from "./components/welcome/Welcome";
import { NavBar } from "./components/nav/NavBar";
import { ChooseCheese } from "./components/pizzaBuilder/Cheeses/CheesesList";
import { ChooseSauce } from "./components/pizzaBuilder/Sauces/SaucesList";
import { ChoosePizzaSize } from "./components/pizzaBuilder/PizzaSizes/PizzaSizesList";
import { ChooseToppings } from "./components/pizzaBuilder/Toppings/ToppingsList";

function App() {
  return(
     <div className="App">
 
 <Welcome />
 <NavBar />
<ChooseCheese/>
<ChooseSauce/>
<ChoosePizzaSize />
<ChooseToppings/>
  </div>

  )
}


export default App;
