'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline, IoTimeOutline } from "react-icons/io5";
import { PiChartLine } from "react-icons/pi";

const NavBarPage = () => {
    const pathName = usePathname();

    const links = <>
        <li><Link className={pathName === '/home' ? "bg-[#244D3F] text-white" : " "}    href="/home"><IoHomeOutline />Home</Link></li>
        <li><Link className={pathName === '/timeline' ? "bg-[#244D3F] text-white" : " "}  href="/timeline"><IoTimeOutline />TimeLine</Link></li>
        <li><Link className={pathName === '/states' ? "bg-[#244D3F] text-white" : " "}  href="/states"><PiChartLine />States</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-[#1F2937]">Keen<span className="text-green-900">Keeper</span> </a>
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                   {links}

                </ul>
            </div>
        </div>
    );
};

export default NavBarPage;