import React from 'react';

const Footer = () => {
    return (
        <>
        <div className='bg-black flex justify-evenly mt-3'>
            <section className='CS — Ticket System w-[350px] text-white '>
                <h1 className='text-2xl mb-2'>CS — Ticket System</h1>
                <p className='text-gray-500'>A ticket management system is an application where users/customers can submit issues or requests (called tickets). Each ticket contains details such as title, description, customer name, priority, status, and creation date.</p>
            </section>

            <section className='Company text-white gap-2 flex flex-col'>
                <h1 className='text-2xl '>Company</h1>
                <div className='flex flex-col text-gray-500'>
                      <a href="#">About Us </a>
                <a href="#">Our Mission </a>
                <a href="#">Contact Sale</a>
                </div>
              
            </section>

            <section className='Services gap-2 flex flex-col text-white'>
                <h1 className='text-2xl'>Services</h1>
                <div className='flex flex-col text-gray-500'>
                     <a href="#">Products & Services </a>
                <a href="#">Customer Stories</a>
                <a href="#">Download Apps</a>
                </div>
               
            </section>

            <section className='Information gap-2 text-white'>
                <h1 className='text-2xl '>Information</h1>
                <div  className='flex flex-col text-gray-500' >
                    <a href="#">Privacy Policy </a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Join Us</a>

                </div>


                 
            </section>
            <hr />

        </div>
        
        <section className='text-center bg-black text-white'>
            <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </section>
        
        
        </>
        
    );
};

export default Footer;