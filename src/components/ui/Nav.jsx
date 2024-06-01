import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {

    const {link, text, style, onClick } = props

  return (
    <li className={`${style}`}>
        <Link to={link} className={`hover:text-blue-500 `} onClick={onClick }>{text}</Link>
    </li>
  )
}

export default Nav
