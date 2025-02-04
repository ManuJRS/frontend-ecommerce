import { ImageType } from './image';
import { mainImageType } from './mainImage';

export type CategoryType = {
    id: number;
    name: string;
    slug: string;
    image: ImageType;
    categoryName: string;
    mainImage: mainImageType;
}