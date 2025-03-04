import React from 'react';
import Header from '@/components/Header';


const HomePage: React.FC = () => {
    return (
        <>
        <Header />
        <div className='text-center justify-center italic text-2xl font-semibold'>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our application.</p>
        </div>
        </>
    );
};

export default HomePage;