import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const Footer: React.FC = () => {
    return (
        <footer >
            {/* Línea de separación con margen */}
            <div style={{
            borderBottom: '1px solid #000',
            width: '90%', 
            margin: '20px auto', 
            borderTop: '1px solid  #000'
            }} />
            {/* Información de contacto */}
            <div className="mb-6 mt-8">
                <div className="flex justify-center space-x-6 text-base mb-4">
                    <a
                        href="https://www.google.com/maps?q=BMW+Plaza,+a,+Ak+7+%23127a-2+127a-100,+Bogotá,+Cundinamarca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-600 transition-colors duration-300 flex items-center space-x-2"
                    >
                        <IoLocationOutline /> {/* Ícono de ubicación */}
                        <p>Bogotá D.C, Colombia</p>
                    </a>

                    <a
                        href="tel:+1234567890" // Cambia el número de teléfono
                        className="text-black hover:text-gray-600 transition-colors duration-300 flex items-center space-x-2"
                    >
                        <div className='text-xl'><MdOutlinePhone /></div>
                        <p>601 743 2678</p>
                    </a>

                    <a
                        href="mailto:example@yunex.com" // Cambia tu email
                        className="text-black hover:text-gray-600 transition-colors duration-300 flex items-center space-x-2"
                    >
                        <MdOutlineEmail />
                        <p>example@yunex.com</p>
                    </a>
                </div>
            </div>

            {/* Redes sociales */}
            <div className="flex justify-center space-x-6 mb-6">
                <a
                    href="https://x.com/yunextraffic" // Cambia el enlace al tuyo
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black text-2xl hover:text-blue-500 transition-colors duration-300 flex items-center justify-center w-12 h-12 rounded-full border-2"
                >
                    <FaXTwitter />
                </a>

                <a
                    href="https://www.linkedin.com/company/yunextraffic/about/" // Cambia el enlace al tuyo
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black text-2xl hover:text-blue-700 transition-colors duration-300 flex items-center justify-center w-12 h-12 rounded-full border-2"
                >
                    <FaLinkedinIn />
                </a>

                <a
                    href="https://www.youtube.com/c/yunextraffic" // Cambia el enlace al tuyo
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black text-3xl hover:text-red-600 transition-colors duration-300 flex items-center justify-center w-12 h-12 rounded-full border-2"
                >
                    <FaYoutube />
                </a>
            </div>

            {/* Copyright */}
            <div className="text-center mt-6">
                <p className='text-lg font-semibold mb-4'>&copy; {new Date().getFullYear()} Yunex Traffic. All rights reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;
