import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

import Loader from 'react-loaders'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs 
            .sendForm(
                'gmail',
                'template_3ul2ep4',
                refForm.current,
                'wLrGqawzlU69K4Ist'
            )
            .then(
                ()=>{
                    alert('Successfully sent')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
                
            }

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t', ' ','M','e']}
                    idx={15}/>
                </h1>
                <p>If you have requests or
                    questions, don't hesitate to contact me using below form.</p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required />
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message' required> 
                                </textarea>
                               
                            </li>
                            <li>
                                <input type='submit' className='flat-button' />
                            </li>
                        </ul>
                    </form>

                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
        
    )
}

export default Contact;