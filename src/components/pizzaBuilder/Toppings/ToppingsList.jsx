import { useEffect, useState } from "react";
import { getToppings } from "../../../services/pizzaItemsService";


export const ChooseToppings = () => {
    const [allToppings, setAllToppings] = useState([]);
    const [selectedTopping, setSelectedTopping] = ([]);

    useEffect(() => {
        getToppings().then((toppingsArray) => {
            setAllToppings(toppingsArray);    
            console.log("yummyst!");
        })
    }, [])


    return (
        <div className="toppings-container">
            <h2>Toppings</h2>
            <article className="toppings">
                {allToppings.map((toppingObj) =>
               
               (
                <label key={toppingObj.id}>
                    <input
                        type="radio"
                        value="topping"
                        key={toppingObj.id}
                        id={toppingObj.id}
                        onChange={() => setSelectedTopping(toppingObj.id)} >
                    </input>
            {toppingObj.name} 
            </label>   
            )
                )
                }
            </article>
        </div>
    )
}