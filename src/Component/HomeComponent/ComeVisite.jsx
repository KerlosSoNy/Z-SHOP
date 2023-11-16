
export default function ComeToVisite(){
    return(
        <div className="relative h-[40rem] flex justify-center text-center mt-20">
            <div className="relative w-full lg:w-2/3">
                <div className="border-2 h-[20rem] rounded-lg shadow-2xl pt-20 px-10">
                    <h1 className="font-semibold lg:text-7xl text-3xl mb-5">Come Visit Us</h1>
                    <p className="lg:text-xl sm:text-base">Step into a world of vibrant colors, enticing aromas, and the heartbeat of our community. Come visit our market, where each stall is a story, and every corner holds a treasure waiting to be discovered. </p>
                </div>
                <img src="https://www.smcrealty.com/images/microsites/location-map/mantri-serenity-251.jpg" alt="mark" 
                className="cometoUs absolute lg:top-[16rem] top-72 lg:left-[10.5rem] md:top-[17rem] lg:w-[52rem] lg:h-96 w-[100%] h-64 md:h-96 md:w-full
                rounded-lg"/>
            </div>
        </div>
    )
}