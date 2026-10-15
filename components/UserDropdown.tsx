'use client';
import {useRouter} from "next/navigation"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {LogOutIcon} from "lucide-react";
import Naveitems from "@/components/Naveitems";
const UserDropdownElement=()=>{
    const router = useRouter();
    const handleSignOut = async () => {
    router.push("/sign-in")
    }

    const user ={name:'isra',email:'isra@gmail0.com'};
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 text-gray-400 hover:text-yellow-500">
                    <Avatar className=" h-8 w-8 ">
                        <AvatarImage src="https://sl.bing.net/faXP1061qFg" />
                        <AvatarFallback className="bg-yellow-50 text-yellow-800 text-sm font-bold ">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hideen md:flex flex-col items-start">
                    <span className="text-base font-medium text-gray-400">
                        {user.name}
                    </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" text-gray-400 max-h-none">
                <DropdownMenuLabel>
                    <div className=" flex relative items-center gap-3 py-2">
                        <Avatar className=" h-10 w-10 ">
                            <AvatarImage src="https://sl.bing.net/faXP1061qFg" />
                            <AvatarFallback className="bg-yellow-50 text-yellow-800 text-sm font-bold ">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col ">
                    <span className="text-base font-medium text-gray-400">
                        {user.name}
                    </span>
                            <span className="text-sm text-gray-400">
                        {user.email}
                        </span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-600"> </DropdownMenuSeparator>
                <DropdownMenuItem  onClick={() => handleSignOut()} className="text-gray-500 text-md font-medium focus:bg-transparent focus:text-yellow-400 transition-colors cursor-pointer">
                    <LogOutIcon className="h-6 w-6 hidden sm:block" />
                    logout
                    </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden sm:block bg-gray-600" />
                <nav className="bg-gray-600">
                    <Naveitems vertical/>
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>    )
}
export default UserDropdownElement;

