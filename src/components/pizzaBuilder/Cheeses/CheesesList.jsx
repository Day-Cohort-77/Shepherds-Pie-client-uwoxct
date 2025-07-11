import { useEffect, useState } from "react";
import { getCheeses } from "../../../services/pizzaItemsService";


export const ChooseCheese = () => {
    const [allCheeses, setAllCheeses] = useState([]);
    const [selectedCheese, setSelectedCheese] = ([]);

    useEffect(() => {
        getCheeses().then((cheeseArray) => {
            setAllCheeses(cheeseArray);    
            console.log("yummy!");
        })
    }, [])


    return (
        <div className="cheese-container">
            <h2>Cheeses</h2>
            <article className="cheeses">
                {allCheeses.map((cheeseObj) =>
               
               (
                <label key={cheeseObj.id}>
                    <input
                        type="radio"
                        value="cheese"
                        key={cheeseObj.id}
                        id={cheeseObj.id}
                        onChange={() => setSelectedCheese(cheeseObj.id)} >
                    </input>
            {cheeseObj.name} 
            </label>   
            )
                )
                }
            </article>
        </div>
    )
}