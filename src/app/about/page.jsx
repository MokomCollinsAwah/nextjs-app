import Image from "next/image"

const AboutPage = () => {
    return <div className="flex p-8 gap-[100px]">
        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-10 flex-1">
            {/* MINI-TEXT */}
            <h2 className="text-secondary font-bold">About Agency</h2>
            <h1 className="text-[50px] leading-tight font-bold">We create digital products that are bigger, bolder, breaver and better.</h1>
            <p className="text-base font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim minima aliquam sint reiciendis ab dolor consequatur at, voluptatem praesentium facere dolorem sequi voluptatum.</p>
             <div className="flex justify-between">
                <div className="flex-col">
                    <h2 className="about-styles">10K+</h2>
                    <p>Years of experience</p>
                </div>
                <div className="flex-col">
                    <h2 className="about-styles">345K+</h2>
                    <p>People reached</p>
                </div>
                <div className="flex-col gap-2">
                    <h2 className="about-styles">7K+</h2>
                    <p>Services and plugins</p>
                </div>
            </div>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="relative flex-1">
            <Image className="object-contain" src="/about.png" width="500" height="500" alt=""/>
        </div>
    </div>
}

export default AboutPage