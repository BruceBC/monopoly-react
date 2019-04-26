import React, { PureComponent } from 'react'

class Test extends PureComponent {
  componentDidMount() {
    // window.Echo.private('apple')
    // .listen('AppleAnnouncement', e => {
    //   console.log('Apple Announcement', e)
    // })

    window.Echo.join('apple')

      .here(users => {
        console.log('Welcome to Apple Announcements.', users)
      })

      .joining(user => {
        console.log('We will be with you in just a moment.', user)
      })

      .leaving(user => {
        console.log('Come back soon. Bye now.', user)
      })

      .listen('AppleAnnouncement', e => {
        console.log('Apple Announcement', e)
      })

    // X-Socket_ID
    // const socketId = Echo.socketId() // to be set in the headers
  }

  componentWillUnmount() {
    window.Echo.leave('apple')
  }

  render() {
    return (
      <button onClick={() => window.Echo.leave('apple')}>End Session</button>
    )
  }
}

export default Test
