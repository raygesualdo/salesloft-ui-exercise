import React from 'react'
import { format, distanceInWordsToNow, isBefore } from 'date-fns'
import capitalize from 'lodash/capitalize'
import FontAwesome from 'react-fontawesome'
import styles from './Message.module.scss'
import { getMessageById } from '../../services/messages'

const Message = props => {
  const message = getMessageById(props.match.params.id)
  return (
    <div className={styles.layout}>
      <div className={styles.topBar}>
        <div className={styles.subject}>{message.subject}</div>
        <div className={styles.tags}>
          {message.tags.map(tag => (
            <span key={tag} className={styles.tag} title={capitalize(tag)}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.actions}>
          <FontAwesome className={styles.actionIcon} name="print" />
          <FontAwesome className={styles.actionIcon} name="external-link-alt" />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.avatar}>
          <img
            className={styles.avatarImg}
            src="https://avatars.io/static/default_128.jpg"
            alt="Sender"
          />
        </div>
        <div className={styles.from}>{message.sender}</div>
        <div className={styles.date}>
          {isBefore(message.date, new Date(new Date().getFullYear(), 0, 1))
            ? `${format(message.date, 'M/D/YYYY')}`
            : `${format(message.date, 'MMM DD')} (${distanceInWordsToNow(
                message.date
              )})`}
        </div>
        <div className={styles.body}>
          <div dangerouslySetInnerHTML={{ __html: message.body }} />
        </div>
      </div>
    </div>
  )
}

export default Message
