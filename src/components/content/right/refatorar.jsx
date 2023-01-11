import React from 'react'

import { FaRegHeart, FaShareAlt } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

// Style
import './app.css'
import './app-mobile.css'

const App = props => {
    return (

        // Right
        <div className="right">

            <span className="contentBox">

                {/* Section 1 */}
                <div className="section-1">
                    {/* Left Section 1 */}
                    <span className="left-section-1">
                        <span className="left-line-1">Design Illustration</span>
                        <span className="left-line-2">Minimalist Character</span>
                        <span className="left-line-3">
                            {/* Left Line 3 - 1 */}
                            <span className="left-line-3-1">
                                {/* Text */}
                                <span className="left-line-3-1-1-text">
                                    1.248
                                </span>

                                {/* Box */}
                                <span className="left-line-3-1-2-box">
                                    ETH
                                </span>

                            </span>

                            {/* Left Line 3 - 2 */}
                            <span className="left-line-3-2">
                                <span className="left-line-3-2-1-text">
                                    $4.429.87
                                </span>
                            </span>
                        </span>
                        <span className="left-line-4">This NFT Card will give you Access to Special Airdrops to learn more about</span>
                    </span>
                    <span className="right-section-1">
                        <span className="right-section-1-bt right-section-1-bt-1"><FaRegHeart /></span>
                        <span className="right-section-1-bt right-section-1-bt-2"><FaShareAlt /></span>
                        <span className="right-section-1-bt right-section-1-bt-3"><HiOutlineDotsHorizontal /></span>
                    </span>
                </div>

                {/* Section 2 */}
                <div className="section-2">

                    {/* Section 2 - Profile Box */}
                    <span className="section-2-profile-box">
                        <span className="section-2-profile-picture"></span>
                        <span className="section-2-profile-text">Highest bid by
                            <span className="bold"> Marry Roses</span>
                            <span className="bold"> 0.900 ETH</span> 54.428,87
                        </span>
                    </span>

                    {/* Section 2 - Badge Box */}
                    <span className="section-2-badge-box">
                        <div className="section-2-blue-badge"></div>
                    </span>

                    {/* Section 2 - Stock Box */}
                    <span className="section-2-bid-box">
                        <span className="section-2-bid-counter">50</span>
                        <span className="section-2-bid-text">Stock</span>
                    </span>

                </div>

                {/* Section 3 */}
                <div className="section-3">

                    {/* Section 3 - Counter */}
                    <span className="section-3-counter">

                        {/* Counter Text */}
                        <span className="section-3-counter-text">
                            Auction Ending in
                        </span>

                        {/* Counter Number */}
                        <span className="section-3-counter-number">

                            {/* Days */}
                            <span className="days">
                                <span className="counter-box">0</span>
                                <span className="counter-box">5</span>
                            </span>

                            {/* Hours */}
                            <span className="hours">
                                <span className="counter-box">2</span>
                                <span className="counter-box">6</span>
                            </span>

                            {/* Minutes */}
                            <span className="minutes">
                                <span className="counter-box">1</span>
                                <span className="counter-box">9</span>
                            </span>

                        </span>

                    </span>

                    {/* Section 3 - Buttons */}
                    <span className="section-3-buttons">

                        {/* Button Purchase */}
                        <span className="section-3-bt-purchase">
                            Purchase now
                        </span>

                        {/* Button Place Bis */}
                        <span className="section-3-bt-place-bid">
                            Place a bid
                        </span>

                    </span>

                </div>

                {/* Section 4 */}
                <div className="section-4">
                    teste
                </div>

                {/* Section 5 */}
                <div className="section-5">
                    5
                </div>

                {/* Section 6 */}
                <div className="section-6">
                    6
                </div>

            </span>

        </div>

    )
}

export default App;