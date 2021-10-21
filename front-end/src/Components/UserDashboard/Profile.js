import React from 'react';
import Header from '../Sections/Header';
import Sidebar from './Sidebar';

const Profile = () => {

  const user = {
    name: 'Chelsea Hagon',
    email: 'chelseahagon@gmail.com',
    phone: '0123456789',
    postcode: '1234',
    location: 'Dhaka, Bangladesh',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }

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
                
                {/* <div className="px-4 sm:px-6 md:px-0">
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
                                <span className="flex-grow">{user.name}</span>
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
                                    src={user.imageUrl}
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
                                <span className="flex-grow">{user.email}</span>
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
                                <span className="flex-grow">{user.phone}</span>
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
                                <span className="flex-grow">{user.postcode}</span>
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
                              <span className="flex-grow">{user.location}</span>
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
                  </div> */}

                  <div className="">
                  <div className="px-4 sm:px-6 md:px-0">

                    <form className="mt-4 space-y-8 divide-y divide-y-blue-gray-200">
                      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                        <div className="sm:col-span-6">
                          <h2 className="text-xl font-medium text-blue-dark">Personal Information</h2>
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="photo" className="block text-sm font-medium text-blue-dark">
                            Photo
                          </label>
                          <div className="mt-1 flex items-center">
                            <img
                              className="inline-block h-12 w-12 rounded-full"
                              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                              alt=""
                            />
                            <div className="ml-4 flex">
                              <div className="relative bg-white py-2 px-3 border border-blue-dark rounded-lg shadow-sm flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-light">
                                <label
                                  htmlFor="user-photo"
                                  className="relative text-sm font-medium text-blue-dark pointer-events-none"
                                >
                                  <span>Change</span>
                                  <span className="sr-only">user photo</span>
                                </label>
                                <input
                                  id="user-photo"
                                  name="user-photo"
                                  type="file"
                                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-lg"
                                />
                              </div>
                              <button
                                type="button"
                                className="ml-3 bg-transparent py-2 px-3 border border-transparent rounded-lg text-sm font-medium text-blue-dark hover:text-blue-gray-700 focus:outline-none focus:border-blue-dark focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-gray-50 focus:ring-blue-light"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="first-name" className="block text-sm font-medium text-blue-dark">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full border-blue-dark rounded-lg shadow-sm text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium text-blue-dark">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full border-blue-dark rounded-lg shadow-sm text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="username" className="block text-sm font-medium text-blue-dark">
                            Username
                          </label>
                          <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="username"
                            className="mt-1 block w-full border-blue-dark rounded-lg shadow-sm text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="user-type" className="block text-sm font-medium text-blue-dark">
                            User Type
                          </label>
                          <select
                            id="user-type"
                            name="user-type"
                            autoComplete="user-type"
                            className="mt-1 block w-full border-blue-dark rounded-lg shadow-sm text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light"
                          >
                            <option />
                            <option value="first_time_buyer">I am a first-time buyer</option>
                            <option value="buyer_not_first_time">I am a buyer (not first-time)</option>
                            <option value="property_to_sell">I have a property to sell</option>
                            <option value="property_to_let">I have a property to let</option>
                            <option value="offer_on_own_property">I have an offer on my property</option>
                            <option value="recently_sold">I have recently sold</option>
                            <option value="looking_to_invest">I am an investor/I'm hoping to invest</option>
                            <option value="looking_to_rent" selected="selected">I am looking to rent</option>
                            <option value="curious_having_a_look">I am interested in property</option>
                            <option value="agent">I am an agent</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        {/* <div className="sm:col-span-6">
                          <label htmlFor="username" className="block text-sm font-medium text-blue-dark">
                            Username
                          </label>
                          <div className="mt-1 flex rounded-lg shadow-sm">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-blue-dark bg-blue-gray-50 text-blue-dark sm:text-sm">
                              workcation.com/
                            </span>
                            <input
                              type="text"
                              name="username"
                              id="username"
                              autoComplete="username"
                              defaultValue="lisamarie"
                              className="flex-1 block w-full min-w-0 border-blue-dark rounded-none rounded-r-md text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light"
                            />
                          </div>
                        </div> */}

                        <div className="sm:col-span-3">
                          <label htmlFor="email-address" className="block text-sm font-medium text-blue-dark">
                            Email Address
                          </label>
                          <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            className="mt-1 block w-full border-blue-dark rounded-lg shadow-sm text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="phone-number" className="block text-sm font-medium text-blue-dark">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="phone-number"
                            id="phone-number"
                            autoComplete="tel"
                            className="mt-1 block w-full border-blue-dark rounded-lg shadow-sm text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="location" className="block text-sm font-medium text-blue-dark">
                            Location
                          </label>
                          <input
                            type="text"
                            name="location"
                            id="location"
                            autoComplete="location"
                            className="mt-1 block w-full border-blue-dark rounded-lg shadow-sm text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="postcode" className="block text-sm font-medium text-blue-dark">
                            Postcode
                          </label>
                          <input
                            type="text"
                            name="postcode"
                            id="postcode"
                            autoComplete="postcode"
                            className="mt-1 block w-full border-blue-dark rounded-lg shadow-sm text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light"
                          />
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="description" className="block text-sm font-medium text-blue-dark">
                            About Me
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="description"
                              name="description"
                              rows={4}
                              className="block w-full border border-blue-dark rounded-lg shadow-sm sm:text-sm focus:ring-blue-light focus:border-blue-light"
                              defaultValue={''}
                            />
                          </div>
                          <p className="mt-3 text-sm text-blue-dark">
                            Brief description about yourself.
                          </p>
                        </div>

                        
                      </div>

                      <div className="pt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                        <div className="sm:col-span-6">
                          <h2 className="text-xl font-medium text-blue-dark">Change Password</h2>
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="current-password" className="block text-sm font-medium text-blue-dark">
                            Current Password
                          </label>
                          <input
                            type="password"
                            name="current-password"
                            id="current-password"
                            autoComplete="current-password"
                            className="mt-1 block w-full border-blue-dark rounded-lg shadow-sm text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light"
                          />
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="new-password" className="block text-sm font-medium text-blue-dark">
                            New Password
                          </label>
                          <input
                            type="password"
                            name="new-password"
                            id="new-password"
                            autoComplete="new-password"
                            className="mt-1 block w-full border-blue-dark rounded-lg shadow-sm text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light"
                          />
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="confirm-new-password" className="block text-sm font-medium text-blue-dark">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            name="confirm-new-password"
                            id="confirm-new-password"
                            autoComplete="confirm-new-password"
                            className="mt-1 block w-full border-blue-dark rounded-lg shadow-sm text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light"
                          />
                        </div>

                      </div>

                      <div className="pt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                        <div className="sm:col-span-6">
                          <h2 className="text-xl font-medium text-blue-dark">Change Email</h2>
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="current-password" className="block text-sm font-medium text-blue-dark">
                            Current Mail
                          </label>
                          <input
                            type="password"
                            name="current-password"
                            id="current-password"
                            autoComplete="current-password"
                            className="mt-1 block w-full border-blue-dark rounded-lg shadow-sm text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light"
                          />
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="new-password" className="block text-sm font-medium text-blue-dark">
                            New Mail
                          </label>
                          <input
                            type="password"
                            name="new-password"
                            id="new-password"
                            autoComplete="new-password"
                            className="mt-1 block w-full border-blue-dark rounded-lg shadow-sm text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light"
                          />
                        </div>

                      </div>

                      <div className="pt-8 flex justify-end">
                        <button
                          type="button"
                          className="bg-white py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-blue-dark hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
                        >
                          Save
                        </button>
                      </div>
                    </form>
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