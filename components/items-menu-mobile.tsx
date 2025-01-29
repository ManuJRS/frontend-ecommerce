import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover"
import { Menu } from 'lucide-react';
import Link from "next/link";
const IntemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu strokeWidth="1" />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/cafe-molido" className="block">Café molido</Link>
                <Link href="/categories/cafe-molido" className="block">Café en grano</Link>
                <Link href="/categories/cafe-molido" className="block">Café en cápsula</Link>
            </PopoverContent>
        </Popover>
    )
}

export default IntemsMenuMobile