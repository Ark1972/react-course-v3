import { useState, createContext } from 'react';
import NavLinks from './NavLinks';

export const NavbarContext = createContext();

console.log

const Navbar = () => {
    
    const [user, setUser] = useState({ name: 'bob' });

    const logout = () => {
        setUser(null);
    };

    return (
        <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks />
        </nav>
    );
};
export default Navbar;