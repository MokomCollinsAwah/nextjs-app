import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
      <Link href="/">Logo</Link>
      </div>
      <div className="flex gap-2">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link>
    </div>
    </div>
  )
}

export default Navbar