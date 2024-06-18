import React from 'react'

const Contact = () => {

  const config={
    email:'mailto:hephzibai10@gmail.com',
    phone:'91+ XXXXXXXXXX'
  }

  return (
    <div>
        <section id="contact" className='flex flex-col  justify-center bg-blue-500 px-5 py-10'>
            <div className='flex flex-col items-center text-white' >
                <h1 className='text-4xl border-b-2 mb-5 w-[150px] font-bold'>Contact</h1>
                <p>If you want to discuss more in detail,contact me</p>
                <p className='py-2'><span className='font-bold'>Email : </span><a className='font-bold' href={config.email}>Hephzibai10@gmail.com</a></p>
                <p><span className='py-2 font-bold'>Phone : </span>{config.phone}</p>
              </div>
        </section>
    </div>
  )
}

export default Contact