import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './projects.css'; 
import ProjectCard from '../project card/ProjectCard';
import Footer from '../footer/Footer';

function Projects() {
  useEffect(() => {
    document.title = "Projects | Ayush Sharma";
  }, []);
  // Desktop images for carousel
  const desktopCarouselImages = [
    require('../assets/forumhub.png'),
    require('../assets/momento.png'),
    require('../assets/ecommerce.png'),
    require('../assets/astrixui-movies.png'),
    require('../assets/novitos-main.jpg')
  ];

  // Mobile images for carousel
  const mobileCarouselImages = [
    require('../assets/forumhub-mobile.png'),
    require('../assets/momento-mobile.png'),
    require('../assets/ecommerce-mobile.png'),
    require('../assets/astrixuimovies-mobile.png'),
    require('../assets/novitos-mobile.jpg')
  ];

  // Static project data for ProjectCard (remains unchanged)
  const projectData = [
    {
      imgSrc: require('../assets/forumhub.png'),
      title: 'Forum Hub',
      description: 'A Forum discussion platform with easy engaging tools.',
      link: 'https://github.com/astrix-ui/ForumHub.com.github.io'
    },
    {
      imgSrc: require('../assets/momento.png'),
      title: 'Momento',
      description: 'A social media app for sharing memorable moments with realtime Direct Messaging.',
      link: 'https://github.com/astrix-ui/Mavericks-Site'
    },
    {
      imgSrc: require('../assets/ecommerce.png'),
      title: 'E-commerce Site',
      description: 'An online shopping platform frontend template.',
      link: 'https://github.com/astrix-ui/Ecommerce-Website.github.io'
    },
    {
      imgSrc: require('../assets/astrixui-movies.png'),
      title: 'AstrixUI Movies',
      description: 'A movie listing app with advanced search filters using APIs.',
      link: 'https://github.com/astrix-ui/astrixui-movies'
    },
    {
      imgSrc: require('../assets/novitos-main.jpg'),
      title: 'Novitos',
      description: 'A note-taking app with multiple handy features.',
      link: 'https://github.com/astrix-ui/Novitos-NotesWebsite.github.io'
    },
    {
      imgSrc: require('../assets/aai.png'),
      title: 'Airport Management System',
      description: 'A website to manage flights data, lost and found data, and much more with a full backend system.',
      link: 'https://github.com/astrix-ui/Airport-Management-System'
    }
  ];

  // State to store the current carousel images
  const [carouselImages, setCarouselImages] = useState(desktopCarouselImages);

  // Function to switch carousel images based on screen size
  useEffect(() => {
    const updateCarouselImages = () => {
      if (window.innerWidth <= 600) {
        setCarouselImages(mobileCarouselImages); // Use mobile images in carousel
      } else {
        setCarouselImages(desktopCarouselImages); // Use desktop images in carousel
      }
    };

    updateCarouselImages(); // Initial check
    window.addEventListener('resize', updateCarouselImages); // Listen for screen resize

    return () => {
      window.removeEventListener('resize', updateCarouselImages); // Cleanup
    };
  }, []);

  return (
    <>
      <div className="carousel-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {carouselImages.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <img src={imgSrc} alt={`Carousel Image ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <h2 className='title'>Project List</h2>

      <div className='proj-container'>
        {projectData.map((project, index) => (
          <ProjectCard 
            key={index}
            imgSrc={project.imgSrc}  
            title={project.title}
            description={project.description}
            link = {project.link}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Projects;
