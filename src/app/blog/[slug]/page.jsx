import Image from "next/image"

const SinglePost = () => {
    return <div className="flex gap-24 p-8">
        <Image src="/blog1.jpg" alt='' width="400" height="600" className="flex-1 relative h-calc-100vh-200"/>
        <div className="flex flex-col flex-2 gap-12">
            <h1 className="font-bold text-6xl mb-5">Title</h1>
            <Image src="/avater.jpg" alt='' width="100" height="100" className=""/>
            <div className="flex fl">
                <span>Author</span>
                <span>Jon Snow</span>
            </div>
            <div>
                <span>Published</span>
                <span>11-07-2024</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cum provident accusantium in veritatis reiciendis tempore quam fugiat! Ullam laudantium ratione odit, dolorum quos enim quidem non dicta reprehenderit voluptatum?</p>
        </div>
    </div>
}

export default SinglePost