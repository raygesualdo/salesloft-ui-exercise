import React, { Fragment } from 'react'
import FontAwesome from 'react-fontawesome'
import Button from '../Button/Button'
import styles from './MessageListActions.module.scss'
import { SelectedConsumer } from '../Selected/Selected'
import { getAllMessages, getMessagesByTag } from '../../services/messages'

const MessageListActions = props => (
  <div className={styles.actions}>
    <SelectedConsumer>
      {({ ids, selectAll, selectNone }) => {
        const messageIds = (props.match.params.tag
          ? getMessagesByTag(props.match.params.tag)
          : getAllMessages()
        ).map(x => x.id)
        const allSelected = messageIds.every(id => ids.has(id))
        const handleClick = allSelected ? selectNone() : selectAll(messageIds)
        return (
          <Button onClick={handleClick}>
            Select {allSelected ? 'None' : 'All'}
          </Button>
        )
      }}
    </SelectedConsumer>
    <SelectedConsumer>
      {({ ids }) => (
        <Fragment>
          {ids.size ? (
            <Fragment>
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
            </Fragment>
          ) : (
            <Button icon noop>
              <FontAwesome name="sync" />
            </Button>
          )}
        </Fragment>
      )}
    </SelectedConsumer>
    <Button noop>
      More<FontAwesome name="caret-down" className={styles.caret} />
    </Button>
  </div>
)

export default MessageListActions
