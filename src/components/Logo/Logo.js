import React from 'react'
import styles from './styles.module.scss'

const letters = 'LoftMail'.split('')

const Logo = () => (
  <div className={styles.logo}>
    {letters.map(letter => <span key={letter}>{letter}</span>)}
  </div>
)

export default Logo
