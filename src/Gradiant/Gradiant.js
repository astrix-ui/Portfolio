import React from 'react'
import './Gradiant.css'
const Gradiant = () => {
    return(
        <>
        <div id='gradiant-container'>
        <img src={require('../assets/gradiant.jpg')} id='gradiant-img'></img>
        </div>
        <div id='content'>
        <div class="marquee">
    <div class="-content">
        My Creative Process 
    </div>
</div>


          <div className='steps-container'>
            <div className='step'>
                Conceptualization
            </div>
            <div className='step'>
                Creative Design
            </div>
            <div className='step'>
                Prototyping
            </div>
            <div className='step'>
                Execution
            </div>
            <div className='step'>
                Fine Tuning
            </div>
            
          </div>
        
          <div className='gradiant-foot'>
            {/* <h2>
                ASTrix UI
            </h2> */}
            </div>  
        </div>
        </>
    )
}

export default Gradiant;