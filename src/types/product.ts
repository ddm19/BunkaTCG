export interface ProductType
{
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    available: boolean;
    category: CategoryType | string;
    stock: number;
}
export enum CategoryType
{
    Box = "box",
    Deck = "deck",
    Accesory = "accesory",
}