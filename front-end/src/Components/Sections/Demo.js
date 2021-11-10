import { Dialog, Disclosure, Popover, Tab, Transition } from '@headlessui/react';
import { ChevronDownIcon, LocationMarkerIcon, XIcon } from '@heroicons/react/outline';
import { Fragment, useState } from 'react';

const Demo = () => {

  const sortOptions = [
    { name: 'Buy', href: '#' },
    { name: 'Rent', href: '#' },
  ]
  const filters = [
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'tees', label: 'Tees' },
        { value: 'crewnecks', label: 'Crewnecks' },
        { value: 'hats', label: 'Hats' },
      ],
    },
    {
      id: 'brand',
      name: 'Brand',
      options: [
        { value: 'clothing-company', label: 'Clothing Company' },
        { value: 'fashion-inc', label: 'Fashion Inc.' },
        { value: 'shoes-n-more', label: "Shoes 'n More" },
      ],
    },
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White' },
        { value: 'blue-dark', label: 'blue-dark' },
        { value: 'grey', label: 'Grey' },
      ],
    },
    {
      id: 'sizes',
      name: 'Sizes',
      options: [
        { value: 's', label: 'S' },
        { value: 'm', label: 'M' },
        { value: 'l', label: 'L' },
      ],
    },
  ]

  const solutions = [
    { name: 'Blog', description: 'Learn about tips, product updates and company culture.', href: '#' },
    {
      name: 'Help Center',
      description: 'Get all of your questions answered in our forums of contact support.',
      href: '#',
    },
    { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
    { name: 'Events', description: 'Check out webinars with experts and learn about our annual conference.', href: '#' },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
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
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="bg-gray-100">
      {/* Mobile filter dialog */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 sm:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-blue-dark bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="ml-auto relative max-w-full w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
              <div className="px-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-blue-dark">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 w-10 h-10 bg-white p-2 rounded-lg flex items-center justify-center text-blue-dark hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-light"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4">
                {filters.map((section) => (
                  <Disclosure as="div" key={section.name} className="border-t border-gray-200 px-4 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-blue-dark">
                            <span className="font-medium text-blue-dark">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              <ChevronDownIcon
                                className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  className="h-4 w-4 border-blue-dark rounded text-blue-light focus:ring-blue-light"
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-500"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Large Device */}
      <div className="max-w-full mx-auto px-4 sm:px-6 text-center">
        
        <section className="py-6">
          <h2 id="filter-heading" className="sr-only">
            Product filters
          </h2>

          <div className="">
            
            <button
              type="button"
              className="inline-block text-sm font-medium text-blue-dark sm:hidden"
              onClick={() => setOpen(true)}
            >
              Filters
            </button>

            <div className="hidden sm:flex sm:items-baseline sm:space-x-8">

              <div className="flex gap-4">

                <div className="flex-auto">
                  <label htmlFor="purpose" className="block text-left text-sm font-medium text-blue-dark">
                    Purpose
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-blue-dark focus:outline-none focus:ring-blue-light focus:border-blue-light text-blue-dark placeholder-blue-dark sm:text-sm rounded-lg"
                    defaultValue="Rent"
                  >
                    <option>Rent</option>
                    <option>Buy</option>
                  </select>
                </div>

                <div className="flex-auto">
                  <label htmlFor="location" className="block text-left text-sm font-medium text-blue-dark">
                    Location
                  </label>
                  <div className="mt-1 relative rounded-lg">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LocationMarkerIcon className="h-5 w-5 text-blue-dark" aria-hidden="true" />
                      </div>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        autoComplete="location"
                        className="focus:ring-blue-light focus:border-blue-light block w-full pl-10 border border-blue-dark rounded-lg text-sm text-blue-dark placeholder-blue-dark"
                        placeholder="Location or Postcode"
                      />
                    </div>
                </div>

                <div className="flex-auto">
                  <label htmlFor="purpose" className="block text-left text-sm font-medium text-blue-dark">
                    Search Radius
                  </label>
                  <select 
                    id="searchRadius"
                    name="searchRadius"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-blue-dark focus:outline-none focus:ring-blue-light focus:border-blue-light text-blue-dark placeholder-blue-dark sm:text-sm rounded-lg"
                    defaultValue="Rent"
                  >
                    <option value="0">This area only</option>
                    <option value="0.25">+ ¼ mile</option>
                    <option value="0.5">+ ½ mile</option>
                    <option value="1">+ 1 mile</option>
                    <option value="3">+ 3 miles</option>
                    <option value="5">+ 5 miles</option>
                    <option value="10">+ 10 miles</option>
                    <option value="15">+ 15 miles</option>
                    <option value="20">+ 20 miles</option>
                    <option value="30">+ 30 miles</option>
                    <option value="40">+ 40 miles</option>
                  </select>
                </div>

                <div className="flex-auto">
                  <label htmlFor="purpose" className="block text-left text-sm font-medium text-blue-dark">
                    Property Type
                  </label>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                        >
                          <select
                            id="searchRadius"
                            name="searchRadius"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-blue-dark focus:outline-none focus:ring-blue-light focus:border-blue-light text-blue-dark placeholder-blue-dark sm:text-sm rounded-lg"
                            defaultValue="Rent"
                          >
                            <option>Solutions</option>
                          </select>
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-6 w-screen max-w-xs">
                            <div className="rounded-lg shadow-lg p-5 ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <Tab.Group>
                              <Tab.List className="flex p-0.5 space-x-1 rounded-lg bg-white border border-blue-dark">
                                {Object.keys(propertTypes).map((propertType) => (
                                  <Tab
                                    key={propertType}
                                    className={({ selected }) =>
                                      classNames(
                                        'w-full p-2 text-sm leading-5 font-medium rounded-lg',
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
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </div>

              </div>

              

            </div>
          </div>
          
        </section>
      </div>

    </div>
    </div>
  );
};

export default Demo;