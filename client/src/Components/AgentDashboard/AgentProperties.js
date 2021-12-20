import React from 'react'

const AgentProperties = () => {
  const properties = [
    {
      id: '001',
      postType: 'Basic',
      purpose: 'Rent',
      name: 'Two bedrooms appertment',
      propertType: 'Apartment',
      address: {
        location: 'Dhanmondi',
        city: 'Dhaka',
        postalCode: '1215',
      },
      size: '1200',
      price: '25,000',
      beds: '3',
      baths: '3',
      floor: '4',
      featuredImage:
      'https://lid.zoocdn.com/u/2400/1800/c447789c6cf4ab231b224a751c3eba3c91b2ba77.jpg:p',
    },
  ]
  return (
    <div className=''>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title & Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Info & Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Purpose
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {properties.map((property) => (
                    <tr key={property.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-lg" src={property.featuredImage} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{property.name}</div>
                            <div className="text-sm text-gray-500">{property.address.location}, {property.address.city} - {property.address.postalCode}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{property.price} BDT</div>
                        <div className="text-sm text-gray-500">{property.beds} Beds, {property.baths} Baths, {property.size} Sqft</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property.purpose}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentProperties
