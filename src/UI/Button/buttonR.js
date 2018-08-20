import React from 'react'

const ButtonR = (props) => {
    return (
        <button type="button" className={"btn btn-ripple" + props.className}>{props.content}</button>
    )
}

export default ButtonR;