import ProductComponent from "components/product/product";
import { useEffect, useState } from "react";
import { supabase } from "services/supabaseClient";
import { ProductType } from "types/product";

const TestPage = () =>
{
    const [products,setProducts] = useState<ProductType[]>([]);

    useEffect(()=>
    {
        supabase.from('products').select('*').then(({data,error} : any)=>
            {
                if(data)
                {
                    setProducts(data);
                }
                else
                {
                    console.log(error);
                }
            })

    },[])

  
    return (
        <>
        <div>TEST</div>
        {products.map((product) =>
        {
            return <ProductComponent product={product} key={product.id} />

        }
        )}
        </>
        
    )
}

export default TestPage;
