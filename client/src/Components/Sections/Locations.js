import React from 'react';

const Locations = () => {
    const locations = [
        {
            city: "Dhaka",
            propertyCount: 115,
            imageUrl: "https://i.ibb.co/1KtPPxQ/dhaka.jpg",
            imageAlt: "Dhaka",
        },
        {
            city: "Chattogram",
            propertyCount: 85,
            imageUrl: "https://i.ibb.co/KzBWS2P/chittagong.jpg",
            imageAlt: "Chattogram",
        },
        {
            city: "Mymensingh",
            propertyCount: 91,
            imageUrl: "https://i.ibb.co/j372tHT/mymensingh.jpg",
            imageAlt: "Mymensingh",
        },
        {
            city: "Sylhet",
            propertyCount: 63,
            imageUrl: "https://i.ibb.co/BN8MBFX/sylhet.jpg",
            imageAlt: "Sylhet",
        },
        {
            city: "Rajshahi",
            propertyCount: 47,
            imageUrl: "https://i.ibb.co/Kr92xGq/rajshahi.jpg",
            imageAlt: "Rajshahi",
        },
        {
            city: "Khulna",
            propertyCount: 73,
            imageUrl: "https://i.ibb.co/smxpfDV/khulna.jpg",
            imageAlt: "Khulna",
        },
        {
            city: "Rangpur",
            propertyCount: 22,
            imageUrl: "https://i.ibb.co/924FdRK/rangpur.jpg",
            imageAlt: "Rangpur",
        },
        {
            city: "Barishal",
            propertyCount: 32,
            imageUrl: "https://i.ibb.co/CmKYn33/barishal.jpg",
            imageAlt: "Barishal",
        },
    ]

    return (
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-6 py-20">
            <h2 className="text-3xl text-center text-blue-dark font-bold">Explore Properties By City</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                {locations.map((location) => (
                    <div key={location.city} className="flex items-center rounded-lg bg-white shadow overflow-hidden">
                        <img className="h-28 w-28 flex-shrink-0" src={location.imageUrl} alt={location.imageAlt} />
                        <div className="px-6 py-4">
                            <h3 className="text-2xl font-semibold text-blue-dark">
                                {location.city}
                            </h3>
                            <div className="mt-2">
                                <a href="#" className="text-blue-light text-sm">
                                    Explore {location.propertyCount} properties
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Locations;