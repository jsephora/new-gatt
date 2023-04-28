import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import { bottomNav, disabled } from './bottomnav.module.scss'

const BottomNav = () => {
  return (
    <Container>
      <div className={bottomNav}>
        <Link href='/'>Home</Link>
        //
        <Link href='/work'>Work</Link>
        //
        <Link href='/about'>About</Link>
        //
        <Link href='/resume' className={disabled}>
          Resumé
        </Link>
      </div>
    </Container>
  )
}

export default BottomNav
