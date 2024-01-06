import Link from "next/link"
export default function Navbar() {
    return (
        <nav>
            <dev>
                <h1>
                    BasicNextJS
                </h1>
            </dev>
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