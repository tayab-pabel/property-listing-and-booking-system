import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

const CustomDrawer = ({ showDrawer, drawerHandler, title, children }) => {
  return (
    <Transition.Root show={showDrawer ? true : false} as={Fragment}>
      <Dialog
        as='div'
        className='absolute z-30 inset-0 overflow-hidden'
        onClose={drawerHandler}
      >
        <div className='absolute z-30 inset-0 overflow-hidden'>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='absolute h-screen inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>
          <div className='fixed inset-y-0 right-0 pl-30 w-4/5 flex'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='w-screen max-w-md'>
                <div className='h-full flex flex-col bg-white shadow-xl overflow-y-scroll'>
                  <div className='flex-1 py-6 overflow-y-auto px-4 sm:px-6'>
                    <Dialog.Title>
                      <div className='flex items-center justify-between w-full'>
                        <p className='text-lg font-bold uppercase text-blue-dark'>
                          {title}
                        </p>
                        <XIcon
                          onClick={drawerHandler}
                          className='h-6 w-6 cursor-pointer text-blue-light hover:text-red-500'
                        />
                      </div>
                    </Dialog.Title>
                    <div className='mt-8'>
                      {/* Filter Iitems Start From Here */}
                      <div className='bg-white p-4 shadow rounded'>
                        <div className=' divide-y divide-gray-200 space-y-4 text-xs '>
                          {children}
                        </div>
                      </div>
                      {/* Filter Items End Here */}
                    </div>
                  </div>
                  <div className='border-t border-gray-200 py-2 lg:py-6 px-6 space-y-4'>
                    <div className='mt-2 flex justify-center text-sm text-center text-gray-500'>
                      <p>
                        <button
                          type='button'
                          className='text-blue-dark font-medium hover:text-primary'
                          onClick={drawerHandler}
                        >
                          <span aria-hidden='true'>Back</span>
                        </button>
                      </p>
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
