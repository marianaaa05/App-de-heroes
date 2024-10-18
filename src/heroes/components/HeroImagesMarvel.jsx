import React, { useEffect, useState } from 'react'; // hooks useEffect y useState
import { getHeroMarvel } from '../helpers/getHeroMarvel'; // Importa la función que obtiene las imágenes de héroes de Marvel desde los helpers

// estados Marvel
export const HeroImagesMarvel = ({ hero }) => {
   
    const [images, setImages] = useState([]); 

    
    const [loading, setLoading] = useState(true); 

    
    const [error, setError] = useState(null); 

    //prop
    useEffect(() => {
        setLoading(true); // inicia la carga
        getHeroMarvel(hero) // Llama a la función getHeroMarvel 
            .then(setImages) 
            .catch(err => {
                setError('No se pudieron cargar las imágenes.'); // Si ocurre un error, actualiza el estado 'error'
                console.error(err); 
            })
            .finally(() => setLoading(false)); 
    }, [hero]);  

    // Si el estado "loading" es true, muestra un mensaje de carga
    if (loading) {
        return <p>Cargando imágenes...</p>;
    }

    
    if (error) {
        return <p>{error}</p>;
    }

    
    if (images.length === 0) {
        return <p>No se encontraron imágenes para Marvel.</p>;
    }

    
    return (
        <div className="hero-images">
            {images.map(img => (
                <div key={img.id}> {/* Itera sobre cada imagen */}
                    <img src={img.url} alt={img.title} /> 
                    <p>{img.title}</p> {/* Muestra el título de la imagen */}
                </div>
            ))}
        </div>
    );
};
