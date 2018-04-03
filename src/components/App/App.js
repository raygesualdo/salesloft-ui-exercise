import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import styles from './App.module.scss'
import Selected from '../Selected/Selected'
import Logo from '../Logo/Logo'
import Task from '../Task/Task'
import Menu from '../Menu/Menu'
import MessageList from '../MessageList/MessageList'
import MessageListActions from '../MessageListActions/MessageListActions'
import Message from '../Message/Message'
import MessageActions from '../MessageActions/MessageActions'

const App = () => (
  <Router>
    <Selected>
      <div className={styles.layout}>
        <div className={styles.header}>
          <Logo />
        </div>
        <div className={styles.task}>
          <Task />
        </div>
        <div className={styles.actions}>
          <Switch>
            <Route path="/inbox" component={MessageListActions} exact />
            <Route path="/inbox/:id" component={MessageActions} />
            <Route path="/tag/:tag" component={MessageListActions} exact />
            <Route path="/tag/:tag/:id" component={MessageActions} />
          </Switch>
        </div>
        <div className={styles.tags}>
          <Menu />
        </div>
        <div className={styles.content}>
          <Switch>
            <Route path="/inbox" component={MessageList} exact />
            <Route path="/inbox/:id" component={Message} />
            <Route path="/tag/:tag" component={MessageList} exact />
            <Route path="/tag/:tag/:id" component={Message} />
            <Redirect from="/" to="/inbox" exact />
          </Switch>
        </div>
      </div>
    </Selected>
  </Router>
)

export default App
