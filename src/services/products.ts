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

const products : ProductType[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 10.99,
        image: 'https://via.placeholder.com/150',
        description: 'This is product 1',
        available: true,
        category: CategoryType.Box,
        stock: 10
    }
]

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
    return products.find((product) => product.id === id) || null;
};