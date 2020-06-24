import React from "react"
import { Link } from 'gatsby'
import HeaderStyles from './Header.module.scss'

export default function Header() {
  return (
    <header className={HeaderStyles.header}>
      <ul>
        <li>
          <Link className={HeaderStyles.link} activeClassName={HeaderStyles.active} to="/">Inicio</Link>
        </li>
        <li>
          <Link className={HeaderStyles.link} activeClassName={HeaderStyles.active} to="/about">Sobre</Link>
        </li>
        <li>
          <Link className={HeaderStyles.link} activeClassName={HeaderStyles.active} to="/contact">Contato</Link>
        </li>
      </ul>
    </header>
  )
}