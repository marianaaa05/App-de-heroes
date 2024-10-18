import { getHeroDC } from "../helpers"; 

import { HeroCard } from "./HeroCard";

// propiedad a HeroList
export const HeroList = ({ publisher }) => {
//llama a funcion para obtener los heroes segun publisher
    const heroes = getHeroDC(publisher);

    return (
        <div> 
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id} 
                        {...hero} 
                    />
                ))
            }
        </div>
    );
};
