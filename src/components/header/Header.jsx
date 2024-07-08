import './Header.css';

import blaupause from '../../assets/blaupause.png'

export default function Header() {
    return (
        <header>
            <img src={blaupause} alt='Blaupause'/>
        </header>
    );
}