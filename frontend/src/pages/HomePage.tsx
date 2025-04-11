import React from 'react';
import Header from '@/components/Header';
import { FaPlay } from "react-icons/fa";

const HomePage: React.FC = () => {
    return (
        <>
        <Header />
        <div className="min-h-screen p-8 pb-20 gap-16 " >
            <div className='font-semibold text-6xl ml-8 mt-8'>
            Uniting what’s<br />
            next <span className='inline-flex items-center text-3xl rounded-full w-14 h-14' style={{ background: 'linear-gradient(0deg, rgba(140,180,224,1) 8%, rgba(255,255,255,1) 90%)' }}><FaPlay className='cursor-pointer ml-4'/></span> in traffic.
            <p className='text-2xl mt-4'>We launch cities into the future.</p>
            <p className='text-xl mt-3 mb-12'>Yunex Traffic develops innovative mobility ecosystems and services for <br/>
                 the smart city making <strong className='font-bold text-sky-700'>mobility safer, more efficient, and more sustainable</strong><br/>
                 with forward-looking infrastructure and transport solutions.</p>
            </div>
            <div className="flex space-x-4 h-112 ml-8 justify-center">
                <div className='container w-64 p-6 border-none rounded-md  shadow-xl'>
                    <h1 className='font-bold text-xl mb-4'>Urban Mobility Management</h1>
                    <p className='text-lg'>
                    Intelligent mobility management not only improves the traffic flow in cities
                    and between cities and their surroundings, it also helps you tackle the next 
                    mobility revolution. For liveable cities and optimal mobility.
                    </p>
                </div>
                
                <div className='container w-64 p-6 border-none rounded-md   shadow-xl'>
                    <h1 className='font-bold text-xl mb-4'>Tolling & Infrastructure Solutions</h1>
                    <p className='text-lg'>
                    From the installation, management and maintenance of entire highway and tunnel 
                    sections to intelligent tolling solutions. We provide road and tunnel operators with a 
                    tailor-made solution for every situation on site.
                    </p>
                </div>

                <div className='container w-64 p-6 border-none rounded-md   shadow-xl'>
                    <h1 className='font-bold text-xl mb-4'>Mobility Services & Consulting</h1>
                    <p className='text-lg'>
                    From maintenance and operation to optimization, our service team is at your side
                    to keep your systems operating at their best performance – for sustainable and cost-efficient
                    mobility. We also take care of your Cybersecurity and EVCI maintenance.
                    </p>
                </div>

                <div className='container w-64 p-6 border-none rounded-md   shadow-xl'>
                    <h1 className='font-bold text-xl mb-4'>Manufacturing Services</h1>
                    <p className='text-lg'>
                    Uniting innovation and precision: Excellence and precise end-to-end manufacturing services.
                    </p>
                </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;