export const getHeroMarvel = async( marvel ) => {

    //parametro marvel
    const url = `https://api.unsplash.com/search/photos?client_id=qRnimfFXkFkxKnXU8H6LgT3N-6Zoo0AxgvFoTJMz3_Y&query=Deadpool Spiderman ${marvel}&per_page=8`;

    //solicitud con fetch
    const resp = await fetch( url );
    //convierte en formato JSON
    const { results } = await resp.json();


    if (!results) {
        console.error("No se encontraron resultados");
        return [];
    }

    // mapea resultados -> array
    const img = results.map( img => ({
        id: img.id,                         // ID de la imagen
        title: img.description || "Imagen sin descripción", // Descripción o título de la imagen
        url: img.urls.small,                 // URL de la imagen en tamaño pequeño
    }));

    
    return img;
}
