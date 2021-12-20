import { CheckIcon, MinusIcon } from '@heroicons/react/solid';
import React, { Fragment } from 'react';

const AgentPlans = () => {

  const tiers = [
    {
      name: 'Silver', 
      href: '#', 
      priceMonthly: 5000, 
    },
    {
      name: 'Gold',
      href: '#',
      priceMonthly: 8000,
    },
    {
      name: 'Platinum',
      href: '#',
      priceMonthly: 12000,
    },
  ]

  const sections = [
    {
      name: 'Features',
      features: [
        { name: 'Post property on propertymarket.com', tiers: { Silver: true, Gold: true, Platinum: true } },
        { name: 'Unlimited photo displayed', tiers: { Silver: true, Gold: true, Platinum: true } },
        { name: 'Check property performance', tiers: { Silver: true, Gold: true, Platinum: true } },
        { name: 'Agent profile page', tiers: { Silver: true, Gold: true, Platinum: true } },
        { name: 'Basic posting', tiers: { Silver: 'Up to 50 posts', Gold: 'Up to 100 posts', Platinum: 'Up to 150 posts' } },
        { name: 'Featured posting', tiers: { Silver: 'Up to 10 posts', Gold: 'Up to 20 posts', Platinum: 'Up to 30 posts' } },
      ],
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="px-4 sm:px-6 py-6 xl:py-6 bg-white xl:shadow lg:rounded-lg">
      <div className="">
        {/* xs to lg */}
        <div className="mx-auto space-y-16 lg:hidden">
          {tiers.map((tier, tierIdx) => (
            <section key={tier.name}>
              <div className="px-4 mb-8 text-center">
                <h2 className="text-lg leading-6 font-medium text-blue-dark">{tier.name}</h2>
                <p className="mt-4">
                  <span className="text-3xl font-extrabold text-blue-dark">BDT {tier.priceMonthly}</span>{' '}
                  <span className="text-base font-medium text-blue-dark">/mo</span>
                </p>
              </div>

              {sections.map((section) => (
                <table key={section.name} className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-blue-dark text-left">
                    {section.name}
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {section.features.map((feature) => (
                      <tr key={feature.name} className="border-t border-gray-200">
                        <th className="py-5 px-4 text-sm font-normal text-blue-dark text-left" scope="row">
                          {feature.name}
                        </th>
                        <td className="py-5 pr-4">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-sm text-blue-dark text-right">{feature.tiers[tier.name]}</span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon className="ml-auto h-5 w-5 text-blue-light" aria-hidden="true" />
                              ) : (
                                <MinusIcon className="ml-auto h-5 w-5 text-blue-dark" aria-hidden="true" />
                              )}

                              <span className="sr-only">{feature.tiers[tier.name] === true ? 'Yes' : 'No'}</span>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}

              <div
                className={classNames(
                  tierIdx < tiers.length - 1 ? 'py-5 border-b' : 'pt-5',
                  'border-t border-gray-200 px-4'
                )}
              >
                <a
                  href={tier.href}
                  className="block w-full bg-blue-light rounded-lg py-2 text-sm font-semibold text-white text-center"
                >
                  Buy {tier.name}
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="hidden lg:block">
          <table className="w-full h-px table-fixed">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th className="pb-4 px-6 text-sm font-medium text-blue-dark text-left" scope="col">
                  <span className="sr-only">Feature by</span>
                  <span>Plans</span>
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-blue-dark text-center"
                    scope="col"
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
              <tr>
                <th className="py-8 px-6 text-sm font-medium text-blue-dark text-left align-top" scope="row">
                  Pricing
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="h-full py-8 px-6 align-top">
                    <div className="relative h-full table mx-auto">
                      <p>
                        <span className="text-3xl font-extrabold text-blue-dark">BDT {tier.priceMonthly}</span>{' '}
                        <span className="text-base font-medium text-blue-dark">/mo</span>
                      </p>
                    </div>
                  </td>
                ))}
              </tr>
              {sections.map((section) => (
                <Fragment key={section.name}>
                  <tr>
                    <th
                      className="bg-gray-50 py-3 pl-6 text-sm font-medium text-blue-dark text-left"
                      colSpan={4}
                      scope="colgroup"
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature) => (
                    <tr key={feature.name}>
                      <th className="py-5 px-6 text-sm font-normal text-blue-dark text-left" scope="row">
                        {feature.name}
                      </th>
                      {tiers.map((tier) => (
                        <td key={tier.name} className="py-5 px-6 text-center">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-sm text-blue-dark">{feature.tiers[tier.name]}</span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon className="h-5 w-5 text-blue-light mx-auto" aria-hidden="true" />
                              ) : (
                                <MinusIcon className="h-5 w-5 text-blue-dark mx-auto" aria-hidden="true" />
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-200">
                <th className="sr-only" scope="row">
                  Choose your plan
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="pt-5 px-6">
                    <a
                      href={tier.href}
                      className="block w-full bg-blue-light rounded-lg py-2 text-sm font-semibold text-white text-center"
                    >
                      Buy {tier.name}
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AgentPlans