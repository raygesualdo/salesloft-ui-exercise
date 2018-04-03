import sortBy from 'lodash/sortBy'
import emails from './emails.json'

const strip = html =>
  new DOMParser().parseFromString(html, 'text/html').body.textContent

const messages = sortBy(emails.messages, 'date')
  .reverse()
  .map(message => ({
    ...message,
    preview: `${strip(message.body).substr(0, 50)}...`,
  }))

export const tags = [
  ...emails.messages.reduce((tagSet, message) => {
    message.tags.forEach(tag => tagSet.add(tag))
    return tagSet
  }, new Set()),
]

export const getAllMessages = () => messages

export const getMessagesByTag = tag =>
  messages.filter(m => m.tags.includes(tag))

export const getMessageById = id => messages.find(m => m.id === id)
