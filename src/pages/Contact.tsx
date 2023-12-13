import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <div className= 'flex flex-col font-thin font-mono text-green-500 items-center bg-[#0F172A]/100 bg-fixed min-h-screen'>
      <div>
        <h1 className=' mb-3 mt-10 text-2xl underline'>Contact Me</h1>
      </div>
      <div>
      <p className='mb-3 mt-5 ml-60 mr-60 mb-8 text-center'>
      If you would like to contact me, feel free to email me at <span className='font-bold underline'>jacob@qgmnow.com </span>  
       or if you would like fill out the form below and I will get back to you as soon as I can.
      </p>
      </div>
      <div>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact
