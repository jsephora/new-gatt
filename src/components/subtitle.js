import React from 'react'
import { subtitle } from './subtitle.module.scss'

const Subtitle = ({ children }) => {
  return <p className={subtitle}>{children}</p>
}

export default Subtitle
