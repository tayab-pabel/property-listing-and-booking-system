import { EyeIcon, EyeOffIcon, LocationMarkerIcon, LockClosedIcon, MailIcon, UserIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Register = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="mb-6">
            <Link to="/">
              <img
                className="mx-auto h-12 w-auto"
                src={logo}
                alt=""
              />
            </Link>
          </div>
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h2 className="mb-6 text-center text-2xl font-black text-blue-dark">Create an account</h2>
            <div className="mb-6">
              <p className="mt-6 text-center text-base text-blue-dark">
                  Already have an account?{' '}
                  <Link to="/login" className="text-blue-light">
                    Log In
                  </Link>
                </p>
            </div>
            <form className="space-y-6" action="#" method="POST">
              
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-blue-dark" aria-hidden="true" />
                  </div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="firstName "
                    required
                    className="focus:ring-blue-light focus:border-blue-light block w-full pl-10 border-2 border-blue-dark rounded-md text-blue-dark placeholder-blue-dark"
                    placeholder="First Name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="firstName" className="sr-only">
                  Last Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-blue-dark" aria-hidden="true" />
                  </div>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="lastName "
                    required
                    className="focus:ring-blue-light focus:border-blue-light block w-full pl-10 border-2 border-blue-dark rounded-md text-blue-dark placeholder-blue-dark"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="postcode" className="sr-only">
                  Postcode
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LocationMarkerIcon className="h-5 w-5 text-blue-dark" aria-hidden="true" />
                  </div>
                  <input
                    id="postcode"
                    name="postcode"
                    type="text"
                    autoComplete="postcode"
                    required
                    className="focus:ring-blue-light focus:border-blue-light block w-full pl-10 border-2 border-blue-dark rounded-md text-blue-dark placeholder-blue-dark"
                    placeholder="Postcode"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MailIcon className="h-5 w-5 text-blue-dark" aria-hidden="true" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="focus:ring-blue-light focus:border-blue-light block w-full pl-10 border-2 border-blue-dark rounded-md text-blue-dark placeholder-blue-dark"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-5 w-5 text-blue-dark" aria-hidden="true" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={show ? "text" : "password"}
                    autoComplete="password"
                    required
                    className="focus:ring-blue-light focus:border-blue-light block w-full pl-10 border-2 border-blue-dark rounded-md text-blue-dark placeholder-blue-dark"
                    placeholder="Password"
                  />
                  <div onClick={() => setShow(!show)} className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                    {show ? <EyeOffIcon className="h-5 w-5 text-blue-dark" aria-hidden="true" /> : <EyeIcon className="h-5 w-5 text-blue-dark" aria-hidden="true" />}
                  </div>
                </div>
              </div>

              <button
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-light hover:bg-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-blue-dark" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-white font-semibold text-blue-dark">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-blue-dark rounded-md shadow-sm bg-white text-sm font-medium text-blue-light hover:bg-gray-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g clip-path="url(#clip0)"><path fill="#1877F2" d="M24 12c0-6.628-5.372-12-12-12S0 5.372 0 12c0 5.99 4.388 10.955 10.125 11.855v-8.386H7.078V12h3.047V9.356c0-3.007 1.79-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.926-1.955 1.875V12h3.328l-.532 3.469h-2.796v8.386C19.613 22.955 24 17.99 24 12z"></path><path fill="#fff" d="M16.671 15.469L17.203 12h-3.328V9.75c0-.95.464-1.875 1.955-1.875h1.514V4.922s-1.374-.234-2.686-.234c-2.742 0-4.533 1.661-4.533 4.668V12H7.078v3.469h3.047v8.386a12.071 12.071 0 003.75 0v-8.386h2.796z"></path></g></svg>
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-blue-dark rounded-md shadow-sm bg-white text-sm font-medium text-blue-dark0 hover:bg-gray-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g clip-path="url(#clip0)"><path fill="#FBBB00" d="M5.319 14.504l-.836 3.118-3.053.065A11.947 11.947 0 010 12c0-1.99.484-3.866 1.342-5.519l2.719.499 1.19 2.702A7.133 7.133 0 004.866 12c0 .88.16 1.725.453 2.504z"></path><path fill="#518EF8" d="M23.79 9.758a12.02 12.02 0 01-.053 4.747 11.998 11.998 0 01-4.225 6.853l-3.424-.175-.485-3.025a7.151 7.151 0 003.077-3.652h-6.416V9.758H23.79z"></path><path fill="#28B446" d="M19.512 21.357v.001A11.95 11.95 0 0112 24c-4.57 0-8.543-2.554-10.57-6.313l3.889-3.183a7.135 7.135 0 0010.284 3.654l3.909 3.2z"></path><path fill="#F14336" d="M19.66 2.763l-3.888 3.182a7.137 7.137 0 00-10.52 3.737l-3.91-3.2A11.998 11.998 0 0112 0a11.95 11.95 0 017.66 2.763z"></path></g></svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;