import React from 'react'
import './scrollAnimation.css'


const scroll = () => {
    return (
    <div>
        <div className="d-none d-md-block">
            <div class="scroll-center">
                <div class="scroll-down">
                </div>
            </div>
            <p className="scroll-center scroll-down-text"> Scroll down</p>
        </div>

        <div className="d-block d-md-none">
            <div class="scroll-center-m">
                <div class="scroll-down">
                </div>
            </div>
            <p className="scroll-center scroll-down-text-m"> Scroll down</p>
        </div>

    </div>
    )
}

export default scroll;