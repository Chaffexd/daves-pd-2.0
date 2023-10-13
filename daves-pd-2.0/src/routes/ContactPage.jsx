import React from 'react'
import Form from '../components/Form/Form'

const ContactPage = () => {
  return (
    <div className='h-full bg-sky-200'>
      <h1 className='text-center mb-12 text-3xl pt-8'>If you'd like to get a quote today, fill out the form below</h1>
      <div className='flex justify-center pb-48'>
        <Form />
      </div>
    </div>
  )
}

export default ContactPage