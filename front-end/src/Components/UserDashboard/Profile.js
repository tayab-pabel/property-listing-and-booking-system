import React from 'react';
import Header from '../Sections/Header';
import Sidebar from './Sidebar';

const Profile = () => {

  const tabs = [
    { name: 'General', href: '#', current: true },
    { name: 'Change Password', href: '#', current: false },
    { name: 'Change  Email', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  } 
  
  return (
    <div>
      <Header></Header>
      <div className="h-full">
        <main className="max-w-full mx-auto">
          <div className="lg:grid lg:grid-cols-12">
            
            <div className="bg-blue-dark lg:col-span-3 py-6 px-4 sm:px-6 lg:px-6 lg:py-6 lg:min-h-screen">
              <Sidebar></Sidebar>
            </div>

            <div className="bg-gray-100 lg:col-span-9 lg:py-6 lg:px-6 lg:min-h-screen ">
              <div className="bg-white shadow sm:rounded-lg py-6 sm:px-0 md:px-6 lg:px-6 lg:py-6">
              <div className="max-w-full">
                <div className="px-4 sm:px-6 md:px-0">
                  <h2 className="text-2xl font-extrabold text-blue-dark">Edit Profile</h2>
                </div>
                <div className="px-4 sm:px-6 md:px-0">
                      <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8">
                          {tabs.map((tab) => (
                            <a
                              key={tab.name}
                              href={tab.href}
                              className={classNames(
                              tab.current
                              ? 'border-blue-light text-blue-light'
                              : 'border-transparent text-blue-dark hover:border-blue-dark',
                              'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                              )}
                            >
                              {tab.name}
                            </a>
                          ))}
                        </nav>
                      </div>

                      <div className="divide-y divide-gray-200">
                        <div className="">
                          <dl className="divide-y divide-gray-200">

                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                              <dt className="text-sm font-medium text-blue-dark">Name</dt>
                              <dd className="mt-1 flex text-sm text-blue-dark sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">Chelsea Hagon</span>
                                <span className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    className="bg-white rounded font-medium text-blue-light hover:text-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
                                  >
                                    Update
                                  </button>
                                </span>
                              </dd>
                            </div>

                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                              <dt className="text-sm font-medium text-blue-dark">Photo</dt>
                              <dd className="mt-1 flex text-sm text-blue-dark sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">
                                  <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                  />
                                </span>
                                <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                  <button
                                    type="button"
                                    className="bg-white rounded font-medium text-blue-light hover:text-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
                                  >
                                    Update
                                  </button>
                                  <span className="text-gray-300" aria-hidden="true">
                                    |
                                  </span>
                                  <button
                                    type="button"
                                    className="bg-white rounded font-medium text-blue-light hover:text-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
                                  >
                                    Remove
                                  </button>
                                </span>
                              </dd>
                            </div>

                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                              <dt className="text-sm font-medium text-blue-dark">Email</dt>
                              <dd className="mt-1 flex text-sm text-blue-dark sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">chelsea.hagon@example.com</span>
                                <span className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    className="bg-white rounded font-medium text-blue-light hover:text-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
                                  >
                                    Update
                                  </button>
                                </span>
                              </dd>
                            </div>

                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-100">
                              <dt className="text-sm font-medium text-blue-dark">Phone</dt>
                              <dd className="mt-1 flex text-sm text-blue-dark sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">0123456789</span>
                                <span className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    className="bg-white rounded font-medium text-blue-light hover:text-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
                                  >
                                    Update
                                  </button>
                                </span>
                              </dd>
                            </div>

                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-100">
                              <dt className="text-sm font-medium text-blue-dark">Postcode</dt>
                              <dd className="mt-1 flex text-sm text-blue-dark sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">1250</span>
                                <span className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    className="bg-white rounded font-medium text-blue-light hover:text-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
                                  >
                                    Update
                                  </button>
                                </span>
                              </dd>
                            </div>

                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-100">
                            <dt className="text-sm font-medium text-blue-dark">Location</dt>
                            <dd className="mt-1 flex text-sm text-blue-dark sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">Dhanmondi, Dhaka</span>
                              <span className="ml-4 flex-shrink-0">
                                <button
                                  type="button"
                                  className="bg-white rounded font-medium text-blue-light hover:text-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
                                >
                                  Update
                                </button>
                              </span>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>   
  );
};

export default Profile;