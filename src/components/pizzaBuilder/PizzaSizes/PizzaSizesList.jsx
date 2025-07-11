import { useEffect, useState } from "react";
import { getPizzaSizes } from "../../../services/pizzaItemsService";


export const ChoosePizzaSize = () => {
    const [allSizes, setAllSizes] = useState([]);
    const [selectedSize, setSelectedSize] = ([]);

    useEffect(() => {
        getPizzaSizes().then((sizesArray) => {
            setAllSizes(sizesArray);    
            console.log("yummysize!");
        })
    }, [])


    return (
        <div className="size-container">
            <h2>Sizes</h2>
            <article className="sizes">
                {allSizes.map((sizeObj) =>
               
               (
                <label key={sizeObj.id}>
                    <input
                        type="radio"
                        value="size"
                        key={sizeObj.id}
                        id={sizeObj.id}
                        onChange={() => setSelectedSize(sizeObj.id)} >
                    </input>
            {sizeObj.name}
             ${sizeObj.cost}
            </label>   
            )
                )
                }
            </article>
        </div>
    )
}