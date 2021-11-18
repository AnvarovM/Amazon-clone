import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from 'react-currency-formatter'

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
      Math.floor(Math.random() * 5)
  );

  const [hasPrime] = useState(
      Math.random() < 0.5
  )
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-sm italic text-gray-400">{category}</p>
      <img className="mx-auto" src={image} width={200} height={200} alt="products image" />
      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-300" />
          ))}
      </div>

      
      <p className="text-sm my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
            <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
          <div className="flex items-center space-x-2 -mt-5">
              <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
              <p className="text-sm text-gray-500">FREE next day delivery</p>
          </div>
      )}

      <button className="mt-auto button">Add and Basket</button>
    </div>
  );
}

export default Product;
