import { useRecoilState } from "recoil"
import { CartAtom,PaymentAtom,TotalProductsAtom } from "../../Atoms/Products-Atom"
import { Link } from 'react-router-dom';


export default function Cart(){
    const [cart ,setCart] = useRecoilState(CartAtom)
    const [payment ,setPayment] = useRecoilState(PaymentAtom)
    let [TotalProducts , setTotalProducts] = useRecoilState(TotalProductsAtom)
    const addONe = (id , updateCart)=>{
        const updatedArray = updateCart.map((element)=>{
            if( element.product.id === id) { 
                setTotalProducts(TotalProducts +1)
                setPayment(payment+element.product.price)
                return {"product":element.product , "count" : element.count+1}
            }
            else{
                return element
            } 
            })
            setCart(updatedArray)
            console.log(updatedArray)
            console.log(cart)
}
    const minusOne = (id , updateCart)=>{
        const updatedArray = updateCart.map((element)=>{
            if( element.product.id === id) {
                if(element.count === 1) { 
                    return element 
                }
                else{
                    setTotalProducts(TotalProducts -1)
                    setPayment(payment-element.product.price)
                    return {"product":element.product , "count" : element.count-1}
                }
            }
            else{
                return element
            } 
            })
            setCart(updatedArray)
            console.log(updatedArray)
            console.log(cart)
}

    return(
        <div className="lg:pt-5">
        <div className="mx-auto max-w-2xl py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 lg:mt-[3rem] mt-[2rem]
        sm:grid sm:grid-cols-4 ">
            <div className="sm:col-span-4">
                { cart.length > 0 ?
                cart.map((element)=>{
                    return(
                        <>
                        <div className="lg:row-span-1 lg:grid-cols-4 lg:grid grid-rows-1" key={element.product.id}>
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 m-3 ">
                                <Link to={`/product/details/${element.product.id}`}>
                                <div className="flex justify-center pe-4 ">
                                    <img
                                    src={element.product.image}
                                    alt={element.product.image}
                                    className="h-72 group-hover:opacity-75 rounded-lg object-left"
                                    />
                                </div>
                                </Link>
                            </div>
                            <div className=" col-span-2 justify-items-start align-middle lg:mt-auto lg:mb-auto md:mt-auto  md:mb-auto
                            px-6 mt-2">
                                <Link to={`/product/details/${element.product.id}`}>
                                <h2 className="font-semibold m-2">{element.product.title}</h2>
                                <p className="m-2">{element.product.description.slice(0,130)}...</p>
                                <span className="ms-2">${element.product.price}</span>
                                <br/>
                                </Link>
                                <button onClick={()=> minusOne(element.product.id , cart) }>-</button>
                                <span className="ms-2">{element.count}</span>
                                <button onClick={()=> addONe(element.product.id , cart) }>+</button>
                            </div>
                            <div className=" justify-items-end align-end lg:mt-auto lg:mb-auto md:mt-auto  md:mb-auto
                            px-6 mt-2">
                                <button onClick={()=>{
                                    setCart(cart.filter((e)=> e.product.id !== element.product.id))
                                    setPayment(payment - element.product.price)
                                    setTotalProducts(TotalProducts -1)
                                }}
                                className="bg-red-600 p-1 rounded-md m-4  w-24 sm:w-36 lg:h-11 hover:scale-125 hover:duration-[0.8s] object-right-top text-white">Remove</button>
                            </div>
                        </div>
                    {/*  */}
                        </>
                    )
                })
                :
                <div className="text-center align-middle h-full grid grid-flow-row">
                    <span className=" text-2xl font-semibold mt-20 p-3">No Products yet</span>
                    <Link to='/product/All'>Back to Product</Link>
                </div>}
            </div>
                <div className="col-span-4
                grid grid-flow-row align-middle justify-center justify-items-center text-center p-4 mt-10 w-full">
                { cart.length > 0 &&
                 <div>
                <h1 className="p-2 text-lg font-semibold">total cost : ${payment}</h1>
                <h1 className="p-5 text-lg font-semibold">total Count : {TotalProducts} Products</h1>
                <button className="bg-green-600 w-24 h-10 rounded-xl text-white sm:w-36 mt-3" >Payment</button>
                </div>}
                </div>
            </div>
        </div>
    )
}