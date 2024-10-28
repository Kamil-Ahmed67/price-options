import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [menu,setMenu]=useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:userId", name: "Profile" },
      ];
      
    return (
       <nav>
        <div className="md:hidden text-xl p-6 text-black bg-yellow-200 font-semibold" onClick={()=>setMenu(!menu)}>
          {
            menu ===true? <RxCross1></RxCross1>: <RiMenu2Fill></RiMenu2Fill>
          }
        </div>
          <ul className={`md:flex duration-1000 absolute md:static
            ${menu? 'top-16': '-top-60'}
            px-4  bg-yellow-200 `} >
          {
            routes.map(route=><Link key={route.id} route={route}></Link>)
          }
          </ul>
       </nav>
    );
};

export default Navbar;