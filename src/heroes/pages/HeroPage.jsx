import { HeroImagesDC, HeroImagesMarvel } from "../components"; // Importa los componentes HeroImagesDC y HeroImagesMarvel

// Marvel y DC
export const HeroPage = () => {
  return (
    <>
      <h1>Heroes de Marvel y DC</h1>
      <hr /> 
       {/* prop de marvel ->  'Marvel Comics' */}
      <HeroImagesMarvel marvel='Marvel Comics'></HeroImagesMarvel>
      {/* prop de dc ->  'DC Comics' */}
      <HeroImagesDC dcComics='DC Comics'></HeroImagesDC>
    </>
  );
};
