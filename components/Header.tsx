import Image from "next/image"
import Link from "next/link"
import Naveitems from "@/components/Naveitems";
import UserDropdown from "@/components/UserDropdown";
const Header = () => {
    return (
        <header className="sticky top-0 header">
        <div className="container head-wrapper">
            <Link href="/">
                <Image src="/assets/icons/logo.svg" alt="signalist logo" width ={140} height={32} className="h-8 w-auto cursor-pointer" />
            </Link>
            <nav className="hidden sm:block">
                <Naveitems></Naveitems>
            </nav>
        <UserDropdown />
        </div>
        </header>
    )
}
export default Header;