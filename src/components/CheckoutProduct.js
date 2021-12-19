import { StarIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter'

function CheckoutProduct({ id, title, price, description, category, image, rating }) {
    const [star] = useState(Math.floor(Math.random() * 5));
    const [hasPrime] = useState(Math.random() < 0.5);
    return (
        <div className="grid grid-cols-5">
            <img width={200} height={200} src={image} alt="" />

            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(star).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="py-2 text-sm mb-2 line-clamp-2">
                    {description}
                </p>
                <Currency quantity={price} currency="GBP" />

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt="" />
                        <p className="text-xs text-gray-400">FREE next day delivery</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
