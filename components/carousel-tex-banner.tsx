"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from 'embla-carousel-autoplay';

export const dataCarouselTop = [
    {
        id: 1,
        title: "Envio en 24/48 hrs",
        description: "Como cliente VIP, tus envios en 24/48 hrs. Obten mas info",
        link: "#!",
    },
    {
        id: 2,
        title: "Envío gratis en compras superiores a $50",
        description: "Disfruta de envío gratuito en tus compras superiores a $50. ¡No pierdas esta oportunidad!",
        link: "#!"
    },
    {
        id: 3,
        title: "Seguimiento en tiempo real",
        description: "Mantente al tanto de tu paquete con nuestro sistema de seguimiento en tiempo real.",
        link: "#!"
    },
    {
        id: 4,
        title: "Empaque exclusivo para VIP",
        description: "Como miembro VIP, tus productos llegarán con un empaque premium que refleja tu estatus.",
        link: "#!"
    },
]

const CarouselTextBanner = () => {
    const router = useRouter()

    return (
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
                plugins={[
                    Autoplay({
                        delay: 2500
                    })
                ]}
            >
                <CarouselContent>
                    {dataCarouselTop.map(({ id, title, description, link }) =>
                        <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                        <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                                        <p className="text-sm sm:text-lg  text-wrap dark:text-secondary">{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    )}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default CarouselTextBanner;