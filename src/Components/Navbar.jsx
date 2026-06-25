import react from 'react';
import { navlinks } from '../Constants/index.js';

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src ="/logo.svg " alt=" APPle Logo" />

            <ul>
                {navlinks.map(({label}) => (
                    <li key={label}>
                        <a href={label}>{label}</a>
                    </li>
                )
                )}

                
            </ul>

            <div className="flex-center gap-3">
                <button ><img src="/search.svg" alt="Search" /></button>
                <button><img src="/cart.svg" alt="Cart" /></button>
            </div>
        </nav>
    </header>
  );
};

export default Navbar; 