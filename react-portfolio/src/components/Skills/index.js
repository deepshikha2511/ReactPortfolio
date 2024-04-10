import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'


const Skills = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])
    return (
    
        <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['S','k','i','l','l','s',' ', '&',' ','E','x','p','e','r','i','e','n','c','e']}
                idx={15}/>
            </h1>
            <p>
            Expert in front-end development including technologies like HTML, CSS, Javascript and React.js
            </p>
        </div>
        </div>
    )
}

export default Skills