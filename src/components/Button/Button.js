import React from 'react'
import classnames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classnames.bind(styles)

const Button = ({icon, grouped, noop, children, ...rest}) => (
  <button className={cx('button', { icon, grouped, noop })} {...rest}>
    <span className={styles.content}>{children}</span>
  </button>
)

export default Button
