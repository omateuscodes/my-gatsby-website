import React from "react"
import { Link } from 'gatsby'
import HeaderStyles from './Header.module.scss'

export default function Header() {
  return (
    <header className={HeaderStyles.header}>
      <ul>
        <li>
          <Link className={HeaderStyles.link} to="/">Inicio</Link>
        </li>
        <li>
          <Link className={HeaderStyles.link} to="/about">Sobre</Link>
        </li>
        <li>
          <Link className={HeaderStyles.link} to="/contact">Contato</Link>
        </li>
      </ul>
    </header>
  )
}