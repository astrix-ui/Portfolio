import React, {useState} from 'react'
import './Navbar.css'


const Navbar = () => {
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  
    const [isHamburgerVisible, setHamburgerVisible] = useState(true);
    const [isCloseVisible, setCloseVisible] = useState(false);

    const handleToggleMenu = (e) =>{
        e.preventDefault();
        
        
        setMobileMenuVisible((prevState) => {
            setHamburgerVisible(false);
            setCloseVisible(true);
            return !prevState;
        });
        
    }
    const getMobileClass = () =>{
        return isMobileMenuVisible ? "nav-items-mobile visible" : "nav-items-mobile";
    }

    return(
        <>
        <header className='header'>
            <h2 id='logo'>
                <img src={require('../assets/watermark.png')} id='logo-img'></img>
                {/* Ayush Sharma */}
            </h2>

            <nav className='nav-elements'>
               <div className='nav-items'>

               <a href = "/">Home</a>
               <a href = "/Projects">Projects</a>
               <a href = "/AboutMe">About Me</a>
               <a href = "/ContactMe">Contact Me</a>
               </div>

            <div className={getMobileClass()}>
           
            <a href = "/">Home</a>
               <a href = "/Projects">Projects</a>
               <a href = "/AboutMe">About Me</a>
               <a href = "/ContactMe">Contact Me</a>
            </div>
            </nav>

            <a href='/' id='toggle-img' onClick={ (e) => handleToggleMenu(e)}>
          
            {isMobileMenuVisible ? (
                        <img src={require('../assets/close.png')} id='close-img'  alt="Close Menu" />
                    ) : (
                        <img src={require('../assets/hamburger.png')} id='hamburger-img' alt="Open Menu" />
                    )}
            </a>

        </header>
        </>
    )
}

export default Navbar;
