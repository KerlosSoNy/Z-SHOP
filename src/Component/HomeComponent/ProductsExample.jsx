import { ProductAtom } from './../../Atoms/Products-Atom';
import { useRecoilState } from 'recoil';
import { useEffect ,useState} from 'react';

import Slider from "react-slick";
import axios from 'axios'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

export default function ProductsCarsoul(){
    const [products ,setProducts] = useRecoilState(ProductAtom)
    let [url] = useState("https://fakestoreapi.com/products")
    useEffect(()=>{
            axios.get(url)
            .then(json=>setProducts(json.data))
    },[])
    

    var settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 2,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 7000,
        cssEase: "linear",
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 7000,
            }
        }
        ]
    };
    return(
        <>
            <div className=' bg-white p-5 gap-4 w-full'>
            <Slider {...settings}>
                    {products.map((product)=>{
                        return(
                            <div className='justify-center grid grid-flow-row gap-3 border-e-2 border-s-2' key={product.id}>
                                <img src={product.image} alt="" 
                                className='h-[10rem] mx-auto bg-white'/>
                                <h1 className='px-6 text-2xl mt-3 h-[3rem] sm:text-xl md:text-xl'>{product.title.slice(0,42)}...</h1>
                                <div className='flex flex-row justify-between px-6 pt-5 h-[3rem]'>
                                    <span>${product.price}</span>
                                    <Link to={`/product/details/${product.id}`}>See More</Link>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </>
    )
}