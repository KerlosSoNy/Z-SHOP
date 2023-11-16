import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {useRecoilState} from 'recoil'
import { CartAtom ,PaymentAtom,TotalProductsAtom} from './../../Atoms/Products-Atom';
import axios from "axios";
export default function Details(){
    let [addCart , setAddCart] = useRecoilState(CartAtom)
    const [payment ,setPayment] = useRecoilState(PaymentAtom)
    const [TotalProducts ,setTotalProducts] = useRecoilState(TotalProductsAtom)
    const param = useParams()
    const [product , setProduct] = useState()
    useEffect(()=>{
        axios.get(`http://localhost:3200/products/${param.id}`)
            .then(data=> setProduct(data.data))
    },[param])
    return(
        <div className="mx-auto px-6 py-10 sm:px-6 sm:py-6 lg:h-[48rem] md:h-[56rem] h-[72rem] lg:max-w-7xl lg:px-8 my-10">
            {product !== undefined ?  
                <div>  
                    <div className="lg:py-5 lg:mt-10 ">
                        <Link to={`/product/All`} className=" text-2xl px-1">
                         All 
                        </Link>
                        <span className=" text-2xl px-1">/</span>
                        <Link to={`/product/${product.category}`} className=" text-2xl">
                            {product.category.charAt(0).toUpperCase()}{product.category.slice(1)}
                        </Link>
                        <span className=" text-2xl px-1">/</span>
                        <Link to={`/product/details/${product.id}`} className=" text-2xl">
                            {product.title.charAt(0).toUpperCase()}{product.title.slice(1,20)}...
                        </Link>
                    </div>
                    <div className="grid lg:grid-cols-2 h-72 mt-10 justify-items-center lg:gap-10 gap-0">
                        <div className="">
                            <img src={product.image} alt="" className=" h-96 object-contain	"/>
                        </div>
                        <div className=" relative lg:p-0 p-2">
                            <h1 className="font-semibold text-3xl py-4 mb-2">{product.title}</h1>
                            <p className=" font-light text-xl mb-5">{product.description}</p>
                            <span className="relative py-4 mt-2">Rate : { product.rating}</span>
                            <div className="flex flex-row justify-between  lg:mt-14 mt-4 pb-5">
                                <span className="font-semibold">${product.price}</span>
                                <button className="bg-green-800 p-2 text-white rounded-md"  onClick={(e)=>{
                                setTotalProducts(TotalProducts+1)
                                setPayment(payment+ product.price)
                                setAddCart([...addCart , {product , count : 1}])
                                }
                                    }>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            :"Loading..."
                    }
        </div>
    )
}

