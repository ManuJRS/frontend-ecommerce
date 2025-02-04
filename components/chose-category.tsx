"use client";

import { useGetCategories } from "@/api/GetProducts";
import { CategoryType } from "@/types/category";
import Link from "next/link";
import Image from "next/image";

const ChoseCategory = () => {
    const { result, loading } = useGetCategories();
    console.log(result)
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8">Escoge tu categoría favorita</h3>
            <div className="grid gap-5 sm:grid-cols-3">
                {!loading &&
                    result.map((category) => {
                        const imageUrl = category.mainImage?.url;
                        return (
                            <Link
                                key={category.id}
                                href="#"
                                className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
                            >
                                {imageUrl && (
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imageUrl}`}
                                        alt="#"
                                        width={270}
                                        height={180}
                                        className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
                                    />
                                )}
                            </Link>
                        );
                    })}
            </div>
        </div>
    );
};

export default ChoseCategory;
