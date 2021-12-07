import React from 'react';

const AgentContact = () => {
  return (
    <div className="p-5 bg-white border border-blue-dark rounded-lg shadow">
      <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
        <h3 className="text-lg font-bold tracking-tight text-blue-dark">
          Contact Us for more information
        </h3>
                            
        <form action="#" method="POST" className="mt-5 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-medium text-blue-dark">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full shadow-sm sm:text-sm focus:ring-blue-light focus:border-blue-light border-blue-dark rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-blue-dark">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full shadow-sm sm:text-sm focus:ring-blue-light focus:border-blue-light border-blue-dark rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label htmlFor="phone" className="block text-sm font-medium text-blue-dark">
                Phone 
              </label>
            </div>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                aria-describedby="phone-description"
                className="block w-full shadow-sm sm:text-sm focus:ring-blue-light focus:border-blue-light border-blue-dark rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label htmlFor="message" className="block text-sm font-medium text-blue-dark">
                Message
              </label>
            </div>
            <div className="mt-1">
              <textarea
                type="text"
                id="message"
                name="message"
                rows={4}
                className="block w-full shadow-sm sm:text-sm focus:ring-blue-light focus:border-blue-light border border-blue-dark rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-light"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgentContact;