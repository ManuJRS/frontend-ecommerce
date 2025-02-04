import { useEffect, useState } from "react";
import { CategoryType } from "@/types/category";

export function useGetCategories() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`;

    // Inicializamos con un array vacío en lugar de null
    const [result, setResult] = useState<CategoryType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();

                // Aseguramos que siempre se devuelva un array
                setResult(json.data || []);
            } catch (error: any) {
                setError(error.message || "Error desconocido");
            } finally {
                setLoading(false);
            }
        })();
    }, [url]);

    return { loading, result, error };
}
