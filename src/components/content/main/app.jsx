import React from 'react'

// Components
import Left from '../left/app'
import Right from '../right/app'

// Style
import './app.css'
import './app-mobile.css'

const App = props => {
    return (
        <div className="containerContent">
            <div className="containerContentBox">
                {/* Left */}
                <Left />
                {/* Right */}
                <Right />
            </div>
        </div>
    )
}

export default App;