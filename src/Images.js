import React from 'react'

const Images = (props)  => {
    return (
        <img src={props.source} alt={props.altText} />
    )
}

export default Images