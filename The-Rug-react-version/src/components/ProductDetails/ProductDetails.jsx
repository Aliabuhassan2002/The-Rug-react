import React, { useState } from 'react';

const ProductDeatails = () => {
    const [selectedSize, setSelectedSize] = useState('');

    const product = {
        name: 'Rug Name',
        price: 335,
        delivery: 25,
        discount: 'Buy two and get 33% discount',
        colors: ['#D8D2C2', '#4A4947', '#FAF7F0'], // Replace with actual color codes or names
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            '/src/assets/rug8/josh-hemsley-wPYvAFGrL4A-unsplash.jpg', // Replace with your image paths
            '/src/assets/rug8/lotus-design-n-print-SWOmTM6WivM-unsplash.jpg',
            '/src/assets/rug8/jelena-mirkovic-Tp7kc0p0W8c-unsplash.jpg',
        ],
    };

    const handleAddToCart = () => {
        console.log('Added to cart:', product.name, selectedSize);
    };

    return (
        <div className="container mx-auto p-4 flex flex-col md:flex-row pt-35">
            <div className="md:w-1/2">
                <img src={product.images[0]} alt={product.name} className="w-full rounded-lg h-150" />
                <div className="flex mt-4 space-x-4"> {/* Thumbnail Images */}
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${product.name} - Thumbnail ${index + 1}`}
                            className="w-24 h-24 rounded-lg cursor-pointer border border-gray-300"
                        />
                    ))}
                </div>
            </div>

            <div className="md:w-1/2 md:pl-8">
                <div className="bg-yellow-100 p-6 rounded-lg"> {/* Beige Box */}
                    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                    <p className="text-lg">Price: {product.price} | Delivery: {product.delivery}</p>
                    <p className="text-red-500 mb-4">{product.discount}</p>

                    <div className="mb-4">
                        <p className="font-medium">Color: {product.colors.map(color => (
                            <span className={`inline-block w-6 h-6 rounded-full mr-2 border border-gray-300 cursor-pointer ${color === 'O' ? 'bg-yellow-400' : ''}`} style={{ backgroundColor: color === 'O' ? 'transparent' : color }}></span>
                        ))}
                        </p>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="size" className="block font-medium">Choose the size</label>
                        <select
                            id="size"
                            className="border border-gray-300 rounded px-4 py-2 mt-1 w-full"
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                        >
                            <option value="">Select a size</option>
                            {product.sizes.map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>

                    <button
                        className="bg-gray-500 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded w-full"
                        onClick={handleAddToCart}
                    >
                       Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDeatails;