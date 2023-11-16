import Carsoul from "../HomeComponent/Carsoul";
import ComeToVisite from "../HomeComponent/ComeVisite";
import HomeCate from "../HomeComponent/HomeCate";
import ProductsCarsoul from "../HomeComponent/ProductsExample";
import Users from "../HomeComponent/User";

export default function Home(){

    return(
        <>
            <Carsoul/>
            <HomeCate/>
            <ProductsCarsoul/>
            <Users/>
            <ComeToVisite/>
        </>
    )
}