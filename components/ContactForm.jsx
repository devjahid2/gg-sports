import Image from 'next/image';
import React from 'react';

const ContactForm = () => {
    return (
        <div className='container'>
            <div className='md:flex justify-between gap-4'>
            <form className='contact-form md:mb-0 mb-10' action="">
                <h2 className='title text-4xl font-bold after-bg'>CONTACT US </h2>
                <div className="mt-70">
                    <input placeholder='Name' type="text" />
                    <input placeholder='Email' type="email" />
                    <input placeholder='Phone' type="text" />

                    <button className='button'>Submit</button>
                </div>
            </form>
            <div className="img relative">
                <div className="bg-overly"></div>
                <Image className='relative' alt='contact form' src={'/contact/1.png'} width={300} height={38}/>
            </div>
        </div>
        </div>
    );
}

export default ContactForm;
