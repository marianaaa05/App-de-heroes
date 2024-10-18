// recibe propiedades
export const HeroCard = ({ superhero, url }) => {
    return (
        <div>
            {/* Muestra  imagen  */}
            <img src={url} alt={superhero} /> 

            <h3>{superhero}</h3> 
        </div>
    );
};
