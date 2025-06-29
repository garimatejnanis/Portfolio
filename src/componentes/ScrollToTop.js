//Hooks
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  {/*Cada vez que se cambien de página, el scroll hace para arriba */}
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;
}

//Exportamos
export default ScrollToTop;