import { HeroImagesMarvel } from "../components"; // Importa el componente que mostrará las imágenes de héroes de Marvel

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Page</h1>
      <hr /> 

      {/* prop de marvel ->  'Marvel Comics' */}
      <HeroImagesMarvel marvel='Marvel Comics' />
    </>
  );
};
