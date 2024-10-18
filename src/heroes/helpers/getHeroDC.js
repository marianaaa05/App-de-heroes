// función asíncrona que obtiene imágenes de héroes de DC 
export const getHeroDC = async (heroesDC) => {

    // parámetro heroesDC 
    const url = `https://api.unsplash.com/search/photos?client_id=qRnimfFXkFkxKnXU8H6LgT3N-6Zoo0AxgvFoTJMz3_Y&query=Batman Superman${heroesDC}&per_page=8`; 
    

    // solicitud con fetch
    const resp = await fetch(url);

    // convierte en formato JSON
    const { results } = await resp.json();

    
    if (!results) {
        console.error("No se encontraron resultados");
        return [];
    }

    // mapea resultados -> array
    const img = results.map(img => ({
        id: img.id,                                  
        title: img.description || "Imagen sin descripción",  
        url: img.urls.small,                       
    }));

    
    return img;
};
