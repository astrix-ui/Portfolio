import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './projects.css'; 
import ProjectCard from '../project card/ProjectCard';
import Footer from '../footer/Footer';
import { motion } from 'framer-motion';

function Projects() {
  useEffect(() => {
    document.title = "Projects | Ayush Sharma";
  }, []);
  // Desktop images for carousel
  const desktopCarouselImages = [
    require('../assets/Alumni.png'),
    require('../assets/job-tracker.png'),
    require('../assets/momento.png'),
    require('../assets/astrixui-movies.png'),
    require('../assets/novitos-main.jpg'),
    require('../assets/forumhub.png'),
    require('../assets/ecommerce.png')
  ];

  // Mobile images for carousel
  const mobileCarouselImages = [
    require('../assets/forumhub-mobile.png'),
    require('../assets/momento-mobile.png'),
    require('../assets/ecommerce-mobile.png'),
    require('../assets/astrixuimovies-mobile.png'),
    require('../assets/novitos-mobile.jpg'),
    require('../assets/alumni-mobile.png')

  ];

  // Static project data for ProjectCard (remains unchanged)
  const projectData = [
     {
      imgSrc: require('../assets/Alumni.png'),
      title: 'SRM Alumni Portal',
      description: 'Connects SRM students and alumni with messaging, filters, and notifications.',
      link: 'https://alumni-srmup.in/admin/index.php'
    },
    {
      imgSrc: require('../assets/job-tracker.png'),
      title: 'Job Tracker',
      description: 'A Job Tracking application to keep track of job applications with a full backend system. Comprehensive tools designed to make your job search more organized, efficient, and successful',
      link: 'https://job-tracker-qqs1.onrender.com'
    },
    
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
      imgSrc: require('../assets/passop.png'),
      title: 'Password Manager',
      description: 'A Password Manager application with fully functioning backend and MongoDB Database.',
      link: 'https://github.com/astrix-ui/Password-Manager'
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const slideVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <>
      <motion.div 
        className="carousel-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
              <motion.img 
                src={imgSrc} 
                alt={`Carousel Image ${index + 1}`}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.h2 
        className="p-heading2 custom-head"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.div 
        className='proj-container'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectData.map((project, index) => (
          <ProjectCard 
            key={index}
            imgSrc={project.imgSrc}  
            title={project.title}
            description={project.description}
            link = {project.link}
          />
        ))}
      </motion.div>
      <Footer />
    </>
  );
}

export default Projects;
