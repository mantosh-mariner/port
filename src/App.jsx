import { BrowserRouter } from "react-router-dom";
import { styles } from "./styles";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,Social } from "./components";
import { Center } from "@react-three/drei";



const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div >
        <About />
       
        <Experience />
        <h1 className={styles.sectionHeadText} id="h1">Skills</h1>
        <Tech />
        
        <Works />
        <Social/>
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
