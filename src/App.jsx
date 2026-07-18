import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Referencias,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        {/* Contenedor de Experiencia (Claro) - Curvas SOLO en la parte superior */}
        <div className="bg-experience bg-cover bg-center bg-no-repeat rounded-tl-[150px]">
          <div className="bg-experienceLight bg-cover bg-center bg-no-repeat rounded-tl-[150px] pb-2">
            <Experience />
          </div>
        </div>
        
        <div className="bg-black pt-4">
          <Referencias />
        </div>

        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;