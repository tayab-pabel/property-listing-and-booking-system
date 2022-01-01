import React from 'react'

const Features = () => {
  const features = [
    { id: 1, name: 'Reception Area' },
    { id: 2, name: 'Lobby in Building' },
    { id: 3, name: 'Tiled Floor' },
    { id: 4, name: 'Flooring' },
    { id: 5, name: 'Balcony' },
    { id: 6, name: 'Terrace' },
    { id: 7, name: 'Elevator' },
    { id: 8, name: 'Parking' },
    { id: 9, name: 'Guest Parking' },
    { id: 10, name: 'Fire Exit' },
    { id: 11, name: 'Fire Protection' },
    { id: 12, name: 'Gas' },
    { id: 13, name: 'Cylinder Gas' },
    { id: 14, name: 'Water' },
    { id: 15, name: 'Hot Water' },
    { id: 16, name: 'Electricity' },
    { id: 17, name: 'Electricity Backup' },
    { id: 18, name: 'Pool' },
    { id: 19, name: 'Gymnasium' },
    { id: 20, name: 'Solar Panels' },
    { id: 21, name: 'Servant Room' },
    { id: 22, name: 'Servant Toilet' },
    { id: 23, name: 'Well Ventilated' },
    { id: 24, name: 'Conference Room' },
    { id: 25, name: 'Stuff Watch Station' },
    { id: 26, name: 'Manager Room' },
    { id: 27, name: 'Executive Room' },
    { id: 28, name: 'Supervisor Room' },
    { id: 29, name: 'Cafeteria' },
    { id: 30, name: 'File Cabinet' },
    { id: 31, name: 'Coffee Table' },
    { id: 32, name: 'Office Sofa' },
    { id: 33, name: 'Training Chair' },
    { id: 34, name: 'Storage Cabinet' },
    { id: 35, name: 'Maintenance Staff' },
    { id: 36, name: 'Cleaning Service' },
  ]
  return (
    <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6'>
      <div className='sm:col-span-6'>
        <label
          htmlFor='floor-plan'
          className='block font-medium text-blue-dark '
        >
          Check Features
        </label>
        <div className="mt-1">
          <div>
            <div>
              {features.map((feature, featureIdx) => (
                <div key={featureIdx} className="relative flex py-1">
                  <div className="mr-3 flex items-center h-5">
                    <input
                      id={`feature-${feature.id}`}
                      name={`feature-${feature.id}`}
                      type="checkbox"
                      className="focus:ring-blue-light h-4 w-4 text-blue-light border-gray-300 rounded"
                    />
                  </div>
                  <div className="text-sm">
                    <label 
                    htmlFor={`feature-${feature.id}`}className="font-medium text-blue-dark select-none"
                    >
                      {feature.name}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
