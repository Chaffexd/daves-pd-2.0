import React from 'react'
import PhoneIcon from '../Icons/PhoneIcon';
import WhatsApp from '../Icons/WhatsApp';
import OfficeIcon from '../Icons/OfficeIcon';
import EmailIcon from '../Icons/EmailIcon';

const Footer = () => {
  return (
    <footer className='my-24'>
        <h1 className='text-3xl my-12 text-center'>Contact Us</h1>
        <div className='flex w-full justify-evenly'>
            <div className='flex flex-col items-center'>
                <PhoneIcon />
                <p className='mt-4'>Call us</p>
                <p>07988107552</p>
            </div>
            <div className='flex flex-col items-center'>
                <WhatsApp />
                <p className='mt-4'>Message us</p>
                <p>07988107552</p>
            </div>
            <div className='flex flex-col items-center'>
                <OfficeIcon />
                <p className='mt-4'>Office Hours</p>
                <time>Mon - Sun 7am - 8pm</time>
            </div>
            <div className='flex flex-col items-center'>
                <EmailIcon />
                <a href="mailto:davidchaff@hotmail.co.uk?subject=I would like a quote!" className='mt-4 text-sky-400 hover:text-sky-600'>Email Us</a> 
            </div>

        </div>
    </footer>
  )
}

export default Footer