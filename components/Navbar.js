import Link from "next/link"
import Image from "next/image"
export default function Navbar() {
    return (

        <nav>

            <div className="logo">
                <Link href="/"> <Image src="/logo.png" width={70} height={70} alt="logo" /> </Link>
            </div>

            <Link href="/">
                หน้าแรก
            </Link>
            <Link href="/about">
                เกี่ยวกับเรา
            </Link>
            <Link href="/products">
                สิั้นค้าทั้งหมด
            </Link>

        </nav>
    )
}