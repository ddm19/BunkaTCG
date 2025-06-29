export interface ProductType
{
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    available: boolean;
    category: CategoryType | string;
    stock: number;
    shortDescription: string;
    paymentId: string; 
}
export enum CategoryType
{
    Box = "box",
    Deck = "deck",
    Accesory = "accesory",
}