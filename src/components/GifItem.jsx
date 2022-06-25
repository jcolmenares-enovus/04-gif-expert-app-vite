import React from 'react'

export const GifItem = ({ url, title }) => {
  return (
    <figure className="card">
        <img src={ url } alt={ title }></img>
        <figcaption>{ title }</figcaption>
    </figure>
  )
}
