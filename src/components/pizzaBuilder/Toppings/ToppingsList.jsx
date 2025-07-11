import { useEffect, useState } from "react";
import { getToppings } from "../../../services/pizzaItemsService";




export const ChooseToppings = () => {
    const [allToppings, setAllToppings] = useState([]);
    const [selectedToppings, setSelectedToppings] = useState([]);


    useEffect(() => {
        getToppings().then((toppingsArray) => {
            setAllToppings(toppingsArray);
            console.log("yummyst!");
        })
    }, [])


    // This function adds/removes topping IDs from the array
    const handleChange = (id) => {
        if (selectedToppings.includes(id)) {
            // Remove if already selected
            setSelectedToppings(selectedToppings.filter(toppingId => toppingId !== id));
        } else {
            // Add if not selected
            setSelectedToppings([...selectedToppings, id]);
        }
    }


    return (
        <div className="toppings-container">
            <h2>Toppings</h2>
            <article className="toppings">
                {allToppings.map((toppingObj) =>


                (
                    <label key={toppingObj.id}>
                        <input
                            type="checkbox"
                            value={toppingObj.id}


                            checked={selectedToppings.includes(toppingObj.id)}
                            onChange={() => handleChange(toppingObj.id)}
                        >
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


