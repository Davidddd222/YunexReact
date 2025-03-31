import React from 'react';
import Header from '@/components/Header';
import { FaPlay } from "react-icons/fa";

const HomePage: React.FC = () => {
    return (
        <>
        <Header />
        <div className="min-h-screen p-8 pb-20 gap-16 " style={{ background: 'linear-gradient(0deg, rgba(34,110,195,1) 17%, rgba(140,180,224,1) 40%, rgba(255,255,255,1) 80%)' }}>
            <div className='font-semibold text-6xl ml-8 mt-12'>
            Uniting what’s<br />
            next <span className='inline-flex items-center text-3xl rounded-full w-14 h-14' style={{ background: 'linear-gradient(0deg, rgba(140,180,224,1) 8%, rgba(255,255,255,1) 90%)' }}><FaPlay className='cursor-pointer ml-4'/></span> in traffic.
            <p className='text-2xl mt-4'>We launch cities into the future.</p>
            <p className='text-xl mt-3'>Yunex Traffic develops innovative mobility ecosystems and services for <br/>
                 the smart city making <strong className='font-bold text-sky-700'>mobility safer, more efficient, and more sustainable</strong><br/>
                 with forward-looking infrastructure and transport solutions.</p>
            </div>
            </div>
        </>
    );
};

export default HomePage;