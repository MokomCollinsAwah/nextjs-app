"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { name : "Home", href: "/"},
  { name : "About", href: "/about"},
  { name : "Contact", href: "/contact"},
  { name : "Blog", href: "/blog"}
]

const Navbar = () => {
  const pathName = usePathname();
  const session = true;
  const isAdmin = true;
  
  return (
    <div className="flex justify-between py-4 px-8">
      <div>
        <Link href="/" className="text-center text-xl font-bold text">Mokom</Link>
      </div>
      <div className="flex gap-2">
        {navLinks.map((link)=> (
          <Link 
            href={link.href} 
            key={link.href}
            className={`
              ${"p-2.5 text-center rounded-[20px] font-[500]"} 
              ${pathName === link.href ? "bg-white text-black" : "text hover:text-btn"
              }`}
            >
              {link.name}
          </Link>
          
        ))}
        {session ? 
           (
             <>
           { 
            isAdmin && <Link href="/admin" className="p-2.5 text-center rounded-[20px] font-[500]">Admin</Link>
           }
              <button className="p-2.5 text-center rounded-[20px] font-[500]">Logout</button>
          </>
        ) : 
        (
          <Link href="/login" className="p-2.5 text-center rounded-[20px] font-[500]">Login</Link>
        )}
      </div>
    </div>
  )
}

export default Navbar