import ProductComponent from "pages/home/components/product/product";
import { useEffect, useState } from "react";
import { supabase } from "services/supabaseClient";

const TestPage = () =>
{
    const [products,setProducts] = useState([]);

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

    useEffect(()=>
    {
        console.log(products);
    },[products])
    
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
