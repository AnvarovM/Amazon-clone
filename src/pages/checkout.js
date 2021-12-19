import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import { selectItems } from '../slices/basketSlice'

function checkout() {
    const items = useSelector(selectItems)
    return (
        <div className='bg-gray-100'>
            <Header />

            <main className="max-w-screen-2xl mx-auto">
                {/* left */}
                <div className="flex-grow m-5 shadow-sm">
                    <img width={1024} height="250" src="https://links.papareact.com/ikj" alt="" />

                    <div className="flex flex-col p-5 space-y-5 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length === 0 ? 'Your Amazon Basket is empty' : 'Shopping basket'}
                        </h1>
                        {items.map((item,i) => (
                            <CheckoutProduct 
                            key={i}
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                            hasPrime={item.hasPrime}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default checkout
