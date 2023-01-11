import React from 'react'

// Styles
import './app.css'
import './app-mobile.css'

// Icons
import searchIcon from '../../../img/logo.svg'

const App = props => {
    return (
        <div className="containerNavBox">
            {/* Hamburguer Icon */}
            <span className="hamburguer" >
                <h1>Menu</h1>
            </span>

            <nav className="navContent">
                {/* Logo */}
                <span className="logo">
                    Logotipo
                </span>

                {/* Menu */}
                <ul className="navbar">
                    <li className="item">Discover</li>
                    <li className="item">Resources</li>
                    <li className="item">How it works</li>
                </ul>

                {/* Searchbar */}
                <span className="searchBar">

                    <span className="searchBox">
                        {/* Icon */}
                        <img src={searchIcon} className="icon" alt="Icon" />
                        {/* Input */}
                        <span className="input" placeholder="Search"></span>
                        {/* Button */}
                    </span>

                    <span className="btSearch">Upload</span>

                </span>

                {/* Profile */}
                <span className="profile">
                    <span className="avatar">

                    </span>

                    <span className="username">
                        <span className="name">Username</span>
                        <span className="status">Online</span>
                    </span>

                    <span className="dots">
                        :
                    </span>
                </span>
            </nav>
        </div>
    )
}

export default App;