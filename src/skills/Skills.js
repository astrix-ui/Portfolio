import React from 'react'
import './Skills.css'

const Skills = () =>{
    return(
        <>
        <section id='container'>
            <p className='p-heading2'>
                Skills
            </p>
            <p className='p-leading' id='p-skills'>
            Here is an overview of the skills I have acquired, demonstrating my capabilities and expertise in various areas of web development.
            </p>

            <div id='box-container'>
                <div className='box'>
                    <img src={require('../assets/html.png')} className='skill-img'></img>
                </div>

                <div className='box'>
                    <img src={require('../assets/mongo.png')} className='skill-img'></img>
                </div>

                <div className='box'>
                    <img src={require('../assets/vercel.png')} className='skill-img'></img>
                </div>

                <div className='box'>
                    <img src={require('../assets/docker.png')} className='skill-img'></img>
                </div>

                <div className='box'>
                    <img src={require('../assets/express.png')} className='skill-img'></img>
                </div>

                <div className='box'>
                    <img src={require('../assets/jwt.png')} className='skill-img'></img>
                </div>

                <div className='box'>
                    <img src={require('../assets/node.png')} className='skill-img'></img>
                </div>

                <div className='box'>
                    <img src={require('../assets/tailwind.png')} className='skill-img'></img>
                </div>

                <div className='box'>
                    <img src={require('../assets/git.png')} className='skill-img'></img>
                </div>

                

                

                <div className='box'>
                    <img src={require('../assets/css.png')} className='skill-img'></img>
                </div>

                <div className='box'>
                    <img src={require('../assets/js.png')} className='skill-img'></img>
                </div>

                <div className='box'>
                    <img src={require('../assets/react.png')} className='skill-img'></img>
                </div>

                <div className='box'>
                    <img src={require('../assets/c.png')} className='skill-img'></img>
                </div>

                <div className='box'>
                    <img src={require('../assets/cpp.png')} className='skill-img'></img>
                </div>

                <div className='box'>
                    <img src={require('../assets/java.png')} className='skill-img'></img>
                </div>

                <div className='box'>
                    <img src={require('../assets/python.png')} className='skill-img'></img>
                </div>
            </div>

        </section>
        </>
    )
}
export default Skills;