import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import {useRecoilState} from 'recoil'
import { CartAtom, ProductAtom,PaymentAtom ,TotalProductsAtom} from './../../Atoms/Products-Atom';

export default function ProductList(){
    let prams = useParams()
    let [url] = useState('https://fakestoreapi.com/products')
    let [products , setProducts] = useRecoilState(ProductAtom)
    const [payment ,setPayment] = useRecoilState(PaymentAtom)
    let [addCart , setAddCart] = useRecoilState(CartAtom)
    let [TotalProducts , setTotalProducts] = useRecoilState(TotalProductsAtom)


    useEffect(()=>{
        if(prams.Categories === "All"){
        axios.get(url)
        .then(json=>setProducts(json.data))
        }else{
            axios.get(url)
            .then(json=>{
                let params = prams.Categories
                if(params === 'Men'){
                    setProducts(json.data.filter((e)=> e.category === "men's clothing"))
                } else if(params === 'Women'){
                    setProducts(json.data.filter((e)=> e.category === "women's clothing"))
                } else if(params === 'Electronics'){
                    setProducts(json.data.filter((e)=> e.category === 'electronics'))
                } else if(params === 'Jewelery'){
                    setProducts(json.data.filter((e)=> e.category === "jewelery"))
                }
                console.log(json)
            })
        }
    },[prams])

    console.log(products)
    console.log(prams)
    const CartControl = (e , product)=>{
        if(e.currentTarget.innerText === "Add To Cart"){
            setAddCart([...addCart,{product , count : 1} ])
            setPayment(payment + product.price) 
            setTotalProducts(TotalProducts+1)
        }

    }
    return (
        <div className=" p-2">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-black text-5xl my-6">
            {prams.Categories === "All" ? "All Products" 
            :`${prams.Categories.charAt(0).toUpperCase()}${prams.Categories.slice(1)}`
            }</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 py-3">
            { products.length > 0 && products.map((product) =>{ 
                return(
                <div className="relative" key={product.id}>
                <Link key={product.id} to={`/product/details/${product.id}`} className="group relative p-1">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 m-3">
                    <img
                    src={product.image}
                    alt={product.image}
                    className="h-72 w-full object-contain group-hover:opacity-75 "
                    />
                </div>
                <h3 className="mt-4 text-md font-bold text-gray-700 h-12">{product.title.slice(0,56)}...</h3>
                <h3 className="text-sm text-gray-700 h-14 max-h-16">{product.description.slice(0,75)}...</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                </Link>
                <Link to={`/product/details/${product.id}`} className="absolute left-1 mt-4">Details</Link>
                <button className="bg-green-800 p-2 text-white rounded-md absolute right-1 mt-2"  onClick={(e)=>{CartControl(e , product)}
                }>Add To Cart</button>
                </div>
            )})}
            </div>
        </div>
        </div>
    )
}