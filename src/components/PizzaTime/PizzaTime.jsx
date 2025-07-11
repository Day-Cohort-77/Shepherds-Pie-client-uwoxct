
import { ChooseSauce } from "../pizzaBuilder/Sauces/SaucesList";
import { ChoosePizzaSize } from "../pizzaBuilder/PizzaSizes/PizzaSizesList";
import { ChooseToppings } from "../pizzaBuilder/Toppings/ToppingsList";
import { ChooseCheese } from "../PizzaBuilder/Cheeses/CheesesList";

export const PizzaTime = () => {
    return (
        <>
            <ChooseCheese />
            <ChooseSauce />
            <ChoosePizzaSize />
            <ChooseToppings />
        </>
    );
}