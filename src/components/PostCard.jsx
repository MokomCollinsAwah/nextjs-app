import Image from "next/image"
import Link from "next/link"

const PostCard = () => {
  return (
    <div className="flex flex-col gap-5 mb-5 w-[40%] md:w-[100%] xl:w-[25%]">
        <div className="flex flex-col">
            <div className="flex">
                <Image src="/blog1.jpg" alt='' width="300" height="400" className="object-cover"/>
                <span className="transform text-xs rotate-[270deg] m-auto">07/09/2024</span>
            </div>
        </div>
        <div>
            <h2 className="font-bold mb-5 text-xl">Title</h2>
            <p className=" mb-3 font-normal text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis quos inventore perspiciatis odit doloribus tenetur</p>
            <Link href="/blog/post" className="underline">READ MORE</Link>
        </div>
    </div>
  )
}

export default PostCard