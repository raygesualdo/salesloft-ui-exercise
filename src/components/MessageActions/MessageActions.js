import React from 'react'
import FontAwesome from 'react-fontawesome'
import Button from '../Button/Button'
import styles from './MessageActions.module.scss'

const goBack = props => e => {
  e.preventDefault()
  props.history.push(props.location.pathname.replace(/\/\d+$/, ''))
}

const MessageActions = props => (
  <div className={styles.actions}>
    <Button icon onClick={goBack(props)}>
      <FontAwesome name="long-arrow-alt-left" />
    </Button>
    <Button icon grouped noop>
      <FontAwesome name="archive" />
    </Button>
    <Button icon grouped noop>
      <FontAwesome name="exclamation-circle" />
    </Button>
    <Button icon grouped noop>
      <FontAwesome name="trash" />
    </Button>
    <span />
    <Button icon grouped noop>
      <FontAwesome name="folder" />
      <FontAwesome name="caret-down" className={styles.caret} />
    </Button>
    <Button icon grouped noop>
      <FontAwesome name="tag" />
      <FontAwesome name="caret-down" className={styles.caret} />
    </Button>
    <Button noop>
      More<FontAwesome name="caret-down" className={styles.caret} />
    </Button>
  </div>
)

export default MessageActions
