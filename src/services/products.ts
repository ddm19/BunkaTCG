import { ProductType } from "types/product";
import { supabase } from "./supabaseClient";

export const getProducts = async () =>
{
    return supabase.from('products').select('*').then(({data,error} : any)=>
                {
                    if(data)
                    {
                        return data.map((product: ProductType) => parseProductAvailability(product));
                    }
                    else
                    {
                        console.error(error);
                    }
                });
};


export const getFeaturedProduct = async () =>
{
    return supabase
    .from("featuredproduct")
    .select(`
      product_id,
      products (*)  
    `).then(({data,error} : any)=>
    {
        if(data)
        {
            
            return parseProductAvailability(data[0].products);
        }
        else
        {
            console.error(error);
        }
    });
};
export const getProductById = async (id: string) =>
{
    return supabase.from('products').select('*').eq('id',id).then(({data,error} : any)=>
    {
        if(data)
        {
            return parseProductAvailability(data[0]);
        }
        else
        {
            console.error(error);
        }
    });
    
};
export const parseProductAvailability= (product : ProductType) =>
{
    return {
            ...product,
            available: product.stock > 0 && product.available,
        }
    
}