import Image from "next/image";

const Home = () => {
  return (
    <div className="flex gap-40 p-8">
      {/* MAIN TEXT CONTAINER */}
      <div className="flex flex-col flex-1">
        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-12">
          <h1 className="font-bold text-[91px] leading-none">
            Dream
            <br />
            Weave
            <br />
            Agency.
          </h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquid quidem laboriosam ex dolores culpa amet sapiente facere optio, fugiat sunt nam cumque.
          </p>
        </div>
        {/* BUTTON CONTAINER */}
        <div className="flex gap-5 mt-8">
          <button className="bg-secondary text-textSoft py-2 px-4 rounded">Learn More</button>
          <button className="bg-textSoft text-secondary py-2 px-4 rounded">Contact</button>
        </div>
        {/* BRAND CONTAINER */}
        <div className="relative mt-8">
          <Image src="/brands.png" width="500" height="50" alt="brands image" />
        </div>
      </div>
      
      {/* ABOUT IMAGE CONTAINER */}
      <div className="relative flex-1">
        <Image src="/hero.gif" width="500" height="500" alt="about image" />
      </div>
    </div>
  );
};

export default Home;
