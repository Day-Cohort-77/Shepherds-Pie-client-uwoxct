import { useEffect, useState } from "react";
import { getSauces } from "../../../services/pizzaItemsService";


export const ChooseSauce = () => {
    const [allSauces, setAllSauces] = useState([]);
    const [selectedSauce, setSelectedSauce] = ([]);

    useEffect(() => {
        getSauces().then((saucesArray) => {
            setAllSauces(saucesArray);    
            console.log("yummys!");
        })
    }, [])


    return (
        <div className="sauce-container">
            <h2>Sauces</h2>
            <article className="sauces">
                {allSauces.map((sauceObj) =>
               
               (
                <label key={sauceObj.id}>
                    <input
                        type="radio"
                        value="sauce"
                        key={sauceObj.id}
                        id={sauceObj.id}
                        onChange={() => setSelectedSauce(sauceObj.id)} >
                    </input>
            {sauceObj.name} 
            </label>   
            )
                )
                }
            </article>
        </div>
    )
}