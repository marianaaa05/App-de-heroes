import { Navigate, Route, Routes } from 'react-router-dom'; 
import { Navbar } from '../../ui'; 
import { DCPage, HeroPage, MarvelPage } from '../pages'; 


export const HeroesRoutes = () => {
  return (
    <>
      {/* Renderiza el componente Navbar en todas las rutas para mostrar la barra de navegación */}
      <Navbar />

      <div className="container">
        {/* rutas específicas */}
        <Routes>
         
          <Route path="marvel" element={<MarvelPage />} />

          
          <Route path="dc" element={<DCPage />} />

          
          <Route path="hero" element={<HeroPage />} />

          {/* Redirección  */}
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
