import React, { useState } from 'react';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Home = () => {
    // Mảng sản phẩm mẫu
    const products = [
        {
            id: 1,
            name: "Whopper Burger King",
            price: 28.52,
            originalPrice: 30.52,
            image: "https://modinatheme.com/html/foodking-html/assets/img/food/burger-2.png",
            discount: "-5%",
        },
        {
            id: 2,
            name: "Cheese Burger",
            price: 22.00,
            originalPrice: 25.00,
            image: "https://modinatheme.com/html/foodking-html/assets/img/food/main-food-2.png",
            discount: "-10%",
        },
        // Bạn có thể thêm nhiều sản phẩm khác ở đây
    ];

    return (
        <div className="container max-w-[1140px] mx-auto">
            <div className="box p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

// Component cho mỗi sản phẩm
const ProductCard = ({ product }) => {
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
    };

    return (
        <div className="w-full itemProduct group hover:bg-mainColor3 transition-all duration-1s cursor-pointer rounded-lg p-4 flex flex-col h-full">
            <div className="itemProduct-img relative rounded-t-lg overflow-hidden flex justify-center py-6 h-[220px]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-w-[150px] object-contain h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="itemProduct-btn absolute top-2 left-2 flex justify-center items-center bg-white shadow-lg rounded-full p-2 hover:bg-black transition-all">
                    <Button
                        type="text"
                        icon={liked ? <HeartFilled style={{ color: '#ffb936' }} /> : <HeartOutlined />}
                        onClick={handleClick}
                        style={{
                            fontSize: '18px',
                            color: liked ? 'red' : 'black',
                            border: 'none',
                            background: 'transparent'
                        }}
                    />
                </div>
            </div>
            <div className="itemProduct-main p-4 text-center mt-auto">
                <button className="w-full bg-black text-white py-2 rounded-md transition-all hover:bg-green-700">
                    <i className="fas fa-shopping-cart mr-2"></i>Add To Cart
                </button>
                <div className="flex justify-between items-center mt-4">
                    <span className="bg-white px-2 py-1 rounded-md text-black font-bold">{product.discount}</span>
                    <div className="text-right">
                        <span className="text-red-600 font-bold mr-2">${product.price.toFixed(2)}</span>
                        <span className="line-through text-gray-500">${product.originalPrice.toFixed(2)}</span>
                    </div>
                </div>
                <h3 className="mt-2 text-xl hover:text-gray-200">{product.name}</h3>
                <div className="flex justify-center mt-2">
                    <div className="flex">
                        {Array(5).fill().map((_, index) => (
                            <i key={index}
                               className="fas fa-star text-yellow-500 group-hover:text-white mr-1 transition-colors duration-300"></i>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;