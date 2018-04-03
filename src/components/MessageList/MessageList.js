import React, { Fragment } from 'react'
import { format, isBefore } from 'date-fns'
import capitalize from 'lodash/capitalize'
import classnames from 'classnames/bind'
import styles from './MessageList.module.scss'
import { getAllMessages, getMessagesByTag } from '../../services/messages'
import { SelectedConsumer } from '../Selected/Selected'

const cx = classnames.bind(styles)

const MessageList = props => {
  const goToMessage = id => e => {
    e.preventDefault()
    props.history.push(`${props.location.pathname}/${id}`)
  }
  return (
    <div className={styles.table}>
      {(props.match.params.tag
        ? getMessagesByTag(props.match.params.tag)
        : getAllMessages()
      ).map(message => (
        <div className={styles.row} key={message.id}>
          <div className={cx('cell', 'select')}>
            <SelectedConsumer>
              {({ ids, toggleSelected }) => (
                <input
                  type="checkbox"
                  checked={ids.has(message.id)}
                  onChange={toggleSelected(message.id)}
                />
              )}
            </SelectedConsumer>
          </div>
          <div className={cx('cell', 'from')} onClick={goToMessage(message.id)}>
            {message.sender}
          </div>
          <div
            className={cx('cell', 'subject')}
            onClick={goToMessage(message.id)}
          >
            {message.tags.map(tag => (
              <span key={tag} className={styles.tag} title={capitalize(tag)}>
                {tag}
              </span>
            ))}
            <div
              className={styles.subjectText}
              onClick={goToMessage(message.id)}
            >
              {message.subject}
            </div>
            <div className={styles.preview}>
              <span className={styles.separator}>&nbsp;- </span>{message.preview}</div>
          </div>
          <div className={cx('cell', 'date')} onClick={goToMessage(message.id)}>
            {isBefore(message.date, new Date(new Date().getFullYear(), 0, 1))
              ? `${format(message.date, 'M/D/YYYY')}`
              : `${format(message.date, 'MMM DD')}`}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MessageList
