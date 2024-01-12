import { useRouter } from "next/router"
export default function ProductDetail(){
    const router = useRouter();
    const {id} = router.query;
    return(
        <>
            <h1>สิ้นค้าชั้นที่ {id} แบบเบิ้มๆ</h1>
        </>
    )
}