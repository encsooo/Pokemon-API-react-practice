import React from 'react'
import { NavLink } from 'react-router-dom';

import Logo from './pokedex.png';

const Nav = () => {
    return (
        <header>
            <img className="pokedex" src={Logo} alt={Logo} />
            <h1>Pokedex</h1>
            <nav>
                <ul className='nav-ul'>
                    <NavLink exact to='/'>
                        <li>Home</li>
                    </NavLink>

                    <NavLink to='/about'>
                        <li>About</li>
                    </NavLink>

                    <NavLink to='/pokemon'>
                        <li>Pokemon</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;