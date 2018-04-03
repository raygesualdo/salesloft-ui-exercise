import React, { Component, createContext } from 'react'

const { Provider, Consumer } = createContext()

const addId = id => state => {
  state.ids.add(id)
  return { ids: state.ids }
}

const deleteId = id => state => {
  state.ids.delete(id)
  return { ids: state.ids }
}

export default class Selected extends Component {
  state = {
    ids: new Set(),
  }

  toggleSelected = id => e => {
    if (this.state.ids.has(id)) {
      this.setState(deleteId(id))
    } else {
      this.setState(addId(id))
    }
  }

  selectAll = ids => e => {
    this.setState(state => {
      const allIds = ids.reduce((set, id) => set.add(id), state.ids)
      return { ids: allIds }
    })
  }

  selectNone = () => e => {
    this.setState(state => ({ ids: new Set() }))
  }

  render() {
    const { toggleSelected, selectAll, selectNone, state: { ids } } = this
    return (
      <Provider value={{ ids, selectAll, selectNone, toggleSelected }}>
        {this.props.children}
      </Provider>
    )
  }
}

export const SelectedConsumer = Consumer
