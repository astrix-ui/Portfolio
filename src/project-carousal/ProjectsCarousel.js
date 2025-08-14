import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
     {
      imgSrc: require('../assets/Alumni.png'),
      title: 'SRM Alumni Portal',
      description: 'Connects SRM students and alumni with messaging, filters, and notifications.',
      link: 'https://alumni-srmup.in/admin/index.php'
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

export default function FancyCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <div className="carousel-container">
      <button onClick={prev}>Prev</button>
      <AnimatePresence mode="wait">
        <motion.div
          key={projects[index].title}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="proj-card"
        >
          <img src={projects[index].image} alt="" />
          <h3>{projects[index].title}</h3>
          <p>{projects[index].description}</p>
        </motion.div>
      </AnimatePresence>
      <button onClick={next}>Next</button>
    </div>
  );
}
