import { NavLink, Outlet } from "react-router";
import '../utils/styles/Navbar.tsx.scss'
import { IoIosArrowDropleft } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
    const [isNavActive, setIsNavActive] = useState<boolean>(false)

    return ( 
        <>
        <div className={`nav-background ${isNavActive ? 'nav-bg-active' : ''}`}></div>
        <header className={isNavActive ? 'nav-active' : ''}>
            <button
             className="nav-btn-close"
             onClick={() => setIsNavActive(!isNavActive)}
            >
               <IoIosArrowDropleft/>
            </button>
            <nav>
                <NavLink to=''>Kanji</NavLink>
                <NavLink to=''>Słownictwo</NavLink>
                <NavLink to=''>Gramatyka</NavLink>
                <NavLink to=''>Listy słów</NavLink>
                <button>Motyw</button>
                <button>Język</button>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        </>
     );
}
 
export default Navbar;