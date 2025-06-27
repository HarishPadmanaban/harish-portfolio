import React from 'react'
import { socials } from '../constants'

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='flex flex-col justify-center md:items-start items-center'>
                <p>harishpadmanaban2005@gmail.com</p>
            </div>
            <div className="socials">
                {socials.map((img) =>(
                    <a className='icon' target="_blank" href={img.url} key={img.url}>
                        <img src={img.imgPath}/>
                    </a>
                ))}
            </div>

            <div className='flex flex-col justify-center'>
                <p className='text-center md:text-end'>
                    ©️ {new Date().getFullYear()}  |  Harish Padmanaban . All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  ) 
}

export default Footer