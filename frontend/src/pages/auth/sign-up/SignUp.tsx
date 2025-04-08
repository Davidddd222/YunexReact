import { SignUp } from '@clerk/clerk-react';
import AuthHeader from '../components/AuthHeaders';

export default function SignUpPage() {
  return (
    <>
    <AuthHeader/>
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-auto">
      <div className="flex flex-col justify-center w-full lg:w-1/2 p-4 lg:p-8 lg:pr-2">
        <h1 className="text-4xl lg:text-6xl font-semibold break-words">
          ¡Uniting what’s <br /> next in traffic!
        </h1>
        <p className="text-xl lg:text-2xl font-medium mt-4">We launch cities into the future.</p>
      </div>

      <div className="flex items-center justify-center w-full lg:w-1/2 p-4 lg:p-8 lg:pl-2">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 ml-28">Registrar cuenta</h1>
      
            <SignUp signInUrl="/sign-in" />
        </div>
      </div>
    </div>
    </>
  );
}

{/*import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage: React.FC = () => {
  return (
    <div>
      <h2>Regístrate</h2>
      <SignUp signInUrl="/sign-in" />
    </div>
  );
};

export default SignUpPage;
*/}