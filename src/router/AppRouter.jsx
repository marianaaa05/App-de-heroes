import { Route, Routes } from "react-router-dom"; // componentes rutas
import { HeroesRoutes } from "../heroes"; // rutas específicas
import { LoginPage } from "../auth"; // Importa el componente de la página de inicio de sesión


export const AppRouter = () => {
  return (
    <>
      {/* routes que agrupa todas las rutas */}
      <Routes>
      
        <Route path="login" element={<LoginPage />} />
        
        {/* Ruta para cualquier otra página dentro de HeroesRoutes */}
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
