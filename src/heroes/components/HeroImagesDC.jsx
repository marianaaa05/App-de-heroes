import React, { useEffect, useState } from 'react';
import { getHeroDC } from '../helpers/getHeroDC';

//comp de estados
export const HeroImagesDC = ({ hero }) => {
    const [images, setImages] = useState([]); // Estado para almacenar las imágenes
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        setLoading(true); // Inicia el estado de carga
        getHeroDC(hero)
            .then(setImages)
            .catch(err => {
                setError('No se pudieron cargar las imágenes.');
                console.error(err);
            })
            .finally(() => setLoading(false)); // Finaliza el estado de carga
    }, [hero]);

    // Muestra un mensaje de carga mientras esperamos los datos
    if (loading) {
        return <p>Cargando imágenes...</p>;
    }

    // Si hay un error, muestra el mensaje de error
    if (error) {
        return <p>{error}</p>;
    }

    // Si no hay imágenes disponibles
    if (images.length === 0) {
        return <p>No se encontraron imágenes para DC.</p>;
    }

    // Si hay imágenes, las renderizamos
    return (
        <div className="hero-images">
            {images.map(img => (
                <div key={img.id}>
                    <img src={img.url} alt={img.title} />
                    <p>{img.title}</p>
                </div>
            ))}
        </div>
    );
};
