import React from 'react'

function Nav(props) {

    const {link, text, style} = props

  return (
    <li className={`${style}`}>
        <a href={link} className={`hover:text-blue-500 `}>{text}</a>
    </li>
  )
}

export default Nav
