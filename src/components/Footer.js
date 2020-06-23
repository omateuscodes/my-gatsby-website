import React from "react"
import { RiGithubLine, RiTwitterLine, RiLinkedinLine } from "react-icons/ri"
import FooterStyles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={FooterStyles.footer}>
      <a href='https://github.com/mateus-codes' target='_blank'>
        <RiGithubLine size='2rem' />
      </a>
      <a href='https://twitter.com/mateus_codes' target='_blank'>
        <RiTwitterLine size='2rem' />
      </a>
      <a href='https://www.linkedin.com/in/mateusssouza/' target='_blank'>
        <RiLinkedinLine size='2rem' />
      </a>
    </div>
  )
}