"use client"
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { User } from 'lucide-react';
import MenuList from "./MenuList";
import IntemsMenuMobile from "../items-menu-mobile";
import ToggleTheme from "../toggle-theme";


const Navbar = () => {
    const router = useRouter()
    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <h1 className="text-3xl" onClick={() => router.push("/")}>Cafeteria</h1>
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>
            <div className="flex sm:hidden">
                <IntemsMenuMobile />
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                <ShoppingCart
                    strokeWidth="1"
                    className="cursor-pointer"
                    onClick={() => router.push("/cart")}
                />
                <Heart
                    strokeWidth="1"
                    className="cursor-pointer"
                    onClick={() => router.push("/loved-product")}
                />
                <User
                    strokeWidth="1"
                    className="cursor-pointer"
                    onClick={() => router.push("/user")}
                />
                <ToggleTheme />
            </div>
        </div>
    )
};

export default Navbar