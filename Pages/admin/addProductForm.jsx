import { Link } from "react-router-dom";

export default function AddProductForm(){
  return(
    <div className="w-full h-full rounded-lg flex justify-center items-center bg-gray-50">
      <div className="w-[500px] h-[600px] bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Add Product</h1>

        <input className="w-[400px] h-[50px] border border-gray-300 rounded-xl px-4 text-gray-700 text-lg font-medium shadow-sm transition-all duration-200 
                 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 hover:border-gray-500 mb-4" placeholder="Product ID" />

        <input className="w-[400px] h-[50px] border border-gray-300 rounded-xl px-4 text-gray-700 text-lg font-medium shadow-sm transition-all duration-200 
                 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 hover:border-gray-500 mb-4" placeholder="Product Name" />

        <input className="w-[400px] h-[50px] border border-gray-300 rounded-xl px-4 text-gray-700 text-lg font-medium shadow-sm transition-all duration-200 
                 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 hover:border-gray-500 mb-4" placeholder="Alternative Names" />

        <input className="w-[400px] h-[50px] border border-gray-300 rounded-xl px-4 text-gray-700 text-lg font-medium shadow-sm transition-all duration-200 
                 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 hover:border-gray-500 mb-4" placeholder="Price" />

        <input className="w-[400px] h-[50px] border border-gray-300 rounded-xl px-4 text-gray-700 text-lg font-medium shadow-sm transition-all duration-200 
                 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 hover:border-gray-500 mb-4" placeholder="Labled Price" />

        <textarea className="w-[400px] h-[50px] border border-gray-300 rounded-xl px-4 text-gray-700 text-lg font-medium shadow-sm transition-all duration-200 
                 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 hover:border-gray-500 mb-4" placeholder="Description" />

        <input className="w-[400px] h-[50px] border border-gray-300 rounded-xl px-4 text-gray-700 text-lg font-medium shadow-sm transition-all duration-200 
                 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 hover:border-gray-500 mb-4" placeholder="Stock" />

        <div className="w-[400px] h-[100px] flex justify-between items-center">
          <Link to={"/admin/products"} className="inline-block px-6 py-2.5 w-[180px] text-center rounded-xl font-semibold text-white bg-gradient-to-tr from-red-500 to-rose-600 shadow-md 
             transition-all duration-300 ease-in-out
             hover:from-red-400 hover:to-pink-500 hover:shadow-lg hover:scale-105">Cancel</Link>
          
          <button className="inline-block ml-[10px] px-6 py-2.5 w-[180px] text-center rounded-xl font-semibold text-white bg-gradient-to-tr from-green-500 to-emerald-600 shadow-md 
             transition-all duration-300 ease-in-out
             hover:from-emerald-500 hover:to-green-400 hover:shadow-lg hover:scale-105 cursor-pointer">Add Product</button>
        </div>
      </div>

      
      
    </div>
  )
}