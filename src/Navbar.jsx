import React from 'react';

const Navbar = () => {
    return (
        <div className='flex container mt-3 justify-between items-center'>
            <section className='logo font-bold text-2xl  mx-auto '> CS — Ticket System</section>
            <section className='nav-right '>
                <div className='links flex justify-around gap-6 items-center'>
                    <a>Home</a>
                    <a>FAQ</a>
                    <a>Changelog</a>
                    <a>Blog</a>
                    <a>Download</a>
                    <a>Contact</a>
                    <div>
                    <button className='py-1 px-3 bg-gradient-to-r from-[#9F62F2] to-[#632EE3] text-white rounded-md font-bold text-2xl'> + New Ticket </button></div>
                </div>
                <div></div>
            </section>
        </div>
    );
};

export default Navbar;