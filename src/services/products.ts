import { CategoryType, ProductType } from "types/product";
import { supabase } from "./supabaseClient";

export const getProducts = async () =>
{
    return supabase.from('products').select('*').then(({data,error} : any)=>
                {
                    if(data)
                    {
                        return data;
                    }
                    else
                    {
                        console.log(error);
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
            
            return data[0].products;
        }
        else
        {
            console.log(error);
        }
    });
};
export const getProductById = async (id: number) =>
{
    return supabase.from('products').select('*').eq('id',id).then(({data,error} : any)=>
    {
        if(data)
        {
            return data[0];
        }
        else
        {
            console.log(error);
        }
    });
    
};