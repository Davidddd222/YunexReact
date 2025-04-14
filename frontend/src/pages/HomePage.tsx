import React, { useState } from 'react';
import Header from '@/components/Header';
import { FaPlay } from "react-icons/fa";
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
    // Estado para controlar la visibilidad del video modal
    const [showVideo, setShowVideo] = useState(false);

    // Función para abrir el modal
    const openModal = () => {
        setShowVideo(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setShowVideo(false);
    };

    return (
        <>
            <Header />
            
            {/* Contenedor con fondo gris solo en la sección de texto e imagen */}
            <div className="p-8 pb-8 gap-16 bg-gray-100">
                <div className='font-semibold text-6xl ml-8 mt-8'>
                    <div className="flex items-center gap-8 mb-12">
                        {/* Contenedor del texto */}
                        <div className="flex-1">
                            <div>
                                Uniting what’s<br />
                                next <span 
                                    className='inline-flex items-center text-3xl rounded-full w-14 h-14' 
                                    style={{ background: 'linear-gradient(0deg, rgba(140,180,224,1) 8%, rgba(255,255,255,1) 90%)' }} 
                                    onClick={openModal}  // Evento al hacer clic para abrir el modal
                                >
                                    <FaPlay className='cursor-pointer ml-4' />
                                </span> in traffic.
                            </div>
                            <p className='text-2xl mt-4'>We launch cities into the future.</p>
                            <p className='text-xl mt-3 mb-12'>Yunex Traffic develops innovative mobility ecosystems and services for 
                                the smart city making <strong className='font-bold text-sky-700'>mobility safer, more efficient, and more sustainable </strong>
                                with forward-looking infrastructure and transport solutions.</p>
                        </div>

                        {/* Contenedor de la imagen */}
                        <div className="flex-1">
                            <img className="w-120 rounded-sm mb-5 ml-8" src="/yunex3.png" alt="Yunex" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenedor de las tarjetas de contenido */}
            <div className="flex space-x-4 h-135 ml-8 justify-center bg-white py-12">
                <div className='container w-64 p-6 border-none rounded-md shadow-xl'>
                    <h1 className='font-bold text-xl mb-4'>Urban Mobility Management</h1>
                    <p className='text-lg'>
                        Intelligent mobility management not only improves the traffic flow in cities
                        and between cities and their surroundings, it also helps you tackle the next
                        mobility revolution. For liveable cities and optimal mobility.
                    </p>
                </div>

                <div className='container w-64 p-6 border-none rounded-md shadow-xl'>
                    <h1 className='font-bold text-xl mb-4'>Tolling & Infrastructure Solutions</h1>
                    <p className='text-lg'>
                        From the installation, management and maintenance of entire highway and tunnel
                        sections to intelligent tolling solutions. We provide road and tunnel operators with a
                        tailor-made solution for every situation on site.
                    </p>
                </div>

                <div className='container w-64 p-6 border-none rounded-md shadow-xl'>
                    <h1 className='font-bold text-xl mb-4'>Mobility Services & Consulting</h1>
                    <p className='text-lg'>
                        From maintenance and operation to optimization, our service team is at your side
                        to keep your systems operating at their best performance – for sustainable and cost-efficient
                        mobility. We also take care of your Cybersecurity and EVCI maintenance.
                    </p>
                </div>

                <div className='container w-64 p-6 border-none rounded-md shadow-xl'>
                    <h1 className='font-bold text-xl mb-4'>Manufacturing Services</h1>
                    <p className='text-lg'>
                        Uniting innovation and precision: Excellence and precise end-to-end manufacturing services.
                    </p>
                </div>
            </div>

            {/* Modal para mostrar el video */}
            {showVideo && (
                <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl">
                        <button 
                            onClick={closeModal} 
                            className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2 hover:bg-red-700"
                        >
                            X
                        </button>
                        <iframe 
                            width="100%" 
                            height="450" 
                            src="https://www.youtube.com/embed/5V-o8OMlFog" 
                            title="YouTube video" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
            <Footer/>
        </>
    );
};

export default HomePage;
