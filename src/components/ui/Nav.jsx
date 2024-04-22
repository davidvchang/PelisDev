import React from 'react'

function Nav(props) {

    const {link, text, style, onClick } = props

  return (
    <li className={`${style}`}>
        <a href={link} className={`hover:text-blue-500 `} onClick={onClick }>{text}</a>
    </li>
  )
}

export default Nav
