import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import { homeLink, workLink, aboutLink, bottomNav, resumeLink } from './bottomnav.module.scss'

const BottomNav = () => {
  return (
    <Container>
      <div className={bottomNav}>
        <Link className={homeLink} href='/'>Home</Link>
        //
        <Link className={workLink} href='/work'>Work</Link>
        //
        <Link className={aboutLink} href='/about'>About</Link>
        //
        <Link className={`${resumeLink} disabled`} disabled href='/resume'>
          Resumé
        </Link>
      </div>
    </Container>
  )
}

export default BottomNav
