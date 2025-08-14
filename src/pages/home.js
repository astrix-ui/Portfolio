


import HeroSection from '../hero section/HeroSection';
// import Navbar from './Navbar/Navbar';
import Skills from '../skills/Skills';
import Academic from '../academics/Academic';
import Footer from '../footer/Footer';
import ExperienceTimeline from '../experience/ExpereienceTimeline';
// import ProjectsCarousel from '../project-carousal/ProjectsCarousel';

function Home() {
  return (
   <>
   <HeroSection />
    <Academic />
    {/* <ProjectsCarousel /> */}
    <ExperienceTimeline />
            <Skills />
            <Footer />
   </>
         
  );
}

export default Home;
