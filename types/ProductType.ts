import { CategoryType } from "./category";
import { ImageType } from "./image";


export type ProductType = {
    id: number;
    productName: string;
    slug: string;
    description: string;
    origin: string;
    price: number;
    active: boolean;
    taste: string;
    isFeatured: boolean;
    images?: ImageType[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    localizations: ProductType[];
    documentId: string;
    category: CategoryType;
}