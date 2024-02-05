import { useRouter } from "next/router"

export async function getStaticPaths() {
    const res = await fetch("https://dummyjson.com/products?limit=10");
    const data = await res.json();
    const paths = data.products.map((item) => {
        return {
            params: { id: String(item.id) }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const id = params.id;
    const res = await fetch("https://dummyjson.com/products/"+id);
    const data = await res.json();
    console.log(data);
    return {
        props: { product: data },
    };
}


export default function ProductDetail({product}) {

    return (
        <>
            <h1>สินค้าชิ้นที่ { product.id} </h1>
            <h1>ชื่อสินค้า { product.title} </h1>
        </>
    )
}