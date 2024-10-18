import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter } from 'react-router-dom'; //navegación

import { HeroesApp } from './HeroesApp'; 



// busca el en el DOM el html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeroesApp /> 
    </BrowserRouter>
  </StrictMode>,
);
