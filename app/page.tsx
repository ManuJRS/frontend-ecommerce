import BannerDiscount from "@/components/banner-discount";
import CarouselTextBanner from "@/components/carousel-tex-banner";
import ChoseCategory from "@/components/chose-category";
import FeaturedProducts from "@/components/feature-products";

export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
      <ChoseCategory />
    </main>
  );
}
