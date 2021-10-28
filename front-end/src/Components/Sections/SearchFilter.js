import { Fragment, useState } from 'react'
import { Dialog, Menu, RadioGroup, Tab, Transition } from '@headlessui/react'
import {
  AdjustmentsIcon,
  ArchiveIcon as ArchiveIconSolid,
  ChevronDownIcon,
  SearchIcon,
} from '@heroicons/react/solid'
import {
  ArchiveIcon as ArchiveIconOutline,
  BellIcon,
  LocationMarkerIcon,
  XIcon,
} from '@heroicons/react/outline'
import { Link } from 'react-router-dom';

const SearchFilter = () => {
  const [redirect, setRedirect] = useState('rent')

  const tabs = [
    { 
      name: 'For Sale', 
      path: 'sale', 
    },
    {
      name: 'To Rent',
      path: 'rent', 
    },
  ]

  let [propertTypes] = useState({
    Residential: [
      {
        id: 1,
        title: 'Apartment',
      },
      {
        id: 2,
        title: "Plaza",
      },
      {
        id: 3,
        title: "Plot",
      },
      {
        id: 4,
        title: "Room",
      },
      {
        id: 5,
        title: "Duplex",
      },
      {
        id: 5,
        title: "Building",
      },
    ],
    Commercial: [
      {
        id: 1,
        title: 'Office',
      },
      {
        id: 2,
        title: 'Floor',
      },
      {
        id: 3,
        title: 'Duplex',
      },
      {
        id: 4,
        title: 'Building',
      },
      {
        id: 5,
        title: 'Warehouse',
      },
      {
        id: 6,
        title: 'Shop',
      },
      {
        id: 7,
        title: 'Apartment',
      },
      {
        id: 8,
        title: 'Plot',
      },
      {
        id: 9,
        title: 'Factory',
      },
    ],
  })

  const user = {
    name: 'Whitney Francis',
    email: 'whitneyfrancis@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }

  const navigation = [
    {
      name: 'Inboxes',
      href: '#',
      children: [
        { name: 'Technical Support', href: '#' },
        { name: 'Sales', href: '#' },
        { name: 'General', href: '#' },
      ],
    },
    { name: 'Reporting', href: '#', children: [] },
    { name: 'Settings', href: '#', children: [] },
  ]

  
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const [open, setOpen] = useState(false)

  return (
    <div>
      <header className="flex-shrink-0 relative h-16 bg-white flex items-center border-t border-b border-gray-100">
          {/* Logo area */}
          <div className="absolute inset-y-0 left-0 lg:static lg:flex-shrink-0">
            
          </div>

          

          {/* Menu button area */}
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 lg:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="-mr-2 inline-flex items-center justify-center py-2 px-3 rounded-lg text-white bg-blue-light hover:bg-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
              onClick={() => setOpen(true)}
            >
              <AdjustmentsIcon className="mr-1 block h-5 w-5" aria-hidden="true" />
              <span className="">Filter</span>
            </button>
          </div>

          {/* Desktop nav area */}
          <div className="hidden lg:min-w-0 lg:flex-1 lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <div className="max-w-2xl relative text-blue-dark focus-within:text-blue-dark">
                <label htmlFor="desktop-search" className="sr-only">
                  Search all inboxes
                </label>
                <input
                  id="desktop-search"
                  type="search"
                  placeholder="Search all inboxes"
                  className="block w-full border-transparent pl-12 placeholder-blue-dark focus:border-transparent sm:text-sm focus:ring-0"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                  <SearchIcon className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
              <nav aria-label="Global" className="flex space-x-10">
                {navigation.map((item) =>
                  item.children.length ? (
                    <Menu as="div" key={item.name} className="relative text-left">
                      <Menu.Button className="flex items-center text-sm font-medium text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light">
                        <span>{item.name}</span>
                        <ChevronDownIcon className="ml-1 h-5 w-5 text-blue-dark" aria-hidden="true" />
                      </Menu.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute z-30 right-0 mt-2 w-40 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {item.children.map((child) => (
                              <Menu.Item key={child.name}>
                                {({ active }) => (
                                  <a
                                    href={child.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {child.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <a key={item.name} href={item.href} className="text-sm font-medium text-gray-900">
                      {item.name}
                    </a>
                  )
                )}
              </nav>
              <div className="flex items-center space-x-8">
                <span className="inline-flex">
                  <a href="#" className="-mx-1 bg-white p-1 rounded-full text-blue-dark hover:text-blue-dark">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </span>

                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign Out
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide this `div` based on menu open/closed state */}
          <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-40 lg:hidden" onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="hidden sm:block sm:fixed sm:inset-0 sm:bg-blue-dark sm:bg-opacity-75" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
                enterFrom="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
                enterTo="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
                leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
                leaveFrom="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
                leaveTo="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
              >
                <nav
                  className="fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg px-4 sm:px-6"
                  aria-label="Global"
                >
                  <div className="h-16 flex items-center justify-between">
                    <h2 className='font-medium text-blue-dark'>
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-lg text-blue-dark hover:text-blue-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-light"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="block h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="max-w-full mx-auto">
                    <div className="relative p-0.5 rounded-lg flex border border-blue-dark bg-white" aria-label="Tabs">
                      {tabs.map((tab) => (
                        <Link
                          key={tab.name}
                          onClick={() => setRedirect(tab.path)}
                          to= ""
                          className={classNames(
                            redirect && redirect === tab.path 
                            ? 'text-white bg-blue-light' 
                            : 'text-blue-dark',
                            'group relative min-w-0 flex-1 overflow-hidden p-2 font-medium text-sm text-center focus:z-10 rounded-lg'
                          )}
                          // aria-current={
                          //   redirect && redirect === tab.path ? 'page' : undefined
                          // }
                        >
                          <span>{tab.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className='mt-3'>
                    <label
                      htmlFor='location'
                      className='block text-sm font-medium text-blue-dark'
                    >
                      Location
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LocationMarkerIcon className="h-5 w-5 text-blue-dark" aria-hidden="true" />
                      </div>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        autoComplete="location"
                        className="focus:ring-blue-light focus:border-blue-light block w-full pl-10 border border-blue-dark rounded-md text-sm text-blue-dark placeholder-blue-dark"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className='text-sm font-medium text-blue-dark'>
                      Property Type
                    </p>
                    <div className="mt-1">
                      <Tab.Group>
                        <Tab.List className="flex p-0.5 space-x-1 rounded-lg bg-white border border-blue-dark">
                          {Object.keys(propertTypes).map((propertType) => (
                            <Tab
                              key={propertType}
                              className={({ selected }) =>
                                classNames(
                                  'w-full py-2.5 text-sm leading-5 font-medium rounded-lg',
                                  '',
                                  selected
                                    ? 'text-white bg-blue-light'
                                    : 'text-blue-dark'
                                )
                              }
                            >
                              {propertType}
                            </Tab>
                          ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                          {Object.values(propertTypes).map((idx) => (
                            <Tab.Panel
                              key={idx}
                            >
                              <div className="grid grid-cols-2">
                                {idx.map((propertType) => (
                                  <div
                                    key={propertType.id}
                                  >
                                    <div className="relative flex items-start py-0.5">
                                      <div className="flex items-center h-5">
                                        <input
                                          id="propert-type"
                                          name="propert-type"
                                          type="checkbox"
                                          className="focus:ring-blue-light text-blue-light border-blue-dark rounded-lg"
                                        />
                                      </div>
                                      <div className="ml-3 text-sm">
                                        <label htmlFor="candidates" className="text-sm font-medium text-blue-dark">
                                          {propertType.title}
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </Tab.Panel>
                          ))}
                        </Tab.Panels>
                      </Tab.Group>
                    </div>
                  </div>
                  
                </nav>
              </Transition.Child>
            </Dialog>
          </Transition.Root>
        </header>
    </div>
  );
};

export default SearchFilter;