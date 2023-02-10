import { pocketbaseDB } from "@/db/pocketbase";
import { cache } from "react"

async function getProducts() {
    const res = await fetch('https://taxadmin.fly.dev/api/collections/products/records?page=1&perPage=30',
        { cache: 'no-store' })
    const data = await res.json();
    console.log('reggie');
    console.log(data?.items);

    return data?.items as any;
}

export default async function Products() {
    pocketbaseDB.collection('products').subscribe('*', function (e) {
        console.log(e.record);
    });
    const products = await getProducts();
    return (
        <>
            {products.map((product: any) => {
                return <div>{product.name}</div>
            })}
        </>
    )
}