import Link from "next/link";
import { fredoka } from "../layout";
const NavLink = ({ href, title }) => {
    return (
        <Link 
            href={href} 
            className={`${fredoka.className} block py-2 pl-3 pr-4 text-black font-semibold sm:text-xl rounded md:p-0 hover:text-[#FFA8CA]`}
        >
        {title}
    </Link>
    )
};
export default NavLink;