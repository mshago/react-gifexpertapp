import React from 'react'

export const GifGridItem = ({ id, title, url, time=0 }) => {

    return (
        <div className={'card animate__animated animate__fadeIn animate__delay-'+time+'s'}>
           <img src={ url } alt={ title } />
           <p>{ title }</p>
        </div>
    )
}
