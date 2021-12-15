import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

const CustomDrawer = ({ showDrawer, drawerHandler, title, children }) => {
  return (
    <Transition.Root show={showDrawer ? true : false} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 flex z-40 lg:hidden'
        onClose={drawerHandler}
      >
        <div className=''>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-50' />
          </Transition.Child>
          <div className='fixed inset-y-0 right-0 w-5/5 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='w-screen max-w-md sm:px-0 lg:ml-0'>
                <div className='h-full w-full flex flex-col bg-white shadow-xl overflow-y-scroll'>
                  <div className='flex-1 py-6 overflow-y-auto px-4 sm:px-6'>
                    <Dialog.Title>
                      <div className='flex items-center justify-between w-full'>
                        <p className='text-lg font-bold text-blue-dark'>
                          {title}
                        </p>
                        <XIcon
                          onClick={drawerHandler}
                          className='h-6 w-6 cursor-pointer text-blue-light hover:text-red-500'
                        />
                      </div>
                    </Dialog.Title>
                    <div className='mt-5'>
                      {/* Filter Iitems Start From Here */}
                      <div className=''>
                        <div className='space-y-4 text-xs '>
                          {children}
                        </div>
                      </div>
                      {/* Filter Items End Here */}
                    </div>
                  </div>
                  <div className='border-t border-gray-200 py-2 lg:py-6 px-6 space-y-4'>
                    <div className='mt-2 justify-center text-sm text-center text-gray-500'>
                      
                      <button
                        type='button'
                        className='w-full py-2.5 border bg-white border-blue-light text-blue-light font-medium rounded-lg text-base shadow'
                        onClick={drawerHandler}
                      >
                        <span aria-hidden='true'>Save Search</span>
                      </button>
                      
                      <button
                        type='button'
                        className='mt-2 w-full py-2.5 border bg-blue-light border-blue-light text-white font-medium rounded-lg text-base shadow'
                        onClick={drawerHandler}
                      >
                        <span aria-hidden='true'>Search Property</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default CustomDrawer
