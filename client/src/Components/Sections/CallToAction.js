import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
    return (
        <div className="bg-blue-soft py-16 px-8 sm:py-20 sm:px-6 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-dark">
                    Property Market for real estate agents and housebuilders.
                </h2>
                <p className="mt-4 text-lg leading-6 text-blue-dark">
                    Whether you are an real estate agent or a housebuilder, we are more than just a property portal. We are using our unique position to influence the market nationally, and our local insight to direct buyers and sellers straight to you.
                </p>
                <Link
                    to="/agent-login"
                    className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-light sm:w-auto"
                >
                    Create Agent Account
                </Link>
            </div>
        </div>
    );
};

export default CallToAction;