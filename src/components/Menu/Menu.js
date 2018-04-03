import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'
import { tags } from '../../services/messages'

const Menu = () => (
  <div className={styles.menu}>
    <NavLink className={styles.link} to="/inbox">
      Inbox
    </NavLink>
    {tags.map(tag => (
      <NavLink key={tag} className={styles.link} to={`/tag/${tag}`}>
        {tag}
      </NavLink>
    ))}
  </div>
)

export default Menu
