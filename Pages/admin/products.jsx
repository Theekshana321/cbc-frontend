import axios from "axios"
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminProductsPage(){

  const [products,setProducts] = useState([])

  useEffect(
    ()=>{

      axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
        (response)=>{
          console.log(response.data)
          setProducts(response.data);
        }
      )

    }
    ,[]
  )

  

  return(
    <div className="w-full h-full rounded-lg relative">
      <Link to={"/admin/addProduct"} className="text-white absolute bg-gradient-to-br from-purple-600 to-indigo-600 p-[14px] text-3xl rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 hover:from-pink-500 hover:to-yellow-500 cursor-pointer animate-pulse right-5 bottom-5">
        <FaPlus />
      </Link>

      <table className="w-full text-sm text-left text-gray-700">
        <thead className=" text-gray-800 uppercase tracking-wider text-center">
          <tr>
            <th className="p-4">Product ID</th>
            <th className="p-4">Name</th>
            <th className="p-4">Price</th>
            <th className="p-4">Labled Price</th>
            <th className="p-4">Stock</th>
          </tr>
        </thead>
        <tbody>
        {
        products.map(
          (product,index)=>{

            return (
              <tr
                key={index}
                className="border-b border-gray-200 text-center cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:scale-[1.01]">
                <td className="p-4 text-sm font-medium text-gray-700">{product.productId}</td>
                <td className="p-4 text-sm text-gray-600">{product.name}</td>
                <td className="p-4 text-sm text-green-600 font-semibold">Rs. {product.price}</td>
                <td className="p-4 text-sm text-gray-500">Rs. {product.labledPrice}</td>
                <td className="p-4 text-sm text-blue-600">{product.stock}</td>
              </tr>

              
            )
          }
        )
      }
        </tbody>


      </table>

    </div>
  )
}