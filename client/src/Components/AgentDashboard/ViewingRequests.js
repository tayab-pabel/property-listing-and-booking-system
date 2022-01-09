import React from 'react'

const ViewingRequests = () => {
  const requests = [
    { name: 'Jane Cooper', phone: '01711111111', email: 'jane.cooper@example.com' },
    { name: 'Cody Fisher', phone: '01711111111', email: 'cody.fisher@example.com' },
    { name: 'Jane Cooper', phone: '01711111111', email: 'jane.cooper@example.com' },
    { name: 'Cody Fisher', phone: '01711111111', email: 'cody.fisher@example.com' },
    { name: 'Jane Cooper', phone: '01711111111', email: 'jane.cooper@example.com' },
    { name: 'Cody Fisher', phone: '01711111111', email: 'cody.fisher@example.com' },
    { name: 'Jane Cooper', phone: '01711111111', email: 'jane.cooper@example.com' },
    { name: 'Cody Fisher', phone: '01711111111', email: 'cody.fisher@example.com' },
    // More requests...
  ]
  return (
    <div className=''>
      <div className=''>
      <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-blue-dark uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-blue-dark uppercase tracking-wider"
                      >
                        Phone Number
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-blue-dark uppercase tracking-wider"
                      >
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((person, personIdx) => (
                      <tr key={person.email} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-dark">{person.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-dark">{person.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-dark">{person.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewingRequests
