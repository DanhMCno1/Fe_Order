import React, { useState } from 'react'
import './ItemProducts.scss';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
const ItemProuduct = () => {
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
    }
    return (
        // <div className="container max-w-[1140px] mx-auto p-4">
        //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        //         <div
        //             className='w-full min-w-[250px] itemProduct group hover:bg-mainColor3 transition-all duration-300 cursor-pointer rounded-lg p-4'>
        //             <div className="itemProduct-img relative rounded-t-lg overflow-hidden flex justify-center py-10">
        //                 <img
        //                     src="https://modinatheme.com/html/foodking-html/assets/img/food/burger-2.png"
        //                     alt="Whopper Burger King"
        //                     className="w-full min-w-[150px] max-w-[200px] object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        //                 />
        //                 <div
        //                     className="itemProduct-btn absolute top-2 left-2 flex justify-center items-center bg-white shadow-lg rounded-full p-2 hover:bg-black transition-all">
        //                     <Button
        //                         type="text"
        //                         icon={liked ? <HeartFilled style={{color: '#ffb936'}}/> : <HeartOutlined/>}
        //                         onClick={handleClick}
        //                         style={{
        //                             fontSize: '18px',
        //                             color: liked ? 'red' : 'black',
        //                             border: 'none',
        //                             background: 'transparent'
        //                         }}
        //                     />
        //                 </div>
        //             </div>
        //             <div className="itemProduct-main p-4 text-center">
        //                 <button
        //                     className="w-full bg-black text-white py-2 rounded-md transition-all hover:bg-green-700">
        //                     <i className="fas fa-shopping-cart mr-2"></i>Add To Cart
        //                 </button>
        //                 <div className="flex justify-between items-center mt-4">
        //                     <span className="bg-white px-2 py-1 rounded-md text-black font-bold">-5%</span>
        //                     <div className="text-right">
        //                         <span className="text-red-600 font-bold mr-2">$28.52</span>
        //                         <span className="line-through text-gray-500">$30.52</span>
        //                     </div>
        //                 </div>
        //                 <h3 className="mt-2 text-xl hover:text-gray-200">WHOPPER BURGER KING</h3>
        //                 <div className="flex justify-center mt-2">
        //                     <div className="flex">
        //                         {Array(5).fill().map((_, index) => (
        //                             <i key={index}
        //                                className="fas fa-star text-yellow-500 group-hover:text-white mr-1 transition-colors duration-300"></i>
        //                         ))}
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ItemProuduct