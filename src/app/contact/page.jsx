import Image from "next/image"

const ContactPage = () => {
    return<div className="p-8 flex">
        <div className="flex-1 relative">
            <Image className="object-contain" src="/contact.png" alt='contact' width="500" height="500"/>
        </div>
            <div className="flex flex-col flex-1 gap-10">
                <input type="text" placeholder="Name and surname" 
                className="input-styles"/>
                <input type="text" placeholder="Email address"
                className="input-styles"/>
                <input type="text" placeholder="Phone Number"
                className="input-styles"/>
                <textarea placeholder="Message"
                className="input-styles h-32"/>
                <button className="rounded py-5 font-bold text-textSoft bg-primary">Send</button>
            </div>
    </div>
}

export default ContactPage