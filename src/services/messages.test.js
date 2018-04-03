import {
  tags,
  getAllMessages,
  getMessagesByTag,
  getMessageById,
} from './messages'

jest.mock('./emails.json', () => ({
  messages: [
    {
      id: '1',
      subject: 'Email 1',
      sender: 'bob.smith@gmail.com',
      body:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vestibulum eros, a aliquet odio fermentum et. Fusce in volutpat est, eu aliquam ante. Integer at sapien sit amet nisl venenatis ullamcorper eu sed magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a odio vitae risus dictum pellentesque in vehicula leo. Nam massa sem, pretium at lacus quis, aliquam facilisis odio. Maecenas risus purus, dapibus sed viverra a, efficitur eget leo. Integer quis magna id ante ornare euismod. Nunc aliquet arcu sit amet tincidunt feugiat. Ut et sapien ut leo blandit egestas a non arcu.</p><p>Sed finibus rhoncus nulla, eu molestie urna volutpat non. Etiam molestie faucibus nisi eget molestie. Vestibulum porta a leo a scelerisque. Mauris eget nisl sapien. Aliquam consectetur sed massa eget accumsan. Pellentesque eget arcu quam. Vivamus feugiat lacinia laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis quam vitae lorem rhoncus viverra vel et dolor. Sed pharetra cursus risus sit amet accumsan.</p>',
      tags: ['work'],
      date: '2017-03-05T03:25:43.511Z',
    },
    {
      id: '2',
      subject: 'Email 2',
      sender: 'bob.smith@gmail.com',
      body:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vestibulum eros, a aliquet odio fermentum et. Fusce in volutpat est, eu aliquam ante. Integer at sapien sit amet nisl venenatis ullamcorper eu sed magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a odio vitae risus dictum pellentesque in vehicula leo. Nam massa sem, pretium at lacus quis, aliquam facilisis odio. Maecenas risus purus, dapibus sed viverra a, efficitur eget leo. Integer quis magna id ante ornare euismod. Nunc aliquet arcu sit amet tincidunt feugiat. Ut et sapien ut leo blandit egestas a non arcu.</p><p>Sed finibus rhoncus nulla, eu molestie urna volutpat non. Etiam molestie faucibus nisi eget molestie. Vestibulum porta a leo a scelerisque. Mauris eget nisl sapien. Aliquam consectetur sed massa eget accumsan. Pellentesque eget arcu quam. Vivamus feugiat lacinia laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis quam vitae lorem rhoncus viverra vel et dolor. Sed pharetra cursus risus sit amet accumsan.</p>',
      tags: ['travel'],
      date: '2017-03-05T10:25:43.511Z',
    },
  ],
}))

describe('messages services', () => {
  describe('getAllMessages', () => {
    const messages = getAllMessages()

    it('returns all messagesw', () => {
      expect(messages.length).toEqual(2)
    })

    it('includes previews', () => {
      expect(messages[0].preview).toBeDefined()
    })

    it('sorts correctly', () => {
      const date1 = new Date(messages[0].date).getTime()
      const date2 = new Date(messages[1].date).getTime()
      expect(date1).toBeGreaterThan(date2)
    })
  })

  it('getMessageByTag', () => {
    const messages = getMessagesByTag('travel')
    expect(messages.length).toEqual(1)
    expect(messages[0].id).toEqual('2')
  });

  it('getMessageById', () => {
    const message = getMessageById('1')
    expect(message.id).toEqual('1')
  });

  it('tags are populated', () => {
    expect(tags).toEqual(['work', 'travel'])
  });
})
